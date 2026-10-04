import { test } from "node:test";
import assert from "node:assert/strict";
import { withAuth } from "../src/call-args.ts";

const key = { apiKey: "vault-key" };

test("a request body with a query field reaches the provider unchanged", () => {
	const body = { query: "status:'active'", limit: 10 };
	const [sentBody, options] = withAuth([body], 1, key);
	assert.deepEqual(sentBody, { query: "status:'active'", limit: 10 });
	assert.deepEqual(options, { auth: { apiKey: "vault-key" } });
});

test("agent query options are kept and the vault key replaces any agent auth", () => {
	const [owner, repo, options] = withAuth(["acoyfellow", "capa", { query: { per_page: 5 }, auth: { apiKey: "agent-supplied" } }], 2, key);
	assert.equal(owner, "acoyfellow");
	assert.equal(repo, "capa");
	assert.deepEqual(options, { query: { per_page: 5 }, auth: { apiKey: "vault-key" } });
});

test("missing optional arguments still put the key in the options position", () => {
	const args = withAuth([], 1, key);
	assert.deepEqual(args, [undefined, { auth: { apiKey: "vault-key" } }]);
});

test("a basic-auth username from the vault is sent with the key", () => {
	const [, options] = withAuth([undefined], 1, { apiKey: "secret", username: "AC123" });
	assert.deepEqual(options, { auth: { apiKey: "secret", username: "AC123" } });
});
