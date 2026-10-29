---
title: VoxCPM detail video
date: 2026-10-29
summary: Embedded the existing video in VoxCPM project details through a shared responsive player.
---

# VoxCPM detail video

Added the supplied VoxCPM video directly to its project detail view, after introduction/context and before the work description. Extracted the existing Spotlight player into a shared ProjectVideo component/style, preserving native privacy-enhanced lazy embedding, fullscreen, no autoplay, minimum size and external fallback. React useId keeps heading associations unique across repeated chat answers.

All 12 existing tests and production build passed. Browser checks covered dark/light at 320/390/768/1440px, no overflow, correct detail iframe/source/dimensions, retained Spotlight player and no empty players on projects without video. This was an additional placement requested by the user, not a replacement of Spotlight. No deployment.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
