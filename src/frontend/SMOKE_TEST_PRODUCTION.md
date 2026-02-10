# Production Smoke Test Checklist

This checklist helps validate that the Fauji Finance site works correctly in production, including deployments under non-root base paths (e.g., IC canister URLs) and custom domains (e.g., icp0.io).

## Pre-Test Setup
- [ ] Note the deployment URL (e.g., `https://<canister-id>.ic0.app/` or `https://faujifinance.icp0.io`)
- [ ] Open browser DevTools Console (F12) before starting tests
- [ ] Clear browser cache if testing a redeployment
- [ ] Verify `.well-known/ic-domains` file is accessible at `https://faujifinance.icp0.io/.well-known/ic-domains`

## 1. Route Navigation Tests

### Root Path (/)
- [ ] Navigate directly to the root URL
- [ ] Verify the Home page loads without "Canister ID Not Resolved" error
- [ ] Check that the hero banner image displays correctly
- [ ] Verify representative photos (Mohit, Shekhar, Rajvir) load without broken images
- [ ] Check that trust/records illustrations display correctly
- [ ] Verify camo pattern background is visible (subtle, in background)

### Services Page (/services)
- [ ] Navigate to `/services` (use header navigation or direct URL)
- [ ] Verify the Services page loads without errors
- [ ] Check that the process banner background image displays correctly
- [ ] Verify Fauji icon sprite loads and displays all four icons correctly (shield, flag, handshake, rupee)

### Contact Page (/contact)
- [ ] Navigate to `/contact` (use header navigation or direct URL)
- [ ] Verify the Contact page loads without errors
- [ ] Check that team member photos display correctly
- [ ] Verify Google Maps iframe embed renders (map should be visible)
- [ ] Click "Open in Google Maps" button and verify it opens the correct location in a new tab

## 2. Console Error Review
- [ ] Review browser console for any errors (red messages)
- [ ] Verify no 404 errors for assets (images, fonts, etc.)
- [ ] Verify no JavaScript errors related to routing or base path
- [ ] Check Network tab for any failed requests (Status 404, 500, etc.)
- [ ] Confirm BASE_URL is correctly resolved (check via diagnostics panel if needed)

## 3. Asset Loading Verification

### Static Assets (from /assets/)
- [ ] Representative photos load correctly:
  - `assets/mohit.jpeg`
  - `assets/shekhar-2.jpeg`
  - `assets/rajvirsinghyadav-2.jpeg`

### Generated Assets (from /assets/generated/)
- [ ] Hero banner: `assets/generated/fauji-hero-banner.dim_1920x900.png`
- [ ] Icon sprite: `assets/generated/fauji-icons-set.dim_512x512.png`
- [ ] Process banner: `assets/generated/process-banner.dim_1600x500.png`
- [ ] Camo pattern: `assets/generated/camo-pattern.dim_1200x1200.png`
- [ ] Trust illustration: `assets/generated/trust-illustration-2.dim_1200x800.png`
- [ ] Records illustration: `assets/generated/records-illustration.dim_1600x900.png`

## 4. Interactive Elements

### Navigation
- [ ] Header navigation links work (Home, Services, Contact)
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Footer links navigate to correct pages
- [ ] All navigation maintains correct base path in URLs

### Contact Actions
- [ ] "Call Now" buttons trigger phone dialer (or show phone number)
- [ ] "WhatsApp" buttons open WhatsApp with correct number
- [ ] Sticky contact bar (mobile) displays and functions correctly

### Google Maps
- [ ] Maps iframe embed displays the correct location
- [ ] "Open in Google Maps" button opens the location in a new tab
- [ ] Map is interactive (can zoom, pan if iframe allows)

## 5. Non-Root Base Path & Custom Domain Tests (IC Deployments)

### Custom Domain Resolution (icp0.io)
- [ ] Site loads correctly on `https://faujifinance.icp0.io` without "Canister ID Not Resolved" error
- [ ] Verify `.well-known/ic-domains` file exists and contains `faujifinance.icp0.io`
- [ ] Test on multiple browsers (Chrome, Safari, Firefox) if possible
- [ ] Test on mobile device (not just DevTools responsive mode)

### Base Path Handling
- [ ] All routes work with the base path prefix (if deployed under non-root path)
- [ ] All images load correctly (no 404s due to incorrect base path)
- [ ] Navigation maintains the base path in URLs
- [ ] External links (WhatsApp, Google Maps) work correctly
- [ ] `<base href>` tag is present in HTML and correctly set

### Diagnostics Panel (Optional)
- [ ] Add `?diagnostics=1` to any page URL
- [ ] Verify diagnostics panel appears in bottom-right corner
- [ ] Check that BASE_URL value is displayed correctly
- [ ] Test asset URL links by clicking external link icons
- [ ] Remove `?diagnostics=1` to hide panel

## 6. Responsive Design
- [ ] Test on mobile viewport (DevTools responsive mode or actual device)
- [ ] Verify sticky contact bar appears on mobile and is tappable
- [ ] Check that all images scale correctly on small screens
- [ ] Verify navigation menu works on mobile (hamburger menu)
- [ ] Ensure no content is cut off or overlapped by sticky elements
- [ ] Test safe-area handling on devices with notches/home indicators

## 7. Performance & UX
- [ ] Page loads within reasonable time (< 3 seconds for initial load)
- [ ] Images load progressively or show fallback placeholders
- [ ] No layout shift (CLS) during page load
- [ ] Smooth scrolling and transitions

## Common Issues & Fixes

### Issue: "Canister ID Not Resolved" error
**Cause:** Custom domain not properly configured or `.well-known/ic-domains` file missing  
**Fix:** Ensure `frontend/public/.well-known/ic-domains` exists with correct domain name

### Issue: Images show broken/404
**Cause:** Hardcoded absolute paths not using `publicAssetUrl()` or BASE_URL mismatch  
**Fix:** Ensure all image `src` attributes use `publicAssetUrl('assets/...')` helper

### Issue: Routes don't work (404 on navigation)
**Cause:** Router not configured with correct `basepath` or base tag missing  
**Fix:** Verify `createRouter({ basepath: normalizeBasePath(...) })` in App.tsx and `<base href>` in index.html

### Issue: Google Maps doesn't load
**Cause:** Iframe embed URL incorrect or blocked by CSP  
**Fix:** Check `getGoogleMapsEmbedUrl()` utility and verify no console errors

### Issue: Icons don't display correctly
**Cause:** Icon sprite path incorrect or CSS positioning wrong  
**Fix:** Verify `FaujiIcon.tsx` uses `publicAssetUrl()` and sprite dimensions are correct

### Issue: Sticky contact bar not visible or not tappable
**Cause:** Z-index conflict or safe-area not handled  
**Fix:** Check `StickyContactBar.tsx` has correct z-index and safe-area-inset-bottom class

## Sign-Off
- [ ] All critical paths tested and working
- [ ] No console errors or broken assets
- [ ] Interactive elements function as expected
- [ ] Custom domain resolves correctly (no "Canister ID Not Resolved")
- [ ] Mobile responsiveness verified on actual device
- [ ] Ready for user acceptance testing

**Tested by:** _________________  
**Date:** _________________  
**Deployment URL:** _________________  
**Notes:** _________________
