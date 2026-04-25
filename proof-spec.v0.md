# proof-spec v0

A capability is a third-party API wrapped as a Cloudflare JSRPC Worker that returns `{ result, evidence }` for every call.

## Shape

```jsonc
{
  "version": "v0",
  "capability": "<name>",
  "upstream": "<base url of the API being wrapped>",
  "methods": {
    "<methodName>": {
      "input":  { /* shape */ },
      "observe": [ /* preconditions: the world before the call */ ],
      "act":     { /* what the wrapper does */ },
      "assert":  [ /* postconditions: what must be true after */ ],
      "risk":    "low | medium | high",
      "sideEffects": "none | data-writes | money-moves | external-trigger"
    }
  }
}
```

## Evidence bundle

Every method returns:

```ts
{
  result:  T | null,    // null when verdict === "fail"
  evidence: {
    capability:  string,
    version:     string,
    method:      string,
    startedAt:   string,    // ISO 8601
    durationMs:  number,
    observe:     Array<{ kind, passed, detail? }>,
    act:         { request, status },
    assert:      Array<{ kind, expected, actual, passed }>,
    verdict:     "pass" | "fail"
  }
}
```

## Why this shape

- **`observe`** — what was true before. Catches the case where the wrapper "succeeds" against a broken upstream.
- **`act`** — the single side-effecting call. One per method. Auditable.
- **`assert`** — itemized postconditions. Each one passes or fails independently. The verdict is the AND.
- **Evidence is a value, not a side channel.** Callers can persist it, hash it, attach it to a response, or feed it to a scorer.

## Compatibility

- Cramer's vitest-evals RFC #39 (Sentry) describes the same shape with `UsageSummary` + `TimingSummary`. `evidence.durationMs` and (future) `evidence.usage` align.
- unsurf and gateproof both consume this schema for DOM-side and HTTP-side runs respectively.

## Versioning

`v0` is liquid. The shape stabilizes when two external adopters have real pain. The contract: every breaking change ships a new `vN` and capabilities can advertise multiple.
