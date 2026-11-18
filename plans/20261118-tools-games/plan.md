# Tools and Games

Status: verified; ready for PR
Issue: https://github.com/jayll1303/jayll1303.github.io/issues/1

## Confirmed outcome
Add Tools and Games to the existing sidebar. Tools provides live bidirectional JSON formatting and JSON/HTML/URL escaping. Minimize clicks, preserve the active editor and drafts, support light/dark and mobile. Games is Coming soon. No backend, input persistence, new games, merge or deployment.

## Execution
- [x] Phase 1: conversion functions and meaningful edge-case tests (isolated tools-logic worktree).
- [x] Phase 2: responsive dual-editor UI, Games placeholder, routing/sidebar integration (isolated tools-ui worktree).
- [x] Phase 3: integrate, tests, build static assets, browser verification.
- [ ] Phase 4: isolated review, fixes, PR, issue transition, cleanup.

## Verification
Run npm test and npm run build in chat-app. Verify input/output edits in both directions, invalid input, settings after right-side edit, tab draft retention, clipboard feedback, Games and browser history. Inspect desktop/mobile in both appearance modes and short-height sidebar reachability.

## Decisions
- Explicit JSON/HTML/URL modes rather than guessing input semantics.
- No Convert action: the most recently edited pane determines direction.
- JSON escape includes surrounding quotes; URL encodes a component.
- Clear stale results on invalid input; never rewrite active editor.
- Existing React/Vite and CSS variables; no new dependency.

## Prerequisites
Verified Node v24, installed dependencies, clean repository, GitHub authenticated ADMIN access and issue creation. Main has no branch protection. No secrets needed. User confirmed scope and instructed immediate execution.


## Design brief
Register: Product
Scene: Visitors pasting developer data on desktop or phone, needing immediate usable output.
Direction: Preserve existing monochrome portfolio; prioritize legibility and direct editing.
Color: Restrained; existing appearance tokens for page, text, focus and error state.
Type: Existing system sans; monospace editor text.
Signature: Paired live editors; edit either side without a Convert action.
Dials: variance 2/10, motion 1/10, density 5/10.

