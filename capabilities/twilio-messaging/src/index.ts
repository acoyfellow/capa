/**
 * capa-twilio-messaging — Twilio - Messaging wrapped as a JSRPC capability.
 *
 * 58 operations across 5 namespaces, generated from OpenAPI.
 * Bind the service as TWILIO_MESSAGING and call env.TWILIO_MESSAGING.<namespace>.<method>(input).
 */

import { TwilioMessagingCapability as GeneratedTwilioMessagingCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class TwilioMessagingCapability extends GeneratedTwilioMessagingCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	TWILIO_MESSAGING_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-twilio-messaging is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
