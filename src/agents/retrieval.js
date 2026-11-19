/**
 * Retrieval agent (local demo, no external model).
 * Reads source material and ranks passages by simple keyword overlap with the goal.
 */

function splitPassages(source, text) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((passage) => ({ source, passage }));
}

function score(passage, goalTerms) {
  const lower = passage.toLowerCase();
  return goalTerms.reduce((acc, term) => acc + (lower.includes(term) ? 1 : 0), 0);
}

export async function retrieve(sources, goal) {
  const goalTerms = goal
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 2);

  const passages = sources.flatMap((s) => splitPassages(s.source, s.text));

  const scored = passages
    .map((p) => ({ ...p, score: score(p.passage, goalTerms) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  return scored.map((p) => ({
    source: p.source,
    excerpt: p.passage,
    relevance: p.score > 0 ? `matched ${p.score} goal term(s)` : "kept as background",
  }));
}
