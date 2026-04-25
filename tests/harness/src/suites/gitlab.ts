import type { TypedSmokeTest, CapaBinding, ProofResult } from "../types.ts";

interface GitlabBinding extends CapaBinding {
	groups: { list: () => Promise<ProofResult> };
	projects: { list: () => Promise<ProofResult> };
	user_counts: { list: () => Promise<ProofResult> };
}

export const gitlabSuite: TypedSmokeTest<GitlabBinding>[] = [
	{
		name: "list-groups",
		description: "GET /api/v4/groups — low-risk list, no args",
		run: async (target) => {
			const { result, evidence } = await target.groups.list();
			return {
				passed: evidence.verdict === "pass" && Array.isArray(result),
				evidence,
				error: evidence.verdict === "fail" ? "verdict failed" : undefined,
			};
		},
	},
	{
		name: "list-projects",
		description: "GET /api/v4/projects — low-risk list, no args",
		run: async (target) => {
			const { result, evidence } = await target.projects.list();
			return {
				passed: evidence.verdict === "pass" && Array.isArray(result),
				evidence,
				error: evidence.verdict === "fail" ? "verdict failed" : undefined,
			};
		},
	},
	{
		name: "user-counts",
		description: "GET /api/v4/user_counts — low-risk user metadata",
		run: async (target) => {
			const { result, evidence } = await target.user_counts.list();
			return {
				passed: evidence.verdict === "pass" && result !== null,
				evidence,
				error: evidence.verdict === "fail" ? "verdict failed" : undefined,
			};
		},
	},
];
