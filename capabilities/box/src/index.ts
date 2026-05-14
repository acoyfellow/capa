/**
 * capa-box — Box Platform API wrapped as a JSRPC capability.
 *
 * 294 operations across 56 namespaces, generated from OpenAPI.
 * Bind the service as BOX and call env.BOX.<namespace>.<method>(input).
 */

import { BoxCapability as GeneratedBoxCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class BoxCapability extends GeneratedBoxCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	BOX_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-box is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
