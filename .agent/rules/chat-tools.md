---
trigger: model_decision
---

# React Tools rules

- The React portfolio at / and /chat/ owns the Tools sidebar. Register tools in chat-app/src/tools-data.js to inherit sidebar entries, search, title and hash navigation.
- Prompt Forge uses #tools/prompt-forge and is rendered by prompt-forge.jsx through ToolsPage. Preserve existing converter drafts across tool changes.
- Match existing appearance tokens in both light and dark modes. Use scoped CSS, native form labels, visible focus and the existing catalog scroll container. Stack columns at smaller widths and keep touch controls at least 44px tall on phones.
- Prompt placeholders use {{name}}, with trimmed, case-sensitive names. Substitute once through a callback; never interpret values as HTML, regex replacement syntax or recursive placeholders. Use Map for arbitrary variable names.
- Preserve unresolved tokens and show missing values or duplicate/invalid names. Do not silently choose one duplicate variable. Keep drag-and-drop and keyboard/touch arrow controls for row order.
- Config format: template string and variables array of key/value strings, with optional version. Accept legacy IDs but generate fresh local IDs. Validate all input before updating the draft; reject malformed files while preserving the current values. Do not persist prompt content or make network requests. Document export-before-leaving behavior.
- Keep file/template/variable/output limits in prompt-forge.js and enforce them during import, export and editing. Bound expansion before allocating large previews. Exports must pass the importer.
- Read imports asynchronously without overwriting a newer edit. Clipboard errors select the result for manual copying. Unmounts must invalidate pending copy/import feedback.
- Verify replacement edge cases, legacy JSON import/export, invalid file preservation, Tools/search/history navigation, both themes, 320px mobile layout and existing converters. Build static output into chat/ and root index.html through npm run build.

## Prompt Forge tabs, colors and bounded layout

- Template and Variables are separate native ARIA tabs with persistent mounted panels, roving focus and Left/Right/Home/End keyboard navigation. Hide inactive panels from both layout and accessibility.
- Each row gets a stable identity-based hue. Names use the stronger saturated/bold tone; values use a softer tone in the same family. Reordering or editing must not change the row color. Use the same mapping for placeholders and rendered substitutions.
- prompt-forge-editor.jsx layers a colored, aria-hidden text mirror beneath a native textarea. Preserve native selection, undo, IME and clipboard behavior. Keep fonts, padding, wrapping, gutters and scroll positions matched. Never insert HTML to highlight user input; render React text spans from the one-pass token segments. Forced-colors mode must expose native input text.
- Row reordering uses measured FLIP transforms through Web Animations (320ms) for both arrows and drag/drop. Cancel old animations before measurement, retain internal list position and honor live prefers-reduced-motion changes. Cancel animations on unmount.
- The Prompt Forge page fills its existing catalog viewport with min-height:0 flex/grid tracks. Variables and code editors scroll internally, including long lists and long text; ordinary desktop/mobile screens must not create a long outer page. On very short screens, allow a compact bounded fallback frame to scroll so controls remain usable.
- Test tab state/data retention, stable color after moves, animated versus reduced-motion moves, literal segment/text parity, mirror wrapping/scroll alignment, and many-variable overflow at 320/375/768/1024/1440 widths in both palettes.
