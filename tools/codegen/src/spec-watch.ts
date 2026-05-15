#!/usr/bin/env bun

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { capabilityRegistry, type CapabilityRegistryEntry } from "./registry.ts";
import {
	diffSurfaces,
	loadCommittedSurface,
	normalizeSpec,
	surfaceFromCodegen,
	type SurfaceDiff,
	type SurfaceEntry,
} from "./surface.ts";
import { parseSpec } from "./parse-spec.ts";
import { diffSpecSchemas, summarizeHints, type SchemaChangeHint } from "./spec-schema-diff.ts";

interface LockedSpec {
	name: string;
	spec: string;
	sha256: string;
	checkedAt?: string;
}

interface SpecLock {
	format: "capa.spec-lock.v1";
	specs: Record<string, LockedSpec>;
}

interface SpecChange {
	name: string;
	spec: string;
	previousSha256?: string;
	currentSha256: string;
	surface?: SurfaceDiff;
	surfaceError?: string;
	schemaHints?: SchemaChangeHint[];
	schemaSummary?: ReturnType<typeof summarizeHints>;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../../..");
const artifactsDir = resolve(repoRoot, process.env.CAPA_SPEC_WATCH_ARTIFACTS || "artifacts/spec-watch");
const lockPath = resolve(repoRoot, process.env.CAPA_SPEC_LOCK_PATH || "capabilities/spec-lock.json");
const mode = process.argv[2] || "check";
const shouldWriteLock = mode === "refresh-lock";

if (!["check", "refresh-lock"].includes(mode)) {
	console.error("Usage: bun tools/codegen/src/spec-watch.ts [check|refresh-lock]");
	process.exit(2);
}

function sha256(text: string): string {
	return createHash("sha256").update(text).digest("hex");
}

function loadLock(): SpecLock {
	if (!existsSync(lockPath)) return { format: "capa.spec-lock.v1", specs: {} };
	return JSON.parse(readFileSync(lockPath, "utf8")) as SpecLock;
}

async function fetchSpec(spec: string): Promise<string> {
	const res = await fetch(spec, {
		headers: { "user-agent": "capa-spec-watch/0.0.1" },
	});
	if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
	return res.text();
}

async function analyzeChangedSpec(entry: CapabilityRegistryEntry, rawBody: string): Promise<Pick<SpecChange, "surface" | "schemaHints" | "schemaSummary">> {
	const manifestPath = resolve(repoRoot, entry.out, "src/generated/manifest.gen.ts");
	const before = loadCommittedSurface(manifestPath);
	const normalized = await normalizeSpec(rawBody);
	const after = surfaceFromCodegen(parseSpec(normalized, entry.prefix));
	const schema = diffSpecSchemas(null, normalized);
	// The current lock stores hashes, not previous spec bodies, so schema hints
	// become fully useful once a cache/snapshot is added. Keep the shape/report
	// wired now; for hash-only locks this honestly reports skipped/no hints.
	return { surface: diffSurfaces(before, after), schemaHints: schema.hints, schemaSummary: summarizeHints(schema.hints) };
}

function formatSurfaceEntry(e: SurfaceEntry): string {
	return `${e.namespace}.${e.method} \`${e.http.toUpperCase()} ${e.path}\` _(${e.risk})_`;
}

const MAX_SURFACE_LINES = 25;

function renderSurfaceSection(diff: SurfaceDiff): string[] {
	const out: string[] = [];
	out.push(
		`Surface: ${diff.totals.before} → ${diff.totals.after} ops ` +
			`(+${diff.totals.added} added, -${diff.totals.removed} removed, ~${diff.totals.changed} changed)`,
		"",
	);

	const renderList = (label: string, items: string[]) => {
		if (items.length === 0) return;
		out.push(`**${label}** (${items.length}):`);
		const shown = items.slice(0, MAX_SURFACE_LINES);
		for (const line of shown) out.push(`- ${line}`);
		if (items.length > MAX_SURFACE_LINES) {
			out.push(`- _…and ${items.length - MAX_SURFACE_LINES} more (see \`artifacts/spec-watch/report.json\`)_`);
		}
		out.push("");
	};

	renderList("Added", diff.added.map(formatSurfaceEntry));
	renderList("Removed", diff.removed.map(formatSurfaceEntry));
	renderList(
		"Changed",
		diff.changed.map(c => `${c.operationId} — fields: ${c.fields.join(", ")} (was \`${c.before.http.toUpperCase()} ${c.before.path}\`)`),
	);

	if (diff.totals.added === 0 && diff.totals.removed === 0 && diff.totals.changed === 0) {
		out.push("_No binding-surface drift detected — spec body changed but generated operations are unchanged._", "");
	}
	return out;
}

function renderSchemaSection(hints: SchemaChangeHint[], summary: ReturnType<typeof summarizeHints>): string[] {
	if (hints.length === 0) return [];
	const out = [`Schema hints: ${summary.breaking} breaking, ${summary.warn} warn, ${summary.info} info`, ""];
	for (const hint of hints.slice(0, MAX_SURFACE_LINES)) out.push(`- **${hint.severity}** ${hint.message}`);
	if (hints.length > MAX_SURFACE_LINES) out.push(`- _…and ${hints.length - MAX_SURFACE_LINES} more (see \`artifacts/spec-watch/report.json\`)_`);
	out.push("");
	return out;
}

function markdownReport(changes: SpecChange[], failures: Array<{ name: string; spec: string; error: string }>): string {
	const lines = [
		"# capa upstream spec watch",
		"",
		`Checked: ${new Date().toISOString()}`,
		`Tracked specs: ${capabilityRegistry.length}`,
		"",
	];

	if (changes.length === 0) {
		lines.push("## Result", "", "No upstream OpenAPI spec body changed since `capabilities/spec-lock.json`.", "");
	} else {
		lines.push("## Changed specs", "");
		for (const change of changes) {
			lines.push(
				`### ${change.name}`,
				"",
				`- Source: ${change.spec}`,
				`- Previous SHA-256: \`${change.previousSha256 || "unlocked"}\``,
				`- Current SHA-256: \`${change.currentSha256}\``,
				"",
			);
			if (change.surface) {
				lines.push(...renderSurfaceSection(change.surface));
			}
			if (change.schemaHints && change.schemaSummary) {
				lines.push(...renderSchemaSection(change.schemaHints, change.schemaSummary));
			}
			if (!change.surface && change.surfaceError) {
				lines.push(`> Surface diff unavailable: \`${change.surfaceError}\``, "");
			}
		}
		lines.push(
			"Run the regeneration check to see concrete generated binding drift:",
			"",
			"```bash",
			"bun run check:generated",
			"git diff -- capabilities",
			"```",
			"",
		);
	}

	if (failures.length > 0) {
		lines.push("## Fetch failures", "");
		for (const failure of failures) {
			lines.push(`- **${failure.name}** — ${failure.spec} — \`${failure.error}\``);
		}
		lines.push("");
	}

	return `${lines.join("\n")}\n`;
}

async function main() {
	const checkedAt = new Date().toISOString();
	const prior = loadLock();
	const next: SpecLock = { format: "capa.spec-lock.v1", specs: {} };
	const changes: SpecChange[] = [];
	const failures: Array<{ name: string; spec: string; error: string }> = [];

	for (const entry of capabilityRegistry) {
		process.stdout.write(`→ ${entry.name}: `);
		try {
			const raw = await fetchSpec(entry.spec);
			const currentSha256 = sha256(raw);
			const old = prior.specs[entry.name];
			next.specs[entry.name] = { name: entry.name, spec: entry.spec, sha256: currentSha256, checkedAt };
			if (!old || old.spec !== entry.spec || old.sha256 !== currentSha256) {
				const change: SpecChange = {
					name: entry.name,
					spec: entry.spec,
					previousSha256: old?.sha256,
					currentSha256,
				};
				// Compute surface diff against the committed manifest.gen.ts so the
				// report tells reviewers which generated operations actually moved.
				try {
					Object.assign(change, await analyzeChangedSpec(entry, raw));
				} catch (err) {
					change.surfaceError = err instanceof Error ? err.message : String(err);
				}
				changes.push(change);
				const summary = change.surface
					? ` (+${change.surface.totals.added}/-${change.surface.totals.removed}/~${change.surface.totals.changed})`
					: change.surfaceError
						? ` (surface diff failed: ${change.surfaceError})`
						: "";
				console.log(`changed${summary}`);
			} else {
				console.log("unchanged");
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			failures.push({ name: entry.name, spec: entry.spec, error: message });
			const old = prior.specs[entry.name];
			if (old) next.specs[entry.name] = old;
			console.log(`fetch failed (${message})`);
		}
	}

	mkdirSync(artifactsDir, { recursive: true });
	const report = {
		format: "capa.spec-watch.v1",
		checkedAt,
		tracked: capabilityRegistry.length,
		changed: changes,
		failures,
	};
	writeFileSync(join(artifactsDir, "report.json"), `${JSON.stringify(report, null, 2)}\n`);
	writeFileSync(join(artifactsDir, "report.md"), markdownReport(changes, failures));

	if (shouldWriteLock) {
		mkdirSync(dirname(lockPath), { recursive: true });
		writeFileSync(lockPath, `${JSON.stringify(next, null, "\t")}\n`);
		console.log(`✓ refreshed ${lockPath.replace(`${repoRoot}/`, "")}`);
	}

	if (failures.length > 0) {
		console.error(`✗ ${failures.length} spec fetch failure(s); see artifacts/spec-watch/report.md`);
		process.exit(2);
	}
	if (changes.length > 0 && !shouldWriteLock) {
		console.error(`✗ ${changes.length} upstream spec(s) changed; see artifacts/spec-watch/report.md`);
		process.exit(1);
	}
	console.log(`✓ upstream spec lock is ${shouldWriteLock ? "refreshed" : "current"}`);
}

main().catch(error => {
	console.error(error);
	process.exit(2);
});
