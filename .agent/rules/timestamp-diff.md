---
trigger: model_decision
---
# Timestamp and Diff Tools

Register tools in chat-app/src/tools-data.js. Preserve draft state across sibling tool navigation. Keep input text in memory only, never upload or persist it. Use existing appearance tokens, labelled native inputs, visible focus, and 44px mobile actions.

Timestamp: validate ISO calendar dates and offsets, use explicit UTC semantics for offset-free input, expose unit overrides for ambiguous numbers, and show local timezone. Never rewrite active input on validation errors.

Diff: engine emits equal/add/remove/replace. Render both sides of replacements and inline segments, provide textual markers in addition to color, and enforce character/line/work bounds before expensive allocation or rendering. Render input as React text, never HTML.

Clipboard responses must not overwrite newer edits or navigation; provide selectable output on failure. Run conversion/diff edge-case tests and browser checks at 320px, desktop, both themes, navigation/history, and existing JSON/String tools. Build static assets through npm run build in chat-app.
