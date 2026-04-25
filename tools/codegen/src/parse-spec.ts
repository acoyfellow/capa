import type { CodegenResult, HttpMethod, Operation } from "./types.ts";

/**
 * Parse an OpenAPI 3.x spec into capa's internal Operation list.
 *
 * Heuristics:
 *  - Namespace = first segment after the API prefix (e.g. /v1/charges/{id} → "charges").
 *  - Method = derived from HTTP verb + path shape:
 *      POST /v1/charges            → create
 *      GET  /v1/charges            → list
 *      GET  /v1/charges/{id}       → retrieve
 *      POST /v1/charges/{id}       → update
 *      DELETE /v1/charges/{id}     → del   (matches stripe SDK convention)
 *      POST /v1/charges/{id}/foo   → foo   (sub-action)
 *  - Risk = heuristic on namespace + method (charges.create → high, *.list → low).
 */

const HTTP_METHODS: HttpMethod[] = ["get", "post", "put", "patch", "delete"];

const HIGH_RISK_NAMESPACES = new Set([
	"charges", "refunds", "payment_intents", "payouts", "transfers",
	"subscriptions", "invoices", "credit_notes", "disputes",
	"setup_intents", "tokens", "sources", "checkout", "billing_portal",
]);

const LOW_RISK_METHODS = new Set(["list", "retrieve", "search"]);

function deriveNamespace(path: string, apiPrefix: string): string | null {
	if (!path.startsWith(apiPrefix)) return null;
	const trimmed = path.slice(apiPrefix.length);
	const first = trimmed.split("/").filter(Boolean)[0];
	if (!first || first.startsWith("{")) return null;
	return first;
}

function deriveMethod(http: HttpMethod, path: string, apiPrefix: string): string {
	// Strip prefix + leading namespace
	const trimmed = path.slice(apiPrefix.length).split("/").filter(Boolean);
	// trimmed = ["charges"] or ["charges", "{id}"] or ["charges", "{id}", "capture"]
	const segments = trimmed.slice(1); // drop namespace

	// Walk segments. A segment that is NOT a param is a "name segment".
	// Stripe paths have these shapes:
	//   []                                   → bare collection
	//   [{id}]                               → bare item
	//   [name]                               → sub-collection
	//   [name, {id}]                         → sub-item
	//   [{id}, name]                         → action on item (e.g. /charges/{id}/capture)
	//   [name, action]                       → action on sub-collection (e.g. /apps/secrets/delete)
	//   [name, {id}, action]                 → action on sub-item
	//   [name, {id}, name2]                  → nested sub-collection
	//   [name, {id}, name2, {id2}]           → nested sub-item

	const nameSegments = segments.filter(s => !s.startsWith("{"));
	const lastSegment = segments[segments.length - 1] || "";
	const lastIsId = lastSegment.startsWith("{");

	if (segments.length === 0) {
		// /v1/{namespace}
		if (http === "post") return "create";
		if (http === "get") return "list";
		return http;
	}

	if (segments.length === 1 && lastIsId) {
		// /v1/{namespace}/{id}
		if (http === "get") return "retrieve";
		if (http === "post") return "update";
		if (http === "delete") return "del";
		return http;
	}

	// 2+ segments. The "primary" sub-resource is the FIRST name segment.
	// Any additional name segment after that is treated as either:
	//   - a deeper sub-resource (nested), or
	//   - an action verb (terminal non-param segment with no further segments)
	const primary = nameSegments[0]!;
	const isDeeperResource = nameSegments.length > 1;

	if (isDeeperResource) {
		// /v1/{ns}/{id}/<primary>/<secondary>[/{id}] etc. → flatten as <verb><Secondary>
		// Pattern: take the LAST name segment as the action/resource and verb the HTTP off it.
		const action = nameSegments[nameSegments.length - 1]!;
		const actionPlural = toCamelCase(action);
		const actionSingular = singularize(actionPlural);

		// If the last segment is an action that's not pluralizable (`delete`, `find`, `verify`, `capture`)
		// just use it verbatim as the method name combined with the verb to keep distinct.
		if (lastSegment === action && !lastIsId) {
			// path ends in a non-param non-id action verb
			return toCamelCase(action);
		}

		if (http === "get" && !lastIsId) return `list${capitalize(actionPlural)}`;
		if (http === "get" && lastIsId) return `retrieve${capitalize(actionSingular)}`;
		if (http === "post" && !lastIsId) return `create${capitalize(actionSingular)}`;
		if (http === "post" && lastIsId) return `update${capitalize(actionSingular)}`;
		if (http === "delete" && lastIsId) return `delete${capitalize(actionSingular)}`;
		return toCamelCase(action);
	}

	// segments.length >= 2 with one name segment
	// Cases:
	//   [{id}, name]                → /v1/accounts/{a}/persons (collection of sub-resource)
	//   [{id}, action]              → /v1/charges/{id}/capture (action verb on item)
	//   [name, {id}]                → /v1/accounts/{a}/capabilities/{c} (specific sub-resource)
	//   [name]                      → /v1/accounts/{a}/capabilities (sub-collection)
	const KNOWN_ACTIONS = new Set([
		"capture", "release", "approve", "decline", "cancel", "verify",
		"confirm", "reject", "expire", "refund", "void", "close", "open",
		"finalize", "pay", "send", "mark_uncollectible", "mark_void",
		"submit", "list_line_items", "list_owners", "list_payment_methods",
		"increment_authorization", "search", "expire", "deauthorize",
	]);

	const tailName = nameSegments[nameSegments.length - 1]!;
	const tailPlural = toCamelCase(tailName);
	const tailSingular = singularize(tailPlural);

	// Action verb shape: [{id}, action] where action is a known action word
	if (segments[0]!.startsWith("{") && segments.length === 2 && KNOWN_ACTIONS.has(tailName)) {
		return toCamelCase(tailName);
	}

	// Otherwise: treat tail as a sub-resource and verb the HTTP off it
	if (http === "get" && !lastIsId) return `list${capitalize(tailPlural)}`;
	if (http === "get" && lastIsId) return `retrieve${capitalize(tailSingular)}`;
	if (http === "post" && !lastIsId) return `create${capitalize(tailSingular)}`;
	if (http === "post" && lastIsId) return `update${capitalize(tailSingular)}`;
	if (http === "delete" && lastIsId) return `delete${capitalize(tailSingular)}`;

	return toCamelCase(tailName);
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

function singularize(s: string): string {
	// Naive but works for the common Stripe shapes.
	if (s.endsWith("ies")) return s.slice(0, -3) + "y";
	if (s.endsWith("ses")) return s.slice(0, -2);
	if (s.endsWith("s") && !s.endsWith("ss")) return s.slice(0, -1);
	return s;
}

function toCamelCase(s: string): string {
	return s
		.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
		.replace(/^[^a-zA-Z0-9]+/, "")
		.replace(/[^a-zA-Z0-9]+/g, "");
}

function extractPathParams(path: string): string[] {
	return Array.from(path.matchAll(/\{([^}]+)\}/g)).map(m => m[1]!);
}

function classifyRisk(namespace: string, method: string): Operation["risk"] {
	if (LOW_RISK_METHODS.has(method)) return "low";
	if (HIGH_RISK_NAMESPACES.has(namespace)) return "high";
	if (method === "del") return "medium";
	return "medium";
}

export function parseSpec(spec: any, apiPrefix = "/v1"): CodegenResult {
	const namespaces: Record<string, Operation[]> = {};
	let count = 0;

	const baseUrl =
		spec.servers?.[0]?.url ||
		`https://${spec.host || "api.stripe.com"}${spec.basePath || ""}`;

	for (const [path, pathItem] of Object.entries<any>(spec.paths || {})) {
		// Skip Rails-style splat/wildcard paths — openapi-typescript can't type them
		if (path.includes("*")) continue;

		const namespace = deriveNamespace(path, apiPrefix);
		if (!namespace) continue;

		for (const http of HTTP_METHODS) {
			const op = pathItem[http];
			if (!op) continue;

			const method = deriveMethod(http, path, apiPrefix);
			const operationId: string = op.operationId || `${http}_${path}`;
			const description: string | undefined = op.description || op.summary;
			const pathParams = extractPathParams(path);

			const requestBody = op.requestBody;
			const hasBody = Boolean(
				requestBody?.content?.["application/x-www-form-urlencoded"] ||
				requestBody?.content?.["application/json"],
			);

			const operation: Operation = {
				operationId,
				namespace,
				method,
				http,
				path,
				pathParams,
				hasBody,
				bodyTypeRef: hasBody
					? `paths["${path}"]["${http}"]["requestBody"]["content"]["application/x-www-form-urlencoded"]["schema"]`
					: undefined,
				responseTypeRef: `paths["${path}"]["${http}"]["responses"]["200"]["content"]["application/json"]["schema"]`,
				description,
				risk: classifyRisk(namespace, method),
			};

			(namespaces[namespace] ||= []).push(operation);
			count++;
		}
	}

	// Disambiguate any methods that collide within a namespace by appending
	// a discriminator from the path. This is rare (~15 cases in Stripe) and
	// happens when the same verb+sub-resource appears under different parents
	// inside one top-level namespace (e.g. /billing/alerts/{id}/deactivate
	// and /billing/meters/{id}/deactivate both → "deactivate" in "billing").
	for (const ops of Object.values(namespaces)) {
		const seen = new Map<string, Operation[]>();
		for (const op of ops) {
			(seen.get(op.method) || seen.set(op.method, []).get(op.method)!).push(op);
		}
		for (const [method, group] of seen) {
			if (group.length === 1) continue;
			// Disambiguate: for each op, build the unique tail of path name segments
			// (everything after the shared prefix, minus params and the original method).
			// Then prefix the method with that tail in camelCase.
			const allSegs = group.map(op =>
				op.path
					.slice(apiPrefix.length)
					.split("/")
					.filter(Boolean)
					.filter(s => !s.startsWith("{"))
					.filter(s => toCamelCase(s) !== method)
					.slice(1) // drop the namespace
			);

			// Find longest common prefix of all paths (segments that match across all)
			let commonLen = 0;
			outer: for (let i = 0; i < Math.min(...allSegs.map(s => s.length)); i++) {
				const v = allSegs[0]![i];
				for (const segs of allSegs) {
					if (segs[i] !== v) break outer;
				}
				commonLen = i + 1;
			}

			for (let i = 0; i < group.length; i++) {
				const op = group[i]!;
				const segs = allSegs[i]!;
				const tail = segs.slice(commonLen);
				if (tail.length > 0) {
					const camelMethod = method.charAt(0).toUpperCase() + method.slice(1);
					const prefix = tail.map(toCamelCase).join("");
					// e.g. inboundTransfers + Fail
					op.method = prefix.charAt(0).toLowerCase() + prefix.slice(1) + camelMethod;
				} else {
					op.method = `${method}_${i}`;
				}
			}
		}
	}

	// Second pass: any remaining collisions (same path different verb, or collection+item)
	// get suffixed with HTTP verb; if still colliding, append an index.
	for (const ops of Object.values(namespaces)) {
		const finalSeen = new Map<string, Operation[]>();
		for (const op of ops) {
			(finalSeen.get(op.method) || finalSeen.set(op.method, []).get(op.method)!).push(op);
		}
		for (const [method, group] of finalSeen) {
			if (group.length === 1) continue;
			for (const op of group) {
				const base = `${op.http}${capitalize(method)}`;
				let candidate = base;
				let suffix = 0;
				while (ops.some(o => o !== op && o.method === candidate)) {
					candidate = `${base}_${suffix}`;
					suffix++;
				}
				op.method = candidate;
			}
		}
	}

	return {
		specVersion: spec.info?.version || "unknown",
		specTitle: spec.info?.title || "Unknown API",
		baseUrl,
		namespaces,
		operationCount: count,
	};
}
