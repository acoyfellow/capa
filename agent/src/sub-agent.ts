import { DurableObject } from "cloudflare:workers";
import { Type } from "@earendil-works/pi-ai";
import { createModels } from "@earendil-works/pi-ai/models";
import { createRegistry, defineExtension, defineTool, Harness, section } from "@earendil-works/pi-durable";
import { BACKGROUND_CONTEXT } from "@earendil-works/chord/context";
import { openPiSessionStore } from "agents/harness/pi";
import { createAI } from "agents/models/pi-ai";
import { directWorkersAi } from "./direct-ai.ts";
import { runSandbox, type SandboxOutcome } from "./sandbox.ts";
import type { AgentEnv, SubAgentIdentity } from "./types.ts";

const INSTRUCTIONS = `You are a capa sub-agent. You reach APIs only with capa_execute, which runs the body of an async JavaScript function with a \`capa\` object, for example:
  const { result, evidence } = await capa.github.repos.retrieve("acoyfellow", "capa"); return { stars: result.stargazers_count, verdict: evidence.verdict };
If a call is blocked, say which grant is missing. Never invent results.`;

export class SubAgent extends DurableObject<AgentEnv, SubAgentIdentity> {
	readonly ai = createAI({ binding: directWorkersAi(this.env.AI) });
	readonly registry = createRegistry();

	private opened: Promise<Harness> | undefined;

	private harness(): Promise<Harness> {
		this.opened ??= (async () => {
			const models = createModels();
			models.setProvider(this.ai.provider);
			const storage = await openPiSessionStore(this.ctx.storage);
			const harness = await Harness.open(storage, { models, registry: this.registry }, BACKGROUND_CONTEXT);
			harness.resume();
			return harness;
		})();
		return this.opened;
	}

	private async root() {
		const model = this.ai(this.env.MODEL as Parameters<typeof this.ai>[0]);
		return (await this.harness()).root(BACKGROUND_CONTEXT, { agent: { model: { provider: model.provider, modelId: model.id } } });
	}

	constructor(ctx: DurableObjectState, env: AgentEnv) {
		super(ctx, env);
		this.registry.install(defineExtension({ name: "capa", sections: [section("capa", () => INSTRUCTIONS)], tools: [this.executeTool()] }));
	}

	identity(): SubAgentIdentity {
		return this.ctx.props;
	}

	async ask(prompt: string): Promise<{ status: string; text?: string; reason?: string }> {
		const conversation = await this.root();
		const submission = await conversation.submit({ type: "input", content: prompt }, BACKGROUND_CONTEXT);
		const settled = await submission.wait(BACKGROUND_CONTEXT);
		if (settled.status !== "done") return { status: settled.status, reason: JSON.stringify(settled).slice(0, 300) };
		return { status: "done", text: lastAssistantText((await conversation.context(BACKGROUND_CONTEXT)).messages) };
	}

	async execute(code: string): Promise<SandboxOutcome> {
		const bridge = (this.ctx.exports as unknown as { CapaBridge: (options: { props: SubAgentIdentity }) => Fetcher }).CapaBridge({ props: this.ctx.props });
		return runSandbox(this.env.LOADER, bridge, code);
	}

	async transcriptSize(): Promise<number> {
		return (await (await this.root()).context(BACKGROUND_CONTEXT)).entries.length;
	}

	async note(value: string): Promise<string[]> {
		const notes = this.ctx.storage.kv.get<string[]>("notes") ?? [];
		notes.push(value);
		this.ctx.storage.kv.put("notes", notes);
		return notes;
	}

	async notes(): Promise<string[]> {
		return this.ctx.storage.kv.get<string[]>("notes") ?? [];
	}

	async busyFor(ms: number): Promise<{ start: number; end: number }> {
		const start = Date.now();
		await new Promise((resolve) => setTimeout(resolve, ms));
		return { start, end: Date.now() };
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

function lastAssistantText(messages: readonly unknown[]): string | undefined {
	for (let index = messages.length - 1; index >= 0; index--) {
		const message = messages[index] as { role?: string; content?: Array<{ type: string; text?: string }> };
		if (message.role !== "assistant") continue;
		const text = (message.content ?? []).flatMap((part) => (part.type === "text" && part.text ? [part.text] : [])).join("");
		if (text) return text;
	}
	return undefined;
}
