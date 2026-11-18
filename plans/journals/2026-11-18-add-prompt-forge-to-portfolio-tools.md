---
title: Add Prompt Forge to portfolio Tools
date: 2026-11-18
summary: Implement and verify a local variable-based prompt builder in the existing Tools navigation.
---

# Add Prompt Forge to portfolio Tools

Added Prompt Forge to Tools with local template rendering, variables, live preview, reordering and JSON import/export compatible with the reference repository. Rendering uses literal one-pass substitution and bounded output; invalid imports preserve drafts. Existing JSON/String converter drafts are preserved. Verified 32 unit tests, production build, browser navigation/search/history, clipboard and file roundtrips, and 320/375/768/1440 layouts in light/dark themes. Updated chat/README.md and the owning Tools rules. No commit or deployment performed.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.


## Follow-up: tabs, colors and scrolling

Separated Template and Variables into accessible tabs with native keyboard navigation. Added identity-based variable hues: stronger bold names and softer values, shared across rows, template placeholders and rendered substitutions. Native textarea overlays retain editing and selection while React text segments supply syntax colors. Added FLIP reorder animations for buttons and drag/drop, with reduced-motion cancellation. Bounded the workspace to the catalog viewport and moved long-list/text scrolling inside panels; short viewports use a compact scrollable fallback.

Validation: 43 unit tests pass and production build succeeds. Browser checks passed for tab/data behavior, stable hues, animation/reduced motion, literal text/copy parity, native textarea/mirror scroll and wrapping alignment, and 40-variable internal scrolling. Inspected layouts at 320/375/768/1024/1440 widths in light/dark themes, including short mobile viewports. No commit, push or publication performed. AgentWiki publish skipped.
