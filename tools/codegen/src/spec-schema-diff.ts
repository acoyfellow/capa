/**
 * Minimal, conservative OpenAPI schema-diff helper.
 *
 * Goal: when capa's spec-watch detects that an upstream OpenAPI document
 * SHA-256 changed, we want a *small* layer of awareness on top of "the bytes
 * differ". This module classifies a handful of high-signal, low-noise hints:
 *
 *   - operations added / removed
 *   - request body: required fields added / removed
 *   - request body: enum values added / removed (per property)
 *   - response body: required fields added / removed
 *   - response body: enum values added / removed (per property)
 *   - a conservative "schema-changed" hint when a top-level body schema
 *     reference moved without our heuristics matching anything more specific
 *
 * Non-goals (deliberately out of scope for P2):
 *   - $ref resolution. We compare $ref strings directly; if both old and new
 *     point at the same $ref we treat the body as "unchanged at this layer".
 *   - oneOf/anyOf/allOf walking.
 *   - polymorphism / discriminator awareness.
 *   - status-code expansion beyond 200/2xx default.
 *
 * The function intentionally accepts *parsed* OpenAPI-ish JSON objects so the
 * caller (e.g. spec-watch.ts) can decide where the bytes come from (HTTP,
 * cached file, lock snapshot, ...). It never reads the filesystem itself.
 *
 * The output is plain JSON — easy to embed in the existing
 * `artifacts/spec-watch/report.json` payload under a `schemaHints` key, or to
 * render into the markdown report.
 */

export type SchemaChangeSeverity = "info" | "warn" | "breaking";

export interface SchemaChangeHint {
	/** Operation path template, e.g. "/v1/charges/{charge}" */
	path: string;
	/** HTTP method in lowercase, e.g. "post" */
	method: string;
	/** What kind of change this is */
	kind:
		| "operation-added"
		| "operation-removed"
		| "request-required-added"
		| "request-required-removed"
		| "request-enum-added"
		| "request-enum-removed"
		| "response-required-added"
		| "response-required-removed"
		| "response-enum-added"
		| "response-enum-removed"
		| "request-schema-changed"
		| "response-schema-changed";
	/** Property path inside the body schema, dot-separated. Omitted for op-level changes. */
	property?: string;
	/** The added/removed values (field names or enum literals). */
	values?: string[];
	/** Severity bucket — additive things are info, removals/required-adds are warn/breaking. */
	severity: SchemaChangeSeverity;
	/** Human-readable one-line message. */
	message: string;
}

export interface SchemaDiffResult {
	hints: SchemaChangeHint[];
	/** Number of operations seen in the new spec. */
	operationCount: number;
	/** Whether either side was missing/empty (in which case hints will be empty). */
	skipped: boolean;
	skippedReason?: string;
}

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;

type OpenApiLike = {
	paths?: Record<string, Record<string, any> | undefined>;
};

/**
 * Compare two parsed OpenAPI-like documents and return minimal schema-change hints.
 *
 * Safe to call with `undefined`/`null` on either side — returns `skipped: true`.
 */
export function diffSpecSchemas(
	oldSpec: OpenApiLike | null | undefined,
	newSpec: OpenApiLike | null | undefined,
): SchemaDiffResult {
	if (!oldSpec || !newSpec) {
		return {
			hints: [],
			operationCount: countOperations(newSpec),
			skipped: true,
			skippedReason: !oldSpec && !newSpec ? "both specs missing" : !oldSpec ? "no previous spec" : "no current spec",
		};
	}

	const hints: SchemaChangeHint[] = [];

	const oldPaths = oldSpec.paths || {};
	const newPaths = newSpec.paths || {};

	const allPaths = new Set<string>([...Object.keys(oldPaths), ...Object.keys(newPaths)]);

	for (const path of allPaths) {
		const oldPathItem = oldPaths[path] || {};
		const newPathItem = newPaths[path] || {};

		for (const method of HTTP_METHODS) {
			const oldOp = oldPathItem[method];
			const newOp = newPathItem[method];

			if (!oldOp && !newOp) continue;

			if (!oldOp && newOp) {
				hints.push({
					path,
					method,
					kind: "operation-added",
					severity: "info",
					message: `${method.toUpperCase()} ${path}: new operation added`,
				});
				continue;
			}
			if (oldOp && !newOp) {
				hints.push({
					path,
					method,
					kind: "operation-removed",
					severity: "breaking",
					message: `${method.toUpperCase()} ${path}: operation removed`,
				});
				continue;
			}

			// Both sides exist — diff request body
			diffRequestBody(path, method, oldOp, newOp, hints);
			// Diff response body (200 / first 2xx)
			diffResponseBody(path, method, oldOp, newOp, hints);
		}
	}

	return {
		hints,
		operationCount: countOperations(newSpec),
		skipped: false,
	};
}

function countOperations(spec: OpenApiLike | null | undefined): number {
	if (!spec?.paths) return 0;
	let count = 0;
	for (const pathItem of Object.values(spec.paths)) {
		if (!pathItem) continue;
		for (const method of HTTP_METHODS) {
			if (pathItem[method]) count++;
		}
	}
	return count;
}

function diffRequestBody(
	path: string,
	method: string,
	oldOp: any,
	newOp: any,
	hints: SchemaChangeHint[],
): void {
	const oldSchema = pickRequestSchema(oldOp);
	const newSchema = pickRequestSchema(newOp);

	if (!oldSchema && !newSchema) return;
	if (!oldSchema || !newSchema) {
		hints.push({
			path,
			method,
			kind: "request-schema-changed",
			severity: "warn",
			message: `${method.toUpperCase()} ${path}: request body presence changed (${oldSchema ? "removed" : "added"})`,
		});
		return;
	}

	diffSchema({
		path,
		method,
		kind: "request",
		oldSchema,
		newSchema,
		hints,
	});
}

function diffResponseBody(
	path: string,
	method: string,
	oldOp: any,
	newOp: any,
	hints: SchemaChangeHint[],
): void {
	const oldSchema = pickResponseSchema(oldOp);
	const newSchema = pickResponseSchema(newOp);

	if (!oldSchema && !newSchema) return;
	if (!oldSchema || !newSchema) {
		hints.push({
			path,
			method,
			kind: "response-schema-changed",
			severity: "warn",
			message: `${method.toUpperCase()} ${path}: response body presence changed (${oldSchema ? "removed" : "added"})`,
		});
		return;
	}

	diffSchema({
		path,
		method,
		kind: "response",
		oldSchema,
		newSchema,
		hints,
	});
}

function pickRequestSchema(op: any): any | null {
	const content = op?.requestBody?.content;
	if (!content) return null;
	return (
		content["application/json"]?.schema ||
		content["application/x-www-form-urlencoded"]?.schema ||
		null
	);
}

function pickResponseSchema(op: any): any | null {
	const responses = op?.responses;
	if (!responses) return null;
	// Prefer 200, then any 2xx, then default.
	const candidates = ["200", "201", "202", "204", "default"];
	for (const code of candidates) {
		const content = responses[code]?.content;
		if (content?.["application/json"]?.schema) return content["application/json"].schema;
	}
	for (const [code, resp] of Object.entries<any>(responses)) {
		if (!code.startsWith("2")) continue;
		const schema = resp?.content?.["application/json"]?.schema;
		if (schema) return schema;
	}
	return null;
}

function diffSchema(args: {
	path: string;
	method: string;
	kind: "request" | "response";
	oldSchema: any;
	newSchema: any;
	hints: SchemaChangeHint[];
}): void {
	const { path, method, kind, oldSchema, newSchema, hints } = args;

	// Top-level $ref shortcut: if both sides reference the *same* schema component,
	// we declare them equal at this layer (we don't resolve refs in P2). If they
	// differ, that's a conservative "schema-changed" hint.
	if (oldSchema?.$ref || newSchema?.$ref) {
		if (oldSchema?.$ref === newSchema?.$ref) return;
		hints.push({
			path,
			method,
			kind: kind === "request" ? "request-schema-changed" : "response-schema-changed",
			severity: "warn",
			message: `${method.toUpperCase()} ${path}: ${kind} body $ref changed (${oldSchema?.$ref || "inline"} → ${newSchema?.$ref || "inline"})`,
		});
		return;
	}

	walkObjectSchema({
		path,
		method,
		kind,
		propertyPath: "",
		oldSchema,
		newSchema,
		hints,
		depth: 0,
	});
}

const MAX_WALK_DEPTH = 4;

function walkObjectSchema(args: {
	path: string;
	method: string;
	kind: "request" | "response";
	propertyPath: string;
	oldSchema: any;
	newSchema: any;
	hints: SchemaChangeHint[];
	depth: number;
}): void {
	const { path, method, kind, propertyPath, oldSchema, newSchema, hints, depth } = args;
	if (depth > MAX_WALK_DEPTH) return;
	if (!oldSchema || !newSchema) return;

	// Required-field diff at this level.
	const oldRequired: string[] = Array.isArray(oldSchema.required) ? oldSchema.required : [];
	const newRequired: string[] = Array.isArray(newSchema.required) ? newSchema.required : [];

	const addedRequired = newRequired.filter(r => !oldRequired.includes(r));
	const removedRequired = oldRequired.filter(r => !newRequired.includes(r));

	if (addedRequired.length > 0) {
		hints.push({
			path,
			method,
			kind: kind === "request" ? "request-required-added" : "response-required-added",
			property: propertyPath || undefined,
			values: addedRequired,
			// Adding a required REQUEST field is breaking for callers.
			// Adding a required RESPONSE field is additive info for callers.
			severity: kind === "request" ? "breaking" : "info",
			message:
				kind === "request"
					? `${method.toUpperCase()} ${path}: request now requires ${formatList(addedRequired)}${propertyPath ? ` at \`${propertyPath}\`` : ""}`
					: `${method.toUpperCase()} ${path}: response now always includes ${formatList(addedRequired)}${propertyPath ? ` at \`${propertyPath}\`` : ""}`,
		});
	}
	if (removedRequired.length > 0) {
		hints.push({
			path,
			method,
			kind: kind === "request" ? "request-required-removed" : "response-required-removed",
			property: propertyPath || undefined,
			values: removedRequired,
			// Removing a required REQUEST field relaxes callers — info.
			// Removing a required RESPONSE field breaks callers that relied on it.
			severity: kind === "request" ? "info" : "breaking",
			message:
				kind === "request"
					? `${method.toUpperCase()} ${path}: request no longer requires ${formatList(removedRequired)}${propertyPath ? ` at \`${propertyPath}\`` : ""}`
					: `${method.toUpperCase()} ${path}: response no longer guarantees ${formatList(removedRequired)}${propertyPath ? ` at \`${propertyPath}\`` : ""}`,
		});
	}

	// Property-by-property walk (only object-shaped).
	const oldProps = (oldSchema.properties || {}) as Record<string, any>;
	const newProps = (newSchema.properties || {}) as Record<string, any>;
	const allProps = new Set<string>([...Object.keys(oldProps), ...Object.keys(newProps)]);

	for (const prop of allProps) {
		const oldProp = oldProps[prop];
		const newProp = newProps[prop];
		if (!oldProp || !newProp) continue; // covered by required-diff if it was required

		const subPath = propertyPath ? `${propertyPath}.${prop}` : prop;

		// Enum diff
		const oldEnum: unknown[] = Array.isArray(oldProp.enum) ? oldProp.enum : [];
		const newEnum: unknown[] = Array.isArray(newProp.enum) ? newProp.enum : [];

		if (oldEnum.length > 0 || newEnum.length > 0) {
			const addedEnum = newEnum.filter(v => !oldEnum.includes(v));
			const removedEnum = oldEnum.filter(v => !newEnum.includes(v));

			if (addedEnum.length > 0) {
				hints.push({
					path,
					method,
					kind: kind === "request" ? "request-enum-added" : "response-enum-added",
					property: subPath,
					values: addedEnum.map(String),
					// Added enum value on REQUEST = new accepted input → info.
					// Added enum value on RESPONSE = new value callers must handle → warn.
					severity: kind === "request" ? "info" : "warn",
					message:
						kind === "request"
							? `${method.toUpperCase()} ${path}: request \`${subPath}\` accepts new value(s) ${formatList(addedEnum.map(String))}`
							: `${method.toUpperCase()} ${path}: response \`${subPath}\` may now return new value(s) ${formatList(addedEnum.map(String))}`,
				});
			}
			if (removedEnum.length > 0) {
				hints.push({
					path,
					method,
					kind: kind === "request" ? "request-enum-removed" : "response-enum-removed",
					property: subPath,
					values: removedEnum.map(String),
					// Removed enum value on REQUEST = previously-valid input is now rejected → breaking.
					// Removed enum value on RESPONSE = value no longer returned → info.
					severity: kind === "request" ? "breaking" : "info",
					message:
						kind === "request"
							? `${method.toUpperCase()} ${path}: request \`${subPath}\` no longer accepts ${formatList(removedEnum.map(String))}`
							: `${method.toUpperCase()} ${path}: response \`${subPath}\` no longer returns ${formatList(removedEnum.map(String))}`,
				});
			}
		}

		// Recurse one level into nested objects, but only if both sides look object-shaped
		// and neither side is a $ref (we don't resolve refs).
		if (
			!oldProp.$ref &&
			!newProp.$ref &&
			(oldProp.type === "object" || newProp.type === "object" || oldProp.properties || newProp.properties)
		) {
			walkObjectSchema({
				path,
				method,
				kind,
				propertyPath: subPath,
				oldSchema: oldProp,
				newSchema: newProp,
				hints,
				depth: depth + 1,
			});
		}
	}
}

function formatList(values: string[]): string {
	if (values.length <= 3) return values.map(v => `\`${v}\``).join(", ");
	const head = values.slice(0, 3).map(v => `\`${v}\``).join(", ");
	return `${head} (+${values.length - 3} more)`;
}

/**
 * Roll up hints into a count-by-severity summary, useful for CI exit-code logic
 * or markdown header generation.
 */
export function summarizeHints(hints: readonly SchemaChangeHint[]): {
	total: number;
	info: number;
	warn: number;
	breaking: number;
} {
	let info = 0;
	let warn = 0;
	let breaking = 0;
	for (const h of hints) {
		if (h.severity === "info") info++;
		else if (h.severity === "warn") warn++;
		else if (h.severity === "breaking") breaking++;
	}
	return { total: hints.length, info, warn, breaking };
}
