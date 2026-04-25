# capa test harness

A generic Worker that binds to any capa capability and runs smoke tests against it.

## Usage

### 1. Point the harness at the capability you want to test

Edit `wrangler.jsonc`:

```jsonc
{
  "services": [
    {
      "binding": "TARGET",
      "service": "capa-gitlab",        // <-- change this
      "entrypoint": "GitlabCapability" // <-- and this
    }
  ]
}
```

The `service` name can be:
- A local dev Worker (`wrangler dev` name)
- A deployed staging Worker (`capa-gitlab-staging`)
- A deployed prod Worker (`capa-gitlab`)

### 2. Run the harness locally

```bash
cd tests/harness
wrangler dev
```

### 3. Trigger a smoke test

```bash
curl -X POST "http://localhost:8787/run?capability=gitlab"
```

Response:
```json
{
  "capability": "gitlab",
  "ranAt": "2026-04-25T12:34:56.789Z",
  "durationMs": 1234,
  "passed": 3,
  "failed": 0,
  "tests": [
    {
      "name": "list-groups",
      "description": "GET /api/v4/groups — low-risk list, no args",
      "passed": true,
      "durationMs": 234,
      "verdict": "pass"
    },
    ...
  ]
}
```

### 4. Deploy the harness for CI/prod monitoring

```bash
wrangler deploy
```

Then hit it from your CI pipeline or a cron trigger:

```bash
curl -X POST "https://capa-test-harness.your-subdomain.workers.dev/run?capability=gitlab"
```

## Available suites

| Suite | Tests |
|---|---|
| `gitlab` | `list-groups`, `list-projects`, `user-counts` |
| `stripe` | `retrieve-balance`, `list-charges` |
| `jira` | `get-current-user`, `search-issues` |

## Adding a new suite

1. Create `src/suites/<name>.ts`
2. Export `const <name>Suite: TypedSmokeTest<YourBinding>[]`
3. Register it in `src/index.ts`

## Architecture

```
┌──────────────┐      HTTP      ┌──────────────┐      JSRPC     ┌──────────────┐
│   curl / CI  │───────────────▶│   harness    │───────────────▶│  capability  │
│              │                │   Worker     │                │   Worker     │
└──────────────┘                └──────────────┘                └──────────────┘
```

The harness is stateless. Each `/run` call exercises the bound capability and returns a pass/fail report. No data persists in the harness.
