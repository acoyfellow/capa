// AUTO-GENERATED runtime helpers for capa-* capabilities.
// This file is rendered into each capability by @capa/codegen.
// Edit the template at tools/codegen/src/runtime.template.ts and regenerate.

export type Verdict = "pass" | "fail";
export type AuthShape = "bearer" | "private-token" | "basic";
export type ContentType = "form" | "json";

// ─── codegen replaces these five constants per-capability ────────
const CAPABILITY_NAME = "slack";
const BASE_URL = "https://slack.com";
const PREFIX = "/";
const AUTH_SHAPE: AuthShape = "bearer";
const CONTENT_TYPE: ContentType = "form";
// ─────────────────────────────────────────────────────────────────

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

export interface RuntimeConfig {
	/** Override the upstream base URL (e.g. self-managed GitLab). */
	baseUrl?: string;
	/** Extra headers sent on every request (e.g. Cloudflare Access tokens). */
	extraHeaders?: Record<string, string>;
	/** Replace the API prefix in paths (e.g. /rest/api/3 → /rest/api/2). */
	prefixOverride?: string;
}

/** Optional credential override for one generated RPC call. */
export interface CallOptions {
	auth?: {
		apiKey?: string;
		headers?: Record<string, string>;
	};
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
	/** Optional override for the BASE_URL (e.g. self-hosted GitLab). */
	baseUrl?: string;
	/** Optional extra request headers (e.g. CF-Access-Jwt-Assertion for cfdata). */
	extraHeaders?: Record<string, string>;
	/** Optional prefix replacement (e.g. /rest/api/3 → /rest/api/2). */
	prefixOverride?: string;
	/** Optional per-call provider auth override for multi-tenant callers. */
	options?: CallOptions;
}

function formEncode(body: Record<string, unknown>): string {
	const params = new URLSearchParams();
	const walk = (obj: Record<string, unknown>, prefix: string) => {
		for (const [k, v] of Object.entries(obj)) {
			if (v === undefined || v === null) continue;
			const key = prefix ? `${prefix}[${k}]` : k;
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
	walk(body, "");
	return params.toString();
}

function authHeader(secret: string): { name: string; value: string } {
	switch (AUTH_SHAPE) {
		case "bearer":
			return { name: "Authorization", value: `Bearer ${secret}` };
		case "private-token":
			return { name: "PRIVATE-TOKEN", value: secret };
		case "basic":
			return { name: "Authorization", value: `Basic ${btoa(secret)}` };
	}
}

export interface DistilledProofArgs<Input, Output> extends FetchProofArgs {
	input: Input;
	operation: (input: Input) => Promise<Output>;
}

export async function distilledProof<Input, Output>(args: DistilledProofArgs<Input, Output>): Promise<ProofResult<Output>> {
	const startedAt = new Date().toISOString();
	const t0 = Date.now();
	const baseUrl = args.baseUrl || BASE_URL;
	let path = args.path;
	if (args.prefixOverride && PREFIX) path = path.replace(PREFIX, args.prefixOverride);
	const url = `${baseUrl}${path}`;
	const assertions: AssertResult[] = [];
	try {
		const body = await args.operation(args.input);
		assertions.push({ kind: "distilled", expected: "success", actual: "success", passed: true });
		if (args.overrides?.asserts) {
			for (const fn of args.overrides.asserts) {
				try {
					assertions.push(fn(body));
				} catch (error) {
					assertions.push({ kind: "override:throw", expected: "no-throw", actual: String(error), passed: false });
				}
			}
		}
		const verdict: Verdict = assertions.every(assertion => assertion.passed) ? "pass" : "fail";
		return { result: verdict === "pass" ? body : null, evidence: proofEvidence(args, path, url, startedAt, Date.now() - t0, assertions, 200, verdict) };
	} catch (error) {
		assertions.push({ kind: "providerError", expected: "none", actual: providerErrorActual(error), passed: false });
		return { result: null, evidence: proofEvidence(args, path, url, startedAt, Date.now() - t0, assertions, 0, "fail") };
	}
}

function providerErrorActual(error: unknown): Record<string, unknown> {
	const value = error && typeof error === "object" ? error as Record<string, unknown> : undefined;
	return {
		tag: value?._tag ?? (error instanceof Error ? error.name : "UnknownProviderError"),
		message: error instanceof Error ? error.message : value?.message,
		code: value?.code,
		param: value?.param,
		declineCode: value?.decline_code,
	};
}

function proofEvidence(
	args: Pick<FetchProofArgs, "operationId" | "namespace" | "method" | "http" | "risk">,
	path: string,
	url: string,
	startedAt: string,
	durationMs: number,
	assert: AssertResult[],
	status: number,
	verdict: Verdict,
): EvidenceBundle {
	return {
		capability: CAPABILITY_NAME,
		operationId: args.operationId,
		namespace: args.namespace,
		method: args.method,
		http: args.http,
		path,
		risk: args.risk,
		startedAt,
		durationMs,
		act: { request: { method: args.http.toUpperCase(), url }, status },
		assert,
		verdict,
	};
}

export async function fetchProof(
	apiKey: string | undefined,
	args: FetchProofArgs,
): Promise<ProofResult<unknown>> {
	const startedAt = new Date().toISOString();
	const t0 = Date.now();
	const baseUrl = args.baseUrl || BASE_URL;
	let path = args.path;
	if (args.prefixOverride && PREFIX) {
		path = path.replace(PREFIX, args.prefixOverride);
	}
	const url = `${baseUrl}${path}`;
	const assertions: AssertResult[] = [];
	const effectiveApiKey = args.options?.auth?.apiKey ?? apiKey;
	if (!effectiveApiKey) throw new Error(`${CAPABILITY_NAME}: set the capability API key secret or pass options.auth.apiKey`);
	const auth = authHeader(effectiveApiKey);

	const headers: Record<string, string> = {
		...(args.extraHeaders || {}),
		...(args.options?.auth?.headers || {}),
		[auth.name]: auth.value,
	};

	const init: RequestInit = {
		method: args.http.toUpperCase(),
		headers,
	};

	const hasBody = args.body !== undefined && args.http.toLowerCase() !== "get";
	if (hasBody) {
		if (CONTENT_TYPE === "form") {
			headers["Content-Type"] = "application/x-www-form-urlencoded";
			init.body = formEncode(args.body as Record<string, unknown>);
		} else {
			headers["Content-Type"] = "application/json";
			init.body = JSON.stringify(args.body);
		}
	}

	let res: Response;
	let body: unknown;
	try {
		res = await fetch(url, init);
		const text = await res.text();
		try {
			body = JSON.parse(text);
		} catch {
			body = text;
		}
	} catch (e) {
		// Network-level failure → record as a fail with a synthetic 0 status
		assertions.push({
			kind: "fetch:throw",
			expected: "no-throw",
			actual: String(e),
			passed: false,
		});
		return {
			result: null,
			evidence: {
				capability: CAPABILITY_NAME,
				operationId: args.operationId,
				namespace: args.namespace,
				method: args.method,
				http: args.http,
				path: args.path,
				risk: args.risk,
				startedAt,
				durationMs: Date.now() - t0,
				act: { request: { method: args.http.toUpperCase(), url }, status: 0 },
				assert: assertions,
				verdict: "fail",
			},
		};
	}

	// Generic HTTP-level assertion
	assertions.push({
		kind: "httpStatus",
		expected: "2xx",
		actual: res.status,
		passed: res.status >= 200 && res.status < 300,
	});

	// Per-method overrides
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
			capability: CAPABILITY_NAME,
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

export const Evidence = { distilledProof, fetchProof };
