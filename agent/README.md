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

## Sub-agents as facets

A parent agent can run sub-agents as Durable Object facets. Each sub-agent is a `SubAgent` class from this Worker, started with `ctx.exports.SubAgent({ props: { parent, subAgent } })` under `ctx.facets`. It has its own SQLite, its own Pi Durable conversation, and the same `capa_execute` tool.

```
/agents/boss/subs/reviewer/grants   PUT { "grants": [...] }
/agents/boss/subs/reviewer/ask      POST { "prompt": "..." }
/agents/boss/subs/reviewer/execute  POST { "code": "..." }
/agents/boss/subs/reviewer          DELETE
```

### Rules

- **Only the owner creates sub-agents and sets their grants.** A sub-agent has no tool for this. The grants routes need the owner token.
- **A sub-agent can never get more than its parent.** Setting a sub-agent grant that the parent lacks fails, for example `The parent may not write to github, so a sub-agent cannot.`
- **Grants are read from the parent on every call.** The sub-agent's props hold only its name. When the owner changes or clears the parent's or the sub-agent's grants, the next call sees it, and the facet does not restart.
- **A sub-agent of a sub-agent starts with no grants.** A facet can start its own facets, and the nested one is checked like any other: `Agent boss/s/nested has no grant for github`. There is no route for owners to grant nested sub-agents, so today they cannot call capa.
- **Evidence goes to the parent,** so the owner reads one log for the whole tree.

### What was tested on a live Worker

| Question | Result |
|---|---|
| Does Pi Durable run inside a facet? | Yes, with `Harness.open` directly. `PiHarness` from `agents/harness/pi` fails: it sets alarms, and facets throw `Facets currently cannot set alarms.` |
| Does a facet get the AI binding? | Yes. A sub-agent answered "47 stars" with `verdict: "pass"` evidence. |
| Do timers survive in a facet? | No. Facets cannot set alarms. Pi Durable's in-memory timers work while the object is awake. Waking a sleeping sub-agent is the parent's job. |
| Do sibling facets run at the same time? | Yes. Four facets that each waited 3 seconds took 3 seconds together. Two model runs at once took 5 seconds. |
| Does a crash in one facet hurt others? | No. `while(true){}` in one sub-agent hit the CPU limit. Its sibling and the parent kept working, and the crashed one worked on its next call. |
| Does a sub-agent remember after a redeploy? | Yes. After a redeploy it answered "47" when asked what number it gave last. The first call after the redeploy failed once with a Durable Object storage reset, then worked. |
| Does `facets.clone()` copy a sub-agent? | No. It returns, but the copy's storage is empty, even after `abort()` on the source. The copy's grants are copied by the parent, not by `clone`. |
| Are transcripts separate? | Yes. One sub-agent had 12 entries while its sibling had 0. |

### When to use a facet sub-agent

Use one for a long-running worker with its own memory and narrower grants, such as a reviewer that only reads pull requests. Use a separate Durable Object instead when the sub-agent must wake itself on a timer, or when you need to copy it.
