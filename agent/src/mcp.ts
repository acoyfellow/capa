import type { CapaAgent } from "./agent.ts";

type JsonRpcRequest = { jsonrpc: "2.0"; id?: string | number | null; method: string; params?: Record<string, unknown> };

const TOOLS = [
	{
		name: "search",
		description: "Find capa operations this agent is allowed to call. Returns the call to write, the HTTP verb, the path, and the risk.",
		inputSchema: { type: "object", properties: { query: { type: "string" } }, required: ["query"] },
	},
	{
		name: "execute",
		description: "Run the body of an async JavaScript function in a sandbox with no network. Call APIs on the `capa` object, for example `return await capa.github.repos.retrieve('acoyfellow', 'capa')`.",
		inputSchema: { type: "object", properties: { code: { type: "string" } }, required: ["code"] },
	},
	{
		name: "ask",
		description: "Ask this capa agent a question in plain language. It plans and calls capa itself, within its grants.",
		inputSchema: { type: "object", properties: { prompt: { type: "string" } }, required: ["prompt"] },
	},
] as const;

function result(id: JsonRpcRequest["id"], value: unknown) {
	return Response.json({ jsonrpc: "2.0", id: id ?? null, result: value });
}

function error(id: JsonRpcRequest["id"], code: number, message: string) {
	return Response.json({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });
}

function text(value: unknown, isError = false) {
	return { content: [{ type: "text", text: JSON.stringify(value, null, 2) }], isError };
}

type AgentApi = Pick<CapaAgent, "search" | "execute" | "ask">;

export async function handleMcp(request: Request, agent: AgentApi): Promise<Response> {
	let message: JsonRpcRequest;
	try {
		message = (await request.json()) as JsonRpcRequest;
	} catch {
		return error(null, -32700, "Parse error: the request body is not valid JSON");
	}
	if (message.id === undefined) return new Response(null, { status: 202 });
	const args = (message.params?.arguments ?? {}) as Record<string, string>;

	switch (message.method) {
		case "initialize":
			return result(message.id, { protocolVersion: "2025-06-18", capabilities: { tools: {} }, serverInfo: { name: "capa-agent", version: "0.1.0" } });
		case "ping":
			return result(message.id, {});
		case "tools/list":
			return result(message.id, { tools: TOOLS });
		case "tools/call": {
			const name = message.params?.name;
			if (name === "search") return result(message.id, text(await agent.search(String(args.query ?? ""))));
			if (name === "execute") {
				const outcome = await agent.execute(String(args.code ?? ""));
				return result(message.id, text(outcome, !outcome.ok));
			}
			if (name === "ask") {
				const answer = await agent.ask(String(args.prompt ?? ""));
				return result(message.id, text(answer, answer.status !== "done"));
			}
			return error(message.id, -32602, `Unknown tool ${String(name)}`);
		}
		default:
			return error(message.id, -32601, `Method ${message.method} not found`);
	}
}
