/**
 * Synapse Mesh — context mesh (local demo runtime).
 * Runs retrieval -> structuring -> drafting and returns every stage for display.
 */

import { retrieve } from "../agents/retrieval.js";
import { structure } from "../agents/structuring.js";
import { draft } from "../agents/drafting.js";
import { toolRegistry } from "../tools/registry.js";

export async function runMesh(config, sources) {
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
