import { afterEach, describe, expect, test } from "bun:test";
import { fetchProof } from "./runtime.template.ts";

const originalFetch = globalThis.fetch;

afterEach(() => {
	globalThis.fetch = originalFetch;
});

function captureFetch() {
	let request: { url: string; init?: RequestInit } | undefined;
	globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
		request = { url: String(url), init };
		return new Response('{"ok":true}', { status: 200, headers: { "content-type": "application/json" } });
	}) as typeof fetch;
	return () => request;
}

const args = {
	operationId: "PostCharges",
	namespace: "charges",
	method: "create",
	http: "post",
	path: "/v1/charges",
	risk: "high" as const,
	body: { amount: 2500 },
};

describe("runtime per-call auth", () => {
	test("uses static API key when no override is provided", async () => {
		const read = captureFetch();
		await fetchProof("static-key", args);
		const headers = read()?.init?.headers as Record<string, string>;
		expect(headers.Authorization).toBe("Bearer static-key");
	});

	test("per-call API key overrides static key and never appears in evidence", async () => {
		const read = captureFetch();
		const result = await fetchProof("static-key", {
			...args,
			options: { auth: { apiKey: "tenant-secret" } },
		});
		const headers = read()?.init?.headers as Record<string, string>;
		expect(headers.Authorization).toBe("Bearer tenant-secret");
		expect(JSON.stringify(result.evidence)).not.toContain("tenant-secret");
	});

	test("per-call extra auth headers are sent", async () => {
		const read = captureFetch();
		await fetchProof(undefined, {
			...args,
			options: { auth: { apiKey: "tenant-secret", headers: { "Client-Id": "tenant-client" } } },
		});
		const headers = read()?.init?.headers as Record<string, string>;
		expect(headers.Authorization).toBe("Bearer tenant-secret");
		expect(headers["Client-Id"]).toBe("tenant-client");
	});

	test("throws a bounded error when no default or per-call key exists", async () => {
		await expect(fetchProof(undefined, args)).rejects.toThrow("pass options.auth.apiKey");
	});
});
