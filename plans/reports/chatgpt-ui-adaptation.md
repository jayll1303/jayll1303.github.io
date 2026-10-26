# ChatGPT UI adaptation

## Source and scope

- Source: the visible ChatGPT web interface at `https://chatgpt.com/`, inspected on 2026-10-26, and official ChatGPT pages for chats and projects. Its private source repository and commit SHA are unavailable. No ChatGPT code or assets are copied.
- Target: the isolated `/chat/` portfolio preview in this repository, on branch `codex/chatgpt-portfolio`.
- Content authority: the user-supplied five-page `PhamPhuNgocTrai___AI_Engineer___All.pdf`, read locally. The PDF itself stays outside the repository. Public VoxCPM links were confirmed against JayLL13's Hugging Face model card and demo.

## Feature map

| Source UI element | Local counterpart | Decision |
| --- | --- | --- |
| Sidebar and new chat | Portfolio navigation and reset | Keep familiar layout, use JayLL identity |
| Chat history | Curated topics about Jay | Do not imply visitor chats are stored |
| Projects | Project collection, grouped by work area | Populate from supplied PDF |
| Search chats | Local search across projects and topics | No account or network required |
| Composer | Search and navigation by natural keywords | Clearly label as local portfolio search, not AI chat |
| Assistant answer | Data-backed project and experience views | Use summaries, stacks, outcomes, and links when known |
| Library | Existing `/prompts/` collection | Link to the functioning gallery |
| Attachments | Experience/CV information | Avoid publishing the private source PDF or linking the outdated resume PDF as current |

## Challenge decisions

| Decision | Source's way | Local way | Recommendation |
| --- | --- | --- | --- |
| Runtime | Private ChatGPT stack | Static GitHub Pages | Build a React/Vite app to static `/chat/` assets |
| Persistence | Account history | No account | Keep the selected view in the URL only |
| AI replies | Live model | Curated local content | Make search behavior explicit; no false AI claim |
| 3D and mini games | Outside this UI mapping | Future portfolio content | Keep content and UI components modular; add Three.js when an actual experience needs it |
| Visual identity | ChatGPT branding | JayLL branding | Borrow interaction pattern, not proprietary marks |
| Data privacy | User account | Public portfolio | Do not copy the supplied PDF or its phone number into the public build |

Risk: low to medium. The main risks are stale résumé data, confusing search for AI chat, and GitHub Pages paths. These have explicit content, labeling, and build checks.
