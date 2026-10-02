import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const capabilitiesDir = new URL("../../capabilities/", import.meta.url).pathname;
const entryPattern = /^\t"([^"]+)": (\{.*\}),?$/gm;

function bindingName(name) {
	return name.toUpperCase().replaceAll("-", "_");
}

const capabilities = readdirSync(capabilitiesDir)
	.filter((name) => existsSync(join(capabilitiesDir, name, "capa.manifest.json")))
	.sort()
	.map((name) => {
		const meta = JSON.parse(readFileSync(join(capabilitiesDir, name, "capa.manifest.json"), "utf8"));
		const source = readFileSync(join(capabilitiesDir, name, "src/generated/manifest.gen.ts"), "utf8");
		const operations = [...source.matchAll(entryPattern)].map(([, operationId, json]) => ({ operationId, ...JSON.parse(json) }));
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
