import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const capabilitiesDir = new URL("../../capabilities/", import.meta.url).pathname;
const entryPattern = /^\t"([^"]+)": (\{.*\}),?$/gm;

const capabilities = readdirSync(capabilitiesDir)
	.filter((name) => existsSync(join(capabilitiesDir, name, "capa.manifest.json")))
	.map((name) => {
		const meta = JSON.parse(readFileSync(join(capabilitiesDir, name, "capa.manifest.json"), "utf8"));
		const source = readFileSync(join(capabilitiesDir, name, "src/generated/manifest.gen.ts"), "utf8");
		const operations = [...source.matchAll(entryPattern)].map(([, operationId, json]) => ({ operationId, ...JSON.parse(json) }));
		return { name, title: meta.source?.title ?? name, auth: meta.auth, operations };
	});

writeFileSync(new URL("../src/index.gen.json", import.meta.url), JSON.stringify(capabilities));
console.log(capabilities.map((c) => `${c.name}:${c.operations.length}`).join(" "));
