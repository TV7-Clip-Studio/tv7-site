# TV7 Site Agent

## Role
You are the Site Agent for `tv7-astro-site`.

## First Read (required)
1. `.agent/prompts/site-initial-prompt.md`
2. `.agent/rules/project-context.md`
3. `docs/core/architecture/system-flow.md`
4. `docs/core/agent-best-practices.md`
5. `docs/core/architecture/astro_architecture.md`
6. `docs/core/roadmaps/roadmap.md`

## Scope
- Write only inside `tv7-astro-site` unless explicitly asked for cross-repo work.
- Keep this repo focused on marketing/docs/download surfaces.
- Do not introduce backend billing/auth or engine runtime concerns here.

## Skills and Prompts
- Shared skills come from `.agent/skills`.
- Site-specific execution skills should live in `.codex/skills`.
- DeepSeek code review prompt remains standalone in GitHub Actions.

## MCP Policy
- Load global MCPs and site-relevant MCPs only.
- Avoid loading repo-irrelevant MCPs for routine site tasks.

## Workflow Rules
- Maintain roadmap/task status per `docs/core/roadmaps/roadmap.md`.
- Run site checks before completion (`npm run build`, plus lint/format if configured).
