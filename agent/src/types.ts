import type { Grant } from "./grants.ts";

export type Evidence = { verdict: string; operationId: string; act: { status: number; request: { method: string; url: string } } };

export type BridgeProps = { agent: string; grants: Grant[] };

export type SubAgentIdentity = { parent: string; subAgent: string };

export interface CapaAgentStub {
	record(evidence: Evidence): Promise<void>;
}

export interface AgentEnv {
	AI: Ai;
	LOADER: WorkerLoader;
	AGENTS: DurableObjectNamespace<import("./agent.ts").CapaAgent>;
	OWNER_TOKEN: string;
	MODEL: string;
	GITHUB: Fetcher;
	SELF_RPC: Service<import("./index.ts").AgentRpc>;
}
