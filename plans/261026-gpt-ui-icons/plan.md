# ChatGPT interface icon port

Status: complete.

Outcome: replace placeholder Unicode UI glyphs in `/chat/` with the corresponding SVG icon shapes from the user-supplied ChatGPT HTML and its referenced icon sprite.

Constraints: keep the existing portfolio behavior and JayLL identity; do not bundle the copied HTML, private account state, scripts, or the 617 KB source sprite. Keep the build self-contained and preserve unrelated worktree changes.

Non-goals: copying ChatGPT branding, replacing project-specific category marks with invented logos, or changing the portfolio layout.

Source manifest: user attachment `Pasted text.txt` (670 KB, snapshot of ChatGPT HTML with 20 inline SVGs) and its referenced `/cdn/assets/icons-c6b5375eadec3cee.svg` (921 symbols). No source commit or license was provided. Local owners: `chat-app/src/main.jsx`, `project-catalog.jsx`, `style.css`, and the Vite static build in `chat/`.

Source anatomy: navigation icons for New chat, Images, Scheduled, Plugins and Explore are inline SVGs. Search, sidebar, plus and microphone reference symbol IDs in the external sprite. The source also includes an inline Send arrow. React can render a local subset as one SVG sprite with `<use>` references; current local controls use text glyphs.

Challenge decisions: Copying the full HTML would bring private/hydration data and break the local app. Remote `<use>` references would depend on the ChatGPT CDN and its versioned URL. Extract only the shapes that map to visible portfolio controls, sanitize SVG elements and attributes, bundle them locally, and retain accessible button labels. Do not use the OpenAI logo as the JayLL avatar. Risk: low, with visual compatibility checked in browser.

Implementation: create a small sprite and reusable React icon component; replace navigation, header, composer and catalog control glyphs; build and inspect desktop/mobile. Rollback is reverting the scoped UI asset and component changes.

Acceptance: relevant controls render actual SVGs from the supplied icon set; no broken icons or remote icon requests; controls remain labelled and functional; build and browser checks pass.

Validation: `npm test` (2 passed), `npm run build` (passed), desktop and 390 px mobile browser inspection (icons visible), and no browser console errors. Saved previews at `chat/previews/gpt-icons-desktop.png` and `chat/previews/gpt-icons-mobile.png`.
