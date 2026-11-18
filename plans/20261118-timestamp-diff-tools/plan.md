# Timestamp Converter and Diff Checker

Issue: #5
Status: implementation and verification

## Confirmed contract
Outcome: Two Tools entries with automatic results and minimal interaction.
Constraints: Existing React/Vite appearance tokens, light/dark, keyboard, mobile, local processing, bounded inputs, drafts retained between sibling tools. Preserve unrelated Prompt Forge changes in original checkout.
Non-goals: Backend, persistence, uploads, structural JSON diff, merge/deployment.
Done means: Timestamp accepts seconds/milliseconds and ISO dates, outputs UTC/local/Unix with Copy/Now/Clear. Diff shows additions/removals/inline edits and identical state. Tests/build/browser pass; independent review clean; issue + PR created; worktree and started processes removed.

## Execution
- [x] Isolate dedicated worktree and implement conversion/diff engines.
- [x] Register navigation and add responsive live tool screens.
- [ ] Fix review findings, verify integrated tests/build/browser states.
- [ ] Independent review, publish PR, update issue, remove worktree.

## Decisions
Use existing tool registry and preserve drafts in ToolsPage, no new dependencies. Plain text line diff with bounded inline highlighting; large input reports a limit instead of freezing. Numeric unit override handles ambiguous historical timestamps. ISO values without offsets are interpreted as UTC, with visible help.
