# ChatGPT inspired portfolio preview

The preview at `/chat/` is the production build of the React/Vite source in [`chat-app/`](../chat-app/). It remains separate from the existing homepage.

## UI mapping

| Familiar chat element | Portfolio role |
| --- | --- |
| New chat | Start at the portfolio welcome screen |
| Search icon / Ctrl K | Open direct navigation or ask the local model |
| Projects | The 14 projects summarized from Jay's supplied résumé |
| Recent this visit | Views opened in this browser session |
| Conversation | Detail for a project, career stage or topic |
| Library | Existing image prompt collection at `/prompts/` |
| Composer | A small browser model selects relevant portfolio records; no server or API key |
| CV control | Current experience details in the portfolio |
| Share | Copy the selected view's URL |

The five-page PDF provided for this task was read locally and was not copied into the site. This build omits its phone number. Public project links are present only where a URL was available or already in the existing portfolio. Outcome numbers are attributed to the supplied résumé.

## Build

From `chat-app/`, run `npm install` and `npm run build`. Vite writes the static output here. Serve the repository root, then open `/chat/`. The rest of the site remains plain HTML/CSS/JavaScript.

`npm test` checks the local fallback and record validation. The model is lazy loaded when a visitor asks a question. Transformers.js runs SmolLM2-135M-Instruct in a worker, using WebGPU where available and WASM otherwise. The quantized model requires a substantial first download (roughly 134–200 MB of weights, depending on device) and is cached by the browser. Its selected record IDs are checked against the curated data before the UI displays any project details. If the model cannot run, the UI labels the fallback search. The model is mainly trained for English; Vietnamese matching can be less reliable. No visitor question is sent to a portfolio backend, though the browser fetches model files from Hugging Face on first use.

The visual layout follows the user-provided dark screenshot: narrow black sidebar, centered conversation, compact answer content and a docked composer. The screenshot supplied no source code or assets.

The React component tree and the data in `chat-app/src/portfolio-data.js` provide extension points for future interactive projects, including Three.js. No 3D runtime or mini game is loaded in this version.
