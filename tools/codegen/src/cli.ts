#!/usr/bin/env bun
/**
 * capa-codegen — generate a capa capability from an OpenAPI spec.
 *
 * Usage:
 *   bun src/cli.ts \
 *     --spec    <url|path>          (required) OpenAPI 3.x or Swagger 2.0 spec
 *     --out     <dir>               (required) target capability directory
 *     --name    <name>              (required) capability name (lowercase)
 *     --base-url <url>              (required) upstream API base URL
 *     --prefix  <path>              optional, default /v1 (e.g. /api/v4 for GitLab)
 *     --auth    <shape>             optional, default "bearer"
 *                                   "bearer"        → Authorization: Bearer <secret>
 *                                   "private-token" → PRIVATE-TOKEN: <secret> (GitLab)
 *                                   "basic"         → Authorization: Basic <base64(secret)>
 *     --content-type <type>         optional, default "form"
 *                                   "form" → application/x-www-form-urlencoded (Stripe)
 *                                   "json" → application/json (most modern APIs)
 *
 * Examples:
 *   # Stripe (already shipped)
 *   bun src/cli.ts --spec https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.sdk.json \
 *     --out ../../capabilities/stripe --name stripe \
 *     --base-url https://api.stripe.com --prefix /v1 \
 *     --auth bearer --content-type form
 *
 *   # GitLab (Swagger 2.0, public spec)
 *   bun src/cli.ts --spec https://docs.gitlab.com/api/openapi/openapi_v2.yaml \
 *     --out ../../capabilities/gitlab --name gitlab \
 *     --base-url https://gitlab.com --prefix /api/v4 \
 *     --auth private-token --content-type json
 *
 *   # Jira Cloud
 *   bun src/cli.ts --spec https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json \
 *     --out ../../capabilities/jira --name jira \
 *     --base-url https://your-domain.atlassian.net --prefix /rest/api/3 \
 *     --auth bearer --content-type json
 */

import { mkdirSync, writeFileSync, copyFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import openapiTS, { astToString } from "openapi-typescript";
import swagger2openapi from "swagger2openapi";
// @ts-expect-error — js-yaml ships its own types via DefinitelyTyped only on demand
import yaml from "js-yaml";
import { parseSpec } from "./parse-spec.ts";
import { emit } from "./emit.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

type AuthShape = "bearer" | "private-token" | "basic";
type ContentType = "form" | "json";

interface CliArgs {
	spec: string;
	out: string;
	name: string;
	prefix: string;
	baseUrl: string;
	auth: AuthShape;
	contentType: ContentType;
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
	if (!args.spec || !args.out || !args.name || !args["base-url"]) {
		console.error(`Usage: capa-codegen \\
  --spec <url|path> \\
  --out <dir> \\
  --name <capability> \\
  --base-url <upstream-base-url> \\
  [--prefix /v1] \\
  [--auth bearer|private-token|basic] \\
  [--content-type form|json]`);
		process.exit(1);
	}
	const auth = (args.auth || "bearer") as AuthShape;
	const contentType = (args["content-type"] || "form") as ContentType;
	if (!["bearer", "private-token", "basic"].includes(auth)) {
		console.error(`✗ --auth must be one of: bearer, private-token, basic (got: ${auth})`);
		process.exit(1);
	}
	if (!["form", "json"].includes(contentType)) {
		console.error(`✗ --content-type must be one of: form, json (got: ${contentType})`);
		process.exit(1);
	}
	return {
		spec: args.spec,
		out: args.out,
		name: args.name,
		prefix: args.prefix || "/v1",
		baseUrl: args["base-url"]!,
		auth,
		contentType,
	};
}

async function loadSpec(specRef: string): Promise<any> {
	let raw: string;
	if (specRef.startsWith("http")) {
		console.log(`→ fetching spec from ${specRef}`);
		const res = await fetch(specRef);
		if (!res.ok) throw new Error(`spec fetch failed: ${res.status}`);
		raw = await res.text();
	} else {
		console.log(`→ reading spec from ${specRef}`);
		raw = readFileSync(specRef, "utf8");
	}
	// Try JSON first; fall back to YAML
	try {
		return JSON.parse(raw);
	} catch {
		return yaml.load(raw);
	}
}

async function ensureOpenApi3(spec: any): Promise<any> {
	if (spec.openapi?.startsWith("3.")) {
		console.log(`  spec is OpenAPI ${spec.openapi}`);
		return spec;
	}
	if (spec.swagger === "2.0") {
		console.log(`  spec is Swagger 2.0 — converting to OpenAPI 3.0 via swagger2openapi`);
		const result = await swagger2openapi.convertObj(spec, {
			patch: true, // tolerate minor non-conformance in source
			warnOnly: true,
		});
		return result.openapi;
	}
	throw new Error(
		`unsupported spec format: openapi=${spec.openapi}, swagger=${spec.swagger}`,
	);
}

function toPascalCase(s: string): string {
	return s
		.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, (_, _sep, c) => c.toUpperCase())
		.replace(/[^a-zA-Z0-9]/g, "");
}

function renderRuntime(args: CliArgs): string {
	const templatePath = join(__dirname, "runtime.template.ts");
	let template = readFileSync(templatePath, "utf8");

	// Inject the configured constants in place of the template's defaults.
	template = template.replace(
		/^const BASE_URL = .*$/m,
		`const BASE_URL = ${JSON.stringify(args.baseUrl)};`,
	);
	template = template.replace(
		/^const AUTH_SHAPE: AuthShape = .*$/m,
		`const AUTH_SHAPE: AuthShape = ${JSON.stringify(args.auth)};`,
	);
	template = template.replace(
		/^const CONTENT_TYPE: ContentType = .*$/m,
		`const CONTENT_TYPE: ContentType = ${JSON.stringify(args.contentType)};`,
	);
	template = template.replace(
		/^const CAPABILITY_NAME = .*$/m,
		`const CAPABILITY_NAME = ${JSON.stringify(args.name)};`,
	);

	template = template.replace(
		/^const PREFIX = .*$/m,
		`const PREFIX = ${JSON.stringify(args.prefix)};`,
	);

	return template;
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	const rawSpec = await loadSpec(args.spec);

	console.log(`→ normalizing spec`);
	const spec = await ensureOpenApi3(rawSpec);

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
	const capabilityManifest = {
		name: args.name,
		entrypoint: `${toPascalCase(args.name)}Capability`,
		source: {
			spec: args.spec,
			title: codegen.specTitle,
			version: codegen.specVersion,
		},
		upstream: {
			baseUrl: args.baseUrl,
			prefix: args.prefix,
		},
		auth: args.auth,
		contentType: args.contentType,
		operations: codegen.operationCount,
		namespaces: Object.keys(codegen.namespaces).length,
		publicHttpRoute: false,
		evidenceContract: "capa.evidence.v0",
	};

	const generatedDir = join(args.out, "src", "generated");
	mkdirSync(generatedDir, { recursive: true });

	writeFileSync(join(generatedDir, "schema.gen.ts"), schemaTs);
	writeFileSync(join(generatedDir, "capability.gen.ts"), capability);
	writeFileSync(join(generatedDir, "manifest.gen.ts"), manifest);
	writeFileSync(join(generatedDir, "runtime.ts"), renderRuntime(args));
	writeFileSync(join(args.out, "capa.manifest.json"), `${JSON.stringify(capabilityManifest, null, "\t")}\n`);

	console.log(`✓ wrote:
  ${generatedDir}/schema.gen.ts       (openapi-typescript output, full type tree)
  ${generatedDir}/capability.gen.ts   (RpcTarget classes + WorkerEntrypoint)
  ${generatedDir}/manifest.gen.ts     (operationId → metadata)
  ${generatedDir}/runtime.ts          (evidence-aware fetch, baseUrl=${args.baseUrl})
  ${args.out}/capa.manifest.json      (capability metadata)`);

	console.log(`
next steps:
  1. write src/index.ts in ${args.out} that extends the generated capability
  2. cd ${args.out} && bun install
  3. wrangler deploy --dry-run to verify`);
}

main().catch(err => {
	console.error("✗ codegen failed:", err);
	process.exit(1);
});
