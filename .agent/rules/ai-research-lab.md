---
trigger: model_decision
---

# AI Research Lab

- `/` is a Vite + Three.js portfolio, with a welcome overview and a third-person explorable pavilion.
- `src/lab/world.js` owns rendering, procedural assets, player, collision, camera, stations and lifecycle. Never embed project descriptions in the scene.
- `src/content.js` imports the existing resume and prompt data. Preserve names, IDs, original links and raw prompt text. Missing data must not be invented.
- `src/main.js` owns HTML panels, accessible dialog focus, quick navigation, audio and settings. Project/profile/gallery panels must work without WebGL.
- Controls: WASD/arrows, mouse drag, Shift, E, Escape. Pausing clears held keys. Returning to entrance resets the overview camera. No OrbitControls.
- Interactive IDs: calendar, jobfit, table2html, gallery, profile, terminal, core. Project deep links use URL hashes.
- Mobile/coarse input defaults to lightweight HTML. Respect reduced motion; audio defaults off; light graphics disables shadows.
- Preserve `/resume/`, `/prompts/`, `/resume/resume.pdf` and `/legacy/` in the build. The original pages retain the `terminal-theme` preference; the lab uses its own cohesive palette.
- Profile includes certificates and education score. Gallery lists 18 images; urban-night-streetwear-editorial has no prompt text and must show unavailable.
- Full architecture, visual tokens and prototype boundaries: `docs/ai-research-lab.md`.
