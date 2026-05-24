/**
 * capa-blooio — Blooio API v2 wrapped as a JSRPC capability.
 *
 * 54 operations across 8 namespaces, generated from OpenAPI.
 * Bind the service as BLOOIO and call env.BLOOIO.<namespace>.<method>(input).
 */

import { BlooioCapability as GeneratedBlooioCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class BlooioCapability extends GeneratedBlooioCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	BLOOIO_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-blooio is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
