import { afterEach, describe, expect, test } from "bun:test";
import { fetchProof, readBody, resolveAuthHeader, withQuery } from "./runtime.template.ts";
import { resolveAuthHeader as resolveBasicAuthHeader } from "../../../capabilities/htmlcsstoimage/src/generated/runtime.ts";

const originalFetch = globalThis.fetch;

afterEach(() => {
	globalThis.fetch = originalFetch;
});

const renderArgs = {
	operationId: "render-image",
	namespace: "image",
	method: "render",
	http: "get",
	path: "/v1/image/abc",
	risk: "low" as const,
};

describe("withQuery", () => {
	test("encodes scalars and repeats arrays", () => {
		expect(withQuery("https://x.test/a", { width: 1200, dl: true, tag: ["a", "b"], skip: undefined })).toBe("https://x.test/a?width=1200&dl=true&tag=a&tag=b");
	});

	test("leaves the url alone without query values", () => {
		expect(withQuery("https://x.test/a", { skip: null })).toBe("https://x.test/a");
		expect(withQuery("https://x.test/a", undefined)).toBe("https://x.test/a");
	});
});

describe("readBody", () => {
	test("returns bytes for binary responses", async () => {
		const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x00, 0xff]);
		const body = await readBody(new Response(png, { headers: { "content-type": "image/png" } }));
		expect(body).toEqual(png);
	});

	test("parses json and keeps text", async () => {
		expect(await readBody(new Response('{"a":1}', { headers: { "content-type": "application/json" } }))).toEqual({ a: 1 });
		expect(await readBody(new Response("hello", { headers: { "content-type": "text/plain" } }))).toBe("hello");
	});

	test("returns null for empty responses", async () => {
		expect(await readBody(new Response(null, { status: 204 }))).toBeNull();
	});
});

describe("resolveAuthHeader", () => {
	test("uses the stored key when no per-call auth is given", () => {
		expect(resolveAuthHeader({ apiKey: "key", username: "user" })).toEqual({ name: "Authorization", value: "Bearer key" });
	});

	test("prefers per-call credentials over stored ones", () => {
		expect(resolveAuthHeader({ apiKey: "stored" }, { auth: { apiKey: "call" } }).value).toBe("Bearer call");
	});

	test("joins a separate user id and key for basic auth", () => {
		expect(resolveBasicAuthHeader({ apiKey: "key", username: "user" }).value).toBe(`Basic ${btoa("user:key")}`);
	});

	test("keeps a combined user:key secret working for basic auth", () => {
		expect(resolveBasicAuthHeader({ apiKey: "user:key" }).value).toBe(`Basic ${btoa("user:key")}`);
	});

	test("accepts per-call basic credentials", () => {
		expect(resolveBasicAuthHeader({ apiKey: "stored", username: "stored" }, { auth: { username: "u", password: "p" } }).value).toBe(`Basic ${btoa("u:p")}`);
	});

	test("throws without any secret", () => {
		expect(() => resolveAuthHeader({})).toThrow("API key");
	});
});

describe("fetchProof", () => {
	test("sends query parameters and returns binary bodies intact", async () => {
		const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0xff]);
		let requested = "";
		globalThis.fetch = (async (url: string | URL | Request) => {
			requested = String(url);
			return new Response(png, { status: 200, headers: { "content-type": "image/png" } });
		}) as typeof fetch;

		const proof = await fetchProof("key", { ...renderArgs, options: { query: { width: 1200, height: 630 } } });

		expect(requested).toBe("https://api.stripe.com/v1/image/abc?width=1200&height=630");
		expect(proof.result).toEqual(png);
		expect(proof.evidence.act.request.url).toBe(requested);
	});
});
