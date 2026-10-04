#!/usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../.." && pwd)"
TOKEN_FILE="${CAPA_EVAL_GITHUB_TOKEN_FILE:-$HOME/.config/capa/eval-github-token}"
EVAL_ENV="${CAPA_EVAL_ENV:-$HOME/.config/capa/eval.env}"
[ -f "$EVAL_ENV" ] && set -a && . "$EVAL_ENV" && set +a
ACCOUNT_ID="${CAPA_EVAL_ACCOUNT_ID:?set CAPA_EVAL_ACCOUNT_ID in $EVAL_ENV}"
SUBDOMAIN="${CAPA_EVAL_SUBDOMAIN:?set CAPA_EVAL_SUBDOMAIN in $EVAL_ENV}"
PROVIDER="${CAPA_EVAL_PROVIDER:?set CAPA_EVAL_PROVIDER in $EVAL_ENV}"
MODEL="${CAPA_EVAL_MODEL:?set CAPA_EVAL_MODEL in $EVAL_ENV}"
PROVIDER_EXTENSION="${CAPA_EVAL_PROVIDER_EXTENSION:-}"
RUN="capa-eval-$(date +%m%d%H%M%S)"
WORK="/tmp/capa-eval/$RUN"

TOOLS_DIR="${CAPA_EVAL_TOOLS_DIR:-$HOME/.cache/capa-eval/tools}"
if [ ! -x "$TOOLS_DIR/node_modules/.bin/cf" ] || [ ! -x "$TOOLS_DIR/node_modules/.bin/wrangler" ]; then
	mkdir -p "$TOOLS_DIR"
	cp "$HERE/tools.package.json" "$TOOLS_DIR/package.json"
	(cd "$TOOLS_DIR" && NPM_CONFIG_USERCONFIG="$HERE/tools.npmrc.txt" npm install --no-audit --no-fund >/dev/null)
fi
CF_TOOLS="$TOOLS_DIR/node_modules/.bin"
export CAPA_EVAL_CF_TOOLS="$CF_TOOLS" CAPA_EVAL_CF_BIN="$CF_TOOLS/cf"
CF_OAUTH_FILE="${CAPA_EVAL_CF_OAUTH_FILE:-$HOME/Library/Preferences/cloudflare/config/default.json}"

[ -s "$TOKEN_FILE" ] || { echo "missing GitHub token file $TOKEN_FILE" >&2; exit 2; }
[ -x "$CF_TOOLS/cf" ] && [ -x "$CF_TOOLS/wrangler" ] || { echo "missing cf and wrangler in $CF_TOOLS" >&2; exit 2; }
fresh_cf_token() {
	(cd /tmp && "$CF_TOOLS/cf" auth whoami >/dev/null 2>&1)
	CLOUDFLARE_API_TOKEN="$(node -e 'process.stdout.write(require(process.argv[1]).oauth_token ?? "")' "$CF_OAUTH_FILE")"
	[ -n "$CLOUDFLARE_API_TOKEN" ] || { echo "run cf auth login first" >&2; exit 2; }
	export CLOUDFLARE_API_TOKEN
	[ -d "$WORK" ] && printf %s "$CLOUDFLARE_API_TOKEN" >>"$WORK/.grader-cf-token" && printf '\n' >>"$WORK/.grader-cf-token"
	return 0
}
fresh_cf_token

umask 077
mkdir -p "$WORK/out" "$WORK/secrets"
cp "$TOKEN_FILE" "$WORK/secrets/github-token"
printf '%s\n' "$CLOUDFLARE_API_TOKEN" >"$WORK/.grader-cf-token"
git -C "$REPO" archive --format=tar HEAD | (mkdir -p "$WORK/capa" && tar -x -C "$WORK/capa")

render() {
	sed -e "s/{{RUN}}/$RUN/g" -e "s/{{ACCOUNT_ID}}/$ACCOUNT_ID/g" -e "s/{{SUBDOMAIN}}/$SUBDOMAIN/g" "$1"
}

blind_pi() {
	local prompt_file="$1" log="$2"
	(
		cd "$WORK"
		env PATH="$CF_TOOLS:$PATH" CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID" NPM_CONFIG_REGISTRY=https://registry.npmjs.org/ pi -p --no-session --no-context-files --no-skills \
			--no-extensions --no-prompt-templates --mode json ${PROVIDER_EXTENSION:+-e "$PROVIDER_EXTENSION"} --provider "$PROVIDER" --model "$MODEL" \
			"$(render "$prompt_file")" >"$log" 2>&1
	)
}

echo "run $RUN in $WORK"
set +e
fresh_cf_token
blind_pi "$HERE/prompt-build.md" "$WORK/build.jsonl"
echo $? >"$WORK/build.exit"
NPM_CONFIG_REGISTRY=https://registry.npmjs.org/ node "$HERE/grade.mjs" live "$WORK" "$RUN" "$ACCOUNT_ID" "$SUBDOMAIN"

fresh_cf_token
blind_pi "$HERE/prompt-clean.md" "$WORK/clean.jsonl"
echo $? >"$WORK/clean.exit"
NPM_CONFIG_REGISTRY=https://registry.npmjs.org/ node "$HERE/grade.mjs" final "$WORK" "$RUN" "$ACCOUNT_ID" "$SUBDOMAIN"
status=$?
set -e

rm -rf "$WORK/secrets" "$WORK/.grader-cf-token"
exit $status
