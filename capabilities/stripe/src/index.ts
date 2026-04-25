import { WorkerEntrypoint } from "cloudflare:workers";

interface Env {
	STRIPE_SECRET_KEY: string;
	CAPA_VERSION: string;
	CAPA_NAME: string;
}

interface ChargeInput {
	amount: number;
	currency: string;
	source: string;
	description?: string;
}

interface RefundInput {
	chargeId: string;
	amount?: number;
}

interface Evidence {
	capability: string;
	version: string;
	method: string;
	startedAt: string;
	durationMs: number;
	observe: Array<{ kind: string; passed: boolean; detail?: unknown }>;
	act: { request: { method: string; url: string }; status: number };
	assert: Array<{ kind: string; passed: boolean; expected?: unknown; actual?: unknown }>;
	verdict: "pass" | "fail";
}

interface ProofResult<T> {
	result: T | null;
	evidence: Evidence;
}

const STRIPE = "https://api.stripe.com";

function form(body: Record<string, unknown>): string {
	const params = new URLSearchParams();
	for (const [k, v] of Object.entries(body)) {
		if (v !== undefined && v !== null) params.append(k, String(v));
	}
	return params.toString();
}

async function fetchJson(
	url: string,
	init: RequestInit,
): Promise<{ status: number; body: any }> {
	const res = await fetch(url, init);
	const text = await res.text();
	let body: any = text;
	try {
		body = JSON.parse(text);
	} catch {
		// non-JSON response, keep raw
	}
	return { status: res.status, body };
}

/**
 * StripeCapability — Stripe wrapped as a JSRPC capability.
 *
 * Bind from a caller Worker:
 *   "services": [{ "binding": "STRIPE_PROOF", "service": "capa-stripe",
 *                  "entrypoint": "StripeCapability" }]
 *
 * Each method returns { result, evidence }. The evidence records what was
 * checked before the call, what call was made, and which postconditions
 * passed — so callers can audit, persist, or hash the result of any
 * money-moving operation without trusting the wrapper to be correct.
 */
export class StripeCapability extends WorkerEntrypoint<Env> {
	async charge(input: ChargeInput): Promise<ProofResult<any>> {
		const startedAt = new Date().toISOString();
		const t0 = Date.now();
		const observe: Evidence["observe"] = [];
		const assertions: Evidence["assert"] = [];

		// OBSERVE — is the upstream reachable? (optional, fast HEAD)
		const reachable = await this.probe(`${STRIPE}/v1/charges`);
		observe.push({ kind: "httpReachable", passed: reachable, detail: { url: `${STRIPE}/v1/charges` } });

		// ACT — execute the charge
		const url = `${STRIPE}/v1/charges`;
		const { status, body } = await fetchJson(url, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${this.env.STRIPE_SECRET_KEY}`,
				"Content-Type": "application/x-www-form-urlencoded",
				"Stripe-Version": "2024-09-30.acacia",
			},
			body: form({
				amount: input.amount,
				currency: input.currency,
				source: input.source,
				description: input.description,
			}),
		});

		// ASSERT — did it land the way we expect?
		assertions.push({ kind: "httpStatus", expected: 200, actual: status, passed: status === 200 });
		assertions.push({
			kind: "responseField:id",
			expected: "matches ^ch_",
			actual: body?.id,
			passed: typeof body?.id === "string" && body.id.startsWith("ch_"),
		});
		assertions.push({
			kind: "responseField:status",
			expected: "succeeded",
			actual: body?.status,
			passed: body?.status === "succeeded",
		});
		assertions.push({
			kind: "responseField:paid",
			expected: true,
			actual: body?.paid,
			passed: body?.paid === true,
		});

		const verdict = assertions.every((a) => a.passed) ? "pass" : "fail";

		return {
			result: verdict === "pass" ? body : null,
			evidence: {
				capability: this.env.CAPA_NAME,
				version: this.env.CAPA_VERSION,
				method: "charge",
				startedAt,
				durationMs: Date.now() - t0,
				observe,
				act: { request: { method: "POST", url }, status },
				assert: assertions,
				verdict,
			},
		};
	}

	async refund(input: RefundInput): Promise<ProofResult<any>> {
		const startedAt = new Date().toISOString();
		const t0 = Date.now();
		const observe: Evidence["observe"] = [];
		const assertions: Evidence["assert"] = [];

		// OBSERVE — does the charge exist + is it paid?
		const before = await fetchJson(`${STRIPE}/v1/charges/${input.chargeId}`, {
			headers: { Authorization: `Bearer ${this.env.STRIPE_SECRET_KEY}` },
		});
		observe.push({
			kind: "chargeExists",
			passed: before.status === 200 && before.body?.paid === true,
			detail: { chargeId: input.chargeId, paid: before.body?.paid },
		});

		// ACT — issue the refund
		const url = `${STRIPE}/v1/refunds`;
		const { status, body } = await fetchJson(url, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${this.env.STRIPE_SECRET_KEY}`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: form({ charge: input.chargeId, amount: input.amount }),
		});

		// ASSERT
		assertions.push({ kind: "httpStatus", expected: 200, actual: status, passed: status === 200 });
		assertions.push({
			kind: "responseField:id",
			expected: "matches ^re_",
			actual: body?.id,
			passed: typeof body?.id === "string" && body.id.startsWith("re_"),
		});
		assertions.push({
			kind: "responseField:status",
			expected: "succeeded",
			actual: body?.status,
			passed: body?.status === "succeeded",
		});

		const verdict = assertions.every((a) => a.passed) ? "pass" : "fail";

		return {
			result: verdict === "pass" ? body : null,
			evidence: {
				capability: this.env.CAPA_NAME,
				version: this.env.CAPA_VERSION,
				method: "refund",
				startedAt,
				durationMs: Date.now() - t0,
				observe,
				act: { request: { method: "POST", url }, status },
				assert: assertions,
				verdict,
			},
		};
	}

	private async probe(url: string): Promise<boolean> {
		try {
			const res = await fetch(url, { method: "OPTIONS" });
			return res.status < 500;
		} catch {
			return false;
		}
	}
}

/**
 * Default fetch handler. The capability is JSRPC-only; HTTP returns 404
 * to make accidental public exposure visible (per .context/INCIDENT-2026-04-15.md
 * — never public with bindings).
 */
export default {
	fetch(): Response {
		return new Response("capa-stripe is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
