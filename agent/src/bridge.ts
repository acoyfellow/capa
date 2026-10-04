import { WorkerEntrypoint } from "cloudflare:workers";
import { findOperation } from "./catalog.ts";
import { decide, type Grant } from "./grants.ts";
import type { AgentEnv, BridgeProps, Evidence, SubAgentIdentity } from "./types.ts";

type CapabilityService = Record<string, Record<string, (...args: unknown[]) => Promise<{ result: unknown; evidence: Evidence }>>>;

function withoutAgentAuth(args: unknown[], optionsIndex: number): unknown[] {
	const options = args[optionsIndex];
	if (typeof options !== "object" || options === null || !("auth" in options)) return args;
	const { auth: _ignored, ...rest } = options as Record<string, unknown>;
	return [...args.slice(0, optionsIndex), rest, ...args.slice(optionsIndex + 1)];
}

export class CapaBridge extends WorkerEntrypoint<AgentEnv, BridgeProps | SubAgentIdentity> {
	async call(capability: string, namespace: string, method: string, args: unknown[]): Promise<unknown> {
		const { agent, grants, recordTo } = await this.caller();
		const found = findOperation(capability, namespace, method);
		if (!found) throw new Error(`Unknown operation ${capability}.${namespace}.${method}. Use capa_search.`);
		const decision = decide(agent, grants, capability, found.operation);
		if (!decision.allowed) throw new Error(decision.reason);

		const service = (this.env as unknown as Record<string, CapabilityService>)[found.entry.binding];
		const outcome = await service[namespace][method](...withoutAgentAuth(args, found.operation.optionsIndex));
		await this.env.AGENTS.getByName(recordTo).record(outcome.evidence);
		return { result: outcome.result, evidence: outcome.evidence };
	}

	private async caller(): Promise<{ agent: string; grants: Grant[]; recordTo: string }> {
		const props = this.ctx.props;
		if ("subAgent" in props) {
			const grants = await this.env.AGENTS.getByName(props.parent).grantsFor(props.subAgent);
			return { agent: `${props.parent}/${props.subAgent}`, grants, recordTo: props.parent };
		}
		return { agent: props.agent, grants: props.grants, recordTo: props.agent };
	}
}
