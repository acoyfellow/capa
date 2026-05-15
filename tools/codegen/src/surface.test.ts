import { describe, expect, test } from "bun:test";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	diffSurfaces,
	loadCommittedSurface,
	surfaceFromCodegen,
	surfaceFromSpecBody,
} from "./surface.ts";
import type { CodegenResult } from "./types.ts";

function fakeManifest(entries: Array<[string, Record<string, unknown>]>): string {
	const lines = [
		"// AUTO-GENERATED",
		"export const manifest = {",
		...entries.map(([id, meta]) => `\t${JSON.stringify(id)}: ${JSON.stringify(meta)},`),
		"} as const;",
	];
	return lines.join("\n");
}

describe("loadCommittedSurface", () => {
	test("parses the manifest.gen.ts surface lines", () => {
		const dir = mkdtempSync(join(tmpdir(), "capa-surface-"));
		const path = join(dir, "manifest.gen.ts");
		writeFileSync(
			path,
			fakeManifest([
				["GetAccount", { namespace: "account", method: "list", http: "get", path: "/v1/account", risk: "low" }],
				["PostCharges", { namespace: "charges", method: "create", http: "post", path: "/v1/charges", risk: "high" }],
			]),
		);
		const surface = loadCommittedSurface(path);
		expect(surface.size).toBe(2);
		expect(surface.get("GetAccount")?.method).toBe("list");
		expect(surface.get("PostCharges")?.risk).toBe("high");
	});

	test("returns empty surface when file is missing", () => {
		const surface = loadCommittedSurface("/nonexistent/path/manifest.gen.ts");
		expect(surface.size).toBe(0);
	});
});

describe("diffSurfaces", () => {
	function entry(id: string, overrides: Partial<Record<string, string>> = {}) {
		return {
			operationId: id,
			namespace: "ns",
			method: "list",
			http: "get",
			path: `/v1/${id}`,
			risk: "low",
			...overrides,
		};
	}

	test("detects added, removed, and changed operations", () => {
		const before = new Map([
			["A", entry("A")],
			["B", entry("B", { method: "create", http: "post", risk: "high" })],
			["C", entry("C")],
		]);
		const after = new Map([
			["A", entry("A")], // unchanged
			["B", entry("B", { method: "update", http: "post", risk: "high" })], // changed: method
			["D", entry("D")], // added
		]);
		const diff = diffSurfaces(before, after);
		expect(diff.added.map(e => e.operationId)).toEqual(["D"]);
		expect(diff.removed.map(e => e.operationId)).toEqual(["C"]);
		expect(diff.changed.map(c => c.operationId)).toEqual(["B"]);
		expect(diff.changed[0]!.fields).toContain("method");
		expect(diff.totals).toEqual({ before: 3, after: 3, added: 1, removed: 1, changed: 1 });
	});

	test("empty before means everything is added", () => {
		const after = new Map([["A", entry("A")]]);
		const diff = diffSurfaces(new Map(), after);
		expect(diff.totals.added).toBe(1);
		expect(diff.totals.removed).toBe(0);
		expect(diff.totals.changed).toBe(0);
	});
});

describe("surfaceFromCodegen", () => {
	test("flattens namespaces into operationId-keyed map", () => {
		const codegen: CodegenResult = {
			specVersion: "v1",
			specTitle: "Fake",
			baseUrl: "https://example.com",
			operationCount: 2,
			namespaces: {
				charges: [
					{
						operationId: "PostCharges",
						namespace: "charges",
						method: "create",
						http: "post",
						path: "/v1/charges",
						pathParams: [],
						hasBody: true,
						risk: "high",
					},
				],
				account: [
					{
						operationId: "GetAccount",
						namespace: "account",
						method: "list",
						http: "get",
						path: "/v1/account",
						pathParams: [],
						hasBody: false,
						risk: "low",
					},
				],
			},
		};
		const surface = surfaceFromCodegen(codegen);
		expect(surface.size).toBe(2);
		expect(surface.get("PostCharges")?.namespace).toBe("charges");
	});
});

describe("surfaceFromSpecBody", () => {
	test("end-to-end: parse a tiny OpenAPI 3.0 JSON body and diff against an empty prior", async () => {
		const spec = {
			openapi: "3.0.0",
			info: { title: "Tiny", version: "1.0.0" },
			servers: [{ url: "https://api.example.com" }],
			paths: {
				"/v1/widgets": {
					get: { operationId: "GetWidgets" },
					post: { operationId: "PostWidgets" },
				},
				"/v1/widgets/{id}": {
					get: { operationId: "GetWidget" },
					delete: { operationId: "DeleteWidget" },
				},
			},
		};
		const after = await surfaceFromSpecBody(JSON.stringify(spec), "/v1");
		expect(after.size).toBe(4);
		expect(after.get("GetWidgets")?.method).toBe("list");
		expect(after.get("PostWidgets")?.method).toBe("create");
		expect(after.get("GetWidget")?.method).toBe("retrieve");
		expect(after.get("DeleteWidget")?.method).toBe("del");

		const diff = diffSurfaces(new Map(), after);
		expect(diff.totals.added).toBe(4);
		expect(diff.totals.removed).toBe(0);
	});
});
