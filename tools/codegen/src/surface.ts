/**
 * Minimal binding-surface model used by spec-watch.
 *
 * A "surface entry" is the small bag of facts the generated capability exposes
 * per operation: namespace.method, http verb, path template, risk class.
 * That is the contract callers depend on. Everything else (descriptions,
 * type refs) is incidental and intentionally excluded so the diff stays
 * about real binding drift, not doc churn.
 *
 * Two sources of surface data:
 *   - the committed `capabilities/<name>/src/generated/manifest.gen.ts`
 *     (cheap, no fetch, no parse — read the file and pluck the JSON-ish
 *      "operationId": {...} lines)
 *   - a freshly-parsed OpenAPI spec via `parseSpec` (slow path; only used
 *     when the spec body hash has actually drifted)
 */

import { existsSync, readFileSync } from "node:fs";
import swagger2openapi from "swagger2openapi";
import yaml from "js-yaml";
import { parseSpec } from "./parse-spec.ts";
import type { CodegenResult } from "./types.ts";

export interface SurfaceEntry {
	operationId: string;
	namespace: string;
	method: string;
	http: string;
	path: string;
	risk: string;
}

export type Surface = Map<string, SurfaceEntry>;

export interface SurfaceDiff {
	added: SurfaceEntry[];
	removed: SurfaceEntry[];
	changed: Array<{ operationId: string; before: SurfaceEntry; after: SurfaceEntry; fields: string[] }>;
	totals: { before: number; after: number; added: number; removed: number; changed: number };
}

/**
 * Parse the committed `manifest.gen.ts` into a Surface map.
 *
 * The generator emits exactly one operation per line in the form:
 *   \t"OperationId": {"namespace":"…","method":"…","http":"…","path":"…","risk":"…"},
 * We anchor on that shape; anything else (header, `export const`, trailing
 * `} as const;`) is ignored. If the file is missing or unreadable, returns
 * an empty surface — callers treat that as "everything is new".
 */
export function loadCommittedSurface(manifestPath: string): Surface {
	const out: Surface = new Map();
	if (!existsSync(manifestPath)) return out;

	const text = readFileSync(manifestPath, "utf8");
	// The emitter writes exactly one operation per line:
	//   \t"OperationId": {"namespace":"…","method":"…","http":"…","path":"…","risk":"…"},
	// Path values frequently contain `{…}` (e.g. /v1/charges/{charge}/refunds),
	// so we can't use a `[^}]*` body match. We anchor on the `"Id":\s*{` head
	// and then JSON-parse the brace-balanced tail of the line.
	const headRe = /^\s*"([^"]+)":\s*(\{)/;
	for (const line of text.split("\n")) {
		const m = headRe.exec(line);
		if (!m) continue;
		const start = line.indexOf("{", m[0].length - 1);
		if (start < 0) continue;
		let depth = 0;
		let end = -1;
		for (let i = start; i < line.length; i++) {
			const ch = line[i];
			if (ch === "{") depth++;
			else if (ch === "}") {
				depth--;
				if (depth === 0) { end = i; break; }
			}
		}
		if (end < 0) continue;
		const jsonText = line.slice(start, end + 1);
		let json: any;
		try {
			json = JSON.parse(jsonText);
		} catch {
			continue;
		}
		if (!json || typeof json !== "object") continue;
		if (typeof json.namespace !== "string" || typeof json.method !== "string") continue;
		out.set(m[1]!, {
			operationId: m[1]!,
			namespace: String(json.namespace),
			method: String(json.method),
			http: String(json.http ?? ""),
			path: String(json.path ?? ""),
			risk: String(json.risk ?? ""),
		});
	}
	return out;
}

/**
 * Flatten a `parseSpec` result into a Surface map keyed by operationId.
 */
export function surfaceFromCodegen(codegen: CodegenResult): Surface {
	const out: Surface = new Map();
	for (const ops of Object.values(codegen.namespaces)) {
		for (const op of ops) {
			out.set(op.operationId, {
				operationId: op.operationId,
				namespace: op.namespace,
				method: op.method,
				http: op.http,
				path: op.path,
				risk: op.risk,
			});
		}
	}
	return out;
}

/**
 * Parse a raw spec body (JSON or YAML) and normalize Swagger 2.0 → OpenAPI 3.0,
 * matching what `tools/codegen/src/cli.ts` does. Kept private to spec-watch's
 * "what does this changed spec look like as a surface?" path so we don't have
 * to invoke the full CLI binary for every changed capability.
 */
export async function normalizeSpec(rawBody: string): Promise<any> {
	let parsed: any;
	try {
		parsed = JSON.parse(rawBody);
	} catch {
		parsed = yaml.load(rawBody);
	}
	if (parsed?.openapi?.startsWith?.("3.")) return parsed;
	if (parsed?.swagger === "2.0") {
		const result = await swagger2openapi.convertObj(parsed, { patch: true, warnOnly: true });
		return result.openapi;
	}
	return parsed;
}

/**
 * Convenience: fetched-spec-body → Surface, via `normalizeSpec` + `parseSpec`.
 * Throws if the spec is unparseable; caller should record that as a soft
 * failure rather than aborting the whole watch.
 */
export async function surfaceFromSpecBody(rawBody: string, prefix: string): Promise<Surface> {
	const spec = await normalizeSpec(rawBody);
	const codegen = parseSpec(spec, prefix);
	return surfaceFromCodegen(codegen);
}

const COMPARED_FIELDS: Array<keyof SurfaceEntry> = ["namespace", "method", "http", "path", "risk"];

export function diffSurfaces(before: Surface, after: Surface): SurfaceDiff {
	const added: SurfaceEntry[] = [];
	const removed: SurfaceEntry[] = [];
	const changed: SurfaceDiff["changed"] = [];

	for (const [id, a] of after) {
		const b = before.get(id);
		if (!b) {
			added.push(a);
			continue;
		}
		const fields = COMPARED_FIELDS.filter(f => a[f] !== b[f]);
		if (fields.length > 0) changed.push({ operationId: id, before: b, after: a, fields });
	}
	for (const [id, b] of before) {
		if (!after.has(id)) removed.push(b);
	}

	// Deterministic ordering for stable reports.
	added.sort((x, y) => x.operationId.localeCompare(y.operationId));
	removed.sort((x, y) => x.operationId.localeCompare(y.operationId));
	changed.sort((x, y) => x.operationId.localeCompare(y.operationId));

	return {
		added,
		removed,
		changed,
		totals: {
			before: before.size,
			after: after.size,
			added: added.length,
			removed: removed.length,
			changed: changed.length,
		},
	};
}
