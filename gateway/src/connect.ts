import { type AuthEnv, type ConsentView, type UserProps, consentView, decideConsent } from "./auth";

export type ConnectionSummary = { capability: string; source: "oauth" | "key"; allowWrites: boolean; connectedAt: string };

export interface VaultApi {
	put(capability: string, apiKey: string, source: "oauth" | "key", username?: string): Promise<void>;
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
	basicAuthCapabilities: readonly string[];
};

const GITHUB_SCOPE = "read:user";
const STATE_TTL_SECONDS = 600;

function escapeHtml(value: string): string {
	return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

const PROVIDER_NAMES: Record<string, string> = {
	blooio: "Blooio",
	box: "Box",
	discord: "Discord",
	github: "GitHub",
	gitlab: "GitLab",
	htmlcsstoimage: "HTML/CSS to Image",
	jira: "Jira",
	kubernetes: "Kubernetes",
	sentry: "Sentry",
	slack: "Slack",
	stripe: "Stripe",
	twilio: "Twilio",
	"twilio-messaging": "Twilio Messaging",
	"twilio-verify": "Twilio Verify",
	twitch: "Twitch",
	zoom: "Zoom",
};

function providerName(capability: string): string {
	return PROVIDER_NAMES[capability] ?? capability;
}

function initials(name: string): string {
	const words = name.split(/[\s/-]+/).filter(Boolean);
	return words.length > 1 ? `${words[0][0]}${words[1][0]}`.toUpperCase() : name.slice(0, 2);
}

const STYLES = `
*{box-sizing:border-box}
body{margin:0;font:14px/1.5 system-ui,-apple-system,sans-serif;color:#293a34;background:#fff}
.shell{display:grid;grid-template-columns:15rem 1fr;min-height:100vh}
.side{background:#fbfaf7;border-right:1px solid #e4e7e1;padding:1.25rem 1rem;display:flex;flex-direction:column;gap:1.5rem}
.brand{display:flex;align-items:center;gap:.5rem;font-weight:600;font-size:1rem}
.brand i{width:.6rem;height:.6rem;border-radius:50%;background:#3b5a45;display:inline-block}
.nav a{display:block;padding:.4rem .6rem;border-radius:6px;color:inherit;text-decoration:none;font-weight:500;background:#eff2ec}
.who{margin-top:auto;font-size:.8125rem;color:#6f7770;display:flex;flex-direction:column;gap:.25rem}
.who a{color:inherit}
main{padding:2.5rem 3rem;max-width:64rem}
h1{font-size:1.5rem;font-weight:600;margin:0 0 .25rem}
.lede{margin:0;color:#6f7770}
.note{margin:.75rem 0 0;font-size:.8125rem;color:#6f7770}
h2{font-size:.9375rem;font-weight:600;margin:2.5rem 0 .75rem;display:flex;align-items:center;gap:.5rem}
.count{font-weight:500;font-size:.75rem;background:#eff2ec;border-radius:999px;padding:0 .5rem}
.bar{display:flex;align-items:center;justify-content:space-between;gap:1rem}
.bar input{width:16rem;max-width:100%}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:.75rem;padding:0;margin:0;list-style:none}
.card{border:1px solid #e4e7e1;border-radius:10px;padding:.875rem 1rem;background:#fff}
.row{display:flex;align-items:center;gap:.75rem}
.avatar{flex:none;width:2.25rem;height:2.25rem;border-radius:8px;background:#eff2ec;display:grid;place-items:center;font-weight:600;font-size:.8125rem}
.meta{min-width:0;flex:1}
.meta strong{display:block;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.muted{color:#6f7770;font-size:.8125rem}
.dot{display:inline-block;width:.45rem;height:.45rem;border-radius:50%;background:#3b5a45;margin:0 .25rem .1rem 0}
.badge{font-size:.75rem;font-weight:500;border:1px solid #e4e7e1;border-radius:999px;padding:.05rem .5rem;white-space:nowrap}
.badge.live{background:#3b5a45;border-color:#3b5a45;color:#fff}
button,.button,input,summary{font:inherit;color:inherit}
button,.button,summary{display:inline-block;padding:.3rem .75rem;border:1px solid #e4e7e1;border-radius:6px;background:#fff;cursor:pointer;text-decoration:none;font-weight:500;white-space:nowrap}
.primary{background:#293a34;border-color:#293a34;color:#fff}
input[type=password],input[type=search]{padding:.35rem .6rem;border:1px solid #e4e7e1;border-radius:6px;background:#fff;min-width:0}
details{margin-top:.75rem}
summary{list-style:none}
summary::-webkit-details-marker{display:none}
details[open]>summary{background:#eff2ec}
.panel{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.75rem;width:100%}
.panel input{flex:1}
form{margin:0}
.empty{background:#fbfaf7;border:1px dashed #e4e7e1;border-radius:10px;padding:1.5rem;text-align:center}
.empty strong{display:block;font-weight:600;margin-bottom:.25rem}
.empty code{display:inline-block;margin-top:.75rem;padding:.3rem .6rem;border:1px solid #e4e7e1;border-radius:6px;background:#fff}
code{font:500 .8125rem ui-monospace,SFMono-Regular,Menlo,monospace}
.notice{border:1px solid #d55d18;background:#fff8e9;border-radius:8px;padding:.6rem .8rem;margin:0 0 1.25rem}
.single{max-width:30rem;margin:15vh auto;padding:0 1.25rem}
.single .actions{display:flex;gap:.5rem;margin-top:1.5rem}
@media (max-width:48rem){.shell{grid-template-columns:1fr}.side{flex-direction:row;align-items:center;border-right:0;border-bottom:1px solid #e4e7e1;padding:.75rem 1rem}.nav{display:none}.who{margin:0 0 0 auto;flex-direction:row;gap:.75rem}main{padding:1.5rem 1rem}.bar{flex-wrap:wrap}.bar input{width:100%}}
`;

const FILTER_SCRIPT = `document.getElementById("filter")?.addEventListener("input",(event)=>{const term=event.target.value.toLowerCase();for(const card of document.querySelectorAll("[data-provider]"))card.hidden=!card.dataset.provider.includes(term);});`;

function page(title: string, body: string): Response {
	return new Response(
		`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><style>${STYLES}</style></head><body>${body}<script>${FILTER_SCRIPT}</script></body></html>`,
		{ headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
	);
}

function sameOrigin(request: Request): boolean {
	const origin = request.headers.get("origin");
	return origin === new URL(request.url).origin;
}

function connectedCard(connection: ConnectionSummary): string {
	const name = providerName(connection.capability);
	const date = new Date(connection.connectedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
	return `<li class="card"><div class="row">
<span class="avatar">${escapeHtml(initials(name))}</span>
<span class="meta"><strong>${escapeHtml(name)}</strong><span class="muted"><span class="dot"></span>${connection.source === "oauth" ? "OAuth" : "API key"} · Connected ${escapeHtml(date)}</span></span>
<span class="badge${connection.allowWrites ? " live" : ""}">${connection.allowWrites ? "Writes allowed" : "Read only"}</span>
</div>
<details><summary>Manage</summary><div class="panel">
<form method="post" action="/connect/writes"><input type="hidden" name="capability" value="${connection.capability}"><input type="hidden" name="allowWrites" value="${connection.allowWrites ? "false" : "true"}"><button>${connection.allowWrites ? "Block writes" : "Allow writes"}</button></form>
<form method="post" action="/connect/disconnect"><input type="hidden" name="capability" value="${connection.capability}"><button>Disconnect</button></form>
</div></details></li>`;
}

function availableCard(capability: string, needsUsername: boolean): string {
	const name = providerName(capability);
	const header = (action: string) =>
		`<div class="row"><span class="avatar">${escapeHtml(initials(name))}</span><span class="meta"><strong>${escapeHtml(name)}</strong><span class="muted">${capability === "github" ? "OAuth" : "API key"}</span></span>${action}</div>`;
	const body =
		capability === "github"
			? header(`<a class="button primary" href="/connect/github">Connect</a>`)
			: `${header("")}<details><summary>Connect</summary><form class="panel" method="post" action="/connect/key"><input type="hidden" name="capability" value="${capability}">${needsUsername ? `<input type="text" name="username" placeholder="Username or account ID" aria-label="${escapeHtml(name)} username" required autocomplete="off">` : ""}<input type="password" name="apiKey" placeholder="Paste API key" aria-label="${escapeHtml(name)} API key" required autocomplete="off"><button class="primary">Save</button></form></details>`;
	return `<li class="card" data-provider="${escapeHtml(`${capability} ${name.toLowerCase()}`)}">${body}</li>`;
}

function clientRows(grants: Array<{ id: string; clientId: string; createdAt: number }>, origin: string): string {
	if (!grants.length) {
		return `<div class="empty"><strong>Bring capa to your workspace</strong><span class="muted">Add this URL to Claude, Cursor, or any MCP client. You will sign in here, then approve the client.</span><br><code>${escapeHtml(origin)}/mcp</code></div>`;
	}
	return `<ul class="grid">${grants
		.map((grant) => {
			const date = new Date(grant.createdAt * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
			return `<li class="card"><div class="row"><span class="avatar">MC</span><span class="meta"><strong><code>${escapeHtml(grant.clientId)}</code></strong><span class="muted">Signed in ${escapeHtml(date)}</span></span><form method="post" action="/connect/revoke-grant"><input type="hidden" name="grantId" value="${escapeHtml(grant.id)}"><button>Revoke</button></form></div></li>`;
		})
		.join("")}</ul>`;
}

const NOTICES: Record<string, string> = {
	"github-revoke-failed": "capa deleted your GitHub token from the vault, but GitHub did not confirm that it revoked the token. Revoke it at github.com/settings/applications.",
};

export async function renderConnectPage(env: ConnectEnv, props: UserProps, grants: Array<{ id: string; clientId: string; createdAt: number }>, origin: string, notice?: string): Promise<Response> {
	const connections = await env.vaultFor(props.user).connections();
	const connected = new Set(connections.map((c) => c.capability));
	const available = env.boundCapabilities.filter((capability) => !connected.has(capability));
	const connectedSection = connections.length
		? `<ul class="grid">${connections.map(connectedCard).join("")}</ul>`
		: `<div class="empty"><span class="muted">No providers connected yet. Connect one below.</span></div>`;
	return page(
		"capa connections",
		`<div class="shell"><aside class="side"><div class="brand"><i></i>capa</div><nav class="nav"><a href="/connect" aria-current="page">Connections</a></nav><div class="who"><span>${escapeHtml(props.email)}</span><a href="/logout">Sign out</a></div></aside>
<main>${notice && NOTICES[notice] ? `<p class="notice" role="alert">${escapeHtml(NOTICES[notice])}</p>` : ""}<h1>Connections</h1><p class="lede">Connect your providers once. Your MCP clients call them through capa.</p>
<p class="note">Keys are encrypted in your vault. Agents never receive them.</p>
<h2>Connected <span class="count">${connections.length}</span></h2>${connectedSection}
<div class="bar"><h2>Available providers <span class="count">${available.length}</span></h2><input id="filter" type="search" placeholder="Search providers" aria-label="Search providers"></div>
<ul class="grid">${available.map((capability) => availableCard(capability, env.basicAuthCapabilities.includes(capability))).join("")}</ul>
<h2>MCP clients <span class="count">${grants.length}</span></h2>${clientRows(grants, origin)}</main></div>`,
	);
}

async function formOf(request: Request): Promise<Record<string, string>> {
	return Object.fromEntries([...(await request.formData()).entries()].map(([key, value]) => [key, String(value)]));
}

function back(notice?: string): Response {
	return new Response(null, { status: 303, headers: { location: notice ? `/connect?notice=${notice}` : "/connect" } });
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
			if (env.basicAuthCapabilities.includes(capability) && !form.username) return new Response("This provider needs a username or account ID", { status: 400 });
			await vault.put(capability, form.apiKey, "key", form.username);
			return back();
		case "/connect/writes":
			await vault.setWrites(capability, form.allowWrites === "true");
			return back();
		case "/connect/disconnect": {
			const removed = await vault.remove(capability);
			if (!removed || capability !== "github") return back();
			const revoked = await revokeGithubToken(env, removed);
			return revoked ? back() : back("github-revoke-failed");
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

async function revokeGithubToken(env: ConnectEnv, accessToken: string): Promise<boolean> {
	const response = await fetch(`https://api.github.com/applications/${env.GITHUB_CLIENT_ID}/grant`, {
		method: "DELETE",
		headers: {
			authorization: `Basic ${btoa(`${env.GITHUB_CLIENT_ID}:${env.GITHUB_CLIENT_SECRET}`)}`,
			accept: "application/vnd.github+json",
			"content-type": "application/json",
			"user-agent": "capa-gateway",
		},
		body: JSON.stringify({ access_token: accessToken }),
	});
	return response.status === 204 || response.status === 404;
}

export async function renderConsentPage(request: Request, env: AuthEnv, props: UserProps): Promise<Response> {
	const view: ConsentView | undefined = await consentView(request, env, props);
	if (!view) return new Response("This sign-in request expired. Start again from your MCP client.", { status: 400 });
	const destination = new URL(view.redirectUri);
	return page(
		"Allow MCP client",
		`<h1>Allow ${escapeHtml(view.clientName)} to use capa?</h1>
<p>Signed in as ${escapeHtml(view.email)}. This client can call your connected providers. It cannot read your keys. Writes stay blocked until you allow them on the connections page.</p>
<p class="muted">After you approve, capa sends you back to <code>${escapeHtml(destination.origin)}</code>. Approve only if you started this sign-in from your own MCP client.</p>
<form method="post" action="/consent"><input type="hidden" name="id" value="${escapeHtml(view.id)}"><input type="hidden" name="decision" value="approve"><button class="primary">Approve</button></form>
<form method="post" action="/consent"><input type="hidden" name="id" value="${escapeHtml(view.id)}"><input type="hidden" name="decision" value="deny"><button>Deny</button></form>`,
	);
}

export async function handleConsentPost(request: Request, env: AuthEnv, props: UserProps): Promise<Response> {
	if (!sameOrigin(request)) return new Response("Cross-origin form post rejected", { status: 403 });
	const form = await formOf(request);
	return decideConsent(env, form.id ?? "", form.decision === "approve", props);
}
