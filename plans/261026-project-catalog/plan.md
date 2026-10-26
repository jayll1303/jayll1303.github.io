# Project catalog inspired by ChatGPT Plugins

Status: complete.

Outcome: make the Projects section a standalone, browsable catalog based on the user-supplied ChatGPT Plugins screenshot, while preserving the existing project details and chat experience.

Constraints: use the 14 source-backed portfolio records, existing React/Vite app, static GitHub Pages hosting and current dark shell. Preserve unrelated working-tree changes. Do not copy private ChatGPT source/assets or invent project logos, install states, metrics or links.

Non-goals: plugin installation, account features, backend search, new project content, or a new chat model.

Acceptance: Projects opens a catalog rather than a transcript; desktop composition follows the screenshot's top tabs, heading, broad search, chip filters and two-column icon/text rows; search and filters work; rows open existing project details; Skills tab uses current résumé data; mobile is usable without horizontal overflow; build and browser checks pass.

Source manifest: user screenshot `codex-clipboard-e924ef37-5070-49aa-9ce3-565536e4da48.png`, 1821×900, provided in this conversation. The private ChatGPT source and its commit are unavailable, so this is an `ak-xia` port of visible UI patterns, not code extraction.

Anatomy: fixed 226px sidebar, black main canvas, compact top tabs and right action, centered ~864px catalog, large search field, section rules, and low-chrome two-column rows. At mobile width the rows become one column. Local owners: `chat-app/src/main.jsx` for navigation/content, `style.css` for layout, `portfolio-data.js` for facts.

Design brief: portfolio browsing as an app directory. Keep the established near-black/gray palette and restrained type; use small category-colored glyph tiles for visual recall. Density is airy and scan-friendly, with row hover and focus states. The prominent header action opens the real contact view.

Decision challenge: a literal Installed/Popular port implies installation and popularity facts that the portfolio does not have. Use Featured and More projects, based on the existing `featured` field. A literal Add button implies editing or plugin installation; map it to Contact. Keep existing category access through a category selector beside All/Open source filters. Project-detail links remain the existing deep links.

Implementation: add a catalog view for Projects and Skills, wire search/filter/category state, keep project details as conversations, adapt the topbar and main layout, then update the smallest owning documentation.

Validation: `npm test` (2 passing) and `npm run build` pass. Browser checks confirmed search returning one matching Passport project, project detail navigation, Open source returning the two source-backed projects, and the Skills tab rendering the résumé groups. At 375px and 1821px, document scroll width equaled viewport width; there were no browser console errors. Desktop and mobile captures are in `chat/previews/desktop-project-catalog.png` and `mobile-project-catalog.png`.
