# Synapse Mesh

**An agent-first workspace that connects local documents, a Kiro Crew of specialized agents, and MCP-connected tools into one structured workflow.**

Synapse Mesh is a Kiroween 2026 project built around Kiro (IDE / CLI / Web / Crew). It forms a lightweight "mesh" between your own source material, focused agents, and external tools, so scattered notes and documents can be retrieved, organized, and drafted into reusable outputs without manual copy-paste loops.

> Category: **Frankenstein** — stitching together disconnected technologies into one unexpectedly powerful workflow.

## What it does

- **Context layer:** loads local files and notes so agents reference the right material instead of guessing.
- **Agent crew:** separate agents handle retrieval, structuring, and drafting, each with a narrow, predictable responsibility.
- **Tool connections:** MCP integrations bring in external capabilities without pulling unrelated data into the main workspace.
- **Structure and guardrails:** Kiro specs, hooks, and steering keep the workflow repeatable and easy to tune.

## Project structure

```
synapse-mesh/
├── .kiro/                  # Kiro project configuration (required by the hackathon)
│   ├── specs/              # Agent behavior specifications
│   ├── hooks/              # Workflow hooks at decision points
│   └── steering/           # Steering rules that keep agents consistent
├── src/
│   ├── agents/             # Specialized crew agents (retrieval, structuring, drafting)
│   ├── mesh/               # Context mesh that connects sources, agents, and tools
│   └── tools/              # Tool / MCP connection adapters
├── docs/                   # Design notes and workflow documentation
├── examples/               # Example inputs and expected outputs
├── LICENSE
└── README.md
```

## Getting started

1. Install and sign in to [Kiro](https://kiro.dev/) (IDE, CLI, or Web).
2. Open this repository in Kiro so the `.kiro` specs, hooks, and steering are loaded.
3. Place your own source material under an input folder (see `examples/` for the expected shape).
4. Run the retrieval → structuring → drafting flow and review the assembled output.

> This repository is a working scaffold. The agent prompts, tool adapters, and UI are being filled in during the Kiroween 2026 submission period.

## Built with

- Kiro (Crew, specs, hooks, steering)
- MCP-connected tools
- Local document context

## Development status

- [x] Project scaffold and Kiro configuration layout
- [ ] Retrieval agent
- [ ] Structuring agent
- [ ] Drafting agent
- [ ] MCP tool adapters
- [ ] Working demo / deployment

## License

This project is released under the MIT License — see [LICENSE](LICENSE).
