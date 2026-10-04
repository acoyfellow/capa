import type { AuthRequest, OAuthHelpers } from "@cloudflare/workers-oauth-provider";

export type AuthEnv = {
	OAUTH_KV: KVNamespace;
	OAUTH_PROVIDER: OAuthHelpers;
	ACCESS_CLIENT_ID: string;
	ACCESS_CLIENT_SECRET: string;
	ACCESS_ISSUER: string;
	COOKIE_SECRET: string;
};

export type UserProps = { user: string; email: string };

const STATE_TTL_SECONDS = 600;
const SESSION_COOKIE = "capa_session";
const SESSION_TTL_SECONDS = 3600;
const CONSENT_TTL_SECONDS = 600;

type PendingLogin = { kind: "mcp"; authRequest: AuthRequest } | { kind: "session"; returnTo: string };

function base64Url(bytes: Uint8Array): string {
	return btoa(String.fromCharCode(...bytes)).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function randomToken(): string {
	return base64Url(crypto.getRandomValues(new Uint8Array(32)));
}

async function sha256(value: string): Promise<string> {
	return base64Url(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))));
}

async function hmacKey(secret: string): Promise<CryptoKey> {
	return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

async function sign(secret: string, value: string): Promise<string> {
	const mac = await crypto.subtle.sign("HMAC", await hmacKey(secret), new TextEncoder().encode(value));
	return `${value}.${base64Url(new Uint8Array(mac))}`;
}

async function verify(secret: string, signed: string): Promise<string | undefined> {
	const dot = signed.lastIndexOf(".");
	if (dot < 1) return undefined;
	const value = signed.slice(0, dot);
	return (await sign(secret, value)) === signed ? value : undefined;
}

function readCookie(request: Request, name: string): string | undefined {
	const header = request.headers.get("cookie") ?? "";
	for (const part of header.split(";")) {
		const [key, ...rest] = part.trim().split("=");
		if (key === name) return rest.join("=");
	}
	return undefined;
}

type JwtHeader = { kid?: string; alg?: string };
type IdTokenClaims = { iss: string; aud: string | string[]; exp: number; sub: string; email?: string; nonce?: string };

function decodeSegment<T>(segment: string): T {
	const padded = segment.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(segment.length / 4) * 4, "=");
	return JSON.parse(atob(padded)) as T;
}

async function verifyIdToken(env: AuthEnv, idToken: string, expectedNonce: string): Promise<IdTokenClaims> {
	const [headerPart, payloadPart, signaturePart] = idToken.split(".");
	const header = decodeSegment<JwtHeader>(headerPart);
	if (header.alg !== "RS256") throw new Error("Unexpected ID token algorithm");
	const jwks = (await (await fetch(`${env.ACCESS_ISSUER}/jwks`)).json()) as { keys: Array<JsonWebKey & { kid: string }> };
	const jwk = jwks.keys.find((key) => key.kid === header.kid);
	if (!jwk) throw new Error("Unknown ID token signing key");
	const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
	const signature = Uint8Array.from(atob(signaturePart.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(signaturePart.length / 4) * 4, "=")), (c) => c.charCodeAt(0));
	const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, signature, new TextEncoder().encode(`${headerPart}.${payloadPart}`));
	if (!valid) throw new Error("Invalid ID token signature");
	const claims = decodeSegment<IdTokenClaims>(payloadPart);
	const audiences = Array.isArray(claims.aud) ? claims.aud : [claims.aud];
	if (claims.iss !== env.ACCESS_ISSUER) throw new Error("Wrong ID token issuer");
	if (!audiences.includes(env.ACCESS_CLIENT_ID)) throw new Error("Wrong ID token audience");
	if (claims.exp * 1000 < Date.now()) throw new Error("Expired ID token");
	if (claims.nonce !== expectedNonce) throw new Error("ID token nonce mismatch");
	return claims;
}

async function beginLogin(env: AuthEnv, origin: string, pending: PendingLogin): Promise<Response> {
	const state = randomToken();
	const nonce = randomToken();
	const verifier = randomToken();
	await env.OAUTH_KV.put(`login:${state}`, JSON.stringify({ pending, nonce, verifier }), { expirationTtl: STATE_TTL_SECONDS });
	const url = new URL(`${env.ACCESS_ISSUER}/authorization`);
	url.search = new URLSearchParams({
		response_type: "code",
		client_id: env.ACCESS_CLIENT_ID,
		redirect_uri: `${origin}/callback`,
		scope: "openid email profile",
		state,
		nonce,
		code_challenge: await sha256(verifier),
		code_challenge_method: "S256",
	}).toString();
	return Response.redirect(url.toString(), 302);
}

export async function handleAuthorize(request: Request, env: AuthEnv): Promise<Response> {
	const authRequest = await env.OAUTH_PROVIDER.parseAuthRequest(request);
	const client = await env.OAUTH_PROVIDER.lookupClient(authRequest.clientId);
	if (!client) return new Response("Unknown client", { status: 400 });
	const session = await readSession(request, env);
	if (session) return Response.redirect(await consentUrl(env, new URL(request.url).origin, authRequest, session), 302);
	return beginLogin(env, new URL(request.url).origin, { kind: "mcp", authRequest });
}

type PendingConsent = { user: string; authRequest: AuthRequest };

async function consentUrl(env: AuthEnv, origin: string, authRequest: AuthRequest, props: UserProps): Promise<string> {
	const id = randomToken();
	const pending: PendingConsent = { user: props.user, authRequest };
	await env.OAUTH_KV.put(`consent:${id}`, JSON.stringify(pending), { expirationTtl: CONSENT_TTL_SECONDS });
	return `${origin}/consent?id=${id}`;
}

async function readConsent(env: AuthEnv, id: string, props: UserProps): Promise<PendingConsent | undefined> {
	const pending = await env.OAUTH_KV.get<PendingConsent>(`consent:${id}`, "json");
	return pending?.user === props.user ? pending : undefined;
}

export type ConsentView = { id: string; clientName: string; redirectUri: string; email: string };

export async function consentView(request: Request, env: AuthEnv, props: UserProps): Promise<ConsentView | undefined> {
	const id = new URL(request.url).searchParams.get("id") ?? "";
	const pending = await readConsent(env, id, props);
	if (!pending) return undefined;
	const client = await env.OAUTH_PROVIDER.lookupClient(pending.authRequest.clientId);
	return { id, clientName: client?.clientName ?? pending.authRequest.clientId, redirectUri: pending.authRequest.redirectUri, email: props.email };
}

export async function decideConsent(env: AuthEnv, id: string, approved: boolean, props: UserProps): Promise<Response> {
	const pending = await readConsent(env, id, props);
	if (!pending) return new Response("This sign-in request expired. Start again from your MCP client.", { status: 400 });
	await env.OAUTH_KV.delete(`consent:${id}`);
	if (approved) return completeMcpAuthorization(env, pending.authRequest, props);
	const denied = new URL(pending.authRequest.redirectUri);
	denied.searchParams.set("error", "access_denied");
	if (pending.authRequest.state) denied.searchParams.set("state", pending.authRequest.state);
	return Response.redirect(denied.toString(), 302);
}

async function readSession(request: Request, env: AuthEnv): Promise<UserProps | undefined> {
	const signed = readCookie(request, SESSION_COOKIE);
	const value = signed ? await verify(env.COOKIE_SECRET, decodeURIComponent(signed)) : undefined;
	if (!value) return undefined;
	const session = JSON.parse(value) as UserProps & { exp: number };
	return session.exp > Date.now() ? { user: session.user, email: session.email } : undefined;
}

function sessionCookie(signed: string): string {
	return `${SESSION_COOKIE}=${encodeURIComponent(signed)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}`;
}

async function completeMcpAuthorization(env: AuthEnv, authRequest: AuthRequest, props: UserProps): Promise<Response> {
	const { redirectTo } = await env.OAUTH_PROVIDER.completeAuthorization({
		request: authRequest,
		userId: props.user,
		metadata: { email: props.email },
		scope: authRequest.scope,
		props,
	});
	return Response.redirect(redirectTo, 302);
}

export async function requireSession(request: Request, env: AuthEnv): Promise<UserProps | Response> {
	const session = await readSession(request, env);
	if (session) return session;
	const url = new URL(request.url);
	return beginLogin(env, url.origin, { kind: "session", returnTo: url.pathname + url.search });
}

export async function handleCallback(request: Request, env: AuthEnv): Promise<Response> {
	const url = new URL(request.url);
	const state = url.searchParams.get("state") ?? "";
	const code = url.searchParams.get("code") ?? "";
	const stored = await env.OAUTH_KV.get<{ pending: PendingLogin; nonce: string; verifier: string }>(`login:${state}`, "json");
	if (!stored || !code) return new Response("Login expired. Start again.", { status: 400 });
	await env.OAUTH_KV.delete(`login:${state}`);

	const tokenResponse = await fetch(`${env.ACCESS_ISSUER}/token`, {
		method: "POST",
		headers: { "content-type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			grant_type: "authorization_code",
			code,
			redirect_uri: `${url.origin}/callback`,
			client_id: env.ACCESS_CLIENT_ID,
			client_secret: env.ACCESS_CLIENT_SECRET,
			code_verifier: stored.verifier,
		}),
	});
	if (!tokenResponse.ok) return new Response(`Access token exchange failed: ${tokenResponse.status}`, { status: 502 });
	const { id_token } = (await tokenResponse.json()) as { id_token: string };
	const claims = await verifyIdToken(env, id_token, stored.nonce);
	const props: UserProps = { user: claims.sub, email: claims.email ?? claims.sub };
	const cookie = sessionCookie(await sign(env.COOKIE_SECRET, JSON.stringify({ ...props, exp: Date.now() + SESSION_TTL_SECONDS * 1000 })));
	const location = stored.pending.kind === "mcp" ? await consentUrl(env, url.origin, stored.pending.authRequest, props) : stored.pending.returnTo;
	return new Response(null, { status: 302, headers: { location, "set-cookie": cookie } });
}
