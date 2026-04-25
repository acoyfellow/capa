import type { TypedSmokeTest, CapaBinding, ProofResult } from "../types.ts";

interface JiraBinding extends CapaBinding {
	myself: { getCurrentUser: () => Promise<ProofResult> };
	issueSearch: {
		searchForIssuesUsingJql: (params: { jql: string; maxResults?: number }) => Promise<ProofResult>;
	};
}

export const jiraSuite: TypedSmokeTest<JiraBinding>[] = [
	{
		name: "get-current-user",
		description: "GET /rest/api/3/myself — low-risk read",
		run: async (target) => {
			const { result, evidence } = await target.myself.getCurrentUser();
			return {
				passed: evidence.verdict === "pass" && result !== null,
				evidence,
				error: evidence.verdict === "fail" ? "verdict failed" : undefined,
			};
		},
	},
	{
		name: "search-issues",
		description: "GET /rest/api/3/search — low-risk search with jql",
		run: async (target) => {
			const { result, evidence } = await target.issueSearch.searchForIssuesUsingJql({
				jql: "assignee = currentUser()",
				maxResults: 1,
			});
			return {
				passed: evidence.verdict === "pass" && result !== null,
				evidence,
				error: evidence.verdict === "fail" ? "verdict failed" : undefined,
			};
		},
	},
];
