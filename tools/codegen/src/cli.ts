#!/usr/bin/env bun
/**
 * capa-codegen — generate a capa capability from an OpenAPI spec.
 *
 * Usage:
 *   bun src/cli.ts \
 *     --spec https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.sdk.json \
 *     --out  ../../capabilities/stripe \
 *     --name stripe
 *     [--prefix /v1]
 */

import { mkdirSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import openapiTS, { astToString } from "openapi-typescript";
import { parseSpec } from "./parse-spec.ts";
import { emit } from "./emit.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

interface CliArgs {
	spec: string;
	out: string;
	name: string;
	prefix: string;
}

function parseArgs(argv: string[]): CliArgs {
	const args: Record<string, string> = {};
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i]!;
		if (arg.startsWith("--")) {
			const key = arg.slice(2);
			args[key] = argv[i + 1] || "";
			i++;
		}
	}
	if (!args.spec || !args.out || !args.name) {
		console.error("Usage: capa-codegen --spec <url|path> --out <dir> --name <capability> [--prefix /v1]");
		process.exit(1);
	}
	return {
		spec: args.spec,
		out: args.out,
		name: args.name,
		prefix: args.prefix || "/v1",
	};
}

async function loadSpec(specRef: string): Promise<any> {
	if (specRef.startsWith("http")) {
		console.log(`→ fetching spec from ${specRef}`);
		const res = await fetch(specRef);
		if (!res.ok) throw new Error(`spec fetch failed: ${res.status}`);
		return await res.json();
	}
	console.log(`→ reading spec from ${specRef}`);
	return JSON.parse(await Bun.file(specRef).text());
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	const spec = await loadSpec(args.spec);

	console.log(`→ parsing ${spec.info?.title} v${spec.info?.version}`);
	const codegen = parseSpec(spec, args.prefix);
	console.log(`  found ${codegen.operationCount} operations across ${Object.keys(codegen.namespaces).length} namespaces`);

	console.log(`→ generating types via openapi-typescript`);
	const ast = await openapiTS(spec, {
		alphabetize: true,
		exportType: true,
	});
	const schemaTs = astToString(ast);

	console.log(`→ emitting capability code`);
	const { capability, manifest } = emit(codegen, args.name);

	const generatedDir = join(args.out, "src", "generated");
	mkdirSync(generatedDir, { recursive: true });

	writeFileSync(join(generatedDir, "schema.gen.ts"), schemaTs);
	writeFileSync(join(generatedDir, "capability.gen.ts"), capability);
	writeFileSync(join(generatedDir, "manifest.gen.ts"), manifest);

	// Copy the runtime helper into the capability so it has no external dep
	const runtimeSrc = join(__dirname, "runtime.template.ts");
	const runtimeDest = join(generatedDir, "runtime.ts");
	copyFileSync(runtimeSrc, runtimeDest);

	console.log(`✓ wrote:
  ${generatedDir}/schema.gen.ts       (openapi-typescript output, full type tree)
  ${generatedDir}/capability.gen.ts   (RpcTarget classes + WorkerEntrypoint)
  ${generatedDir}/manifest.gen.ts     (operationId → metadata)
  ${generatedDir}/runtime.ts          (evidence-aware fetch)`);

	console.log(`
next steps:
  1. write src/index.ts in ${args.out} that re-exports the generated capability
     and applies your overrides
  2. cd ${args.out} && bun install
  3. wrangler deploy --dry-run to verify`);
}

main().catch(err => {
	console.error("✗ codegen failed:", err);
	process.exit(1);
});
