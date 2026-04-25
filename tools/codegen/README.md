# @capa/codegen

OpenAPI → capa capability generator. Reads any OpenAPI 3.x spec and emits a deployable Cloudflare Worker that exposes every operation as a typed JSRPC method with evidence wrapping.

---

## How-to

### Generate a capability

```bash
bun src/cli.ts \
  --spec <url-or-path-to-openapi-spec> \
  --out  ../../capabilities/<name> \
  --name <name> \
  [--prefix /v1]
```

### Regenerate stripe

```bash
bun src/cli.ts \
  --spec https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.sdk.json \
  --out  ../../capabilities/stripe \
  --name stripe
```

---

## Reference

### Output

| File | Editable? |
|---|---|
| `<out>/src/generated/schema.gen.ts` | no — full openapi-typescript output |
| `<out>/src/generated/capability.gen.ts` | no — `RpcTarget` classes per namespace |
| `<out>/src/generated/manifest.gen.ts` | no — `operationId` → metadata |
| `<out>/src/generated/runtime.ts` | no — copied from `runtime.template.ts` |
| `<out>/src/index.ts` | yes — Worker entry, applies overrides |
| `<out>/src/overrides.ts` | yes — per-method evidence overrides |

### Method-name derivation

| Path shape | Method name |
|---|---|
| `POST /v1/{ns}` | `create` |
| `GET /v1/{ns}` | `list` |
| `GET /v1/{ns}/{id}` | `retrieve` |
| `POST /v1/{ns}/{id}` | `update` |
| `DELETE /v1/{ns}/{id}` | `del` |
| `GET /v1/{ns}/{id}/<sub>` | `list<Sub>` |
| `POST /v1/{ns}/{id}/<sub>` | `create<Sub>` |
| `POST /v1/{ns}/{id}/<action>` | `<action>` (when `<action>` is a known verb) |

Collisions (multiple ops deriving the same name) are disambiguated by prepending the deepest distinguishing path segment.

### CLI flags

| Flag | Required | Description |
|---|---|---|
| `--spec` | yes | URL or local path to OpenAPI 3.x JSON spec |
| `--out` | yes | Target directory for the capability |
| `--name` | yes | Capability name (lowercase, used in env var `<NAME>_API_KEY`) |
| `--prefix` | no | API path prefix to strip when deriving namespaces (default `/v1`) |

---

## Explanation

### Why generate, not hand-write

Hand-coding a wrapper for every method on a 500-operation API is a maintenance treadmill. Stripe ships an OpenAPI spec. So do most modern APIs. The spec is the contract; everything downstream is mechanical.

The interesting code is the **evidence layer** — what to assert about each call. That is the only thing that requires human judgement, and it lives in `overrides.ts`. Everything else is regenerated when the upstream spec updates.

### Why `openapi-typescript` and not a heavier codegen

`@hey-api/openapi-ts` and similar tools generate full SDK runtimes. We don't want that — we want our own evidence-aware runtime. `openapi-typescript` only emits types, which is exactly the right altitude.

### What's in `runtime.template.ts`

The single fetch helper that every generated capability uses. It does form-encoding, generic HTTP-status assertion, and applies per-method override assertions. ~150 LOC, lives once in this repo, gets copied into each capability's `src/generated/runtime.ts` at codegen time.
