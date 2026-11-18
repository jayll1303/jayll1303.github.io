# Timestamp Converter and Diff Checker

Issue: #5
Status: PR open; source-only per user decision

## Confirmed contract
Outcome: Add Timestamp Converter and Diff Checker with automatic results and minimal interaction.
Constraints: Existing React/Vite appearance tokens, light/dark, keyboard, mobile, local processing, bounded inputs, drafts retained between sibling tools. Preserve unrelated Prompt Forge changes in original checkout.
Non-goals: Backend, persistence, uploads, structural JSON diff, merge/deployment.
Done means: Timestamp accepts seconds/milliseconds and ISO dates, outputs UTC/local/Unix with Copy/Now/Clear. Diff shows additions/removals/inline edits and identical state. Tests/build/browser pass; independent review clean; issue + PR created; worktree and started processes removed.

## Execution
- [x] Isolate dedicated worktree and implement conversion/diff engines.
- [x] Register navigation and add responsive live tool screens.
- [x] Fix independent review findings; tests, build and browser verification pass.
- [x] Independent review clean, PR created, issue updated, preview server stopped, worktree removed.

## Decisions
Use existing tool registry and preserve drafts in ToolsPage, no new dependencies. Plain text line diff with bounded inline highlighting; large input reports a limit instead of freezing. Numeric unit override handles ambiguous timestamps. ISO values without offsets are interpreted as UTC. Accepted ISO offsets are bounded to +/-14:00.

## Source-only limitation
Per user decision, the generated checked-in `chat/assets/*` bundles are excluded from this PR because Windows newline conversion introduced whitespace noise in the minified converter bundle. The source passes `npm run build`; the deployed/static `chat/` page will not expose the new tools until a later build regenerates and publishes those assets.
