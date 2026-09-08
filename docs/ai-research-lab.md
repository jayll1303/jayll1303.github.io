# AI Research Lab — playable preview

Approved direction: a third-person 3D portfolio for developers and demo visitors. AI Core reception connects Agent Systems, Document Intelligence, and a Generative Gallery. Actual portfolio data is the source of truth. No placeholder projects or invented results.

## Run

```sh
npm install
npm run dev
npm run build
npm test
npm run preview
```

The preview is a static Vite application. Three.js loads separately from the portfolio interface. Desktop uses WASD/arrows, Shift to run, mouse drag to look, and E/click near a highlighted station. Escape closes the active panel. Mobile and coarse-pointer devices show the lightweight portfolio without loading WebGL.

## Files and content

- `src/lab/world.js`: procedural laboratory, articulated character, collision, camera and station proximity. Station IDs connect objects to content; project descriptions never live in scene logic.
- `src/main.js`, `src/style.css`: welcome, exploration HUD, native dialog, project/profile/gallery panels, optional ambient audio, quality and motion controls.
- `src/content.js`: imports the existing resume and prompt JSON. Adds station metadata without duplicating project descriptions. Diagrams are labeled conceptual overviews.
- `resume/resume.json`: profile, three projects, skills, experience, education and certificates. Profile panel includes the GPA/scholarship and certificates omitted by the legacy renderer.
- `prompts/data`: original 18 image experiments. Existing prompt IDs and image paths preserved. The missing urban-night-streetwear-editorial text is explicitly unavailable.

## Compatibility

`/resume/`, `/resume/resume.pdf`, `/prompts/`, their JSON and assets remain intact. The original home terminal is available at `/legacy/`. Vite's copy plugin retains these static directories in `dist/`. CommonJS remains the package default so the existing image optimization script continues to work.

Existing GitHub URLs are preserved: the legacy homepage uses jayll1303; the résumé uses jayllfpt. Calendar Chatbot links to the original profile URL, labeled as such.

## Visual direction

Dark architectural pavilion with silver frames, teal floor lighting, subtle fog and a suspended orbital AI Core. Barlow Condensed for display type, Manrope for readable text, IBM Plex Mono for instrument labels. Primary colors: background `#0c1417`, panel `#132025`, text `#e5e9e4`, secondary `#9aa9ab`, accent `#a3e5d6`.

The initial elevated view introduces the lab, then entering switches to character-follow camera. No OrbitControls. Low graphics caps pixel ratio at one and disables shadows. Reduced motion stops decorative animation. Audio is off until explicitly enabled. Panels pause movement and use native modal focus handling.

## Preview boundaries

- Procedural meshes and character rather than authored GLB assets; no advanced character animation rig, audio-room content, or exterior traversal.
- Three connected zones in one pavilion rather than a large multi-room facility.
- No new project screenshots, technical outcomes or demo URLs invented.
- 60 FPS is an optimization goal, not a measured cross-device guarantee.
- No live deployment or push was performed. A future Pages deployment needs a workflow that builds and uploads `dist/`.

## Acceptance

Open project details from both proximity interactions and the quick-access navigation. Close and continue exploring. Return to entrance restores the overview camera. Gallery shows all 18 images, filters collections/title/raw prompt text, copies available prompt text, and marks the one missing text unavailable. CV and old URLs remain downloadable/accessible in the production build.

`npm test` compares the production content against the originals. While the dev server is running, open `/tests/lab-browser.html` to run seven real WebGL checks for movement, proximity, paused input, collision, camera distance, returning to the entrance and re-entering.
