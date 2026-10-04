# capa agent

A pi agent that lives in a Durable Object and calls APIs only through capa. This first version binds one capability, GitHub.

Each agent is one `CapaAgent` Durable Object, named by the owner (`/agents/triage`, `/agents/billing`). It runs a [Pi Durable](https://earendil.com/posts/pi-durable/) harness over the object's SQLite storage, through `PiHarness` from `agents/harness/pi`. The conversation and the evidence it collects survive restarts.

## Tools

| Tool | What it does |
|---|---|
| `capa_search` | Finds operations this agent's grants allow. Operations it may not call do not appear. `replay: "safe"`. |
| `capa_execute` | Runs the body of an async function in a Worker Loader sandbox with `globalOutbound: null`. The sandbox reaches capa only through `CapaBridge`. No replay: after a crash, the model is told the call was interrupted, and it is not sent again. |

## Security

`CapaBridge` checks each call before it reaches GitHub:

1. The operation exists in the generated catalog.
2. The agent has a grant for the capability and the method.
3. Writes (any HTTP verb other than GET, HEAD and OPTIONS) need `writes: true` in the grant.

The grants are bridge props. Trusted code sets them when it builds the bridge, so code in the sandbox cannot change them. The GitHub key is a secret on the `capa-agent-github` capability Worker. The agent Worker never reads it, and the bridge removes any `auth` the agent passes.

Only the owner sets grants:

```bash
curl -X PUT https://capa-agent.<subdomain>.workers.dev/agents/triage/grants \
  -H "authorization: Bearer $OWNER_TOKEN" \
  -d '[{ "capability": "github", "methods": "*" }]'
```

`methods` is `"*"` or a list such as `["repos.retrieve"]`. `writes` is `false` unless set to `true`.

## Three ways to reach one agent

| Way | How |
|---|---|
| HTTP | `POST /agents/<name>/ask` with `{ "prompt": "..." }`. Also `/execute`, `/evidence`, `/transcript`, `/grants`. |
| MCP | `POST /agents/<name>/mcp`, JSON-RPC with the tools `search`, `execute` and `ask`. |
| RPC | Bind `capa-agent` with `exportName: "AgentRpc"` and call `ask(name, prompt)` or `tools(name)`. |

Every route needs the owner token.

## Deploy

```bash
cd capabilities/github
wrangler deploy --name capa-agent-github
wrangler secret put GITHUB_API_KEY --name capa-agent-github < github-token.txt

cd ../../agent
npm install
npm run catalog
cf deploy --secrets-file secrets.json
```

`secrets.json` holds `{ "OWNER_TOKEN": "..." }`. Delete it after the first deploy.

`npm run catalog` copies the GitHub operations from `gateway/src/index.gen.json`. Run `npm run index` in `gateway/` first.

## Model

`MODEL` in `cloudflare.config.ts` selects a Workers AI model. The default is `@cf/openai/gpt-oss-120b`. `createAI` sends Workers AI calls through the AI Gateway named `default`. On an account without AI Gateway credits, the call fails with `402 Insufficient wholesale credits`. `src/direct-ai.ts` removes the gateway option so the call goes to Workers AI directly.

## Proof

```bash
npm test
CAPA_AGENT_URL=https://capa-agent.<subdomain>.workers.dev bash scripts/gate.sh
```

`gate.sh` runs seven checks against the live Worker and prints one JSON line for each:

1. An agent with a GitHub read grant answers a question, and its stored evidence shows `verdict: "pass"`.
2. An agent with no grant is blocked, and no evidence is stored, so GitHub was not called.
3. A read-only agent that tries `user.starred` (PUT) is blocked.
4. `fetch()` from the sandbox fails.
5. After the owner clears the grants, the next call fails.
6. The GitHub token is in no response or transcript.
7. MCP `tools/list` and RPC `tools()` return the same tools for the same agent.

## Facets: not used

A version of `capa_execute` ran the code as a Durable Object facet: `ctx.facets.get(name, () => ({ class: worker.getDurableObjectClass("ToolRun") }))`. It deployed. Grants, the network block and the facet's own storage counter worked. Two things went wrong:

- A facet started under one name keeps the class and bridge props it started with. After the owner added a grant, calls to the same facet still failed with "no grant". Grants changed in the owner's route did not reach it.
- The first version reused one facet name, so new code ran the class loaded for the old code.

A tool call does not need its own storage, so a plain Worker Loader entrypoint fits better. Facets would fit a long-running sub-agent with its own state.
