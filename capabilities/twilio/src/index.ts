/**
 * capa-twilio — Twilio - Api wrapped as a JSRPC capability.
 *
 * 197 operations across 2 namespaces, generated from OpenAPI.
 * Bind the service as TWILIO and call env.TWILIO.<namespace>.<method>(input).
 */

import { TwilioCapability as GeneratedTwilioCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class TwilioCapability extends GeneratedTwilioCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	TWILIO_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-twilio is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
