---
title: VoxCPM Spotlight video
date: 2026-10-29
summary: Featured VoxCPM-VN and embedded the supplied Mì AI video with responsive controls and fallback.
---

# VoxCPM Spotlight video

Replaced Coin & Stock Monitor with VoxCPM-VN in the supporting Spotlight cards while retaining Coin in the full catalog. Verified the user-supplied clip through YouTube oEmbed, stored video title/channel/ID on the VoxCPM project and added a YouTube source link. Added a lazy privacy-enhanced inline player outside project buttons, without autoplay, with responsive reserved dimensions, fullscreen and visible fallback.

All 12 existing tests and build passed. Browser checks covered both themes at 320–1440px, all player dimensions, VoxCPM navigation, 18-project retention and filter-driven player unmount. Actual clip thumbnail/title loaded and player reported OK after clicking. Checks using older YouTube overlay selectors timed out; direct player inspection confirmed readiness, but full playback progression was not timed. No media download or deployment.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
