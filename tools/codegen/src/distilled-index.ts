import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type { CodegenResult, DistilledBinding } from "./types.ts";

export interface DistilledProvider {
	/** npm package imported by generated capabilities. */
	packageName: string;
	/** Distilled source tree used by codegen to index generated operations. */
	sourceRoot: string;
	/** Distilled files exporting operations. */
	files: string[];
	/** Credentials service export. */
	credentialsImport: string;
	/** Object field inside Distilled credentials receiving capa's API key. */
	secretField: "apiKey" | "token";
	/** Default base URL for the provider, used when Distilled does not export one. */
	defaultBaseUrl: string;
}

export interface DistilledPlan {
	provider?: DistilledProvider;
	bindings: Map<string, DistilledBinding>;
	matched: number;
	unmatched: number;
}

const providers: Record<string, DistilledProvider> = {
	stripe: {
		packageName: "@distilled.cloud/stripe",
		sourceRoot: resolve(import.meta.dir, "../../../capabilities/stripe/node_modules/@distilled.cloud/stripe/src/operations"),
		files: ["index.ts"],
		credentialsImport: "@distilled.cloud/stripe/Credentials",
		secretField: "apiKey",
		defaultBaseUrl: "https://api.stripe.com",
	},
	kubernetes: {
		packageName: "@distilled.cloud/kubernetes",
		sourceRoot: resolve(import.meta.dir, "../../../capabilities/kubernetes/node_modules/@distilled.cloud/kubernetes/src/services"),
		files: ["index.ts"],
		credentialsImport: "@distilled.cloud/kubernetes/Credentials",
		secretField: "token",
		defaultBaseUrl: "https://kubernetes.default.svc",
	},
};

interface IndexedOperation extends DistilledBinding {
	http: string;
	path: string;
}

export function providerFor(capabilityName: string): DistilledProvider | undefined {
	return providers[capabilityName];
}

export function operationKey(http: string, path: string): string {
	return `${http.toLowerCase()} ${path}`;
}

export function distilledPlan(codegen: CodegenResult, capabilityName: string): DistilledPlan {
	const provider = providerFor(capabilityName);
	if (!provider) return { bindings: new Map(), matched: 0, unmatched: codegen.operationCount };

	const index = indexProvider(provider);
	const bindings = new Map<string, DistilledBinding>();
	for (const ops of Object.values(codegen.namespaces)) {
		for (const op of ops) {
			const binding = index.get(operationKey(op.http, op.path));
			if (binding) bindings.set(op.operationId, binding);
		}
	}
	return {
		provider,
		bindings,
		matched: bindings.size,
		unmatched: codegen.operationCount - bindings.size,
	};
}

function indexProvider(provider: DistilledProvider): Map<string, IndexedOperation> {
	const exportIndex = readExportIndex(provider);
	const operations = new Map<string, IndexedOperation>();
	for (const [operationExport, operationImport] of exportIndex) {
		const absoluteOperation = join(provider.sourceRoot, importTarget(operationImport));
		const source = readFileSync(absoluteOperation, "utf8");
		const typePrefix = `${operationExport[0]!.toUpperCase()}${operationExport.slice(1)}`;
		const match = operationHttp(source, typePrefix);
		if (!match) continue;
		const [http, path] = match;
		const inputType = `${typePrefix}Input`;
		const outputType = `${typePrefix}Output`;
		operations.set(operationKey(http!, path!), {
			http: http!.toLowerCase(),
			path: path!,
			packageName: provider.packageName,
			operationImport: provider.packageName === "@distilled.cloud/stripe"
				? "@distilled.cloud/stripe/Operations"
				: `${provider.packageName}/${operationImport.replace(/^\.\//, "").replace(/\.ts$/, "")}`, 
			operationExport,
			inputType,
			outputType,
		});
	}
	return operations;
}

function readExportIndex(provider: DistilledProvider): Map<string, string> {
	const operationImports = new Map<string, string>();
	for (const file of provider.files) {
		const indexPath = join(provider.sourceRoot, file);
		const index = readFileSync(indexPath, "utf8");
		for (const match of index.matchAll(/export \* from "\.\/([^\"]+\.ts)"/g)) {
			const operationImport = `./${match[1]!}`;
			const source = readFileSync(join(provider.sourceRoot, match[1]!), "utf8");
			for (const op of operationExports(source)) operationImports.set(op, operationImport);
		}
		for (const match of index.matchAll(/export \* as [A-Za-z0-9_]+ from "\.\/([^\"]+\.ts)"/g)) {
			const serviceImport = `./${match[1]!}`;
			const source = readFileSync(join(provider.sourceRoot, match[1]!), "utf8");
			for (const op of operationExports(source)) operationImports.set(op, serviceImport);
		}
	}
	return operationImports;
}

function operationExports(source: string): string[] {
	return Array.from(source.matchAll(/export const ([A-Za-z][A-Za-z0-9_]*)\s*=\s*(?:\/\*@__PURE__\*\/\s*)*(?:\/\*#__PURE__\*\/\s*)*API\.make/g), match => match[1]!)
		.filter(name => !name.endsWith("Input") && !name.endsWith("Output"));
}

function operationHttp(source: string, operationExport: string): [string, string] | undefined {
	const inputExport = `${operationExport}Input`;
	const inputStart = source.indexOf(`export const ${inputExport}`);
	if (inputStart < 0) return undefined;
	const nextExport = source.indexOf("export const ", inputStart + 13);
	const inputBlock = source.slice(inputStart, nextExport < 0 ? undefined : nextExport);
	const match = inputBlock.match(/T\.Http\(\{\s*method:\s*"([A-Z]+)",\s*path:\s*"([^"]+)"/s);
	if (!match) return undefined;
	return [match[1]!.toLowerCase(), match[2]!];
}

function importTarget(operationImport: string): string {
	return operationImport.replace(/^\.\//, "");
}
