# OneDash Marketing Site — Webflow deploy bundle

Same pattern as the User Guide: **content lives in GitHub → jsDelivr CDN → a tiny loader in a Webflow Embed fetches it at runtime.**

```
webflow-deploy/
├── assets/                     ← host this folder (GitHub → jsDelivr)
│   ├── marketing.css           ← all page CSS, concatenated (Manrope + Font Awesome @imports included)
│   ├── logo-light.png
│   ├── team/                   ← 8 headshots
│   └── resources/OneDash-ROI-One-Pager.pdf
├── content/                    ← also host this folder — the real page HTML, fetched at runtime
│   ├── home.html
│   ├── about.html
│   ├── resources.html
│   └── results.html
└── embeds/                     ← paste ONCE into each page's Webflow Embed element — never again
    ├── home.html
    ├── about.html
    ├── resources.html
    └── results.html
```

## How it works

Each file in `embeds/` is a **tiny, permanent loader** (~3.3KB). It fetches
`marketing.css` and the page's `content/<page>.html` from
**raw.githubusercontent.com** (CORS-enabled, `cache-control: max-age=300` —
any push is live within 5 minutes, no cache purging, ever), injects the CSS
as a `<style>` element (raw serves text/plain, which `<link>` would reject),
and only injects the content **after** the CSS is applied — so the page can
never render with only Webflow's own site-wide stylesheet. Binary assets
(images, PDF) load from jsDelivr, which is also the automatic fallback for
CSS/content if raw is unreachable.

**After the one-time paste below, you never touch Webflow again for content
changes.** Edit source → rebuild → `git push` → live within 5 minutes.

## One-time setup

1. **Host `assets/` and `content/`.** Drop both folders into your GitHub repo (e.g. the same `onedashengine-user-guide-assets` repo, under a `site/` folder). jsDelivr serves them automatically at:
   `https://cdn.jsdelivr.net/gh/<user>/<repo>@main/<path>/...`

2. **Set the base URL.** Each loader has one config line at the top:
   ```js
   window.OD_ASSET_BASE = "https://cdn.jsdelivr.net/gh/samrezonedash/onedashengine-user-guide-assets@main/site/assets/";
   ```
   Note this points at `.../site/assets/` — the loader derives the content URL from it (`.../site/assets/../content/<page>.html`... actually it fetches `OD_ASSET_BASE + 'content/' + page + '.html'`, so `content/` must sit as a **sibling of `assets/`**, both directly under `site/`). Matches the folder layout above.

3. **Create 4 Webflow pages** with these slugs (nav links already point to them):
   `prelive-home`, `prelive-about`, `prelive-resources`, `prelive-results`

4. **Paste each loader** (`embeds/*.html`) into a single Webflow **Embed** element on its matching page. This is the last paste you should ever need for these four pages.

5. **Publish** to the staging subdomain.

## After setup — making future edits

1. Edit the source `.html`/`.css` file in the project root (or wherever the design lives).
2. Re-run the build script to regenerate `assets/` and `content/`.
3. Copy the updated `assets/` and `content/` folders into your GitHub repo, commit, push.
4. Purge jsDelivr's cache for the changed files: `https://purge.jsdelivr.net/gh/<user>/<repo>@main/<path>` (propagation can take a few minutes even after purging).
5. Refresh the live page — no Webflow interaction needed.

## What's included / notes
- **Fonts + icons:** Manrope (Google Fonts) and Font Awesome load automatically via `marketing.css`.
- **Images:** the logo, all 8 headshots, and the ROI PDF are wired via `data-od` / `data-od-href` attributes resolved against `OD_ASSET_BASE` at runtime.
- **Interactivity:** the persona tabs on the home page work (JS lives in the loader now, operates on the fetched content). The closed-loop pulse animation from the original design is omitted (lived in a `@keyframes` block Webflow's builder doesn't allow; can be re-added to `marketing.css` if wanted since this bundle isn't built through that tool).
- **Nav links:** point to the four `/prelive-*` page paths, plus `/user-guide`, `/privacy-policy`, `/terms-conditions`.
- **jsDelivr caching:** jsDelivr caches `@main` aggressively. After pushing an update, purge via `https://purge.jsdelivr.net/gh/<user>/<repo>@main/<file>` — this can take a few minutes to fully propagate globally even after the purge call reports success.
