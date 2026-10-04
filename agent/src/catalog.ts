import catalog from "./catalog.gen.json" with { type: "json" };
import type { Operation } from "./grants.ts";

export type CatalogEntry = { name: string; title: string; binding: string; worker: string; entrypoint: string; operations: Operation[] };

export const CAPABILITIES = catalog as CatalogEntry[];

const operationsByCall = new Map<string, { entry: CatalogEntry; operation: Operation }>();
for (const entry of CAPABILITIES) {
	for (const operation of entry.operations) operationsByCall.set(`${entry.name}.${operation.namespace}.${operation.method}`, { entry, operation });
}

export function findOperation(capability: string, namespace: string, method: string) {
	return operationsByCall.get(`${capability}.${namespace}.${method}`);
}

export function searchOperations(query: string, allowed: (capability: string, operation: Operation) => boolean, limit = 20) {
	const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
	const matches: Array<{ call: string; http: string; path: string; risk: string }> = [];
	for (const entry of CAPABILITIES) {
		for (const operation of entry.operations) {
			const haystack = `${entry.name} ${operation.operationId} ${operation.namespace} ${operation.method} ${operation.path}`.toLowerCase();
			if (!terms.every((term) => haystack.includes(term)) || !allowed(entry.name, operation)) continue;
			matches.push({ call: `capa.${entry.name}.${operation.namespace}.${operation.method}(...)`, http: operation.http.toUpperCase(), path: operation.path, risk: operation.risk });
			if (matches.length >= limit) return matches;
		}
	}
	return matches;
}
