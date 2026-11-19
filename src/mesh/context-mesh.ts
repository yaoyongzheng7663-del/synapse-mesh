/**
 * Synapse Mesh — context mesh.
 *
 * Connects sources, agents, and tools: it holds the current source list,
 * passes context between crew members, and keeps unrelated data out of the
 * main workspace. The mesh runs the retrieval -> structuring -> drafting
 * pipeline and returns each stage so the demo can show the flow step by step.
 */

import { retrieve, type SourceExcerpt } from "../agents/retrieval";
import { structure, type OutlineSection } from "../agents/structuring";
import { draft, type DraftResult } from "../agents/drafting";
import { toolRegistry } from "../tools/registry";

export interface MeshSource {
  source: string;
  text: string;
}

export interface MeshConfig {
  inputFolder: string;
  goal: string;
  enabledTools: string[];
}

export interface MeshRunResult {
  goal: string;
  sources: MeshSource[];
  excerpts: SourceExcerpt[];
  outline: OutlineSection[];
  draft: DraftResult;
  enabledTools: string[];
}

export async function runMesh(config: MeshConfig, sources: MeshSource[]): Promise<MeshRunResult> {
  const enabledTools = toolRegistry
    .filter((t) => t.enabled && config.enabledTools.includes(t.name))
    .map((t) => t.name);

  const excerpts = await retrieve(sources, config.goal);
  const outline = structure(excerpts);
  const result = draft(outline, config.goal);

  return {
    goal: config.goal,
    sources,
    excerpts,
    outline,
    draft: result,
    enabledTools,
  };
}
