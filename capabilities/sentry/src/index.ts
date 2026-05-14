/**
 * capa-sentry — API Reference wrapped as a JSRPC capability.
 *
 * 209 operations across 6 namespaces, generated from OpenAPI.
 * Bind the service as SENTRY and call env.SENTRY.<namespace>.<method>(input).
 */

import { SentryCapability as GeneratedSentryCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class SentryCapability extends GeneratedSentryCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	SENTRY_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-sentry is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
