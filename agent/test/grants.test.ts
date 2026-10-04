import { test } from "node:test";
import assert from "node:assert/strict";
import { decide, parseGrants, visibleOperations, type Operation } from "../src/grants.ts";

const repo: Operation = { operationId: "repos/get", namespace: "repos", method: "retrieve", http: "get", path: "/repos/{owner}/{repo}", risk: "low", optionsIndex: 2 };
const star: Operation = { operationId: "activity/star", namespace: "user", method: "putStarred", http: "put", path: "/user/starred/{owner}/{repo}", risk: "medium", optionsIndex: 2 };

test("an agent with no github grant cannot call github", () => {
	const decision = decide("billing", [], "github", repo);
	assert.equal(decision.allowed, false);
	assert.match((decision as { reason: string }).reason, /no grant for github/);
});

test("a read-only grant allows reads and blocks writes", () => {
	const grants = parseGrants([{ capability: "github", methods: "*" }]);
	assert.equal(decide("triage", grants, "github", repo).allowed, true);
	const write = decide("triage", grants, "github", star);
	assert.equal(write.allowed, false);
	assert.match((write as { reason: string }).reason, /may not write to github/);
});

test("a method list allows only the listed methods", () => {
	const grants = parseGrants([{ capability: "github", methods: ["repos.retrieve"], writes: true }]);
	assert.equal(decide("a", grants, "github", repo).allowed, true);
	assert.equal(decide("a", grants, "github", star).allowed, false);
});

test("search shows an agent only the operations it may call", () => {
	const grants = parseGrants([{ capability: "github", methods: "*" }]);
	assert.deepEqual(visibleOperations(grants, "github", [repo, star]).map((op) => op.method), ["retrieve"]);
	assert.deepEqual(visibleOperations([], "github", [repo, star]), []);
});

test("writes are off unless the owner sets writes to true", () => {
	assert.equal(parseGrants([{ capability: "github", methods: "*", writes: "yes" }])[0].writes, false);
	assert.throws(() => parseGrants({ capability: "github" }), /JSON array/);
	assert.throws(() => parseGrants([{ capability: "github", methods: "all" }]), /needs methods/);
});
