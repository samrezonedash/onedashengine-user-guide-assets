# OneDash Marketing Site — Webflow deploy bundle

Same pattern as the User Guide: **static assets in GitHub → jsDelivr CDN → one Webflow Embed per page.**

```
webflow-deploy/
├── assets/                     ← host this folder (GitHub → jsDelivr)
│   ├── marketing.css           ← all page CSS, concatenated (Manrope + Font Awesome @imports included)
│   ├── logo-light.png
│   ├── team/                   ← 8 headshots
│   └── resources/OneDash-ROI-One-Pager.pdf
└── embeds/                     ← paste each into a Webflow Embed element
    ├── home.html
    ├── about.html
    ├── resources.html
    └── results.html
```

## Steps

1. **Host the assets.** Drop the `assets/` folder into your GitHub repo (e.g. the same `onedashengine-user-guide-assets` repo, in a `site/` folder). jsDelivr serves it automatically at:
   `https://cdn.jsdelivr.net/gh/<user>/<repo>@main/<path>/assets/`

2. **Set the base URL.** Each embed has one config line at the top:
   ```js
   window.OD_ASSET_BASE = "https://cdn.jsdelivr.net/gh/samrezonedash/onedashengine-user-guide-assets@main/site/assets/";
   ```
   Point it at wherever you put `assets/` (trailing slash required). It's currently defaulted to a `site/` folder in your user-guide repo — change if you use a different path.

3. **Create 4 Webflow pages** with these slugs (the embeds' nav links already point to them):
   `prelive-home`, `prelive-about`, `prelive-resources`, `prelive-results`
   (You can reuse the existing `Prelive *` pages — delete the native content I built and drop in a single Embed instead.)

4. **Paste each embed** into a single Webflow **Embed** element on its matching page. Each is well under Webflow's 50k-char embed limit.

5. **Publish** to the staging subdomain.

## What's included / notes
- **Fonts + icons:** Manrope (Google Fonts) and Font Awesome load automatically via `marketing.css` and the embed's `<link>` — no more serif fallback, and all icons render.
- **Images:** the logo, all 8 headshots, and the ROI PDF are wired via `data-od` / `data-od-href` attributes that resolve against `OD_ASSET_BASE` at runtime.
- **Interactivity:** the persona tabs on the home page work (JS is inline in `home.html`). The closed-loop pulse animation from the original design is omitted (it lived in a `@keyframes` block; can be re-added in `marketing.css` if wanted).
- **Nav links:** point to the four `/prelive-*` page paths. Adjust in each embed if you use different slugs, and repoint the footer "User Guide" link to `/user-guide`.
- **jsDelivr caching:** jsDelivr caches `@main` aggressively. For updates, either bump a version tag or purge via `https://purge.jsdelivr.net/gh/<user>/<repo>@main/<file>`.
