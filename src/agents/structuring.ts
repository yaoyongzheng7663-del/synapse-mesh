/**
 * Synapse Mesh — structuring agent.
 *
 * Organizes retrieved excerpts into a consistent outline without inventing
 * facts. Passages mentioning questions, unknowns, or gaps go to open
 * questions; the rest split into context and key points.
 */

import type { SourceExcerpt } from "./retrieval";

export interface OutlineSection {
  heading: string;
  points: string[];
  openQuestions: string[];
}

const QUESTION_HINTS = ["?", "open question", "unknown", "missing", "need to", "should we", "who", "what format"];

function isQuestion(passage: string): boolean {
  const lower = passage.toLowerCase();
  return QUESTION_HINTS.some((h) => lower.includes(h));
}

export function structure(excerpts: SourceExcerpt[]): OutlineSection[] {
  const context: string[] = [];
  const keyPoints: string[] = [];
  const openQuestions: string[] = [];

  excerpts.forEach((ex) => {
    const passage = `${ex.excerpt} (source: ${ex.source})`;
    if (isQuestion(ex.excerpt)) {
      openQuestions.push(passage);
    } else if (context.length === 0) {
      context.push(passage);
    } else {
      keyPoints.push(passage);
    }
  });

  return [
    { heading: "Context", points: context, openQuestions: [] },
    { heading: "Key points", points: keyPoints, openQuestions: [] },
    { heading: "Open questions", points: [], openQuestions },
  ];
}
