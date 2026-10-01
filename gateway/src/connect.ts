import type { AuthEnv, UserProps } from "./auth";

export type ConnectionSummary = { capability: string; source: "oauth" | "key"; allowWrites: boolean; connectedAt: string };

export interface VaultApi {
	put(capability: string, apiKey: string, source: "oauth" | "key"): Promise<void>;
	remove(capability: string): Promise<string | undefined>;
	setWrites(capability: string, allowWrites: boolean): Promise<void>;
	connections(): Promise<ConnectionSummary[]>;
	revokeGrant(grantId: string): Promise<void>;
}

export type ConnectEnv = AuthEnv & {
	GITHUB_CLIENT_ID: string;
	GITHUB_CLIENT_SECRET: string;
	vaultFor(user: string): VaultApi;
	boundCapabilities: readonly string[];
};

const GITHUB_SCOPE = "read:user";
const STATE_TTL_SECONDS = 600;

function escapeHtml(value: string): string {
	return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

function page(title: string, body: string): Response {
	return new Response(
		`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title>
<style>
body{font:15px/1.5 system-ui,sans-serif;max-width:44rem;margin:3rem auto;padding:0 1.25rem;color:#17354a;background:#fff8e9}
h1{font-size:1.5rem;font-weight:600}h2{font-size:1.05rem;font-weight:600;margin-top:2rem}
table{width:100%;border-collapse:collapse}td,th{text-align:left;padding:.5rem .25rem;border-bottom:1px solid #ecd7b7;vertical-align:middle}
button,input,.button{font:inherit}button,.button{display:inline-block;padding:.3rem .75rem;border:1px solid #ecd7b7;border-radius:6px;background:#fff;color:inherit;text-decoration:none;cursor:pointer}
.primary{background:#d55d18;border-color:#d55d18;color:#fff}form.key{display:flex;gap:.5rem;margin-top:.5rem}input[type=password],select{padding:.3rem .5rem;border:1px solid #ecd7b7;border-radius:6px}
form{display:inline}.muted{color:#6b6458;font-size:.875rem}code{font-size:.85em}
</style></head><body>${body}</body></html>`,
		{ headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
	);
}

function sameOrigin(request: Request): boolean {
	const origin = request.headers.get("origin");
	return origin === new URL(request.url).origin;
}

export async function renderConnectPage(env: ConnectEnv, props: UserProps, grants: Array<{ id: string; clientId: string; createdAt: number }>): Promise<Response> {
	const connections = await env.vaultFor(props.user).connections();
	const byCapability = new Map(connections.map((c) => [c.capability, c]));
	const rows = env.boundCapabilities
		.map((capability) => {
			const connection = byCapability.get(capability);
			if (!connection) {
				const oauth = capability === "github" ? `<a class="button primary" href="/connect/github">Connect with GitHub</a> ` : "";
				return `<tr><td><strong>${capability}</strong></td><td class="muted">Not connected</td><td>${oauth}<form class="key" method="post" action="/connect/key"><input type="hidden" name="capability" value="${capability}"><input type="password" name="apiKey" placeholder="Paste API key" required autocomplete="off"> <button>Save key</button></form></td></tr>`;
			}
			return `<tr><td><strong>${capability}</strong></td><td>Connected by ${connection.source === "oauth" ? "OAuth" : "API key"}<br><span class="muted">${escapeHtml(connection.connectedAt)}</span></td><td>
<form method="post" action="/connect/writes"><input type="hidden" name="capability" value="${capability}"><input type="hidden" name="allowWrites" value="${connection.allowWrites ? "false" : "true"}"><button>${connection.allowWrites ? "Block writes" : "Allow writes"}</button></form>
<span class="muted">Writes ${connection.allowWrites ? "allowed" : "blocked"}</span>
<form method="post" action="/connect/disconnect"><input type="hidden" name="capability" value="${capability}"><button>Disconnect</button></form></td></tr>`;
		})
		.join("");
	const grantRows = grants.length
		? grants
				.map(
					(grant) =>
						`<tr><td><code>${escapeHtml(grant.clientId)}</code></td><td class="muted">${new Date(grant.createdAt * 1000).toISOString()}</td><td><form method="post" action="/connect/revoke-grant"><input type="hidden" name="grantId" value="${escapeHtml(grant.id)}"><button>Revoke</button></form></td></tr>`,
				)
				.join("")
		: `<tr><td colspan="3" class="muted">No MCP clients connected.</td></tr>`;
	return page(
		"capa connections",
		`<h1>capa connections</h1><p class="muted">Signed in as ${escapeHtml(props.email)}. Keys stay encrypted in your vault. Agents never see them.</p>
<h2>Providers</h2><table>${rows}</table>
<h2>MCP clients</h2><table>${grantRows}</table>`,
	);
}

async function formOf(request: Request): Promise<Record<string, string>> {
	return Object.fromEntries([...(await request.formData()).entries()].map(([key, value]) => [key, String(value)]));
}

function back(): Response {
	return new Response(null, { status: 303, headers: { location: "/connect" } });
}

export async function handleConnectPost(request: Request, env: ConnectEnv, props: UserProps): Promise<Response> {
	if (!sameOrigin(request)) return new Response("Cross-origin form post rejected", { status: 403 });
	const path = new URL(request.url).pathname;
	const form = await formOf(request);
	const vault = env.vaultFor(props.user);
	const capability = form.capability ?? "";
	if (form.capability !== undefined && !env.boundCapabilities.includes(capability)) return new Response("Unknown capability", { status: 400 });

	switch (path) {
		case "/connect/key":
			if (!form.apiKey) return new Response("Missing key", { status: 400 });
			await vault.put(capability, form.apiKey, "key");
			return back();
		case "/connect/writes":
			await vault.setWrites(capability, form.allowWrites === "true");
			return back();
		case "/connect/disconnect": {
			const removed = await vault.remove(capability);
			if (removed && capability === "github") await revokeGithubToken(env, removed);
			return back();
		}
		case "/connect/revoke-grant":
			await vault.revokeGrant(form.grantId ?? "");
			await env.OAUTH_PROVIDER.revokeGrant(form.grantId ?? "", props.user);
			return back();
		default:
			return new Response("Not found", { status: 404 });
	}
}

export async function beginGithubConnect(request: Request, env: ConnectEnv, props: UserProps): Promise<Response> {
	const state = crypto.randomUUID();
	await env.OAUTH_KV.put(`github:${state}`, props.user, { expirationTtl: STATE_TTL_SECONDS });
	const url = new URL("https://github.com/login/oauth/authorize");
	url.search = new URLSearchParams({
		client_id: env.GITHUB_CLIENT_ID,
		redirect_uri: `${new URL(request.url).origin}/connect/github/callback`,
		scope: GITHUB_SCOPE,
		state,
		allow_signup: "false",
	}).toString();
	return Response.redirect(url.toString(), 302);
}

export async function finishGithubConnect(request: Request, env: ConnectEnv, props: UserProps): Promise<Response> {
	const url = new URL(request.url);
	const state = url.searchParams.get("state") ?? "";
	const owner = await env.OAUTH_KV.get(`github:${state}`);
	if (!owner || owner !== props.user) return new Response("GitHub connect expired or belongs to another user.", { status: 400 });
	await env.OAUTH_KV.delete(`github:${state}`);
	const response = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: { accept: "application/json", "content-type": "application/json", "user-agent": "capa-gateway" },
		body: JSON.stringify({
			client_id: env.GITHUB_CLIENT_ID,
			client_secret: env.GITHUB_CLIENT_SECRET,
			code: url.searchParams.get("code"),
			redirect_uri: `${url.origin}/connect/github/callback`,
		}),
	});
	const body = (await response.json()) as { access_token?: string; error?: string };
	if (!body.access_token) return new Response(`GitHub did not return a token: ${body.error ?? response.status}`, { status: 502 });
	await env.vaultFor(props.user).put("github", body.access_token, "oauth");
	return back();
}

async function revokeGithubToken(env: ConnectEnv, accessToken: string): Promise<void> {
	await fetch(`https://api.github.com/applications/${env.GITHUB_CLIENT_ID}/grant`, {
		method: "DELETE",
		headers: {
			authorization: `Basic ${btoa(`${env.GITHUB_CLIENT_ID}:${env.GITHUB_CLIENT_SECRET}`)}`,
			accept: "application/vnd.github+json",
			"content-type": "application/json",
			"user-agent": "capa-gateway",
		},
		body: JSON.stringify({ access_token: accessToken }),
	});
}
