# Kitchen-sink eval

A blind, headless `pi` agent gets capa and a task. It must deploy real Workers, make a real API call, leave a script that someone else can run again, and then clean up. A separate grader checks each step against live Cloudflare state. It does not trust the agent's report.

## What runs

1. `run.sh` makes a fresh folder in `/tmp/capa-eval/<run>`. It adds a copy of this repo at `HEAD` (`git archive`) and a GitHub token file.
2. A build agent runs `pi -p --no-session --no-context-files --no-skills --no-extensions --no-prompt-templates` with `prompt-build.md`. It deploys `<run>-github` and `<run>-caller`, and writes `out/redo.sh` and `out/receipt.json`.
3. `grade.mjs live` calls the caller URL itself, lists the account's Workers, then runs `redo.sh` with a new prefix and runs its `--cleanup`.
4. A cleanup agent runs `prompt-clean.md` and deletes the run's Workers.
5. `grade.mjs final` checks that no Worker with the run prefix is left. It deletes any it finds. It checks that no token value appears in any file or transcript.

`grade.json` in the run folder has one true or false value for each check. `run.sh` exits 0 only when every check is true.

## Set up

Create `~/.config/capa/eval.env`:

```bash
CAPA_EVAL_ACCOUNT_ID=<your account ID>
CAPA_EVAL_SUBDOMAIN=<your workers.dev subdomain>
CAPA_EVAL_PROVIDER=<pi provider>
CAPA_EVAL_MODEL=<pi model>
CAPA_EVAL_PROVIDER_EXTENSION=<path to the extension that registers the provider, if it is not built in>
```

Put a GitHub fine-grained token in `~/.config/capa/eval-github-token`, with `chmod 600`. Public repositories, read only, is enough. Run `cf auth login` once.

```bash
bash evals/kitchen-sink/run.sh
```

The first run installs `cf` and `wrangler` from `tools.package.json` into `~/.cache/capa-eval/tools`. The agent uses those versions.

## Limits

- One run takes about 10 minutes and deploys up to 6 Workers. They are deleted at the end.
- The grader uses your `cf` login. Use an account that you can clean up.
- A weaker model fails in useful ways. In earlier runs, a local model guessed method names, read the token file into its transcript, and wrote a passing receipt without making a call. The grader caught each of these.
