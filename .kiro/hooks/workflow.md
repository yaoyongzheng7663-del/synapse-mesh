# Synapse Mesh — Hooks

Hooks run at key decision points in the workflow to keep it repeatable.

## Workflow hooks

### `on-source-loaded`
- Triggered after local files / notes are loaded into the context layer.
- Validate that the source list is non-empty and readable; stop with a clear
  message if no source material was provided.

### `before-retrieval`
- Confirm the retrieval agent knows which sources it is allowed to read.
- Block access to files outside the configured input folder.

### `after-structuring`
- Check that the outline still matches the retrieved excerpts.
- Reject drafts that introduce facts absent from the source material.

### `before-draft`
- Verify the requested output format and target audience are set.
- Surface missing information as placeholders rather than filling it in.

## Notes
- Hook scripts live alongside this configuration and are wired up as the project
  is implemented. Keep hooks small and deterministic.
