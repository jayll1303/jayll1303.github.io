---
title: Portfolio appearance and sidebar identity
date: 2026-10-29
summary: "Added verified local avatar, compact profile and persistent dark/light/system appearance."
---

# Portfolio appearance and sidebar identity

Committed AI studio motion as fff2cf7 and verified public GitHub avatar/profile spacing as 1a64aba. Added Dark, Light and System appearance using an inline pre-paint initializer, optional local storage, cross-tab sync and live OS following. Light-mode semantic palettes cover conversations, catalogs, timeline, galleries, library, dialogs and feedback. Native crossfades and the selector honor reduced motion.

All 12 Node tests passed. Browser checks covered 320–1440px, landscape, initial paint before React, persistence, system updates, tab sync, image fallback, rapid switching and main-route text contrast. Visual review caught a legacy black conversation background and the rapid-switch test caught native transition cancellation; both fixed. In-place build hit a Windows lock on the loaded WASM file; staged production compilation and SHA-verified output synchronization succeeded without stopping the user's browser. No push/deploy or unrelated edits.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
