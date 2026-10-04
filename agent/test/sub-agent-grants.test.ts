import { test } from "node:test";
import assert from "node:assert/strict";
import { effectiveGrants, parseGrants, withinParent } from "../src/grants.ts";

const parentRead = parseGrants([{ capability: "github", methods: "*" }]);
const parentNarrow = parseGrants([{ capability: "github", methods: ["repos.retrieve"] }]);

test("a sub-agent cannot get a capability its parent lacks", () => {
	const check = withinParent([], parseGrants([{ capability: "github", methods: "*" }]));
	assert.equal(check.ok, false);
});

test("a sub-agent cannot get writes its parent lacks", () => {
	const check = withinParent(parentRead, parseGrants([{ capability: "github", methods: "*", writes: true }]));
	assert.equal(check.ok, false);
	assert.match((check as { reason: string }).reason, /may not write/);
});

test("a sub-agent cannot widen a parent's method list", () => {
	assert.equal(withinParent(parentNarrow, parseGrants([{ capability: "github", methods: "*" }])).ok, false);
	assert.equal(withinParent(parentNarrow, parseGrants([{ capability: "github", methods: ["repos.retrieve"] }])).ok, true);
});

test("when the parent loses a grant, the sub-agent loses it too", () => {
	const child = parseGrants([{ capability: "github", methods: ["repos.retrieve"] }]);
	assert.deepEqual(effectiveGrants(parentRead, child).length, 1);
	assert.deepEqual(effectiveGrants([], child), []);
});
