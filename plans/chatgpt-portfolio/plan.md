# ChatGPT style portfolio

Status: complete for preview review

Outcome: a previewable ChatGPT inspired portfolio with the supplied PDF's current projects and experience, built on a modular frontend suitable for future mini games and Three.js scenes.

Constraints: GitHub Pages static hosting; keep the existing homepage available; no model service, account system, invented project outcomes, or source PDF in the repository. Preserve unrelated working-tree changes.

Acceptance:

1. Sidebar, welcome view, search, project conversations, work history, and contact all work by mouse and keyboard.
2. Current FE Credit work, FPT QAI work, open source and research projects are represented with facts grounded in the PDF.
3. Mobile and desktop render without layout breakage; production build works under `/chat/`.
4. No phone number or raw PDF is included in the built site.

Execution: build data model → move preview to React/Vite → test links, navigation and responsive rendering → update the smallest owning docs.

Validation: `npm run build` passed; data integrity check confirmed 14 unique, complete project records and four experience roles. Browser checks covered the welcome view, project detail, categories, search dialog, composer, mobile drawer, and 320/375/768/1440px widths with no horizontal overflow or runtime console errors. The private source PDF was not copied into the build.

Analysis: [ChatGPT UI adaptation](../reports/chatgpt-ui-adaptation.md).
