# Appearance and profile

Status: complete.

Outcome: offer polished dark/light/system appearance across the React portfolio and replace the sidebar monogram with Jay's public avatar; tighten name/title spacing. Commit each completed slice.

Constraints: preserve current layout, motion, routes and unrelated working changes; use existing React/CSS; local avatar from verified public GitHub profile; keyboard, mobile, reduced motion and readable contrast; remember preference without a first-paint flash.

Non-goals: legacy page redesign, new UI framework, global Windows settings, push/deploy.

Acceptance: three labelled appearance controls work on all React routes, persist after reload, follow live system changes when System is selected, synchronize tabs and handle unavailable storage; initial document matches resolved appearance before app mounts. Both palettes cover home, project/skills catalog, experience, library, images and dialogs. Local avatar loads with reserved size and graceful fallback; profile lines have compact spacing. Tests/build, visual browser checks and scoped commits pass.

Trade-offs: a binary toggle is simplest but omits system following; a compact three-way control matches the requested modes with discoverable state; a settings dialog adds unnecessary navigation. The three-way control assumes the sidebar remains the navigation owner and loses discoverability first when collapsed (reopen remains available).

Better approaches: none — existing layout plus an appearance control fits the requested scope; no new UI framework is needed.

Phases: (1) motion committed as fff2cf7; (2) avatar and compact profile committed as 1a64aba; (3) appearance controls, full theme coverage and first-paint persistence implemented and verified in the appearance commit.

Skills: ak-find-skills found external color-mode-and-theme and preline-theme-generator; installed ak-ui-ux-pro-max covers current requirements without installation. Reuse ak-brainstorm contract and ak-cook delivery.

Validation: 12/12 Node tests pass, including six new appearance initialization tests. Production build passes in a staging output; the first in-place build encountered a Windows file lock on the unchanged WASM runtime already loaded by a browser. SHA-256 comparisons synchronized only changed outputs, and root/index and chat/index match the staged build. Browser tests in installed Edge passed persistent choices, System default/live changes, tab sync, reduced motion, all main routes, gallery dialog, profile image load and fallback, rapid animated switching, widths 320/390/768/1440 and 844x390 landscape without overflow or page errors. Readability checks across home, about, approach, achievements, contact, GraphRAG detail and skills found no primary/secondary text under 4.5:1 in either palette. Delaying the React bundle confirmed appearance was already resolved before root content mounted. Browser screenshots/scripts are local evidence beside this plan, excluded from commits. Review found a rapid-selection race in native View Transitions, fixed and rechecked including expected snapshot cancellation. Existing unrelated working changes remain untouched; no push/deploy.
