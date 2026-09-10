# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
astro dev --background   # start dev server (localhost:4321); manage with `astro dev stop|status|logs`
npm run build            # static build to ./dist/
npm run preview          # serve the built site
npm run check            # astro check — type-checks .astro/.ts
npm run lint             # eslint (flat config in eslint.config.js)
npm run format           # prettier --write .
npm run og               # regenerate public/og.png from scripts/generate-og.mjs
```

Run `lint`, `check`, and `format` before committing. There is no test suite — verify
changes with `npm run build && npm run preview` (or the dev server). Node 26 is pinned
via `.nvmrc`/`mise.toml`.

An "Astro docs" MCP server is configured in `.mcp.json`; use it (or
https://docs.astro.build) for framework questions.

## Architecture

A single-page personal portfolio: static Astro, **no adapter, no UI framework, no
client-side router**, deployed to Cloudflare Pages. There are zero framework components
and no `client:*` directives — every component is `.astro`, and interactivity is plain
`<script>` tags inside the component that owns the behaviour (bundled and type-checked)
plus one `is:inline` pre-paint script in `Layout.astro`.

**Content lives in `src/data/*.ts`, not in markup.** Typed modules (`site`, `profile`,
`projects`, `experience`, `stack`, `nav`) are the single source of copy; components
import them. Copy changes should never require touching a component. Current content is
placeholder. Notes:

- `nav.ts` must stay in sync with the `<Section>` list in `src/pages/index.astro` —
  section `id`s and the two-digit `index` labels are repeated there by hand.
- `projects.ts`: only `featured: true` entries render (`Work.astro` filters).
- `profile.resume` is `null` so the résumé button stays hidden; set it to a path under
  `public/` to reveal it.

**`src/layouts/Layout.astro` is the shell** for both pages: font imports, `tokens.css` +
`global.css`, `<SEO>`, `<Background>`, `<Nav>`, `<slot />`, `<Footer>`. It also owns the
IntersectionObserver that drives scroll-reveal — a component opts in by adding
`class="reveal"` (and optionally `style="--reveal-delay: 80ms"`), never by wiring its own
observer.

**Styling is hand-written CSS in three layers** (no Tailwind):

1. `src/styles/tokens.css` — all design tokens. Dark is the default on `:root`;
   `:root[data-theme="light"]` overrides only surface/text roles.
2. `src/styles/global.css` — reset, element defaults, and shared helpers
   (`.container`, `.eyebrow`, `.btn`, `.reveal`, `.visually-hidden`, `.accent-text`).
3. Everything else in scoped `<style>` blocks in the component. Use tokens rather than
   raw colours or spacing values.

**Theming**: `ThemeToggle.astro` writes `localStorage["theme"]` and sets
`document.documentElement.dataset.theme`; the inline `<script is:inline>` in Layout's
`<head>` re-applies it before first paint to avoid FOUC. Change one and change the other.

**Motion**: animated behaviour must degrade under `prefers-reduced-motion: reduce` —
`Background.astro` (canvas dot-grid) skips its loop and listeners entirely, and the
reveal observer falls back to showing everything.

**JS hooks are `data-*` attributes** (`data-nav`, `data-card`, `data-dot-grid`,
`data-theme-toggle`), not class names, so styling and behaviour can move independently.

## Things that span files

- **Canonical domain is duplicated in three places**: `site` in `astro.config.mjs`,
  `site.url` in `src/data/site.ts`, and the `Sitemap:` line in `public/robots.txt`.
- **`public/_headers`** carries the Cloudflare Pages security/cache headers, including a
  CSP that allows `'unsafe-inline'` for Astro's scoped styles and the theme script.
  Adding an external script, font, or analytics endpoint requires editing that CSP.
- **`scripts/generate-og.mjs`** imports `sharp`, which is only available transitively via
  Astro's image pipeline — it is not a declared dependency.
