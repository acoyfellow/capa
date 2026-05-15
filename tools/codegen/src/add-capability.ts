#!/usr/bin/env bun

import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { capabilityRegistry, type CapabilityRegistryEntry } from "./registry.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../../..");
const registryPath = resolve(__dirname, "registry.ts");

type Args = Record<string, string>;

function parseArgs(argv: string[]): Args {
	const args: Args = {};
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i]!;
		if (!arg.startsWith("--")) continue;
		args[arg.slice(2)] = argv[i + 1] || "";
		i++;
	}
	return args;
}

function fail(message: string): never {
	console.error(`✗ ${message}`);
	process.exit(2);
}

function quote(value: string): string {
	return JSON.stringify(value);
}

function renderEntry(entry: CapabilityRegistryEntry): string {
	return `\t{\n\t\tname: ${quote(entry.name)},\n\t\tspec: ${quote(entry.spec)},\n\t\tout: ${quote(entry.out)},\n\t\tbaseUrl: ${quote(entry.baseUrl)},\n\t\tprefix: ${quote(entry.prefix)},\n\t\tauth: ${quote(entry.auth)},\n\t\tcontentType: ${quote(entry.contentType)},\n\t},\n`;
}


function envName(value: string): string {
	return value.replace(/[^a-zA-Z0-9]+/g, "_").toUpperCase();
}

const args = parseArgs(process.argv.slice(2));
const name = args.name?.trim();
const spec = args.spec?.trim();
const baseUrl = args["base-url"]?.trim();
const prefix = args.prefix?.trim() || "/";
const auth = args.auth?.trim() as CapabilityRegistryEntry["auth"];
const contentType = args["content-type"]?.trim() as CapabilityRegistryEntry["contentType"];

if (!name || !spec || !baseUrl || !auth || !contentType) {
	fail("Usage: bun tools/codegen/src/add-capability.ts --name <name> --spec <url> --base-url <url> --prefix </path> --auth <bearer|private-token|basic> --content-type <form|json>");
}
if (!/^[a-z][a-z0-9-]*$/.test(name)) fail("--name must be lowercase kebab-case");
if (!spec.startsWith("http://") && !spec.startsWith("https://")) fail("--spec must be an HTTP(S) URL for registered capabilities");
if (!baseUrl.startsWith("https://")) fail("--base-url must be https://");
if (!prefix.startsWith("/")) fail("--prefix must start with /");
if (!(["bearer", "private-token", "basic"] as const).includes(auth)) fail("--auth must be bearer, private-token, or basic");
if (!(["form", "json"] as const).includes(contentType)) fail("--content-type must be form or json");
if (capabilityRegistry.some(entry => entry.name === name)) fail(`${name} is already registered`);

const entry: CapabilityRegistryEntry = {
	name,
	spec,
	out: `capabilities/${name}`,
	baseUrl,
	prefix,
	auth,
	contentType,
};

const source = readFileSync(registryPath, "utf8");
const marker = "];\n";
const insertAt = source.lastIndexOf(marker);
if (insertAt < 0) fail("could not find capabilityRegistry array terminator");
writeFileSync(registryPath, `${source.slice(0, insertAt)}${renderEntry(entry)}${source.slice(insertAt)}`);
console.log(`→ registered ${name}`);

const codegen = spawnSync(
	"bun",
	[
		"tools/codegen/src/cli.ts",
		"--spec", entry.spec,
		"--out", entry.out,
		"--name", entry.name,
		"--base-url", entry.baseUrl,
		"--prefix", entry.prefix,
		"--auth", entry.auth,
		"--content-type", entry.contentType,
	],
	{ cwd: repoRoot, stdio: "inherit" },
);
if (codegen.status !== 0) process.exit(codegen.status || 1);

const manifestPath = resolve(repoRoot, entry.out, "capa.manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
	entrypoint?: string;
	operations?: number;
	namespaces?: number;
	source?: { title?: string; version?: string };
};
if (!manifest.operations || !manifest.namespaces || !manifest.entrypoint) {
	fail(`generated ${entry.out} with zero operations/namespaces or no entrypoint; check --prefix and --base-url, then remove the registry row before retrying`);
}

const capabilityDir = resolve(repoRoot, entry.out);
const srcDir = resolve(capabilityDir, "src");
mkdirSync(srcDir, { recursive: true });
const className = manifest.entrypoint;
const generatedClassName = `Generated${className}`;
const bindingName = envName(entry.name);
const apiSecret = `${bindingName}_API_KEY`;
const packageName = `@capa/${entry.name}`;
const title = manifest.source?.title || entry.name;

writeFileSync(resolve(srcDir, "index.ts"), `/**\n * capa-${entry.name} — ${title} wrapped as a JSRPC capability.\n *\n * ${manifest.operations.toLocaleString("en-US")} operations across ${manifest.namespaces.toLocaleString("en-US")} namespaces, generated from OpenAPI.\n * Bind the service as ${bindingName} and call env.${bindingName}.<namespace>.<method>(input).\n */\n\nimport { ${className} as ${generatedClassName} } from \"./generated/capability.gen.ts\";\nimport { overrides } from \"./overrides.ts\";\n\nexport class ${className} extends ${generatedClassName} {\n\tconstructor(ctx: ExecutionContext, env: Env) {\n\t\tsuper(ctx, env);\n\t\tthis.overrides = overrides;\n\t}\n}\n\ninterface Env {\n\t${apiSecret}: string;\n}\n\nexport default {\n\tfetch(): Response {\n\t\treturn new Response(\"capa-${entry.name} is JSRPC-only. Bind via service binding.\", {\n\t\t\tstatus: 404,\n\t\t\theaders: { \"content-type\": \"text/plain\" },\n\t\t});\n\t},\n} satisfies ExportedHandler<Env>;\n`);
writeFileSync(resolve(srcDir, "overrides.ts"), `/** Per-method evidence assertions can be added here. */\nimport type { MethodOverride } from \"./generated/runtime.ts\";\n\nexport const overrides: Record<string, Record<string, MethodOverride>> = {};\n`);
writeFileSync(resolve(capabilityDir, ".gitignore"), "node_modules\n.dev.vars\n.wrangler\n");
writeFileSync(resolve(capabilityDir, "package.json"), `${JSON.stringify({
	name: packageName,
	version: "0.0.1",
	private: true,
	type: "module",
	scripts: { deploy: "wrangler deploy", dev: "wrangler dev", types: "wrangler types" },
	devDependencies: { "@cloudflare/workers-types": "^4.20260425.1", typescript: "^5.6.0", wrangler: "^4.85.0" },
}, null, "\t")}\n`);
writeFileSync(resolve(capabilityDir, "tsconfig.json"), `${JSON.stringify({
	compilerOptions: { target: "es2022", module: "es2022", moduleResolution: "bundler", strict: true, esModuleInterop: true, skipLibCheck: true, resolveJsonModule: true, allowImportingTsExtensions: true, noEmit: true, types: ["@cloudflare/workers-types/2023-07-01"], lib: ["es2022"] },
	include: ["src/**/*.ts"],
}, null, "\t")}\n`);
writeFileSync(resolve(capabilityDir, "wrangler.jsonc"), `{\n\t\"$schema\": \"../../node_modules/wrangler/config-schema.json\",\n\t\"name\": \"capa-${entry.name}\",\n\t\"main\": \"src/index.ts\",\n\t\"compatibility_date\": \"2026-04-17\",\n\t\"compatibility_flags\": [\"nodejs_compat\"],\n\t\"workers_dev\": false,\n\t\"observability\": { \"enabled\": true }\n\t// Required secret: wrangler secret put ${apiSecret}\n\t// Service binding entrypoint: ${className}\n}\n`);
writeFileSync(resolve(capabilityDir, "README.md"), `# capa-${entry.name}\n\n${title} as a generated Cloudflare JSRPC service binding. **${manifest.operations.toLocaleString("en-US")} operations, ${manifest.namespaces.toLocaleString("en-US")} namespaces.**\n\n## Deploy\n\n\`\`\`bash\nwrangler secret put ${apiSecret}\nwrangler deploy\n\`\`\`\n\nBind \`capa-${entry.name}\` from a caller Worker with entrypoint \`${className}\`. Every call returns \`{ result, evidence }\`.\n\n| Field | Value |\n|---|---|\n| Source spec | \`${entry.spec}\` |\n| Upstream | \`${entry.baseUrl}\` |\n| Prefix | \`${entry.prefix}\` |\n| Auth | \`${entry.auth}\` |\n| Request body | \`${entry.contentType}\` |\n\nGenerated files under \`src/generated/\` are codegen output; add API-specific evidence overrides in \`src/overrides.ts\`.\n`);

console.log(`✓ generated full scaffold ${entry.out}`);
console.log("Next: review names/docs/overrides, then run bun run check.");
