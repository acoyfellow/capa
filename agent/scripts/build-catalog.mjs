import { readFileSync, writeFileSync } from "node:fs";

const AGENT_CAPABILITIES = ["github"];
const gatewayCatalog = JSON.parse(readFileSync(new URL("../../gateway/src/index.gen.json", import.meta.url), "utf8"));
const selected = gatewayCatalog.filter((entry) => AGENT_CAPABILITIES.includes(entry.name));
const missing = AGENT_CAPABILITIES.filter((name) => !selected.some((entry) => entry.name === name));
if (missing.length) {
	console.error(`gateway catalog has no ${missing.join(", ")}. Run npm run index in gateway/ first.`);
	process.exit(1);
}
writeFileSync(new URL("../src/catalog.gen.json", import.meta.url), JSON.stringify(selected));
console.log(selected.map((entry) => `${entry.name}:${entry.operations.length}`).join(" "));
