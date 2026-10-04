import { bindings, defineConfig, exports } from "cf/config";

export default defineConfig({
	worker: {
		name: "capa-agent",
		compatibilityDate: "2026-09-01",
		compatibilityFlags: ["nodejs_compat"],
		entrypoint: "src/index.ts",
		workersDev: true,
		observability: { enabled: true },
		env: {
			AI: bindings.ai(),
			LOADER: bindings.workerLoader(),
			AGENTS: bindings.durableObject({ worker: "capa-agent", exportName: "CapaAgent" }),
			GITHUB: bindings.worker({ worker: "capa-agent-github", exportName: "GithubCapability" }),
			SELF_RPC: bindings.worker({ worker: "capa-agent", exportName: "AgentRpc" }),
			OWNER_TOKEN: bindings.secret(),
			MODEL: bindings.text("@cf/openai/gpt-oss-120b"),
		},
		exports: {
			CapaAgent: exports.durableObject({ storage: "sqlite" }),
			CapaBridge: exports.worker(),
			AgentRpc: exports.worker(),
		},
	},
});
