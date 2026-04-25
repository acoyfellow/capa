/**
 * Per-method evidence overrides for capa-stripe.
 *
 * The generated wrapper applies generic HTTP-level assertions to every
 * method. This file layers richer assertions on the methods where
 * "the call landed" is more specific than "the HTTP call returned 2xx".
 *
 * Add to this when you want stronger evidence for a specific operation.
 * Everything else gets the generic wrapper for free.
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

function matches(path: string, pattern: RegExp) {
	return (body: unknown): AssertResult => {
		const actual = field(path, body);
		return {
			kind: `field:${path}~${pattern}`,
			expected: pattern.toString(),
			actual,
			passed: typeof actual === "string" && pattern.test(actual),
		};
	};
}

export const overrides: Record<string, Record<string, MethodOverride>> = {
	charges: {
		create: {
			asserts: [
				matches("id", /^ch_/),
				equals("status", "succeeded"),
				equals("paid", true),
			],
		},
	},
	refunds: {
		create: {
			asserts: [
				matches("id", /^re_/),
				equals("status", "succeeded"),
			],
		},
	},
	paymentIntents: {
		create: {
			asserts: [
				matches("id", /^pi_/),
			],
		},
		confirm: {
			asserts: [
				matches("id", /^pi_/),
				equals("status", "succeeded"),
			],
		},
	},
};
