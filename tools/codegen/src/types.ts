/**
 * Internal types for the codegen pipeline.
 */

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export interface Operation {
	/** stripe-style operationId, e.g. "PostCharges" */
	operationId: string;
	/** namespace derived from URL, e.g. "charges" from "/v1/charges/{id}" */
	namespace: string;
	/** method name on the namespace, e.g. "create", "retrieve", "list", "update", "del" */
	method: string;
	/** HTTP method */
	http: HttpMethod;
	/** original path template, e.g. "/v1/charges/{charge}" */
	path: string;
	/** path parameters in order, e.g. ["charge"] for /v1/charges/{charge} */
	pathParams: string[];
	/** has request body */
	hasBody: boolean;
	/** typescript-typed name for the body, used in generated import */
	bodyTypeRef?: string;
	/** typescript-typed name for the response */
	responseTypeRef?: string;
	/** human description */
	description?: string;
	/** risk classification heuristic from method+namespace */
	risk: "low" | "medium" | "high";
}

export interface DistilledBinding {
	packageName: string;
	operationImport: string;
	operationExport: string;
	inputType: string;
	outputType: string;
}

export interface DistilledProviderRuntime {
	credentialsImport: string;
	secretField: "apiKey" | "token";
	defaultBaseUrl: string;
}

export interface CodegenResult {
	specVersion: string;
	specTitle: string;
	baseUrl: string;
	namespaces: Record<string, Operation[]>;
	operationCount: number;
}
