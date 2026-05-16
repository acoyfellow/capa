#!/usr/bin/env bun

import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { capabilityRegistry } from "./registry.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../../..");

for (const check of capabilityRegistry) {
	console.log(`→ regenerate ${check.name}`);
	const result = spawnSync(
		"bun",
		[
			"tools/codegen/src/cli.ts",
			"--spec", check.spec,
			"--out", check.out,
			"--name", check.name,
			"--base-url", check.baseUrl,
			"--prefix", check.prefix,
			"--auth", check.auth,
			"--content-type", check.contentType,
		],
		{ cwd: repoRoot, stdio: "inherit" },
	);
	if (result.status !== 0) process.exit(result.status || 1);
}

const changed = spawnSync("git", ["diff", "--name-only", "--", "capabilities"], {
	cwd: repoRoot,
	encoding: "utf8",
});

if (changed.status !== 0) process.exit(changed.status || 1);

const changedFiles = changed.stdout
	.split("\n")
	.map(line => line.trim())
	.filter(Boolean);

const allowedGenerated = changedFiles.every(file =>
	file.startsWith("capabilities/") &&
	(file.includes("/src/generated/") || file.endsWith("/capa.manifest.json") || file === "capabilities/spec-lock.json"),
);

if (!allowedGenerated) {
	console.error("✗ unexpected capability files changed during regeneration");
	console.error(changedFiles.join("\n"));
	process.exit(1);
}

console.log("✓ generated files regenerated");
