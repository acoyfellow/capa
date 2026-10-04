export type CapabilityGrant = {
	capability: string;
	methods: "*" | string[];
	writes: boolean;
};

export type Grant = CapabilityGrant;

export type Operation = {
	operationId: string;
	namespace: string;
	method: string;
	http: string;
	path: string;
	risk: "low" | "medium" | "high";
	optionsIndex: number;
};

export type Decision = { allowed: true } | { allowed: false; reason: string };

const READ_VERBS = new Set(["get", "head", "options"]);

export function isWrite(operation: Operation): boolean {
	return !READ_VERBS.has(operation.http.toLowerCase());
}

export function decide(agent: string, grants: readonly Grant[], capability: string, operation: Operation): Decision {
	const call = `${capability}.${operation.namespace}.${operation.method}`;
	const grant = grants.find((candidate) => candidate.capability === capability);
	if (!grant) return { allowed: false, reason: `Agent ${agent} has no grant for ${capability}. Ask the owner to add one.` };
	const methodGranted = grant.methods === "*" || grant.methods.includes(`${operation.namespace}.${operation.method}`);
	if (!methodGranted) return { allowed: false, reason: `Agent ${agent} has no grant for ${call}. Ask the owner to add it.` };
	if (isWrite(operation) && !grant.writes) {
		return { allowed: false, reason: `${call} is a ${operation.http.toUpperCase()} operation. Agent ${agent} may not write to ${capability}.` };
	}
	return { allowed: true };
}

export function visibleOperations(grants: readonly Grant[], capability: string, operations: readonly Operation[]): Operation[] {
	return operations.filter((operation) => decide("", grants, capability, operation).allowed);
}

export function parseGrants(value: unknown): Grant[] {
	if (!Array.isArray(value)) throw new Error("Grants must be a JSON array");
	return value.map((entry, index) => {
		const grant = entry as Partial<CapabilityGrant>;
		if (typeof grant.capability !== "string") throw new Error(`Grant ${index} needs a capability`);
		if (grant.methods !== "*" && !(Array.isArray(grant.methods) && grant.methods.every((m) => typeof m === "string"))) {
			throw new Error(`Grant ${index} needs methods: "*" or a list of "namespace.method"`);
		}
		return { capability: grant.capability, methods: grant.methods, writes: grant.writes === true };
	});
}

export function withinParent(parent: readonly Grant[], child: readonly Grant[]): { ok: true } | { ok: false; reason: string } {
	for (const grant of child) {
		const ceiling = parent.find((candidate) => candidate.capability === grant.capability);
		if (!ceiling) return { ok: false, reason: `The parent has no grant for ${grant.capability}, so a sub-agent cannot get one.` };
		if (grant.writes && !ceiling.writes) return { ok: false, reason: `The parent may not write to ${grant.capability}, so a sub-agent cannot.` };
		if (ceiling.methods !== "*") {
			const extra = grant.methods === "*" ? ["*"] : grant.methods.filter((method) => !(ceiling.methods as string[]).includes(method));
			if (extra.length) return { ok: false, reason: `The parent cannot call ${extra.join(", ")} on ${grant.capability}.` };
		}
	}
	return { ok: true };
}

export function effectiveGrants(parent: readonly Grant[], child: readonly Grant[]): Grant[] {
	return child.filter((grant) => withinParent(parent, [grant]).ok);
}
