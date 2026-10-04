import { WorkerEntrypoint } from "cloudflare:workers";
import { handleMcp } from "./mcp.ts";
import type { AgentEnv } from "./types.ts";

export { CapaAgent } from "./agent.ts";
export { CapaBridge } from "./bridge.ts";

const AGENT_NAME = /^[a-z0-9][a-z0-9-]{0,62}$/;

async function sameSecret(given: string, expected: string): Promise<boolean> {
	const encoder = new TextEncoder();
	const [a, b] = await Promise.all([crypto.subtle.digest("SHA-256", encoder.encode(given)), crypto.subtle.digest("SHA-256", encoder.encode(expected))]);
	return (crypto.subtle as SubtleCrypto & { timingSafeEqual(a: ArrayBuffer, b: ArrayBuffer): boolean }).timingSafeEqual(a, b);
}

async function isOwner(request: Request, env: AgentEnv): Promise<boolean> {
	const token = request.headers.get("authorization")?.replace(/^Bearer /i, "") ?? "";
	return token.length > 0 && (await sameSecret(token, env.OWNER_TOKEN));
}

function json(value: unknown, status = 200): Response {
	return Response.json(value, { status });
}

export class AgentRpc extends WorkerEntrypoint<AgentEnv> {
	async ask(agent: string, prompt: string) {
		return this.env.AGENTS.getByName(agent).ask(prompt);
	}

	async tools(agent: string) {
		const response = await handleMcp(new Request("https://rpc/mcp", { method: "POST", body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list" }) }), this.env.AGENTS.getByName(agent));
		return ((await response.json()) as { result: { tools: Array<{ name: string }> } }).result.tools.map((tool) => tool.name);
	}
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname === "/") return new Response("capa agent. Routes: /agents/<name>[/grants|/mcp|/evidence|/execute|/transcript]", { headers: { "content-type": "text/plain" } });
		const [, root, name, action = "ask"] = url.pathname.split("/");
		if (root !== "agents" || !name || !AGENT_NAME.test(name)) return new Response("Not found", { status: 404 });
		if (!(await isOwner(request, env))) return json({ error: "Owner token required" }, 401);

		const agent = env.AGENTS.getByName(name);
		switch (`${request.method} ${action}`) {
			case "PUT grants":
				return json(await agent.setGrants(await request.json()));
			case "GET grants":
				return json(await agent.grants());
			case "POST ask": {
				const { prompt } = (await request.json()) as { prompt?: string };
				if (!prompt) return json({ error: "Send { prompt }" }, 400);
				return json(await agent.ask(prompt));
			}
			case "POST execute": {
				const { code } = (await request.json()) as { code?: string };
				if (!code) return json({ error: "Send { code }" }, 400);
				return json(await agent.execute(code));
			}
			case "POST mcp":
				return handleMcp(request, agent);
			case "GET evidence":
				return json(await agent.evidence());
			case "GET transcript":
				return json(await agent.transcript());
			case "GET rpc-tools":
				return json(await env.SELF_RPC.tools(name));
			default:
				return new Response("Not found", { status: 404 });
		}
	},
} satisfies ExportedHandler<AgentEnv>;
