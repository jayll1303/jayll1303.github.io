# Chat portfolio as the homepage

Status: complete.

Outcome: visiting `/` opens the ChatGPT-inspired portfolio directly, with useful header actions, résumé-grounded local answers, a visual experience timeline, and cohesive motion across chat views.

Constraints: keep GitHub Pages static hosting; preserve the existing `/chat/` URL; retain unrelated uncommitted files; use actual résumé facts and sourced organization marks; work within the existing React/Vite stack; commit completed slices. The user supplied the PDF and requested its content in the browser model prompt. Do not ship the raw PDF, phone number, or unrelated private content as model context.

Non-goals: a server LLM, account features, a new landing page, fabricated work claims, or a blanket restyle away from the ChatGPT interface.

Acceptance:

1. `/` serves the chat UI without redirecting to the old terminal; `/chat/` still works; browser history, links and refresh work on GitHub Pages.
2. The three-dot button opens a meaningful accessible menu rather than going straight to Contact.
3. A basic question about résumé experience, projects, education or skills receives a concise grounded natural-language answer from the local model, with relevant portfolio links; unsupported questions say the information is unavailable. Failures are clearly labeled as fallback search.
4. Experience displays locally bundled organization marks where verified and an accessible responsive visual timeline.
5. Motion is visible across the welcome screen, navigation, answer content and browsing views; `prefers-reduced-motion` remains readable and usable.
6. Focused tests, production build and desktop/mobile browser checks pass; completed slices receive conventional commits.

Ownership: controller owns root route, header menu, integration in `main.jsx`, build and docs. Parallel workers own résumé prompt/model modules; timeline component, styles and icon assets; and standalone motion module/styles. Generated `chat/` assets and cross-cutting integration are controller-owned.

Phases: (1) homepage and menu; (2) résumé-grounded SLM; (3) experience timeline and marks; (4) motion; (5) integration, test, browser review and docs.

Validation: `npm test` passed all five tests; `npm run build` passed; the built root and `/chat/` HTML have matching SHA-256 hashes. Desktop and 390px mobile browser checks covered the home view, menu, timeline and local-model answer. GitHub Pages built commit `b60488a`; live `/` returned the chat assets without the former terminal script, and `/chat/` returned HTTP 200.
