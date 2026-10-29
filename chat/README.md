# ChatGPT inspired portfolio

The React/Vite source in [`chat-app/`](../chat-app/) is the default homepage at `/`. The same production build is also available at `/chat/`. The former terminal homepage is no longer loaded at `/`.

## UI mapping

| Familiar chat element | Portfolio role |
| --- | --- |
| New chat | Start at the portfolio welcome screen |
| Search icon / Ctrl K | Open direct navigation or ask the local model |
| Images | Jay's existing image gallery with filters, prompt details and copy controls |
| Library | Achievement image collection; currently empty until images are supplied |
| Projects | A searchable, filterable directory of 18 résumé projects and shipped products |
| Skills tab | The skills listed in Jay's résumé, grouped by subject |
| Recent this visit | Views opened in this browser session |
| Conversation | Detail for a project, career stage or topic |
| Composer | A small browser model answers from curated résumé facts and links to relevant portfolio records; no server or API key |
| CV control | Work, education and community history in a visual timeline |
| Contact | Email, LinkedIn, GitHub, Facebook and Zalo links |
| Three-dot menu | Quick navigation to About, Work history, Projects and Contact |
| Share | Copy the selected view's URL |

The five-page PDF provided for this task was read locally and was not copied into the site. Jay later explicitly supplied the LinkedIn and Facebook profile URLs and confirmed the phone number used for the Zalo link. Four newer products come from the public Windhawk, Chrome Web Store and Unikorn pages supplied by Jay. Public project links are present only where a URL was supplied or already in the existing portfolio. Outcome numbers for earlier work are attributed to the supplied résumé.

## Build

From `chat-app/`, run `npm install` and `npm run build`. Vite writes the static output here and copies its built `index.html` to the repository root, so `/` and `/chat/` load the same chat app without a redirect. GitHub Pages serves the root of `main` at `https://jayll1303.github.io/`. Other portfolio routes remain plain HTML/CSS/JavaScript.

`npm test` checks the local fallback, record validation and résumé fact retrieval. Greetings and explicit unknown topics are handled immediately by the portfolio guide without loading the model. For documented topics, the guide shows a sourced résumé answer immediately while the model loads and may refine it. Transformers.js runs SmolLM2-135M-Instruct in a worker, using WebGPU where available and WASM otherwise. The quantized model requires a substantial first download (roughly 134–200 MB of weights, depending on device) and is cached by the browser. The worker retrieves relevant, short facts from `chat-app/src/resume-context.js` and feeds them to the model as prompt context. Only answer text copied from those vetted facts is accepted; otherwise the worker displays a deterministic fact answer. If the model cannot run, the portfolio guide keeps the retrieved answer. Unknown facts receive an explicit unknown response. A question about Microsoft Copilot distinguishes that undocumented product from Jay's documented Microsoft Agent Framework and Azure work. Relevant record IDs are checked against the curated data before links are shown. The model is mainly trained for English; Vietnamese matching can be less reliable. No visitor question is sent to a portfolio backend, though the browser fetches model files from Hugging Face on first use.

The chat layout follows the first user-provided dark screenshot: narrow black sidebar, centered conversation, compact answer content and a docked composer. The Projects directory adapts the later Plugins screenshot: top Projects/Skills tabs, wide search, scope and category filters, and two-column project rows. Featured and More projects use the existing portfolio data. The directory loads as a separate chunk, with a skeleton only during that first load; project icons shimmer until their image loads. The three-dot button opens a navigation menu, and Contact remains reachable there and from the project catalog. Project rows open the existing detail view. Project details show external sources as cards with destination hostnames, while internal follow-ups use quieter navigation rows and different icons. Chat answers reveal their text briefly word by word, and model progress disappears as soon as a sourced answer is available. These effects respect reduced-motion preferences. Images displays the existing `/prompts/` collection in a ChatGPT-style grid. One existing record, Urban Night Streetwear Editorial, has an image but its prompt text file is missing, so its detail view reports that the prompt is unavailable. Library has an empty achievement image manifest in `chat-app/src/achievements-library.jsx` for images Jay will add later. The sidebar lists Projects only once. Experience uses a connected timeline with locally bundled organization marks; [asset sources](../docs/organization-icon-sources.md) are recorded separately. Welcome, conversation and browsing content reveal on entry using IntersectionObserver, with reduced-motion support.

Interface icons are a small, sanitized local SVG subset extracted from the user-supplied ChatGPT HTML and its referenced icon sprite. The source HTML and full sprite are not shipped. Project icons are bundled locally; their [sources and provenance](../docs/project-icon-sources.md) are recorded separately. The JayLL identity remains portfolio-specific.

The React component tree and the data in `chat-app/src/portfolio-data.js` provide extension points for future interactive projects, including Three.js. No 3D runtime or mini game is loaded in this version.

## AI studio motion

The existing chat layout uses an orchestrated welcome, word-by-word introduction, view entrances, card/icon feedback, timeline connector reveals and gallery zoom/detail transitions. Composer focus, enabled send, copy success, tab selection and mobile navigation provide motion feedback. Native Web Animations and CSS keep this dependency-free; `chat-app/src/portfolio-motion.js` owns viewport reveals and nested-scroll word triggers, while `portfolio-motion.css` owns interaction styling. Native dialogs retain Escape, focus restoration and a short exit. The mobile sidebar traps focus while open.

Motion uses transform and opacity, the shared deceleration curve and one-time viewport observation. Base content remains visible if animation is unavailable. Changing the system reduced-motion preference cancels active reveal animations and removes CSS spatial transitions. Hidden tabs cancel active reveal animations. Pointer hover effects are limited to fine pointers. No scroll hijacking or model-answer changes are introduced.

## Sidebar identity

The sidebar uses Jay's public [GitHub profile](https://github.com/jayll1303) avatar, verified by the account name and existing portfolio links. The image was retrieved from `https://avatars.githubusercontent.com/u/109547569?v=4&s=160` on 2026-10-29 and is bundled locally in `chat-app/src/profile-assets/jayll-avatar.jpg`; visitors do not fetch their avatar from GitHub. `sidebar-profile.jsx` reserves the image dimensions and falls back to the J monogram on image failure. The name and title use compact 16px line heights with a 2px gap.

## Appearance

The sidebar Appearance control offers Light, Dark and System. First visit follows the operating system; an explicit choice is remembered under the separate `jayll-color-mode` local preference. System mode follows live OS changes, and preference changes synchronize between browser tabs. If storage is unavailable, the current session can still switch modes. This preference applies to the React portfolio at `/` and `/chat/`.

`chat-app/src/appearance-init.js` resolves the palette before CSS and React paint. The Vite HTML hook inlines that same initializer into both production entry pages, avoiding a separate startup request. `appearance-toggle.jsx` provides labelled keyboard-accessible controls; `appearance.css` supplies semantic palette tokens and light-mode coverage for the home, answers, project/skills catalog, experience, images, library and dialogs. Theme changes optionally crossfade through native View Transitions; reduced motion uses an immediate switch. Images and organization logos retain their original colors.

## Selected products Spotlight

The default Projects view leads with the approved Spotlight layout: TiengNoi is the main product and Pondie Tab, Win+V Panel Tweaks and VoxCPM-VN appear as supporting cards. Coin & Stock Monitor remains in the full directory. Each card opens its existing portfolio detail; the voice-interface art is explicitly labelled as an illustration and makes no audio/API requests. `project-spotlight.jsx` reads the same curated project records and bundled icons as the directory, while its scoped CSS uses the appearance tokens and existing motion controller.

Spotlight is hidden when search text, Open source scope or a category filter is active, then returns when filters are cleared. The full 18-project directory, existing Featured/More projects grouping and Skills view are preserved. On phones, the voice illustration stacks above its description and the supporting cards stack vertically. Keyboard focus, reduced motion and both appearance modes remain supported.


The VoxCPM-VN Spotlight includes the user-supplied [Mì AI voice-cloning video](https://www.youtube.com/watch?v=VyhSglcw8uo). The verified title/channel and video ID live on that project's `video` record in `portfolio-data.js`; its detail view also has a YouTube source link. A lazy `youtube-nocookie.com` iframe renders below the supporting cards with native controls, inline playback, fullscreen and no autoplay. A visible Watch on YouTube link remains available if embedding or playback is restricted. The iframe reserves a responsive 16:9 region with a 200px minimum height, meeting YouTube's minimum player dimensions on small screens. Opening/filtering away from Spotlight unmounts the player. This third-party player contacts YouTube when its lazy-loading threshold is reached; the local illustrative TiengNoi art still makes no requests.
