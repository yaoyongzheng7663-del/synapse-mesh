# Design Notes

## Problem
Tools, documents, and AI assistants usually live in separate places. Keeping
context aligned across them breaks the flow and leaves valuable information
behind.

## Approach
Synapse Mesh keeps a small, explicit pipeline:

1. **Load** local source material into a bounded context layer.
2. **Retrieve** the relevant excerpts with citations.
3. **Structure** them into a consistent outline.
4. **Draft** a reusable output, with gaps marked as placeholders.

## Boundaries
- Agents only read sources inside the configured input folder.
- Tool calls are explicit and enabled per project.
- Generated drafts are reviewed by the user before external use.

## Open design questions
- Which source formats should be supported first (Markdown, plain text, PDFs)?
- How should the output be presented (web page, document, or CLI report)?
- Which MCP tools provide the most value for the target workflow?
