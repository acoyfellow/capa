/**
 * capa-gitlab — GitLab REST API as a JSRPC capability.
 *
 * 1,050 operations across 51 namespaces, generated from the official
 * GitLab OpenAPI v2 spec via @capa/codegen.
 *
 * Bind from a caller Worker:
 *   "services": [{
 *     "binding": "GITLAB_PROOF",
 *     "service": "capa-gitlab",
 *     "entrypoint": "GitlabCapability"
 *   }]
 *
 * Then:
 *   const { result, evidence } = await env.GITLAB_PROOF.mergeRequests.createNote({
 *     id: "cloudflare/ai-agents/lee",
 *     mergeRequestIid: 4172,
 *     body: "LGTM",
 *   });
 *
 * Configuration:
 *   GITLAB_API_KEY                  PRIVATE-TOKEN scoped to your account
 *   GITLAB_BASE_URL_OVERRIDE        (optional) e.g. https://gitlab.cfdata.org for self-managed
 *   CF_ACCESS_CLIENT_ID             (optional) when behind Cloudflare Access
 *   CF_ACCESS_CLIENT_SECRET         (optional) when behind Cloudflare Access
 */

import { GitlabCapability as GeneratedGitlabCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

interface Env {
	GITLAB_API_KEY: string;
	GITLAB_BASE_URL_OVERRIDE?: string;
	CF_ACCESS_CLIENT_ID?: string;
	CF_ACCESS_CLIENT_SECRET?: string;
}

export class GitlabCapability extends GeneratedGitlabCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
		// The generated runtime supports baseUrl + extraHeaders per call.
		// Populating them from env requires editing the generated layer or
		// extending the generated namespace classes — for now, the upstream
		// override flow lives in the runtime template and the caller can
		// pass per-call overrides. Self-managed cfdata routing is a TODO
		// when the first real internal user shows up (see README).
	}
}

export default {
	fetch(): Response {
		return new Response("capa-gitlab is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
