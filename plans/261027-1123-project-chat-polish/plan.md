# Project links and chat response polish

Status: complete.

Outcome: project answers clearly separate external source links from internal follow-up navigation, use meaningful icons, and show responsive loading and text motion without implying that a completed answer is still waiting on the model.

Constraints: preserve the existing ChatGPT-inspired dark layout, React/Vite static hosting, current portfolio content and URLs, accessible keyboard behavior, and reduced-motion support. Keep unrelated dirty worktree files untouched.

Non-goals: new project data, a different model, artificial network delays, a new animation library, or reworking unrelated gallery and library pages.

Design brief: Product interface for a visitor reading a project in a dark chat view. Restrained black and charcoal surfaces with existing blue focus and green status accents; Arial/system type. External destinations become compact cards with their hostnames and an external-link icon; follow-ups become quieter internal navigation rows with context icons and a directional arrow. Motion dial 3/10 and density 6/10: real lazy-load skeleton, short content reveals, and a quick one-time word stream.

Acceptance:
1. External project links and internal follow-ups differ in labels, iconography, layout, and hover/focus behavior on desktop and mobile.
2. Project directory has a genuine first-load fallback and project icons convey image loading; project detail content enters without delaying local data.
3. New chat answers show a short word-stream effect, with full accessible text and immediate static text under reduced motion.
4. Once the guide has a usable answer, model download/progress is no longer shown as though the answer is pending; the later model result may refine it.
5. Focused checks, production build, and browser checks of desktop/mobile and reduced-motion states pass; documentation reflects the behavior.

Implementation: inspect current link, follow-up, catalog, and worker state; update components and CSS using existing icon assets; verify loading only for real asynchronous work; check regressions and ship within the already authorized portfolio workflow.

Validation: `npm test` passed (6 tests); `npm run build` passed. Browser checks covered desktop and 390px mobile project details, the first-load Projects skeleton, and a sourced chat answer without simultaneous model-progress copy. The three-viewport render check found no layout errors; its remaining warnings concern existing sidebar contrast, small header controls, and visually hidden labels. Reduced-motion behavior is implemented in the text component and animation CSS; no browser emulation was available to exercise that preference directly.
