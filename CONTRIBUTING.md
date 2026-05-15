# Contributing to capa

Thanks for wanting to help. capa is intentionally simple:

> **OpenAPI spec → Cloudflare Worker service binding**

You can use the generator privately, publish your own generated Worker elsewhere, or send a capability here for others to deploy. Contributions to the shared catalog are welcome, not required.

## Ways to use capa

| Goal | What to do |
|---|---|
| Try capa locally | Generate into any directory and deploy it in your account. No PR needed. |
| Add an API to this repo | Generate `capabilities/<name>/`, keep the source URL reproducible, and open a PR. |
| Improve the generator/runtime/docs | Edit `tools/codegen/`, generated-file checks, docs, or harness code directly. |

## Add a capability to the catalog

Pick a public, stable OpenAPI or Swagger spec whose license/terms allow this use. Prefer official specs and API surfaces that are useful from a Worker.

```bash
cd tools/codegen
bun src/cli.ts \
  --spec <url-or-path-to-openapi-spec> \
  --out ../../capabilities/<name> \
  --name <name> \
  --base-url <upstream-base-url> \
  --prefix <api-prefix> \
  --auth <bearer|private-token|basic> \
  --content-type <form|json>
```

Codegen writes the generated RPC surface plus `capa.manifest.json`. New manifests automatically appear in the docs catalog.

Then add or review the small hand-written files:

| File | Purpose |
|---|---|
| `src/index.ts` | Worker entrypoint and optional runtime config |
| `src/overrides.ts` | Optional method-specific result checks |
| `wrangler.jsonc` | Deployment name, compatibility settings, secret notes |
| `README.md` | How to set the secret and bind the Worker |

Do **not** hand-edit `src/generated/*`; regenerate instead.

## PR checklist

- [ ] Source spec URL is official or clearly justified.
- [ ] Manifest counts/auth/base URL look right.
- [ ] Secrets are documented but no credentials are committed.
- [ ] Generated files were produced by the checked-in codegen CLI.
- [ ] `bun run check` passes.
- [ ] Docs build if docs or catalog presentation changed: `cd docs && bun run build`.
- [ ] If you add a new smoke suite, document how to run it in `tests/harness/README.md`.

## Testing story

There are three intentionally fast checks:

| Layer | Command | What it proves |
|---|---|---|
| Regeneration | `bun run check:generated` | Known capabilities still regenerate; only generated output/manifests move. |
| Type/build | `bun run typecheck` | Every capability Worker and the harness typecheck. |
| Deploy shape | `bun run dry-run` | Wrangler can bundle each Worker and the harness. |

Run all three with:

```bash
bun install
bun run check
```

### Live smoke tests

`tests/harness/` is the opt-in integration smoke harness. It binds to a deployed or local capability and calls low-risk read endpoints with real credentials. This is **not** part of credential-free CI; use it when validating an API integration in an account you control.

```bash
cd tests/harness
wrangler dev
curl -X POST 'http://localhost:8787/run?capability=gitlab'
```

The harness currently has suites for Stripe, GitLab, and Jira. Add a small read-only suite when a contributed capability needs live verification and the API has a sensible no-write smoke path.

## Keep changes focused

- Prefer generator/runtime changes over hand patches repeated across capabilities.
- Keep docs concise; the homepage sells the primitive, the contribution guide explains the repo.
- Avoid adding API clients, credentials, or generated fixtures that cannot be reproduced.
