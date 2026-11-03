# Skills catalog

The portfolio at `/#skills` and `/chat/#skills` lists demonstrated capabilities with implementation summaries, technologies and project references. It replaces the former tool-name grid. The project directory and existing résumé pages are unchanged.

`chat-app/src/skills-data.js` owns the groups and evidence references; `skills-catalog.jsx` renders them. Every `projectId` must resolve to `chat-app/src/portfolio-data.js`. Project names open the existing project detail route. Separate source links open inspected public code, products, model cards or the local résumé PDF. Internal work without public evidence is labelled “Portfolio résumé record”; this does not imply a public repository.

Search covers the group, capability, implementation, technologies, referenced project title and work context. Results show the number of matching skills and areas. Empty results suggest alternative search terms. Desktop shows implementation and references in columns; phones stack them. Styles use the existing appearance tokens and native links retain keyboard access and direct URLs.

Add capabilities only when actual implementation is supported by a résumé project or inspected source. A fork or an agent-skill catalog alone does not establish experience with its entire stack. Keep descriptions specific and avoid unsupported proficiency scores or outcome numbers.

Validate references and search with `node --test src/skills-data.test.js` from `chat-app/`; run `npm test` and `npm run build` for delivery. The build updates the checked-in static files in `chat/` served by GitHub Pages. Research and scope are recorded in the [delivery plan](../plans/261103-1108-project-backed-skills/plan.md).
