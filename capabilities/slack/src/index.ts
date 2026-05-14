/**
 * capa-slack — Slack Web API wrapped as a JSRPC capability.
 *
 * 174 operations across 174 namespaces, generated from OpenAPI.
 * Bind the service as SLACK and call env.SLACK.<namespace>.<method>(input).
 */

import { SlackCapability as GeneratedSlackCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class SlackCapability extends GeneratedSlackCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	SLACK_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-slack is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
