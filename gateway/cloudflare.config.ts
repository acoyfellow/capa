import { bindings, defineConfig, exports } from "cf/config";
import capabilities from "./capabilities.gen.json" with { type: "json" };

const capabilityBindings = Object.fromEntries(
	capabilities.map(({ binding, worker, entrypoint }) => [binding, bindings.worker({ worker, exportName: entrypoint })]),
);

export default defineConfig({
	worker: {
		name: "capa-gateway",
		compatibilityDate: "2026-09-01",
		compatibilityFlags: ["nodejs_compat"],
		entrypoint: "src/index.ts",
		workersDev: true,
		observability: { enabled: true },
		env: {
			LOADER: bindings.workerLoader(),
			VAULT: bindings.durableObject({ worker: "capa-gateway", exportName: "Vault" }),
			VAULT_KEY: bindings.secretsStoreSecret({
				storeId: "9a29150b830f490ebe3c60383b8a7119",
				secretName: "capa_gateway_vault_key",
			}),
			...capabilityBindings,
			OAUTH_KV: bindings.kv({ id: "491b3f9b13174125865888e5e1958036" }),
			ACCESS_ISSUER: bindings.text(
				"https://coeyman.cloudflareaccess.com/cdn-cgi/access/sso/oidc/a8367acb3c94008a906dc1c6a106dbc913681ac03fc4aaabd77d90876d7078d9",
			),
			ACCESS_CLIENT_ID: bindings.text("a8367acb3c94008a906dc1c6a106dbc913681ac03fc4aaabd77d90876d7078d9"),
			ACCESS_CLIENT_SECRET: bindings.secret(),
			GITHUB_CLIENT_ID: bindings.text("Ov23liIsTeDZxndlSiCI"),
			GITHUB_CLIENT_SECRET: bindings.secret(),
			COOKIE_SECRET: bindings.secret(),
		},
		exports: {
			Vault: exports.durableObject({ storage: "sqlite" }),
			CapaBridge: exports.worker(),
			McpApi: exports.worker(),
		},
	},
});
