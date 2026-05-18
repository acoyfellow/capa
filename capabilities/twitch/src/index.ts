/**
 * capa-twitch — Twitch API Swagger UI (Unofficial) wrapped as a JSRPC capability.
 *
 * 144 operations across 30 namespaces, generated from OpenAPI.
 * Bind the service as TWITCH and call env.TWITCH.<namespace>.<method>(input).
 */

import { TwitchCapability as GeneratedTwitchCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class TwitchCapability extends GeneratedTwitchCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
		this.runtimeConfig = {
			extraHeaders: {
				"Client-Id": env.TWITCH_CLIENT_ID,
			},
		};
	}
}

interface Env {
	/** OAuth app/user token used as Authorization: Bearer <token>. */
	TWITCH_API_KEY?: string;
	/** Twitch application client id required by every Helix API request. */
	TWITCH_CLIENT_ID: string;
}

export default {
	fetch(): Response {
		return new Response("capa-twitch is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
