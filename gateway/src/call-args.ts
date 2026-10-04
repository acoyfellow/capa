export type StoredAuth = { apiKey: string; username?: string };

export function withAuth(args: unknown[], optionsIndex: number, auth: StoredAuth): unknown[] {
	const placed = args.slice(0, optionsIndex);
	while (placed.length < optionsIndex) placed.push(undefined);
	const given = args[optionsIndex];
	const options = typeof given === "object" && given !== null && !Array.isArray(given) ? (given as Record<string, unknown>) : {};
	return [...placed, { ...options, auth: auth.username ? { apiKey: auth.apiKey, username: auth.username } : { apiKey: auth.apiKey } }];
}
