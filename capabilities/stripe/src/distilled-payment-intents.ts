import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Credentials, DEFAULT_API_BASE_URL } from "@distilled.cloud/stripe/Credentials";
import {
	GetPaymentIntentsIntent,
	PostPaymentIntents,
	PostPaymentIntentsIntentConfirm,
} from "@distilled.cloud/stripe/Operations";
import type { AssertResult, CallOptions, ProofResult } from "./generated/runtime.ts";

type Meta = { operationId: string; method: string; http: string; path: string; risk: "low" | "medium" | "high" };

const createMeta: Meta = { operationId: "PostPaymentIntents", method: "create", http: "post", path: "/v1/payment_intents", risk: "high" };
const retrieveMeta: Meta = { operationId: "GetPaymentIntentsIntent", method: "retrieve", http: "get", path: "/v1/payment_intents/{intent}", risk: "low" };
const confirmMeta: Meta = { operationId: "PostPaymentIntentsIntentConfirm", method: "confirm", http: "post", path: "/v1/payment_intents/{intent}/confirm", risk: "high" };

function layer(apiKey: string) {
	return Layer.mergeAll(
		FetchHttpClient.layer,
		Layer.succeed(Credentials, { apiKey: Redacted.make(apiKey), apiBaseUrl: DEFAULT_API_BASE_URL }),
	);
}

function errorActual(error: any) {
	return {
		tag: error?._tag ?? error?.constructor?.name ?? "UnknownDistilledError",
		message: error?.message,
		code: error?.code,
		param: error?.param,
		declineCode: error?.decline_code,
	};
}

async function run(input: Record<string, unknown>, options: CallOptions | undefined, meta: Meta, operation: (input: any) => Effect.Effect<any, any, any>, realizedPath = meta.path): Promise<ProofResult<unknown>> {
	const apiKey = options?.auth?.apiKey;
	if (!apiKey) throw new Error(`stripe distilled POC: pass options.auth.apiKey`);
	const startedAt = new Date().toISOString();
	const t0 = Date.now();
	try {
		const effect = operation(input).pipe(Effect.provide(layer(apiKey))) as Effect.Effect<unknown, unknown, never>;
		const result = await Effect.runPromise(effect);
		return proof(result, meta, realizedPath, startedAt, Date.now() - t0, 200, [{ kind: "distilled", expected: "success", actual: "success", passed: true }]);
	} catch (error) {
		return proof(null, meta, realizedPath, startedAt, Date.now() - t0, 0, [{ kind: "providerError", expected: "none", actual: errorActual(error), passed: false }]);
	}
}

function proof(result: unknown, meta: Meta, path: string, startedAt: string, durationMs: number, status: number, assert: AssertResult[]): ProofResult<unknown> {
	const verdict = assert.every(a => a.passed) ? "pass" : "fail";
	return {
		result: verdict === "pass" ? result : null,
		evidence: {
			capability: "stripe",
			operationId: meta.operationId,
			namespace: "payment_intents",
			method: meta.method,
			http: meta.http,
			path,
			risk: meta.risk,
			startedAt,
			durationMs,
			act: { request: { method: meta.http.toUpperCase(), url: `${DEFAULT_API_BASE_URL}${path}` }, status },
			assert,
			verdict,
		},
	};
}

export const distilledPaymentIntents = {
	create: (body: Record<string, unknown>, options?: CallOptions) => run(body, options, createMeta, PostPaymentIntents),
	retrieve: (intent: string, body: Record<string, unknown> = {}, options?: CallOptions) => run({ intent, ...body }, options, retrieveMeta, GetPaymentIntentsIntent, `/v1/payment_intents/${intent}`),
	confirm: (intent: string, body: Record<string, unknown> = {}, options?: CallOptions) => run({ intent, ...body }, options, confirmMeta, PostPaymentIntentsIntentConfirm, `/v1/payment_intents/${intent}/confirm`),
};
