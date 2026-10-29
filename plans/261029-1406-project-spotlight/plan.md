# Apply product Spotlight

Status: complete.

Outcome: apply approved concept A from the featured-products preview to the real Projects directory. TiengNoi leads; Pondie Tab, Win+V Panel Tweaks and Coin & Stock Monitor support below.
Constraints: preserve existing project records, routes, filtering, skills tab, shell, dark/light and reduced motion. Use actual bundled icons and explicitly label the voice visual as an illustration. Keep unrelated working changes untouched.
Non-goals: other concept layouts, product backend calls, invented metrics, changes to featured flags, deployment.
Acceptance: approved desktop composition; stacked mobile layout; all four cards open existing detail views with keyboard/touch support; spotlight appears on default Projects and hides during search/category/scope filtering; no spotlight on Skills; test/build and browser checks pass; commit the completed slice.
Trade-offs: approved Spotlight gives one product priority over equal exposure. Assumes TiengNoi should lead; fails first if equal emphasis becomes required. Better approaches: none — the user selected A after rendered comparison.
Phases: (1) component and scoped styles, (2) filter/motion integration, (3) browser verification, docs and commit.
Validation: 12 existing Node tests pass; production Vite build passes. Edge browser checks passed dark/light at 320/390/768/1440px without overflow, four spotlight controls, all four detail destinations via keyboard Enter, 18 directory records, search/category/Open source hiding and restoration, Skills isolation and live reduced-motion cancellation. Render-check produced 0 errors; its 8 warnings concern existing hidden skip-link/decorative menu-line checks, existing small header/search targets and the pre-existing dark empty-recents contrast, outside this Spotlight slice. Inspected desktop, tablet and phone screenshots; scoped code review found no new layout or routing regressions. No dependencies, project fact changes or deployment. UI/source and production build are included in the scoped commit.
