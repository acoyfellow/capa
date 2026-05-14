/**
 * capa-zoom — Zoom API wrapped as a JSRPC capability.
 *
 * 155 operations across 14 namespaces, generated from OpenAPI.
 * Bind the service as ZOOM and call env.ZOOM.<namespace>.<method>(input).
 */

import { ZoomCapability as GeneratedZoomCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class ZoomCapability extends GeneratedZoomCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	ZOOM_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-zoom is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
