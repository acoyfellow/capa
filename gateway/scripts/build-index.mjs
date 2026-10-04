import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const capabilitiesDir = new URL("../../capabilities/", import.meta.url).pathname;
const entryPattern = /^\t"([^"]+)": (\{.*\}),?$/gm;

const RESERVED_WORDS = new Set([
	"break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum",
	"export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null",
	"return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield",
]);

export function bindingProperty(namespace) {
	const camelCased = namespace
		.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
		.replace(/^[^a-zA-Z0-9]+/, "")
		.replace(/[^a-zA-Z0-9]+/g, "");
	return RESERVED_WORDS.has(camelCased) ? `${camelCased}_` : camelCased;
}

function bindingName(name) {
	return name.toUpperCase().replaceAll("-", "_");
}

const methodSignature = /\n\tasync ([A-Za-z0-9_$]+)\((.*)\): Promise</g;
const getterPattern = /\tget ([A-Za-z0-9_$]+)\(\): ([A-Za-z0-9_]+) \{/g;
const classPattern = /class ([A-Za-z0-9_]+) extends[\s\S]*?\n\}/g;

function optionsPositions(source) {
	const classByGetter = new Map([...source.matchAll(getterPattern)].map((m) => [m[1], m[2]]));
	const positions = new Map();
	for (const [block, className] of source.matchAll(classPattern)) {
		for (const [, method, params] of block.matchAll(methodSignature)) {
			positions.set(`${className}.${method}`, params.split(", ").filter(Boolean).findIndex((param) => param.startsWith("options?")));
		}
	}
	return (namespace, method) => positions.get(`${classByGetter.get(namespace)}.${method}`) ?? -1;
}

const capabilities = readdirSync(capabilitiesDir)
	.filter((name) => existsSync(join(capabilitiesDir, name, "capa.manifest.json")))
	.sort()
	.map((name) => {
		const meta = JSON.parse(readFileSync(join(capabilitiesDir, name, "capa.manifest.json"), "utf8"));
		const source = readFileSync(join(capabilitiesDir, name, "src/generated/manifest.gen.ts"), "utf8");
		const optionsIndex = optionsPositions(readFileSync(join(capabilitiesDir, name, "src/generated/capability.gen.ts"), "utf8"));
		const operations = [...source.matchAll(entryPattern)].map(([, operationId, json]) => {
			const operation = JSON.parse(json);
			const namespace = bindingProperty(operation.namespace);
			return { operationId, ...operation, namespace, optionsIndex: optionsIndex(namespace, operation.method) };
		});
		return {
			name,
			title: meta.source?.title ?? name,
			auth: meta.auth,
			binding: bindingName(name),
			worker: `capa-${name}`,
			entrypoint: meta.entrypoint,
			operations,
		};
	});

writeFileSync(new URL("../src/index.gen.json", import.meta.url), JSON.stringify(capabilities));
writeFileSync(
	new URL("../capabilities.gen.json", import.meta.url),
	`${JSON.stringify(
		capabilities.map(({ name, auth, binding, worker, entrypoint }) => ({ name, auth, binding, worker, entrypoint })),
		null,
		"\t",
	)}\n`,
);
console.log(capabilities.map((c) => `${c.name}:${c.operations.length}`).join(" "));
