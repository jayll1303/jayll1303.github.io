---
trigger: model_decision
---

# Games rules

- Games is a direct sidebar item in the chat portfolio, not a disclosure/submenu.
- Keep the one-page catalog layout consistent with Projects: concise intro, section heading and rows for real games.
- En Bac opens its own same-tab route at `/games/ace7/` without an iframe or Fullscreen API. Embeddable games such as Tom’s Trap-o-Matic play directly in the catalog; do not create separate pages for them.
- The Tom row toggles a responsive 3:2 Internet Archive iframe. Mount it only while expanded, unmount on close/navigation, and retain source credit, optional fullscreen and an Archive fallback link. Do not bundle the SWF or claim verified touch support. Its local trap illustration is generic, not original game artwork.
- Use game-owned artwork and accurate control/platform claims. Do not copy console marks or claim Steam compatibility/gamepad support unless verified.
- En Bac source is the sibling private repository. Its master workflow runs tests/build and publishes only `games/ace7/` to Pages.
