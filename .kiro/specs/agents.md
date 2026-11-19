# Synapse Mesh — Agent Specs

This directory defines how the Kiro Crew agents behave. Each agent has a narrow
responsibility so its output stays predictable and easy to debug.

## Crew roles

### 1. Retrieval agent (`src/agents/retrieval.ts`)
- Read only the source material explicitly provided to it.
- Return the relevant excerpts and short citations, not unrelated content.
- Flag when the source material is missing or insufficient instead of guessing.

### 2. Structuring agent (`src/agents/structuring.ts`)
- Organize retrieved excerpts into a clear outline: context, key points, open questions.
- Preserve the original meaning; do not invent facts not present in the source.
- Keep headings and labels consistent across runs.

### 3. Drafting agent (`src/agents/drafting.ts`)
- Turn the structured outline into a reusable draft in the requested format.
- Mark assumptions and placeholders where source material was missing.
- Keep the output focused on the user's stated goal.

## Shared rules
- Agents must not send credentials, tokens, or internal paths into generated output.
- If a task falls outside the provided source material, say so explicitly.
- Prefer small, explicit steps over one opaque automation.
