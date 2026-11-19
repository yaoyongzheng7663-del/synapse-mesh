/**
 * Drafting agent (local demo).
 * Composes a draft from the outline and marks placeholders where material is missing.
 */

function bullets(items) {
  if (items.length === 0) return "- _No material captured._";
  return items.map((i) => `- ${i}`).join("\n");
}

export function draft(outline, goal) {
  const context = outline.find((s) => s.heading === "Context");
  const keyPoints = outline.find((s) => s.heading === "Key points");
  const questions = outline.find((s) => s.heading === "Open questions");

  const placeholders = [];
  if ((context?.points.length ?? 0) === 0) {
    placeholders.push("Background context was not available in the source material.");
  }
  if ((keyPoints?.points.length ?? 0) === 0) {
    placeholders.push("Key supporting points were not available in the source material.");
  }

  const title = goal.trim() || "Draft from local source material";

  const body = [
    `## ${title}`,
    "",
    "### Context",
    bullets(context?.points ?? []),
    "",
    "### Key points",
    bullets(keyPoints?.points ?? []),
    "",
    "### Open questions",
    bullets(questions?.openQuestions ?? []),
    "",
  ].join("\n");

  return { title, body, placeholders };
}
