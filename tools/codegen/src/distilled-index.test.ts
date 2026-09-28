import { describe, expect, test } from "bun:test";
import { distilledPlan } from "./distilled-index.ts";
import type { CodegenResult, Operation } from "./types.ts";

function codegen(operations: Operation[]): CodegenResult {
	return {
		specVersion: "test",
		specTitle: "test",
		baseUrl: "https://example.invalid",
		operationCount: operations.length,
		namespaces: { sample: operations },
	};
}

function operation(operationId: string, http: Operation["http"], path: string): Operation {
	return {
		operationId,
		namespace: "sample",
		method: "call",
		http,
		path,
		pathParams: [],
		hasBody: false,
		risk: "low",
	};
}

describe("Distilled operation index", () => {
	test("matches Stripe operations by OpenAPI HTTP path surface", () => {
		const plan = distilledPlan(codegen([
			operation("GetAccount", "get", "/v1/account"),
			operation("PostIssuingAuthorizationsAuthorizationApprove", "post", "/v1/issuing/authorizations/{authorization}/approve"),
		]), "stripe");
		expect(plan.matched).toBe(1);
		expect(plan.unmatched).toBe(1);
		expect(plan.bindings.get("GetAccount")?.operationExport).toBe("GetAccount");
	});

	test("matches Kubernetes services by OpenAPI HTTP path surface", () => {
		const plan = distilledPlan(codegen([
			operation("getCoreAPIVersions", "get", "/api/"),
		]), "kubernetes");
		expect(plan.matched).toBe(1);
		expect(plan.unmatched).toBe(0);
		expect(plan.bindings.get("getCoreAPIVersions")?.operationExport).toBe("getCoreAPIVersions");
	});
});
