/**
 * Tool / MCP adapter registry.
 *
 * External tools are registered here so the mesh can call them without
 * pulling unrelated data into the main workspace.
 */

export interface ToolAdapter {
  name: string;
  description: string;
  enabled: boolean;
}

export const toolRegistry: ToolAdapter[] = [
  // TODO: register MCP-connected tools as they are integrated.
];
