import { DurableObject, WorkerEntrypoint } from "cloudflare:workers";
import OAuthProvider from "@cloudflare/workers-oauth-provider";
import catalog from "./index.gen.json";
import { type AuthEnv, type UserProps, handleAuthorize, handleCallback, requireSession } from "./auth";
import { type ConnectEnv, type ConnectionSummary, beginGithubConnect, finishGithubConnect, handleConnectPost, renderConnectPage } from "./connect";

type Operation = {
	operationId: string;
	namespace: string;
	method: string;
	http: string;
	path: string;
	risk: "low" | "medium" | "high";
};

type CatalogEntry = { name: string; title: string; auth: string; binding: string; worker: string; entrypoint: string; operations: Operation[] };

type CapabilityService = Record<string, Record<string, (...args: unknown[]) => Promise<unknown>>>;

interface Env extends AuthEnv {
	LOADER: WorkerLoader;
	VAULT: DurableObjectNamespace<Vault>;
	VAULT_KEY: SecretsStoreSecret;
	GITHUB_CLIENT_ID: string;
	GITHUB_CLIENT_SECRET: string;
}

type JsonRpcRequest = { jsonrpc: "2.0"; id?: string | number | null; method: string; params?: Record<string, unknown> };

const CAPABILITIES = catalog as CatalogEntry[];
const BINDING_BY_CAPABILITY = new Map(CAPABILITIES.map((entry) => [entry.name, entry.binding]));

const SAFE_HTTP_METHODS = new Set(["get", "head", "options"]);
const SANDBOX_COMPATIBILITY_DATE = "2026-09-01";
const SEARCH_LIMIT = 20;
const PROTOCOL_VERSION = "2025-06-18";

const TOOLS = [
	{
		name: "search",
		description:
			"Find capa operations across every generated capability. Returns the binding name, namespace, method, HTTP verb, path, and risk for each match. Use the results to write code for the execute tool.",
		inputSchema: {
			type: "object",
			properties: {
				query: { type: "string", description: "Words to match against operation IDs, namespaces, methods, and paths." },
				capability: { type: "string", description: "Limit results to one capability, for example github." },
			},
			required: ["query"],
		},
	},
	{
		name: "execute",
		description:
			"Run an async JavaScript function body in an isolated sandbox. The sandbox has no network access. It can call only capa bindings on the `capa` object, for example `return await capa.github.repos.retrieve('cloudflare', 'workers-sdk')`. Every call returns { result, evidence }. Write operations run only if the user allowed writes for that provider on the capa connections page.",
		inputSchema: {
			type: "object",
			properties: {
				code: { type: "string", description: "Body of an async function. Use `return` to send back a value." },
			},
			required: ["code"],
		},
	},
] as const;

const operationIndex = new Map<string, Operation>();
for (const entry of CAPABILITIES) {
	for (const operation of entry.operations) {
		operationIndex.set(`${entry.name}.${operation.namespace}.${operation.method}`, operation);
	}
}

function searchCatalog(query: string, capability?: string) {
	const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
	const matches: Array<Record<string, unknown>> = [];
	for (const entry of CAPABILITIES) {
		if (capability && entry.name !== capability) continue;
		for (const operation of entry.operations) {
			const haystack = `${operation.operationId} ${operation.namespace} ${operation.method} ${operation.path}`.toLowerCase();
			if (!terms.every((term) => haystack.includes(term))) continue;
			matches.push({
				call: `capa.${entry.name}.${operation.namespace}.${operation.method}(...)`,
				http: operation.http.toUpperCase(),
				path: operation.path,
				risk: operation.risk,
				operationId: operation.operationId,
			});
			if (matches.length >= SEARCH_LIMIT) return matches;
		}
	}
	return matches;
}

type VaultRecord = { iv: Uint8Array; sealed: ArrayBuffer; source: "oauth" | "key"; allowWrites: boolean; connectedAt: string };

const CONNECTION_PREFIX = "connection:";
const REVOKED_GRANT_PREFIX = "revoked-grant:";

function connectionKey(capability: string): string {
	return `${CONNECTION_PREFIX}${capability}`;
}

export class Vault extends DurableObject<Env> {
	private async cryptoKey(): Promise<CryptoKey> {
		const raw = Uint8Array.from(atob(await this.env.VAULT_KEY.get()), (c) => c.charCodeAt(0));
		return crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["encrypt", "decrypt"]);
	}

	async put(capability: string, apiKey: string, source: "oauth" | "key"): Promise<void> {
		const iv = crypto.getRandomValues(new Uint8Array(12));
		const sealed = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await this.cryptoKey(), new TextEncoder().encode(apiKey));
		const previous = await this.ctx.storage.get<VaultRecord>(connectionKey(capability));
		await this.ctx.storage.put(connectionKey(capability), { iv, sealed, source, allowWrites: previous?.allowWrites ?? false, connectedAt: new Date().toISOString() });
	}

	async open(capability: string): Promise<{ apiKey: string; allowWrites: boolean } | undefined> {
		const record = await this.ctx.storage.get<VaultRecord>(connectionKey(capability));
		if (!record) return undefined;
		const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: record.iv }, await this.cryptoKey(), record.sealed);
		return { apiKey: new TextDecoder().decode(plain), allowWrites: record.allowWrites };
	}

	async remove(capability: string): Promise<string | undefined> {
		const opened = await this.open(capability);
		await this.ctx.storage.delete(connectionKey(capability));
		return opened?.apiKey;
	}

	async setWrites(capability: string, allowWrites: boolean): Promise<void> {
		const record = await this.ctx.storage.get<VaultRecord>(connectionKey(capability));
		if (record) await this.ctx.storage.put(connectionKey(capability), { ...record, allowWrites });
	}

	async revokeGrant(grantId: string): Promise<void> {
		await this.ctx.storage.put(`${REVOKED_GRANT_PREFIX}${grantId}`, Date.now());
	}

	async isGrantRevoked(grantId: string): Promise<boolean> {
		return (await this.ctx.storage.get(`${REVOKED_GRANT_PREFIX}${grantId}`)) !== undefined;
	}

	async connections(): Promise<ConnectionSummary[]> {
		const records = await this.ctx.storage.list<VaultRecord>({ prefix: CONNECTION_PREFIX });
		return [...records].map(([key, record]) => ({ capability: key.slice(CONNECTION_PREFIX.length), source: record.source, allowWrites: record.allowWrites, connectedAt: record.connectedAt }));
	}
}

type BridgeProps = { user: string };

export class CapaBridge extends WorkerEntrypoint<Env, BridgeProps> {
	async call(capability: string, namespace: string, method: string, args: unknown[]): Promise<unknown> {
		const key = `${capability}.${namespace}.${method}`;
		const operation = operationIndex.get(key);
		if (!operation) throw new Error(`Unknown operation ${key}. Use the search tool.`);
		const binding = BINDING_BY_CAPABILITY.get(capability);
		if (!binding) throw new Error(`Capability ${capability} is not bound to this gateway.`);
		const connection = await this.env.VAULT.getByName(this.ctx.props.user).open(capability);
		if (!connection) throw new Error(`${capability} is not connected. Ask the user to connect it on the capa connections page.`);
		const isWrite = !SAFE_HTTP_METHODS.has(operation.http.toLowerCase());
		if (isWrite && !connection.allowWrites) {
			throw new Error(`${key} is a ${operation.http.toUpperCase()} operation. The user has blocked writes for ${capability}. Ask the user to allow writes on the capa connections page.`);
		}
		const callArgs = withAuth(args, connection.apiKey);
		const service = (this.env as unknown as Record<string, CapabilityService>)[binding];
		const outcome = (await service[namespace][method](...callArgs)) as { result: unknown; evidence: { verdict: string; act: { status: number } } };
		return { result: outcome.result, evidence: outcome.evidence };
	}
}

function withAuth(args: unknown[], apiKey: string): unknown[] {
	const last = args.at(-1);
	const hasOptions = typeof last === "object" && last !== null && !Array.isArray(last) && ("query" in last || "auth" in last);
	if (hasOptions) return [...args.slice(0, -1), { ...(last as object), auth: { apiKey } }];
	return [...args, { auth: { apiKey } }];
}

function sandboxModule(code: string): string {
	return `
import { WorkerEntrypoint } from "cloudflare:workers";

function capabilityProxy(bridge, capability) {
	return new Proxy({}, {
		get: (_, namespace) => new Proxy({}, {
			get: (_, method) => (...args) => bridge.call(capability, String(namespace), String(method), args),
		}),
	});
}

async function agentCode(capa, console) {
${code}
}

export default class extends WorkerEntrypoint {
	async run() {
		const capa = new Proxy({}, { get: (_, capability) => capabilityProxy(this.env.BRIDGE, String(capability)) });
		const logs = [];
		const console = { log: (...values) => logs.push(values.map((v) => typeof v === "string" ? v : JSON.stringify(v)).join(" ")) };
		try {
			return { ok: true, value: await agentCode(capa, console), logs };
		} catch (error) {
			return { ok: false, error: String((error && error.message) || error), logs };
		}
	}
}
`;
}

async function runSandbox(env: Env, ctx: ExecutionContext, user: string, code: string) {
	const bridge = (ctx as ExecutionContext & { exports: { CapaBridge: (options: { props: BridgeProps }) => Fetcher } }).exports.CapaBridge({
		props: { user },
	});
	const worker = env.LOADER.load({
		compatibilityDate: SANDBOX_COMPATIBILITY_DATE,
		mainModule: "sandbox.js",
		modules: { "sandbox.js": sandboxModule(code) },
		env: { BRIDGE: bridge },
		globalOutbound: null,
		limits: { cpuMs: 5000, subRequests: 50 },
	});
	const entry = worker.getEntrypoint() as unknown as { run(): Promise<unknown> };
	try {
		return await entry.run();
	} catch (error) {
		return { ok: false, error: String((error as Error).message ?? error), logs: [] };
	}
}

function rpcResult(id: JsonRpcRequest["id"], result: unknown) {
	return Response.json({ jsonrpc: "2.0", id: id ?? null, result });
}

function rpcError(id: JsonRpcRequest["id"], code: number, message: string) {
	return Response.json({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });
}

function toolText(value: unknown, isError = false) {
	return { content: [{ type: "text", text: JSON.stringify(value, null, 2) }], isError };
}

async function handleMcp(request: Request, env: Env, ctx: ExecutionContext, user: string): Promise<Response> {
	const message = (await request.json()) as JsonRpcRequest;
	if (message.id === undefined) return new Response(null, { status: 202 });

	switch (message.method) {
		case "initialize":
			return rpcResult(message.id, {
				protocolVersion: PROTOCOL_VERSION,
				capabilities: { tools: {} },
				serverInfo: { name: "capa", version: "0.1.0" },
			});
		case "ping":
			return rpcResult(message.id, {});
		case "tools/list":
			return rpcResult(message.id, { tools: TOOLS });
		case "tools/call": {
			const name = message.params?.name as string;
			const args = (message.params?.arguments ?? {}) as Record<string, unknown>;
			if (name === "search") return rpcResult(message.id, toolText(searchCatalog(String(args.query ?? ""), args.capability as string | undefined)));
			if (name === "execute") {
				const outcome = (await runSandbox(env, ctx, user, String(args.code ?? ""))) as { ok: boolean };
				return rpcResult(message.id, toolText(outcome, !outcome.ok));
			}
			return rpcError(message.id, -32602, `Unknown tool ${name}`);
		}
		default:
			return rpcError(message.id, -32601, `Method ${message.method} not found`);
	}
}

const GATEWAY_ORIGIN = "https://capa-gateway.coy.workers.dev";
const BOUND_CAPABILITIES = CAPABILITIES.map((entry) => entry.name);

function connectEnv(env: Env): ConnectEnv {
	return Object.assign(Object.create(env), {
		vaultFor: (user: string) => env.VAULT.getByName(user),
		boundCapabilities: BOUND_CAPABILITIES,
	}) as ConnectEnv;
}

function grantIdFromBearer(request: Request): string | undefined {
	const token = request.headers.get("authorization")?.replace(/^Bearer /i, "");
	return token?.split(":")[1];
}

export class McpApi extends WorkerEntrypoint<Env, UserProps> {
	async fetch(request: Request): Promise<Response> {
		if (request.method !== "POST") return new Response("Use POST", { status: 405 });
		const grantId = grantIdFromBearer(request);
		if (!grantId || (await this.env.VAULT.getByName(this.ctx.props.user).isGrantRevoked(grantId))) {
			return new Response(JSON.stringify({ error: "invalid_token", error_description: "Grant revoked" }), {
				status: 401,
				headers: { "content-type": "application/json", "www-authenticate": 'Bearer error="invalid_token"' },
			});
		}
		return handleMcp(request, this.env, this.ctx, this.ctx.props.user);
	}
}

function signOut(): Response {
	return new Response(null, {
		status: 302,
		headers: {
			location: "/",
			"set-cookie": "capa_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
		},
	});
}

const site: ExportedHandler<Env> = {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname === "/authorize") return handleAuthorize(request, env);
		if (url.pathname === "/callback") return handleCallback(request, env);
		if (url.pathname === "/logout") return signOut();
		if (url.pathname === "/") return new Response("capa gateway. MCP endpoint: /mcp. Manage connections: /connect", { headers: { "content-type": "text/plain" } });
		if (!url.pathname.startsWith("/connect")) return new Response("Not found", { status: 404 });

		const session = await requireSession(request, env);
		if (session instanceof Response) return session;
		const connect = connectEnv(env);
		if (url.pathname === "/connect" && request.method === "GET") {
			const grants = await env.OAUTH_PROVIDER.listUserGrants(session.user);
			return renderConnectPage(connect, session, grants.items.map((g) => ({ id: g.id, clientId: g.clientId, createdAt: g.createdAt })));
		}
		if (url.pathname === "/connect/github") return beginGithubConnect(request, connect, session);
		if (url.pathname === "/connect/github/callback") return finishGithubConnect(request, connect, session);
		if (request.method === "POST") return handleConnectPost(request, connect, session);
		return new Response("Not found", { status: 404 });
	},
};

export default new OAuthProvider<Env>({
	apiRoute: "/mcp",
	apiHandler: McpApi,
	defaultHandler: site,
	authorizeEndpoint: "/authorize",
	tokenEndpoint: "/token",
	clientRegistrationEndpoint: "/register",
	accessTokenTTL: 3600,
	refreshTokenTTL: 2592000,
	resourceMetadata: {
		resource: `${GATEWAY_ORIGIN}/mcp`,
		authorization_servers: [GATEWAY_ORIGIN],
		resource_name: "capa",
		bearer_methods_supported: ["header"],
	},
});
