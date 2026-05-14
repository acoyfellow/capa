/**
 * capa-github — GitHub v3 REST API wrapped as a JSRPC capability.
 *
 * 1,182 operations across 36 namespaces, generated from OpenAPI.
 * Bind the service as GITHUB and call env.GITHUB.<namespace>.<method>(input).
 */

import { GithubCapability as GeneratedGithubCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class GithubCapability extends GeneratedGithubCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	GITHUB_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-github is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
