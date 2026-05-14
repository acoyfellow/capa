/**
 * capa-kubernetes — Kubernetes wrapped as a JSRPC capability.
 *
 * 1,111 operations across 6 namespaces, generated from OpenAPI.
 * Bind the service as KUBERNETES and call env.KUBERNETES.<namespace>.<method>(input).
 */

import { KubernetesCapability as GeneratedKubernetesCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class KubernetesCapability extends GeneratedKubernetesCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	KUBERNETES_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-kubernetes is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
