# SNK Life Manager

Static site (HTML + CSS + JS), no build step. Host on GitHub Pages.

- `index.html`  - desktop dashboard (phones auto-redirect to mobile.html; add `?desktop` to stay)
- `mobile.html` - mobile app screens (Home, Tasks, Task detail, Wallet with real income/expense, Profile)
- `forest.jpg`  - (optional) export "Forest atmosphere" from Figma and add here for the banner image

PWA: open mobile.html on the phone -> browser menu -> "Add to Home Screen"; works offline after first load (sw.js, manifest.webmanifest, icon-*.png).

Data is saved in the browser (localStorage, keys `snk_tasks`, `snk_tx`, `snk_budget`, `snk_theme`, `snk_projects`), shared by both pages.

## Publish
1. Repo `lifemanager.github.io` -> Add file -> Upload files -> upload everything in this folder -> Commit
2. Settings -> Pages -> Deploy from branch `main` / root -> Save
