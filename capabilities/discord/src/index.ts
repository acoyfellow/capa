/**
 * capa-discord — Discord HTTP API (Preview) wrapped as a JSRPC capability.
 *
 * 233 operations across 16 namespaces, generated from OpenAPI.
 * Bind the service as DISCORD and call env.DISCORD.<namespace>.<method>(input).
 */

import { DiscordCapability as GeneratedDiscordCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class DiscordCapability extends GeneratedDiscordCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	DISCORD_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-discord is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
