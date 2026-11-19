#!/usr/bin/env node
/**
 * Synapse Mesh — local CLI demo.
 *
 * Runs the retrieval -> structuring -> drafting pipeline on the built-in demo
 * material and prints each stage. No external service or model is required.
 *
 * Usage:  node src/cli.js
 */

import { runMesh } from "./mesh/context-mesh.js";
import { demoSources, demoGoal } from "./demo/data.js";

const config = {
  inputFolder: "examples/notes",
  goal: demoGoal,
  enabledTools: ["local-notes", "mcp-search"],
};

const result = await runMesh(config, demoSources);

console.log("=== Synapse Mesh — local demo ===");
console.log("Goal:", result.goal);
console.log("Enabled tools:", result.enabledTools.join(", ") || "(none)");

console.log("\n--- Stage 1: Retrieval (excerpts) ---");
for (const ex of result.excerpts) {
  console.log(`• [${ex.relevance}] ${ex.source}`);
  console.log(`  ${ex.excerpt.replace(/\n/g, " ")}`);
}

console.log("\n--- Stage 2: Structuring (outline) ---");
for (const section of result.outline) {
  console.log(`## ${section.heading}`);
  for (const p of section.points) console.log(`  - ${p}`);
  for (const q of section.openQuestions) console.log(`  ? ${q}`);
}

console.log("\n--- Stage 3: Drafting ---");
console.log(result.draft.body);

if (result.draft.placeholders.length > 0) {
  console.log("Placeholders:");
  for (const p of result.draft.placeholders) console.log(`  ! ${p}`);
}
