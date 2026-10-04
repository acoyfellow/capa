#!/usr/bin/env bash
set -uo pipefail

AGENT_URL="${CAPA_AGENT_URL:?set CAPA_AGENT_URL, for example https://capa-agent.<subdomain>.workers.dev}"
OWNER_TOKEN_FILE="${CAPA_AGENT_OWNER_TOKEN_FILE:-$HOME/.config/capa/agent-owner-token}"
GITHUB_TOKEN_FILE="${CAPA_AGENT_GITHUB_TOKEN_FILE:-$HOME/.config/capa/eval-github-token}"
RUN="gate-$(date +%s)"
OUT="${CAPA_AGENT_GATE_DIR:-/tmp/capa-agent/$RUN}"
mkdir -p "$OUT"

owner() {
	local method="$1" path="$2" body="${3:-}"
	curl -s --max-time 170 -X "$method" -H "authorization: Bearer $(cat "$OWNER_TOKEN_FILE")" -H 'content-type: application/json' \
		${body:+-d "$body"} "$AGENT_URL$path"
}

report() {
	local name="$1" passed="$2" detail="$3"
	printf '{"check":"%s","passed":%s,"detail":%s}\n' "$name" "$passed" "$(printf %s "$detail" | head -c 300 | jq -Rs .)" | tee -a "$OUT/gate.jsonl"
}

is_true() { [ "$1" = "true" ] && echo true || echo false; }

reader="$RUN-reader"
stranger="$RUN-stranger"
owner PUT "/agents/$reader/grants" '[{"capability":"github","methods":"*"}]' >/dev/null

answer=$(owner POST "/agents/$reader/ask" '{"prompt":"How many stars does the GitHub repo acoyfellow/capa have? Use capa."}')
evidence=$(owner GET "/agents/$reader/evidence")
echo "$answer" >"$OUT/ask.json"
report "1_agent_answers_with_passing_evidence" "$(is_true "$(jq -n --argjson a "$answer" --argjson e "$evidence" '$a.status == "done" and ($e | any(.operationId == "repos/get" and .verdict == "pass"))')")" "$answer"

stranger_out=$(owner POST "/agents/$stranger/execute" '{"code":"return await capa.github.repos.retrieve(\"acoyfellow\",\"capa\");"}')
stranger_evidence=$(owner GET "/agents/$stranger/evidence")
report "2_no_grant_blocks_before_github" "$(is_true "$(jq -n --argjson o "$stranger_out" --argjson e "$stranger_evidence" '($o.ok == false) and ($o.error | test("no grant for github")) and ($e | length == 0)')")" "$stranger_out"

write_out=$(owner POST "/agents/$reader/execute" '{"code":"return await capa.github.user.starred(\"cloudflare\",\"workers-sdk\");"}')
report "3_read_only_agent_cannot_write" "$(is_true "$(jq -n --argjson o "$write_out" '($o.ok == false) and ($o.error | test("may not write"))')")" "$write_out"

fetch_out=$(owner POST "/agents/$reader/execute" '{"code":"const r = await fetch(\"https://api.github.com/zen\"); return r.status;"}')
report "4_sandbox_has_no_network" "$(is_true "$(jq -n --argjson o "$fetch_out" '$o.ok == false')")" "$fetch_out"

owner PUT "/agents/$reader/grants" '[]' >/dev/null
revoked_out=$(owner POST "/agents/$reader/execute" '{"code":"return await capa.github.repos.retrieve(\"acoyfellow\",\"capa\");"}')
report "5_clearing_grants_blocks_next_call" "$(is_true "$(jq -n --argjson o "$revoked_out" '($o.ok == false) and ($o.error | test("no grant"))')")" "$revoked_out"

owner GET "/agents/$reader/transcript" >"$OUT/transcript.json"
leaks=0
for file in "$OUT"/*.json "$OUT"/gate.jsonl; do
	if grep -qF "$(cat "$GITHUB_TOKEN_FILE")" "$file"; then leaks=$((leaks + 1)); fi
done
report "6_github_key_never_returned" "$( [ "$leaks" -eq 0 ] && echo true || echo false )" "files with key: $leaks"

http_tools=$(owner POST "/agents/$reader/mcp" '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | jq -c '[.result.tools[].name]')
rpc_tools=$(owner GET "/agents/$reader/rpc-tools" | jq -c '.')
report "7_http_rpc_mcp_same_agent" "$(is_true "$(jq -n --argjson h "$http_tools" --argjson r "$rpc_tools" --argjson a "$answer" '($h == $r) and ($h | index("execute") != null) and ($a.status == "done")')")" "mcp=$http_tools rpc=$rpc_tools"

passed=$(jq -s 'all(.passed)' "$OUT/gate.jsonl")
echo "{\"run\":\"$RUN\",\"allPassed\":$passed,\"out\":\"$OUT\"}"
[ "$passed" = "true" ]
