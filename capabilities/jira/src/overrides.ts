/**
 * Per-method evidence overrides for capa-jira.
 *
 * Generic HTTP-status assertions run on every method. This file layers
 * richer assertions on the methods where high-stakes operations need
 * verification beyond "the call returned 2xx".
 *
 * Add overrides for any method you want stronger evidence on.
 * Method names match the generated namespace surface (see
 * src/generated/capability.gen.ts and manifest.gen.ts).
 */

import type { MethodOverride, AssertResult } from "./generated/runtime.ts";

function field(path: string, body: unknown): unknown {
	if (typeof body !== "object" || body === null) return undefined;
	const parts = path.split(".");
	let cur: any = body;
	for (const p of parts) {
		if (cur == null) return undefined;
		cur = cur[p];
	}
	return cur;
}

function exists(path: string) {
	return (body: unknown): AssertResult => {
		const actual = field(path, body);
		return {
			kind: `field:${path}:exists`,
			expected: "non-null",
			actual,
			passed: actual !== undefined && actual !== null,
		};
	};
}

function equals(path: string, expected: unknown) {
	return (body: unknown): AssertResult => {
		const actual = field(path, body);
		return {
			kind: `field:${path}==${JSON.stringify(expected)}`,
			expected,
			actual,
			passed: actual === expected,
		};
	};
}

function isType(path: string, type: "number" | "string" | "boolean" | "object") {
	return (body: unknown): AssertResult => {
		const actual = field(path, body);
		const passed = type === "object"
			? typeof actual === "object" && actual !== null
			: typeof actual === type;
		return {
			kind: `field:${path}:typeof:${type}`,
			expected: type,
			actual: typeof actual,
			passed,
		};
	};
}

export const overrides: Record<string, Record<string, MethodOverride>> = {
	issues: {
		// Creating an issue is the canonical high-stakes write
		createIssue: {
			asserts: [
				exists("id"),
				exists("key"),
				isType("id", "string"),
			],
		},
		// Updating status, assignee, labels — assert key roundtrip
		editIssue: {
			asserts: [
				exists("id"),
				exists("key"),
			],
		},
	},
	issueComments: {
		// Adding a comment is irreversible-ish (visible in audit trail)
		addComment: {
			asserts: [
				exists("id"),
				exists("body"),
			],
		},
	},
	issueTransitions: {
		// Moving an issue to Done/In Progress — assert the transition happened
		doTransition: {
			asserts: [
				exists("id"),
				exists("transitions"),
			],
		},
	},
};
