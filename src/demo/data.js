/**
 * Built-in demo source material. Mirrors the notes under examples/notes so the
 * local demo runs without reading the filesystem. Replace these with your own
 * local documents for a real run.
 */

export const demoSources = [
  {
    source: "examples/notes/kickoff.md",
    text: [
      "The goal of Synapse Mesh is to turn scattered local notes and drafts into a structured summary without manual copy-paste between tools.",
      "The workflow should keep the human in review before any draft is used outside the workspace. Agents only read material placed in the configured input folder.",
      "We need a clear outline before drafting, so the retrieval and structuring steps run separately instead of one broad prompt.",
    ].join("\n\n"),
  },
  {
    source: "examples/notes/constraints.md",
    text: [
      "The output format for the final draft is still undecided: document, web page, or CLI report.",
      "The intended audience matters for tone; we have not confirmed whether the summary is for internal use or a public demo.",
      "Only standard libraries and local document context are used in the demo build; no external credentials are stored in the repository.",
    ].join("\n\n"),
  },
];

export const demoGoal = "Summarize the project notes into a structured outline and draft.";
