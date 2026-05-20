/**
 * capa-stripe — Stripe wrapped as a JSRPC capability.
 *
 * 534 operations across 73 namespaces, generated from the official
 * Stripe OpenAPI spec via @capa/codegen.
 *
 * Bind from a caller Worker:
 *   "services": [{
 *     "binding": "STRIPE",
 *     "service": "capa-stripe",
 *     "entrypoint": "StripeCapability"
 *   }]
 *
 * Then:
 *   const { result, evidence } = await env.STRIPE.charges.create({
 *     amount: 1000, currency: "usd", source: "tok_visa",
 *   });
 *
 * The evidence bundle records:
 *   - which operation ran (operationId, namespace, method, http, path)
 *   - the HTTP status returned by Stripe
 *   - itemized assertions (generic + per-method overrides)
 *   - verdict: "pass" | "fail"
 */

import { StripeCapability as GeneratedStripeCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";
import { DistilledPaymentIntents } from "./distilled-payment-intents.ts";

export class StripeCapability extends GeneratedStripeCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}

	/** Distilled-backed first production slice of the Stripe capability. */
	get paymentIntents(): DistilledPaymentIntents {
		return new DistilledPaymentIntents(
			this.env.STRIPE_API_KEY,
			this.overrides["payment_intents"] || {},
			this.runtimeConfig,
		);
	}
}

interface Env {
	STRIPE_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-stripe is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
