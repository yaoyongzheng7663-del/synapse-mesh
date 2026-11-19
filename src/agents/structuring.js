/**
 * Structuring agent (local demo).
 * Groups excerpts into Context, Key points, and Open questions without inventing facts.
 */

const QUESTION_HINTS = ["?", "open question", "unknown", "missing", "need to", "should we", "who", "what format", "undecided", "not confirmed"];

function isQuestion(passage) {
  const lower = passage.toLowerCase();
  return QUESTION_HINTS.some((h) => lower.includes(h));
}

export function structure(excerpts) {
  const context = [];
  const keyPoints = [];
  const openQuestions = [];

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
