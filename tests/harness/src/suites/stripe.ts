import type { TypedSmokeTest, CapaBinding, ProofResult } from "../types.ts";

interface StripeBinding extends CapaBinding {
	balance: { retrieve: () => Promise<ProofResult> };
	charges: { list: () => Promise<ProofResult> };
}

export const stripeSuite: TypedSmokeTest<StripeBinding>[] = [
	{
		name: "retrieve-balance",
		description: "GET /v1/balance — low-risk read, no args",
		run: async (target) => {
			const { result, evidence } = await target.balance.retrieve();
			return {
				passed: evidence.verdict === "pass" && result !== null,
				evidence,
				error: evidence.verdict === "fail" ? "verdict failed" : undefined,
			};
		},
	},
	{
		name: "list-charges",
		description: "GET /v1/charges — low-risk list, default pagination",
		run: async (target) => {
			const { result, evidence } = await target.charges.list();
			return {
				passed: evidence.verdict === "pass" && result !== null,
				evidence,
				error: evidence.verdict === "fail" ? "verdict failed" : undefined,
			};
		},
	},
];
