import { describe, expect, test } from "bun:test";
import { markdownReport, type SpecChange } from "./spec-watch.ts";
import type { SurfaceDiff, SurfaceEntry } from "./surface.ts";

function entry(overrides: Partial<SurfaceEntry> = {}): SurfaceEntry {
	return {
		operationId: "GetCharges",
		namespace: "charges",
		method: "list",
		http: "get",
		path: "/v1/charges",
		risk: "low",
		...overrides,
	};
}

function surface(overrides: Partial<SurfaceDiff> = {}): SurfaceDiff {
	return {
		added: [],
		removed: [],
		changed: [],
		totals: { before: 534, after: 534, added: 0, removed: 0, changed: 0 },
		...overrides,
	};
}

function change(overrides: Partial<SpecChange> = {}): SpecChange {
	return {
		name: "stripe",
		spec: "https://example.com/stripe.json",
		previousSha256: "old",
		currentSha256: "new",
		previousVersion: "2026-04-22.dahlia",
		currentVersion: "2026-05-01.clover",
		breaksAutomaticRefresh: false,
		surface: surface(),
		...overrides,
	};
}

describe("spec-watch refresh policy report", () => {
	test("version drift with no breaking surface is a safe candidate", () => {
		const report = markdownReport([change()], []);
		expect(report).toContain("Version: `2026-04-22.dahlia` → `2026-05-01.clover`");
		expect(report).toContain("Automatic refresh: **safe candidate**");
		expect(report).toContain("Surface: 534 → 534 ops (+0 added, -0 removed, ~0 changed)");
	});

	test("breaking generated-surface drift is blocked and rendered", () => {
		const removed = entry({ operationId: "DeleteChargesCharge", method: "del", http: "delete", path: "/v1/charges/{charge}", risk: "high" });
		const report = markdownReport([
			change({
				breaksAutomaticRefresh: true,
				surface: surface({
					removed: [removed],
					totals: { before: 534, after: 533, added: 0, removed: 1, changed: 0 },
				}),
			}),
		], []);
		expect(report).toContain("Automatic refresh: **blocked — breaking drift detected**");
		expect(report).toContain("Surface: 534 → 533 ops (+0 added, -1 removed, ~0 changed)");
		expect(report).toContain("charges.del `DELETE /v1/charges/{charge}`");
	});
});
