import { DurableObject } from "cloudflare:workers";
import { Type } from "@earendil-works/pi-ai";
import { createModels } from "@earendil-works/pi-ai/models";
import { createRegistry, defineExtension, defineTool, Harness, section } from "@earendil-works/pi-durable";
import { PiHarness } from "agents/harness/pi";
import { Lifecycle } from "agents/lifecycle";
import { createAI } from "agents/models/pi-ai";
import { searchOperations } from "./catalog.ts";
import { directWorkersAi } from "./direct-ai.ts";
import { decide, parseGrants, type Grant } from "./grants.ts";
import { runSandbox, type SandboxOutcome } from "./sandbox.ts";
import type { AgentEnv, BridgeProps, Evidence } from "./types.ts";


const INSTRUCTIONS = `You are a capa agent. You reach APIs only through two tools.
capa_search finds operations you are allowed to call. capa_execute runs the body of an async JavaScript function with a \`capa\` object, for example:
  const { result, evidence } = await capa.github.repos.retrieve("acoyfellow", "capa"); return { stars: result.stargazers_count, verdict: evidence.verdict };
Always search first, then execute. If a call is blocked, say which grant is missing. Never invent results.`;

type StoredEvidence = { at: number; capability: string; operationId: string; status: number; verdict: string };

export class CapaAgent extends DurableObject<AgentEnv> {
	readonly ai = createAI({ binding: directWorkersAi(this.env.AI) });
	readonly registry = createRegistry();

	readonly harness = new PiHarness({
		harness: ({ storage, context }) => {
			const models = createModels();
			models.setProvider(this.ai.provider);
			return Harness.open(storage, { models, registry: this.registry }, context);
		},
		defaults: { model: this.ai(this.env.MODEL as Parameters<typeof this.ai>[0]) },
	});

	readonly lifecycle = Lifecycle.install(this).use(this.harness);

	constructor(ctx: DurableObjectState, env: AgentEnv) {
		super(ctx, env);
		this.registry.install(
			defineExtension({
				name: "capa",
				sections: [section("capa", () => INSTRUCTIONS)],
				tools: [this.searchTool(), this.executeTool()],
			}),
		);
		ctx.blockConcurrencyWhile(async () => {
			ctx.storage.sql.exec("CREATE TABLE IF NOT EXISTS capa_evidence (at INTEGER, capability TEXT, operation_id TEXT, status INTEGER, verdict TEXT)");
		});
	}

	async setGrants(grants: unknown): Promise<Grant[]> {
		const parsed = parseGrants(grants);
		await this.ctx.storage.put("grants", parsed);
		return parsed;
	}

	async grants(): Promise<Grant[]> {
		return (await this.ctx.storage.get<Grant[]>("grants")) ?? [];
	}

	async ask(prompt: string): Promise<{ status: string; text?: string; reason?: string }> {
		const response = await this.harness.prompt(prompt);
		return { status: response.status, text: response.text, reason: response.reason };
	}

	async execute(code: string): Promise<SandboxOutcome> {
		return runSandbox(this.env.LOADER, this.bridge(await this.grants()), code);
	}

	async search(query: string) {
		const grants = await this.grants();
		return searchOperations(query, (capability, operation) => decide(this.name(), grants, capability, operation).allowed);
	}

	async record(evidence: Evidence): Promise<void> {
		const capability = new URL(evidence.act.request.url).hostname;
		this.ctx.storage.sql.exec(
			"INSERT INTO capa_evidence VALUES (?, ?, ?, ?, ?)",
			Date.now(),
			capability,
			evidence.operationId,
			evidence.act.status,
			evidence.verdict,
		);
	}

	async evidence(): Promise<StoredEvidence[]> {
		return this.ctx.storage.sql
			.exec<{ at: number; capability: string; operation_id: string; status: number; verdict: string }>("SELECT * FROM capa_evidence ORDER BY at")
			.toArray()
			.map((row) => ({ at: row.at, capability: row.capability, operationId: row.operation_id, status: row.status, verdict: row.verdict }));
	}

	async transcript(): Promise<unknown[]> {
		return this.harness.messages();
	}

	private name(): string {
		return this.ctx.id.name ?? this.ctx.id.toString();
	}

	private bridge(grants: Grant[]): Fetcher {
		const props: BridgeProps = { agent: this.name(), grants };
		const exportsWithBridge = this.ctx.exports as unknown as { CapaBridge: (options: { props: BridgeProps }) => Fetcher };
		return exportsWithBridge.CapaBridge({ props });
	}

	private searchTool() {
		return defineTool({
			name: "capa_search",
			description: "Find capa operations this agent is allowed to call. Returns the call to write, the HTTP verb, the path, and the risk.",
			parameters: Type.Object({ query: Type.String({ description: "Words to match, for example: repos retrieve" }) }),
			replay: "safe",
			execute: async (args) => ({ content: [{ type: "text", text: JSON.stringify(await this.search(args.query)) }] }),
		});
	}

	private executeTool() {
		return defineTool({
			name: "capa_execute",
			description: "Run the body of an async JavaScript function. The sandbox has no network. Call APIs on the `capa` object and use `return` to send back a value.",
			parameters: Type.Object({ code: Type.String() }),
			execute: async (args) => ({ content: [{ type: "text", text: JSON.stringify(await this.execute(args.code)) }] }),
		});
	}
}
