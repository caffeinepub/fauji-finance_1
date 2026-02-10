# Specification

## Summary
**Goal:** Fix the live Fauji Finance deployment so `https://faujifinance.icp0.io` reliably loads on mobile (no “Canister ID Not Resolved”), then rebuild/redeploy and verify via production smoke tests.

**Planned changes:**
- Investigate the cause of the “Canister ID Not Resolved” error on the live ICP URL (with emphasis on mobile access and deployed base-path/routing configuration).
- Rebuild and redeploy the site so core routes (`/`, `/services`, `/contact`) resolve correctly on the live domain.
- Validate the live deployment by running the production smoke test checklist in `frontend/SMOKE_TEST_PRODUCTION.md` (sections 1–6), focusing on routing, asset loading, and mobile responsiveness.

**User-visible outcome:** Opening `https://faujifinance.icp0.io` (and `/services`, `/contact`) loads the correct pages on mobile without the canister resolution error, and pages load without missing core static assets or console/network errors.
