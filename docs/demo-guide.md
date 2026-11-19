# Demo Guide — Synapse Mesh

This is the minimal runnable demo for the Kiroween 2026 submission. It has zero
npm dependencies and runs locally with Node.js 18+.

## What the demo shows

The pipeline mirrors the Kiro Crew workflow described in `.kiro/specs/agents.md`:

1. **Retrieval agent** — reads the built-in local notes, ranks passages by keyword
   overlap with the goal, and returns excerpts with citations.
2. **Structuring agent** — groups excerpts into Context, Key points, and Open
   questions, without inventing facts.
3. **Drafting agent** — turns the outline into a reusable draft and marks
   placeholders where source material is missing.

## Run it

### Terminal

```bash
node src/cli.js
```

The three stages print in order: excerpts, outline, draft.

### Browser

```bash
node server.js
```

Open http://localhost:4173/ and click **Run the mesh pipeline**. The page renders
the retrieval excerpts, the structured outline, and the final draft.

## Sample material

Built-in notes live in `src/demo/data.js` and mirror `examples/notes/`:

- `kickoff.md` — goal, review boundary, and why steps are separated.
- `constraints.md` — open questions, audience, and no-credentials note.

## Notes for reviewers

- The demo ranks passages with a local keyword score; it does not call an
  external model or service.
- No credentials, tokens, or internal paths are stored in the repository.
- The MCP adapters in `src/tools/registry.js` are placeholders to be wired to real
  servers during the build period.
