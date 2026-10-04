import { existsSync, readFileSync } from "node:fs";

const capabilitiesDir = new URL("../../capabilities/", import.meta.url).pathname;
const catalog = JSON.parse(readFileSync(new URL("../src/index.gen.json", import.meta.url), "utf8"));

function readCapabilityFile(name, path) {
	return readFileSync(`${capabilitiesDir}${name}/${path}`, "utf8");
}

function bindingSurface(name) {
	const source = readCapabilityFile(name, "src/generated/capability.gen.ts");
	const classByGetter = new Map([...source.matchAll(/\tget ([A-Za-z0-9_$]+)\(\): ([A-Za-z0-9_]+) \{/g)].map((m) => [m[1], m[2]]));
	const methodsByClass = new Map(
		[...source.matchAll(/class ([A-Za-z0-9_]+) extends[\s\S]*?\n\}/g)].map((m) => [m[1], new Set([...m[0].matchAll(/\n\tasync ([A-Za-z0-9_$]+)\(/g)].map((x) => x[1]))]),
	);
	return (namespace, method) => methodsByClass.get(classByGetter.get(namespace))?.has(method) ?? false;
}

function manifestPairs(name) {
	const source = readCapabilityFile(name, "src/generated/manifest.gen.ts");
	return new Set([...source.matchAll(/"namespace":"([^"]+)","method":"([^"]+)"/g)].map((m) => `${m[1]}.${m[2]}`));
}

function overrideKeys(name) {
	if (!existsSync(`${capabilitiesDir}${name}/src/overrides.ts`)) return [];
	const source = readCapabilityFile(name, "src/overrides.ts");
	const body = source.slice(source.indexOf("export const overrides"));
	const keys = [];
	let namespace;
	for (const line of body.split("\n")) {
		const namespaceMatch = line.match(/^\t([A-Za-z0-9_]+): \{/);
		if (namespaceMatch) namespace = namespaceMatch[1];
		const methodMatch = line.match(/^\t\t([A-Za-z0-9_]+): \{/);
		if (methodMatch && namespace) keys.push(`${namespace}.${methodMatch[1]}`);
	}
	return keys;
}

const problems = [];
for (const entry of catalog) {
	const hasMethod = bindingSurface(entry.name);
	for (const operation of entry.operations) {
		if (!hasMethod(operation.namespace, operation.method)) problems.push(`${entry.name}: gateway lists ${operation.namespace}.${operation.method}, but the binding has no such method`);
		if (!(operation.optionsIndex >= 0)) problems.push(`${entry.name}: ${operation.namespace}.${operation.method} has no options argument, so the gateway cannot pass the key`);
	}
	const pairs = manifestPairs(entry.name);
	for (const key of overrideKeys(entry.name)) {
		if (!pairs.has(key)) problems.push(`${entry.name}: override ${key} matches no operation, so its checks never run`);
	}
}

if (problems.length) {
	console.error(problems.join("\n"));
	process.exit(1);
}
console.log(`checked ${catalog.reduce((sum, entry) => sum + entry.operations.length, 0)} gateway operations and every override key`);
