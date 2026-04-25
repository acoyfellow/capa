// AUTO-GENERATED runtime helpers for capa-* capabilities.
// This file is copied into each capability by @capa/codegen.
// Edit the template at tools/codegen/src/runtime.template.ts and regenerate.

export type Verdict = "pass" | "fail";

export interface AssertResult {
	kind: string;
	expected: unknown;
	actual: unknown;
	passed: boolean;
}

export interface EvidenceBundle {
	capability: string;
	operationId: string;
	namespace: string;
	method: string;
	http: string;
	path: string;
	risk: "low" | "medium" | "high";
	startedAt: string;
	durationMs: number;
	act: { request: { method: string; url: string }; status: number };
	assert: AssertResult[];
	verdict: Verdict;
}

export interface ProofResult<T = unknown> {
	result: T | null;
	evidence: EvidenceBundle;
}

export interface MethodOverride {
	/** Extra assertions to run beyond generic HTTP-level ones. */
	asserts?: Array<(body: unknown) => AssertResult>;
}

export interface FetchProofArgs {
	operationId: string;
	namespace: string;
	method: string;
	http: string;
	path: string;
	risk: "low" | "medium" | "high";
	body?: unknown;
	overrides?: MethodOverride;
}

const BASE_URL = "https://api.stripe.com"; // overridden per capability via env if needed

function form(body: Record<string, unknown>, prefix = ""): string {
	const params = new URLSearchParams();
	const walk = (obj: Record<string, unknown>, p: string) => {
		for (const [k, v] of Object.entries(obj)) {
			if (v === undefined || v === null) continue;
			const key = p ? `${p}[${k}]` : k;
			if (typeof v === "object" && !Array.isArray(v)) {
				walk(v as Record<string, unknown>, key);
			} else if (Array.isArray(v)) {
				v.forEach((item, i) => {
					if (typeof item === "object" && item !== null) {
						walk(item as Record<string, unknown>, `${key}[${i}]`);
					} else {
						params.append(`${key}[${i}]`, String(item));
					}
				});
			} else {
				params.append(key, String(v));
			}
		}
	};
	walk(body, prefix);
	return params.toString();
}

export async function fetchProof(
	apiKey: string,
	args: FetchProofArgs,
): Promise<ProofResult<unknown>> {
	const startedAt = new Date().toISOString();
	const t0 = Date.now();
	const url = `${BASE_URL}${args.path}`;
	const assertions: AssertResult[] = [];

	const init: RequestInit = {
		method: args.http.toUpperCase(),
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
	};
	if (args.body !== undefined && args.http !== "get") {
		init.body = form(args.body as Record<string, unknown>);
	}

	const res = await fetch(url, init);
	const text = await res.text();
	let body: unknown = text;
	try {
		body = JSON.parse(text);
	} catch {
		// not JSON, leave as text
	}

	// Generic HTTP-level assertion
	assertions.push({
		kind: "httpStatus",
		expected: "2xx",
		actual: res.status,
		passed: res.status >= 200 && res.status < 300,
	});

	// Apply overrides if provided
	if (args.overrides?.asserts) {
		for (const fn of args.overrides.asserts) {
			try {
				assertions.push(fn(body));
			} catch (e) {
				assertions.push({
					kind: "override:throw",
					expected: "no-throw",
					actual: String(e),
					passed: false,
				});
			}
		}
	}

	const verdict: Verdict = assertions.every(a => a.passed) ? "pass" : "fail";

	return {
		result: verdict === "pass" ? body : null,
		evidence: {
			capability: args.namespace, // overridden by capability wrapper if needed
			operationId: args.operationId,
			namespace: args.namespace,
			method: args.method,
			http: args.http,
			path: args.path,
			risk: args.risk,
			startedAt,
			durationMs: Date.now() - t0,
			act: { request: { method: args.http.toUpperCase(), url }, status: res.status },
			assert: assertions,
			verdict,
		},
	};
}

export const Evidence = { fetchProof };
