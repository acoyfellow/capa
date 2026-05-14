/**
 * capa-twilio-verify — Twilio - Verify wrapped as a JSRPC capability.
 *
 * 57 operations across 5 namespaces, generated from OpenAPI.
 * Bind the service as TWILIO_VERIFY and call env.TWILIO_VERIFY.<namespace>.<method>(input).
 */

import { TwilioVerifyCapability as GeneratedTwilioVerifyCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class TwilioVerifyCapability extends GeneratedTwilioVerifyCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	TWILIO_VERIFY_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-twilio-verify is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
