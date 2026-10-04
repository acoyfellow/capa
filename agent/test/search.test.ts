import { test } from "node:test";
import assert from "node:assert/strict";
import { searchOperations } from "../src/catalog.ts";

const allowAll = () => true;

test("a search that names the capability still finds its operations", () => {
	const calls = searchOperations("github repos retrieve", allowAll).map((match) => match.call);
	assert.ok(calls.includes("capa.github.repos.retrieve(...)"));
});

test("search hides operations the agent may not call", () => {
	assert.deepEqual(searchOperations("github repos retrieve", () => false), []);
});
