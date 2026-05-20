import { describe, expect, test } from "bun:test";
import { emit } from "./emit.ts";
import type { CodegenResult } from "./types.ts";

const codegen: CodegenResult = {
	specVersion: "0.0.1",
	specTitle: "Stripe API",
	baseUrl: "https://api.stripe.com",
	operationCount: 1,
	namespaces: {
		payment_intents: [{
			operationId: "PostPaymentIntents",
			namespace: "payment_intents",
			method: "create",
			http: "post",
			path: "/v1/payment_intents",
			pathParams: [],
			hasBody: true,
			risk: "high",
		}],
	},
};

describe("resource backends", () => {
	test("codegen imports and constructs configured namespace backends", () => {
		const { capability, manifest } = emit(codegen, "stripe", [{
			namespace: "payment_intents",
			className: "DistilledPaymentIntents",
			importPath: "../distilled-payment-intents.ts",
		}]);

		expect(capability).toContain('import { DistilledPaymentIntents } from "../distilled-payment-intents.ts";');
		expect(capability).toContain("get paymentIntents(): DistilledPaymentIntents");
		expect(capability).toContain("return new DistilledPaymentIntents(this.env.STRIPE_API_KEY");
		expect(manifest).not.toContain("DistilledPaymentIntents");
	});
});
