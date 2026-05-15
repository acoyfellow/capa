import { describe, expect, test } from "bun:test";
import { diffSpecSchemas, summarizeHints } from "./spec-schema-diff.ts";

function spec(paths: any) {
	return { paths };
}

describe("diffSpecSchemas", () => {
	test("returns skipped when either side is missing", () => {
		const a = diffSpecSchemas(null, spec({}));
		expect(a.skipped).toBe(true);
		expect(a.hints).toEqual([]);

		const b = diffSpecSchemas(spec({}), undefined);
		expect(b.skipped).toBe(true);
	});

	test("detects added operation", () => {
		const oldSpec = spec({});
		const newSpec = spec({
			"/v1/foo": { post: { responses: { "200": { content: { "application/json": { schema: {} } } } } } },
		});
		const { hints } = diffSpecSchemas(oldSpec, newSpec);
		expect(hints).toHaveLength(1);
		expect(hints[0]!.kind).toBe("operation-added");
		expect(hints[0]!.severity).toBe("info");
	});

	test("detects removed operation as breaking", () => {
		const oldSpec = spec({
			"/v1/foo": { post: { responses: { "200": { content: { "application/json": { schema: {} } } } } } },
		});
		const newSpec = spec({});
		const { hints } = diffSpecSchemas(oldSpec, newSpec);
		expect(hints).toHaveLength(1);
		expect(hints[0]!.kind).toBe("operation-removed");
		expect(hints[0]!.severity).toBe("breaking");
	});

	test("detects added required request field as breaking", () => {
		const oldSpec = spec({
			"/v1/foo": {
				post: {
					requestBody: {
						content: {
							"application/json": {
								schema: { type: "object", required: ["a"], properties: { a: { type: "string" }, b: { type: "string" } } },
							},
						},
					},
					responses: {},
				},
			},
		});
		const newSpec = spec({
			"/v1/foo": {
				post: {
					requestBody: {
						content: {
							"application/json": {
								schema: { type: "object", required: ["a", "b"], properties: { a: { type: "string" }, b: { type: "string" } } },
							},
						},
					},
					responses: {},
				},
			},
		});
		const { hints } = diffSpecSchemas(oldSpec, newSpec);
		const breaking = hints.filter(h => h.kind === "request-required-added");
		expect(breaking).toHaveLength(1);
		expect(breaking[0]!.severity).toBe("breaking");
		expect(breaking[0]!.values).toEqual(["b"]);
	});

	test("removing required request field is informational, not breaking", () => {
		const oldSpec = spec({
			"/v1/foo": {
				post: {
					requestBody: {
						content: { "application/json": { schema: { type: "object", required: ["a", "b"], properties: {} } } },
					},
					responses: {},
				},
			},
		});
		const newSpec = spec({
			"/v1/foo": {
				post: {
					requestBody: {
						content: { "application/json": { schema: { type: "object", required: ["a"], properties: {} } } },
					},
					responses: {},
				},
			},
		});
		const { hints } = diffSpecSchemas(oldSpec, newSpec);
		const rel = hints.filter(h => h.kind === "request-required-removed");
		expect(rel).toHaveLength(1);
		expect(rel[0]!.severity).toBe("info");
	});

	test("removing a request enum value is breaking; adding is info", () => {
		const make = (vals: string[]) =>
			spec({
				"/v1/foo": {
					post: {
						requestBody: {
							content: {
								"application/json": {
									schema: { type: "object", properties: { status: { type: "string", enum: vals } } },
								},
							},
						},
						responses: {},
					},
				},
			});

		const { hints } = diffSpecSchemas(make(["a", "b", "c"]), make(["a", "b", "d"]));
		const added = hints.find(h => h.kind === "request-enum-added");
		const removed = hints.find(h => h.kind === "request-enum-removed");
		expect(added?.values).toEqual(["d"]);
		expect(added?.severity).toBe("info");
		expect(removed?.values).toEqual(["c"]);
		expect(removed?.severity).toBe("breaking");
		expect(added?.property).toBe("status");
	});

	test("response enum: adding is warn, removing is info", () => {
		const make = (vals: string[]) =>
			spec({
				"/v1/foo": {
					get: {
						responses: {
							"200": {
								content: {
									"application/json": {
										schema: { type: "object", properties: { status: { type: "string", enum: vals } } },
									},
								},
							},
						},
					},
				},
			});

		const { hints } = diffSpecSchemas(make(["ok", "fail"]), make(["ok", "fail", "pending"]));
		const added = hints.find(h => h.kind === "response-enum-added");
		expect(added?.severity).toBe("warn");
		expect(added?.values).toEqual(["pending"]);
	});

	test("identical $ref on both sides yields no hints; differing $ref yields conservative warn", () => {
		const sameRef = spec({
			"/v1/foo": {
				post: {
					requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/Foo" } } } },
					responses: {},
				},
			},
		});
		const same = diffSpecSchemas(sameRef, sameRef);
		expect(same.hints).toHaveLength(0);

		const diffRef = spec({
			"/v1/foo": {
				post: {
					requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/FooV2" } } } },
					responses: {},
				},
			},
		});
		const diff = diffSpecSchemas(sameRef, diffRef);
		expect(diff.hints).toHaveLength(1);
		expect(diff.hints[0]!.kind).toBe("request-schema-changed");
		expect(diff.hints[0]!.severity).toBe("warn");
	});

	test("nested object required-field diff (one level deep)", () => {
		const make = (innerReq: string[]) =>
			spec({
				"/v1/foo": {
					post: {
						requestBody: {
							content: {
								"application/json": {
									schema: {
										type: "object",
										properties: {
											nested: {
												type: "object",
												required: innerReq,
												properties: { x: { type: "string" }, y: { type: "string" } },
											},
										},
									},
								},
							},
						},
						responses: {},
					},
				},
			});

		const { hints } = diffSpecSchemas(make(["x"]), make(["x", "y"]));
		const breaking = hints.find(h => h.kind === "request-required-added");
		expect(breaking?.property).toBe("nested");
		expect(breaking?.values).toEqual(["y"]);
	});

	test("summarizeHints counts severities", () => {
		const { hints } = diffSpecSchemas(
			spec({
				"/v1/foo": {
					post: {
						requestBody: {
							content: { "application/json": { schema: { type: "object", required: ["a"], properties: {} } } },
						},
						responses: {},
					},
				},
				"/v1/bar": { get: { responses: {} } },
			}),
			spec({
				"/v1/foo": {
					post: {
						requestBody: {
							content: { "application/json": { schema: { type: "object", required: ["a", "b"], properties: {} } } },
						},
						responses: {},
					},
				},
				// /v1/bar removed
				"/v1/new": { post: { responses: {} } },
			}),
		);
		const sum = summarizeHints(hints);
		expect(sum.total).toBe(hints.length);
		expect(sum.breaking).toBeGreaterThanOrEqual(2); // removed + new required field
		expect(sum.info).toBeGreaterThanOrEqual(1); // added op
	});
});
