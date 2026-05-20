import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Credentials, DEFAULT_API_BASE_URL } from "@distilled.cloud/stripe/Credentials";
import {
	GetPaymentIntentsIntent,
	PostPaymentIntents,
	PostPaymentIntentsIntentConfirm,
	type GetPaymentIntentsIntentInput,
	type GetPaymentIntentsIntentOutput,
	type PostPaymentIntentsInput,
	type PostPaymentIntentsOutput,
	type PostPaymentIntentsIntentConfirmInput,
	type PostPaymentIntentsIntentConfirmOutput,
} from "@distilled.cloud/stripe/Operations";
import type {
	AssertResult,
	CallOptions,
	EvidenceBundle,
	MethodOverride,
	ProofResult,
	RuntimeConfig,
} from "./generated/runtime.ts";
import { PaymentIntentsResource } from "./generated/capability.gen.ts";

interface Meta {
	operationId: string;
	method: string;
	http: "get" | "post";
	path: string;
	risk: "low" | "medium" | "high";
}

const createMeta: Meta = {
	operationId: "PostPaymentIntents",
	method: "create",
	http: "post",
	path: "/v1/payment_intents",
	risk: "high",
};
const retrieveMeta: Meta = {
	operationId: "GetPaymentIntentsIntent",
	method: "retrieve",
	http: "get",
	path: "/v1/payment_intents/{intent}",
	risk: "low",
};
const confirmMeta: Meta = {
	operationId: "PostPaymentIntentsIntentConfirm",
	method: "confirm",
	http: "post",
	path: "/v1/payment_intents/{intent}/confirm",
	risk: "high",
};

type DistilledOperation<Input, Output> = (input: Input) => Effect.Effect<Output, unknown, unknown>;
type InputBody<Input, Key extends keyof Input = never> = Omit<Input, Key>;

function stripeLayer(apiKey: string, runtimeConfig?: RuntimeConfig) {
	return Layer.mergeAll(
		FetchHttpClient.layer,
		Layer.succeed(Credentials, {
			apiKey: Redacted.make(apiKey),
			apiBaseUrl: runtimeConfig?.baseUrl || DEFAULT_API_BASE_URL,
		}),
	);
}

function realizePath(path: string, runtimeConfig?: RuntimeConfig): string {
	if (!runtimeConfig?.prefixOverride) return path;
	return path.replace("/v1", runtimeConfig.prefixOverride);
}

function requestUrl(path: string, runtimeConfig?: RuntimeConfig): string {
	return `${runtimeConfig?.baseUrl || DEFAULT_API_BASE_URL}${realizePath(path, runtimeConfig)}`;
}

function stringField(value: unknown, field: string): unknown {
	if (!value || typeof value !== "object") return undefined;
	return (value as Record<string, unknown>)[field];
}

function providerErrorActual(error: unknown) {
	return {
		tag: stringField(error, "_tag") ?? (error instanceof Error ? error.name : "UnknownDistilledError"),
		message: error instanceof Error ? error.message : stringField(error, "message"),
		code: stringField(error, "code"),
		param: stringField(error, "param"),
		declineCode: stringField(error, "decline_code"),
	};
}

function assertionsForSuccess(body: unknown, override?: MethodOverride): AssertResult[] {
	const assertions: AssertResult[] = [{ kind: "distilled", expected: "success", actual: "success", passed: true }];
	if (!override?.asserts) return assertions;
	for (const fn of override.asserts) {
		try {
			assertions.push(fn(body));
		} catch (error) {
			assertions.push({
				kind: "override:throw",
				expected: "no-throw",
				actual: String(error),
				passed: false,
			});
		}
	}
	return assertions;
}

function evidence(
	meta: Meta,
	path: string,
	url: string,
	startedAt: string,
	durationMs: number,
	assert: AssertResult[],
	status: number,
): EvidenceBundle {
	return {
		capability: "stripe",
		operationId: meta.operationId,
		namespace: "payment_intents",
		method: meta.method,
		http: meta.http,
		path,
		risk: meta.risk,
		startedAt,
		durationMs,
		act: { request: { method: meta.http.toUpperCase(), url }, status },
		assert,
		verdict: assert.every(item => item.passed) ? "pass" : "fail",
	};
}

async function runDistilled<Input, Output>(args: {
	input: Input;
	apiKey: string | undefined;
	options?: CallOptions;
	meta: Meta;
	path: string;
	override?: MethodOverride;
	runtimeConfig?: RuntimeConfig;
	operation: DistilledOperation<Input, Output>;
}): Promise<ProofResult<Output>> {
	const effectiveApiKey = args.options?.auth?.apiKey ?? args.apiKey;
	if (!effectiveApiKey) throw new Error("stripe: set the capability API key secret or pass options.auth.apiKey");
	const startedAt = new Date().toISOString();
	const t0 = Date.now();
	const url = requestUrl(args.path, args.runtimeConfig);
	try {
		const effect = args.operation(args.input).pipe(Effect.provide(stripeLayer(effectiveApiKey, args.runtimeConfig))) as Effect.Effect<Output, unknown, never>;
		const result = await Effect.runPromise(effect);
		const assert = assertionsForSuccess(result, args.override);
		const proof = evidence(args.meta, args.path, url, startedAt, Date.now() - t0, assert, 200);
		return { result: proof.verdict === "pass" ? result : null, evidence: proof };
	} catch (error) {
		const assert: AssertResult[] = [{
			kind: "providerError",
			expected: "none",
			actual: providerErrorActual(error),
			passed: false,
		}];
		return {
			result: null,
			evidence: evidence(args.meta, args.path, url, startedAt, Date.now() - t0, assert, 0),
		};
	}
}

export class DistilledPaymentIntents extends PaymentIntentsResource {
	private readonly distilledApiKey: string | undefined;
	private readonly distilledOverrides: Record<string, MethodOverride>;
	private readonly distilledRuntimeConfig?: RuntimeConfig;

	constructor(
		apiKey: string | undefined,
		overrides: Record<string, MethodOverride> = {},
		runtimeConfig?: RuntimeConfig,
	) {
		super(apiKey, overrides, runtimeConfig);
		this.distilledApiKey = apiKey;
		this.distilledOverrides = overrides;
		this.distilledRuntimeConfig = runtimeConfig;
	}

	create(body: PostPaymentIntentsInput, options?: CallOptions): Promise<ProofResult<PostPaymentIntentsOutput>> {
		return runDistilled({
			input: body,
			apiKey: this.distilledApiKey,
			options,
			meta: createMeta,
			path: createMeta.path,
			override: this.distilledOverrides.create,
			runtimeConfig: this.distilledRuntimeConfig,
			operation: PostPaymentIntents as DistilledOperation<PostPaymentIntentsInput, PostPaymentIntentsOutput>,
		});
	}

	retrieve(intent: string, body: InputBody<GetPaymentIntentsIntentInput, "intent"> = {}, options?: CallOptions): Promise<ProofResult<GetPaymentIntentsIntentOutput>> {
		const path = `/v1/payment_intents/${intent}`;
		return runDistilled({
			input: { intent, ...body } as GetPaymentIntentsIntentInput,
			apiKey: this.distilledApiKey,
			options,
			meta: retrieveMeta,
			path,
			override: this.distilledOverrides.retrieve,
			runtimeConfig: this.distilledRuntimeConfig,
			operation: GetPaymentIntentsIntent as DistilledOperation<GetPaymentIntentsIntentInput, GetPaymentIntentsIntentOutput>,
		});
	}

	confirm(intent: string, body: InputBody<PostPaymentIntentsIntentConfirmInput, "intent"> = {}, options?: CallOptions): Promise<ProofResult<PostPaymentIntentsIntentConfirmOutput>> {
		const path = `/v1/payment_intents/${intent}/confirm`;
		return runDistilled({
			input: { intent, ...body } as PostPaymentIntentsIntentConfirmInput,
			apiKey: this.distilledApiKey,
			options,
			meta: confirmMeta,
			path,
			override: this.distilledOverrides.confirm,
			runtimeConfig: this.distilledRuntimeConfig,
			operation: PostPaymentIntentsIntentConfirm as DistilledOperation<PostPaymentIntentsIntentConfirmInput, PostPaymentIntentsIntentConfirmOutput>,
		});
	}
}
