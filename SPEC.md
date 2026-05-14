# capa spec

`capa` bindings are generated Cloudflare service bindings for third-party APIs.

A capability method returns:

```ts
{ result, evidence }
```

## Method contract

| Field | Meaning |
|---|---|
| `result` | Upstream response body when `evidence.verdict === "pass"`; otherwise `null`. |
| `evidence` | Plain JSON record of the call and assertions. |

## Evidence shape

```ts
{
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
```

## Verdict

| Verdict | Meaning |
|---|---|
| `pass` | Every assertion passed. `result` contains the parsed upstream response. |
| `fail` | At least one assertion failed or the upstream fetch threw. `result` is `null`. |

## Assertions

Every generated method gets a generic `httpStatus` assertion.

```json
{ "kind": "httpStatus", "expected": "2xx", "actual": 200, "passed": true }
```

Capabilities can add per-method assertions in `src/overrides.ts`.

## Capability contract

| Property | Requirement |
|---|---|
| Generation | API surface comes from an OpenAPI or Swagger spec. |
| Public route | `fetch()` returns 404. |
| Call path | Cloudflare service binding / JSRPC. |
| Auth | Upstream credentials are Worker secrets. |
| Side effects | One capability method performs one upstream HTTP request. |
| Evidence | Plain JSON; no streams, handles, or secrets. |
| Generated files | `src/generated/*` is regenerated, not hand-edited. |

## Checks

A generated capability is ready when these pass:

```bash
bun run check
```

`check` runs TypeScript plus `wrangler deploy --dry-run` for every checked-in capability.

Real smoke tests use `tests/harness/` and provider credentials. They are not mocked.

## Non-guarantees

| Claim | Status in v0 |
|---|---|
| Tamper-proof evidence | Not provided. Persist, hash, or sign elsewhere. |
| Provider authenticity beyond HTTPS/fetch | Not provided. |
| Business-policy enforcement | Caller-owned. |
| OAuth/browser auth flow | Not solved here. |
| Successful real-world side effect | Not implied by HTTP 2xx alone. Add provider-specific assertions where needed. |
