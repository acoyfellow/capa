/**
 * Per-method evidence overrides for capa-gitlab.
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
	mergeRequests: {
		// Posting a comment is the high-stakes write per JORDAN.md
		createNote: {
			asserts: [
				exists("id"),
				isType("id", "number"),
				exists("body"),
			],
		},
		// Updating an MR can change state (close, reopen, label) — assert id roundtrip
		update: {
			asserts: [
				exists("id"),
				exists("iid"),
			],
		},
		// Approval is irreversible-ish; assert it actually happened
		approve: {
			asserts: [
				equals("state", "approved"),
			],
		},
	},
	issues: {
		create: {
			asserts: [
				exists("id"),
				exists("iid"),
				equals("state", "opened"),
			],
		},
		update: {
			asserts: [
				exists("id"),
				exists("iid"),
			],
		},
	},
	pipelines: {
		// Re-running pipelines costs CI minutes — verify it actually started
		retry: {
			asserts: [
				exists("id"),
				exists("status"),
			],
		},
	},
};
