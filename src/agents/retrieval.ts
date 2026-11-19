/**
 * Synapse Mesh — retrieval agent.
 *
 * Reads the configured source material and returns relevant excerpts with
 * short citations. The demo ranks passages by simple keyword overlap so the
 * pipeline runs locally without an external model or service.
 */

export interface SourceExcerpt {
  source: string;
  excerpt: string;
  relevance: string;
}

/** Split a source document into passages on blank lines / headings. */
function splitPassages(source: string, text: string): { source: string; passage: string }[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((passage) => ({ source, passage }));
}

/** Score a passage against the goal terms (case-insensitive token overlap). */
function score(passage: string, goalTerms: string[]): number {
  const lower = passage.toLowerCase();
  return goalTerms.reduce((acc, term) => acc + (lower.includes(term) ? 1 : 0), 0);
}

export async function retrieve(
  sources: { source: string; text: string }[],
  goal: string,
): Promise<SourceExcerpt[]> {
  const goalTerms = goal
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 2);

  const passages = sources.flatMap((s) => splitPassages(s.source, s.text));

  const scored = passages
    .map((p) => ({ ...p, score: score(p.passage, goalTerms) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  if (scored.length === 0) {
    return [];
  }

  return scored.map((p) => ({
    source: p.source,
    excerpt: p.passage,
    relevance: p.score > 0 ? `matched ${p.score} goal term(s)` : "kept as background",
  }));
}
