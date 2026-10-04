export function sandboxModule(code: string): string {
	return `
import { WorkerEntrypoint } from "cloudflare:workers";

function capabilityProxy(bridge, capability) {
	return new Proxy({}, {
		get: (_, namespace) => new Proxy({}, {
			get: (_, method) => (...args) => bridge.call(capability, String(namespace), String(method), args),
		}),
	});
}

async function agentCode(capa, console) {
${code}
}

export default class extends WorkerEntrypoint {
	async run() {
		const capa = new Proxy({}, { get: (_, capability) => capabilityProxy(this.env.BRIDGE, String(capability)) });
		const logs = [];
		const console = { log: (...values) => logs.push(values.map((v) => typeof v === "string" ? v : JSON.stringify(v)).join(" ")) };
		try {
			return { ok: true, value: await agentCode(capa, console), logs };
		} catch (error) {
			return { ok: false, error: String((error && error.message) || error), logs };
		}
	}
}
`;
}

export type SandboxOutcome = { ok: boolean; value?: unknown; error?: string; logs: string[] };

export async function runSandbox(loader: WorkerLoader, bridge: Fetcher, code: string): Promise<SandboxOutcome> {
	const worker = loader.load({
		compatibilityDate: "2026-09-01",
		mainModule: "sandbox.js",
		modules: { "sandbox.js": sandboxModule(code) },
		env: { BRIDGE: bridge },
		globalOutbound: null,
		limits: { cpuMs: 5000, subRequests: 50 },
	});
	const entry = worker.getEntrypoint() as unknown as { run(): Promise<SandboxOutcome> };
	try {
		return await entry.run();
	} catch (error) {
		return { ok: false, error: String((error as Error).message ?? error), logs: [] };
	}
}

