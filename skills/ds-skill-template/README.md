# DS Skill Template

A minimal Deft Systems template for AnythingLLM agent skills.

## Install

Copy this folder to `<storage_dir>/plugins/agent-skills/ds-skill-template/` and restart AnythingLLM.

## Files

- `plugin.json` — skill metadata (folder name must match `hubId`)
- `handler.js` — main entrypoint, must export an async function returning a string

See: https://docs.anythingllm.com/agent/custom/developer-guide
