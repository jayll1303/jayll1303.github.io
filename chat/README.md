# ChatGPT inspired portfolio preview

The preview at `/chat/` is the production build of the React/Vite source in [`chat-app/`](../chat-app/). It remains separate from the existing homepage.

## UI mapping

| Familiar chat element | Portfolio role |
| --- | --- |
| New chat | Start at the portfolio welcome screen |
| Search chats / Ctrl K | Search projects, skills and sections |
| Projects | The 14 projects summarized from Jay's supplied résumé |
| Recent this visit | Views opened in this browser session |
| Conversation | Detail for a project, career stage or topic |
| Library | Existing image prompt collection at `/prompts/` |
| Composer | Local keyword and project search; no AI service |
| CV control | Current experience details in the portfolio |
| Share | Copy the selected view's URL |

The five-page PDF provided for this task was read locally and was not copied into the site. This build omits its phone number. Public project links are present only where a URL was available or already in the existing portfolio. Outcome numbers are attributed to the supplied résumé.

## Build

From `chat-app/`, run `npm install` and `npm run build`. Vite writes the static output here. Serve the repository root, then open `/chat/`. The rest of the site remains plain HTML/CSS/JavaScript.

The React component tree and the data in `chat-app/src/portfolio-data.js` provide extension points for future interactive projects, including Three.js. No 3D runtime or mini game is loaded in this version.
