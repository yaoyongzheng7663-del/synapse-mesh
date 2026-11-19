/**
 * Synapse Mesh — context mesh.
 *
 * Connects sources, agents, and tools: it holds the current source list,
 * passes context between crew members, and keeps unrelated data out of the
 * main workspace.
 */

import { retrieve } from "../agents/retrieval";
import { structure } from "../agents/structuring";
import { draft } from "../agents/drafting";

export interface MeshConfig {
  inputFolder: string;
  goal: string;
  enabledTools: string[];
}

export async function runMesh(config: MeshConfig) {
  // TODO: wire retrieval -> structuring -> drafting through the mesh,
  // with hooks running at each decision point.
  const excerpts = await retrieve([config.inputFolder]);
  const outline = structure(excerpts);
  return draft(outline, config.goal);
}
