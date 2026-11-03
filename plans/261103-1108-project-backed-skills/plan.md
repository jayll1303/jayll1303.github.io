# Project-backed Skills

Outcome: rebuild `/#skills` as a list of demonstrated capabilities, each with implementation details and project references. Work on `codex/rebuild-project-backed-skills`.

Constraints: preserve the existing English portfolio, routes, project directory and appearance modes. Do not infer implementation experience from forks. The follow-up request authorizes merging into `main` and deploying through its existing GitHub Pages route.

Non-goals: redesigning other pages, rewriting the résumé or adding projects to the catalog.

Acceptance: each skill resolves to existing project records; public evidence links are distinct from internal résumé records; search matches capabilities, technologies and projects; desktop/mobile, light/dark, keyboard navigation and empty results work; tests and static build pass.

## Design brief

- Register: Brand, within the existing portfolio browser.
- Scene: recruiters and engineering peers scanning demonstrated work on laptops and phones.
- Direction: restrained editorial list; implementation on the left and evidence on the right, stacked on phones.
- Color: Restrained; reuse `--appearance-page`, `--appearance-ink`, `--appearance-accent` in both modes.
- Type: inherit the site's sans serif; hierarchy through weight and spacing.
- Signature: every capability has an “Applied in” project reference column.
- Dials: variance 2, motion 1, density 6.

## Evidence inspected

The local `resume/resume.pdf` and `resume/resume.json` document calendar agents, CV parsing, document AI, cloud delivery and Python/C++. They are older than the curated portfolio records; no employment dates are changed. Existing `portfolio-data.js` records document newer voice and enterprise work. Internal work is explicitly labelled as portfolio résumé evidence, not public source code.

Live GitHub evidence checked on 2026-11-03:

- [Table2HTML](https://github.com/jayll1303/table2html): detection API, table reconstruction, installable package.
- [Answer-Sheet-Extraction](https://github.com/jayll1303/Answer-Sheet-Extraction): OpenCV pipeline, REST API and Docker instructions.
- [TabMaka](https://github.com/jayll1303/TabMaka): TypeScript, Canvas 2D, Manifest V3, local preferences and reduced motion.
- [WindowsClipboardMods](https://github.com/jayll1303/WindowsClipboardMods/blob/main/mods/winv-panel-tweaks.wh.cpp): C++, panel hooks and tab visibility. The repository has no root README, so the mod source was read.
- [Coin & Stock Monitor](https://github.com/jayll1303/coin-stock-monitor): C++ taskbar mod, configurable JSON price source.
- AIEKit was inspected but its catalog of agent instructions is not treated as evidence of implementing every listed technology. Forks were excluded as standalone proof.

## Delivery

1. Evidence and scope: complete.
2. Data and UI: complete; 12 capabilities in four areas, project links and separate evidence links.
3. Verification: complete; focused evidence/search tests and all 14 tests pass; production build passes. Browser checks pass at 375, 768 and 1440px in light/dark, including search, empty results, native keyboard project navigation and visible focus. Container queries stack the reference column when the available content width is narrow.
4. Documentation: complete; [catalog guide](../../docs/skills-catalog.md) and the existing chat README describe the new behavior.

## Render review

The bundled render checker ran at all three widths. It reports an existing missing `/assets/favicon.svg`, existing shell touch-target/empty-state contrast warnings and intentional off-screen accessibility text. Its full-page screenshots do not scroll the app's nested catalog container, so browser-check screenshots were used to inspect the actual viewport. No Skills horizontal overflow was found. Source-link accessible names use `aria-label`, avoiding clipped hidden text in the new content. A transient Windows WASM file lock interrupted one rebuild; rerunning after the browser checks finished passed without source or tooling changes.

Visual rubric: 22/24. Brief fidelity 2 (restrained, readable, evidence-led), hierarchy 2, spacing 2, alignment 2, typography 2, color 2, depth/shape 2, states 2, responsiveness 2, slop tells 2, content 1 (older résumé and newer portfolio records cannot be independently reconciled), craft 1 (existing missing favicon). Reviewed mobile dark and tablet light screenshots; the three weakest items prompted clearer provenance labels, container-based stacking and direct keyboard-accessible project links. No item scores below 1.

Local verification process: `python -m http.server 5000 --bind 127.0.0.1`, PID 22028, repository root; stopped after checks. Browser check processes are ephemeral and close in `finally`.

Rollback: revert the skills source files, catalog integration and generated catalog assets from this branch. No data migrations or external writes are involved.
