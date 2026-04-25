/**
 * capa-jira — Jira Cloud REST API as a JSRPC capability.
 *
 * 603 operations across 76 namespaces, generated from the Atlassian
 * Jira Cloud OpenAPI 3.0 spec via @capa/codegen.
 *
 * Bind from a caller Worker:
 *   "services": [{
 *     "binding": "JIRA",
 *     "service": "capa-jira",
 *     "entrypoint": "JiraCapability"
 *   }]
 *
 * Then:
 *   const { result, evidence } = await env.JIRA.issues.createIssue({
 *     fields: {
 *       project: { key: "DEVTOOLS" },
 *       summary: "Fix codegen dedup",
 *       issuetype: { name: "Task" },
 *     },
 *   });
 *
 * Configuration:
 *   JIRA_API_KEY                  email:api_token pair (runtime base64 encodes for Basic auth)
 *   JIRA_BASE_URL_OVERRIDE        (optional) e.g. https://jira.cfdata.org for Jira Server
 */

import { JiraCapability as GeneratedJiraCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

interface Env {
	JIRA_API_KEY: string;
	JIRA_BASE_URL_OVERRIDE?: string;
}

export class JiraCapability extends GeneratedJiraCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

export default {
	fetch(): Response {
		return new Response("capa-jira is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
