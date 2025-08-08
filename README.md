# Deft Agents

Open-source AnythingLLM agent skills by Deft Systems. JavaScript + MIT. Each skill is drop-in
installable to `plugins/agent-skills/<hubId>/`.

## Structure
- `skills/` — one folder per skill (folder name = `hubId`)
- `scripts/` — helper scripts (packaging, release helpers)
- `templates/agent-skill/` — starter template for new skills

## Conventions
- JavaScript (CommonJS), zero-build by default
- MIT License
- `hubId` must equal the skill folder name

## Install (AnythingLLM)
Copy a skill folder into your AnythingLLM storage directory:
`<storage_dir>/plugins/agent-skills/<hubId>/` and restart the app.

For skill format details, see the AnythingLLM Custom Agent Skill guide:
https://docs.anythingllm.com/agent/custom/developer-guide
