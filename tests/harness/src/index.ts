/**
 * capa test harness — a generic Worker that binds to any capa capability
 * and runs smoke tests against it.
 *
 * Usage:
 *   1. Edit wrangler.jsonc `services` binding to point at the capability
 *      you want to test (local dev name, staging, or prod).
 *   2. `wrangler dev` or `wrangler deploy`
 *   3. `curl -X POST http://localhost:8787/run?capability=gitlab`
 *
 * Returns JSON report:
 *   {
 *     "capability": "gitlab",
 *     "ranAt": "2026-04-25T...",
 *     "durationMs": 1234,
 *     "passed": 3,
 *     "failed": 0,
 *     "tests": [
 *       { "name": "list groups", "passed": true, "durationMs": 234, "verdict": "pass" },
 *       ...
 *     ]
 *   }
 */

import type { SuiteReport, SmokeTest } from "./types.ts";
import { gitlabSuite } from "./suites/gitlab.ts";
import { stripeSuite } from "./suites/stripe.ts";
import { jiraSuite } from "./suites/jira.ts";

const suites: Record<string, SmokeTest[]> = {
	gitlab: gitlabSuite as SmokeTest[],
	stripe: stripeSuite as SmokeTest[],
	jira: jiraSuite as SmokeTest[],
};

interface Env {
	TARGET: unknown; // JSRPC capability binding
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === "/") {
			return Response.json({
				message: "capa test harness",
				endpoints: ["GET /health", "POST /run?capability=<name>"],
				suites: Object.keys(suites),
			});
		}

		if (url.pathname === "/health") {
			return Response.json({ status: "ok" });
		}

		if (url.pathname === "/run" && request.method === "POST") {
			const capability = url.searchParams.get("capability");
			if (!capability || !suites[capability]) {
				return Response.json(
					{ error: `Unknown suite. Available: ${Object.keys(suites).join(", ")}` },
					{ status: 400 },
				);
			}

			const suite = suites[capability]!;
			const report = await runSuite(capability, suite, env.TARGET);
			const status = report.failed > 0 ? 502 : 200;
			return Response.json(report, { status });
		}

		return new Response("Not found", { status: 404 });
	},
} satisfies ExportedHandler<Env>;

async function runSuite(
	capability: string,
	tests: SmokeTest[],
	target: unknown,
): Promise<SuiteReport> {
	const t0 = Date.now();
	const results: SuiteReport["tests"] = [];
	let passed = 0;
	let failed = 0;

	for (const test of tests) {
		const testT0 = Date.now();
		try {
			const res = await test.run(target);
			const durationMs = Date.now() - testT0;
			if (res.passed) {
				passed++;
			} else {
				failed++;
			}
			results.push({
				name: test.name,
				description: test.description,
				passed: res.passed,
				durationMs,
				verdict: res.evidence?.verdict,
				error: res.error,
			});
		} catch (e) {
			failed++;
			results.push({
				name: test.name,
				description: test.description,
				passed: false,
				durationMs: Date.now() - testT0,
				error: String(e),
			});
		}
	}

	return {
		capability,
		ranAt: new Date().toISOString(),
		durationMs: Date.now() - t0,
		passed,
		failed,
		tests: results,
	};
}
