/**
 * Shared types for capa smoke-test suites.
 *
 * Each suite is an array of SmokeTest cases. The harness binds to a
 * capability via JSRPC and runs every case, collecting results into a
 * report.
 */

export interface EvidenceBundle {
	capability: string;
	operationId: string;
	namespace: string;
	method: string;
	http: string;
	path: string;
	risk: "low" | "medium" | "high";
	startedAt: string;
	durationMs: number;
	act: { request: { method: string; url: string }; status: number };
	assert: Array<{ kind: string; expected: unknown; actual: unknown; passed: boolean }>;
	verdict: "pass" | "fail";
}

export interface ProofResult {
	result: unknown;
	evidence: EvidenceBundle;
}

/** Generic capa binding — every namespace is a record of methods returning ProofResult */
export type CapaBinding = Record<string, Record<string, (...args: any[]) => Promise<ProofResult>>>;

export interface SmokeTest {
	name: string;
	description: string;
	run: (target: any) => Promise<{
		passed: boolean;
		evidence?: EvidenceBundle;
		error?: string;
	}>;
}

export interface TypedSmokeTest<Target extends CapaBinding = CapaBinding> extends SmokeTest {
	run: (target: Target) => Promise<{
		passed: boolean;
		evidence?: EvidenceBundle;
		error?: string;
	}>;
}

export interface SuiteReport {
	capability: string;
	ranAt: string;
	durationMs: number;
	passed: number;
	failed: number;
	tests: Array<{
		name: string;
		description: string;
		passed: boolean;
		durationMs: number;
		error?: string;
		verdict?: "pass" | "fail";
	}>;
}
