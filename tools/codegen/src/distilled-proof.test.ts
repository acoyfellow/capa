import { describe, expect, test } from "bun:test";
import { distilledProof, observingFetch, type ObservedExchange } from "./runtime.template.ts";

const baseArgs = {
	operationId: "PostPaymentIntents",
	namespace: "paymentIntents",
	method: "create",
	http: "post",
	path: "/v1/payment_intents",
	risk: "high" as const,
	input: { amount: 100 },
};

function upstream(status: number, seen: Request[] = []): typeof fetch {
	return (async (request: Request) => {
		seen.push(request);
		return new Response("{}", { status });
	}) as typeof fetch;
}

async function callThrough(observed: ObservedExchange, status: number, seen: Request[], headers: Record<string, string> = {}) {
	const send = observingFetch(observed, headers, upstream(status, seen));
	return send("https://api.stripe.com/v1/payment_intents", { method: "POST", headers: { Authorization: "Bearer sk" } });
}

describe("observingFetch", () => {
	test("records the upstream url and status", async () => {
		const observed: ObservedExchange = {};
		await callThrough(observed, 201, []);
		expect(observed).toEqual({ url: "https://api.stripe.com/v1/payment_intents", status: 201 });
	});

	test("applies extra headers without dropping provider headers", async () => {
		const seen: Request[] = [];
		await callThrough({}, 200, seen, { "CF-Access-Client-Id": "id" });
		expect(seen[0]!.headers.get("CF-Access-Client-Id")).toBe("id");
		expect(seen[0]!.headers.get("Authorization")).toBe("Bearer sk");
	});
});

describe("distilledProof", () => {
	test("reports the real upstream status on success", async () => {
		const proof = await distilledProof({
			...baseArgs,
			operation: async (_input, observed) => {
				await callThrough(observed, 201, []);
				return { id: "pi_1" };
			},
		});
		expect(proof.result).toEqual({ id: "pi_1" });
		expect(proof.evidence.act).toEqual({ request: { method: "POST", url: "https://api.stripe.com/v1/payment_intents" }, status: 201 });
		expect(proof.evidence.verdict).toBe("pass");
	});

	test("reports the real upstream status on provider errors", async () => {
		const proof = await distilledProof({
			...baseArgs,
			operation: async (_input, observed) => {
				await callThrough(observed, 402, []);
				throw Object.assign(new Error("card declined"), { _tag: "CardError", code: "card_declined" });
			},
		});
		expect(proof.result).toBeNull();
		expect(proof.evidence.act.status).toBe(402);
		expect(proof.evidence.assert.map(assertion => assertion.kind)).toEqual(["status", "providerError"]);
	});

	test("reports status 0 when no request was sent", async () => {
		const proof = await distilledProof({
			...baseArgs,
			operation: async () => {
				throw new Error("set the capability API key secret");
			},
		});
		expect(proof.evidence.act.status).toBe(0);
		expect(proof.evidence.assert.map(assertion => assertion.kind)).toEqual(["providerError"]);
	});
});
