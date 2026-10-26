# Dark chat portfolio and browser model

Status: complete.

Outcome: adapt `/chat/` to the supplied dark ChatGPT screenshot and let visitors ask portfolio questions with a small model running in their browser.

Constraints: static GitHub Pages; no server, account, private résumé PDF, invented accomplishments, or edits to unrelated worktree changes. Keep the current React/Vite app and curated portfolio records.

Non-goals: copying ChatGPT code or proprietary assets; a general-purpose chatbot; storing visitor messages remotely.

Source: user screenshot from this conversation, 2026-10-26. Private ChatGPT source and commit are unavailable. `ak-xia` port mode applies its visible layout and interaction patterns to the local components.

Source anatomy: a 226px dark sidebar contains navigation, Projects, Recents and profile; the content column has minimal top actions, a centered ~720px conversation and a bottom composer. The screenshot does not expose implementation, persistence or model behavior. The local equivalents are `chat-app/src/main.jsx` and `style.css`; the content authority remains `portfolio-data.js`.

Dependency map: sidebar, transcript and composer already existed and needed visual changes; browser inference and record validation were new modules (`local-model-worker.js`, `portfolio-search.js`); no authentication, backend or migration is involved. The only external runtime dependency is Transformers.js and its model files. Risk is medium due to first-load bandwidth and small-model accuracy; its selection is checked against real portfolio entries and a text fallback is available.

| Decision | Screenshot/source | Local implementation | Risk |
| --- | --- | --- | --- |
| Layout | Black canvas, narrow fixed sidebar, centered transcript, docked composer | Dark tokens, compact navigation, 720px transcript and composer | Low |
| Recents | Persisted ChatGPT conversation titles | Navigation history for the current visit only | Low |
| Answer | ChatGPT hosted model | Lazy-loaded quantized small browser model grounded in curated portfolio facts | Medium: download size, speed, accuracy |
| Failure | Hosted service controls failures | Clearly labelled local retrieval fallback and retry | Low |

Implementation: commit the prior preview separately; adjust sidebar/transcript/composer; add a worker with a quantized text generation model and progress/error states; keep source-backed project links visible; update the app documentation and production build.

Acceptance: screenshot-inspired desktop and mobile layouts; a natural-language question invokes real in-browser inference with no API key; answers cite portfolio entries and explain unsupported queries; WebGPU/runtime failure has a usable fallback; build and browser checks pass.

Validation: `npm test` and `npm run build` pass. Browser checks at desktop and 375px verified the dark shell, project navigation and mobile drawer. First-load inference completed with no console errors. An English GraphRAG question returned Enterprise GraphRAG; a Vietnamese voice-work question returned Alice, the voicebot and VoxCPM-VN after relevance validation. Preview images are stored in `chat/previews/`.
