/**
 * Tool / MCP adapter registry.
 *
 * External tools are registered here so the mesh can call them without
 * pulling unrelated data into the main workspace. The demo ships two local
 * adapters as placeholders; real MCP connections plug in here.
 */

export interface ToolAdapter {
  name: string;
  description: string;
  enabled: boolean;
}

export const toolRegistry: ToolAdapter[] = [
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
