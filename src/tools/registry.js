/**
 * Tool / MCP adapter registry (demo).
 */

export const toolRegistry = [
  {
    name: "local-notes",
    description: "Reads local notes and drafts from the configured input folder.",
    enabled: true,
  },
  {
    name: "mcp-search",
    description: "Example MCP-connected search adapter (to be wired to a real server).",
    enabled: false,
  },
];
