# frankcongson.com Modernization Plan

## Goal

Rebuild frankcongson.com on a current stack — Next.js (App Router) + React 19 + TypeScript, fully updated dependencies — while still producing a static build that deploys to Netlify the same way it does today.

## Current State

- Gatsby 5.14, React 18.3, TypeScript 5.6, styled-components 6.
- Design system pulled from your own private packages, `@fcongson/lagom-ui` and `@fcongson/lagom-tokens` (GitHub Packages registry, token in `.npmrc`). Both are now at 1.0.0 with modern tooling (Style Dictionary v5 + DTCG token format in lagom-tokens; Storybook 10, ESLint flat config, Changesets in lagom-ui) and no Gatsby dependency, so they carry over cleanly. `package.json` here has been bumped to `^1.0.0` for both.
- Content lives in `content/` as MDX posts and JSON (pages, blog list, about, home, photography, site metadata), sourced today through Gatsby's GraphQL layer (`gatsby-source-filesystem`, `gatsby-transformer-json`, `gatsby-plugin-mdx`, `sharp` for image processing).
- `.env` has `TINACMS_CLIENT_ID`/`TINACMS_TOKEN` — TinaCMS (Forestry's successor) appears to already be the real CMS. The `.forestry/` directory is leftover config from the original, now-defunct Forestry.io and can be removed.
- No ESLint. Prettier + Husky + lint-staged are configured and worth keeping.
- Deploys to Netlify via `@netlify/plugin-gatsby`, publishing `public/`. No RSS or sitemap plugin currently configured — confirm that's not silently expected anywhere before cutover.

## Target Architecture

- Next.js (latest stable), App Router, React 19, TypeScript strict.
- `next.config.js` with `output: 'export'` — produces static HTML/CSS/JS in `out/`, no Node server needed at runtime. Same deployment shape as today, just a different build tool.
- styled-components 6 retained (lagom-ui requires it), wired up via the official Next.js App Router registry pattern for SSR-safe style injection during static generation.
- Content read directly from the filesystem at build time instead of through GraphQL: `gray-matter` + `next-mdx-remote` (or `@next/mdx`) for posts; JSON files imported directly, same as several pages already do today.
- `next/image` instead of `gatsby-plugin-image`/`useImage`. Static export disables Next's image optimization API, so this needs an explicit choice (below).
- Next.js Metadata API (`generateMetadata`) replacing `react-helmet` and the custom `SEO`/`Facebook`/`Twitter` components.
- `@next/third-parties`'s `GoogleAnalytics` replacing `gatsby-plugin-google-gtag`.
- `@sentry/nextjs` replacing `@sentry/browser`.
- ESLint (flat config) + `typescript-eslint` added, since there's currently none. Existing Prettier config carried over unchanged.

## Migration Phases

1. **Prep & inventory** — new branch; document every route, every GraphQL query and what data it actually needs, every Gatsby plugin's runtime purpose; confirm `gatsby build` still works as a rollback baseline.
2. **Scaffold** — new Next.js app (App Router, TS strict) in place; latest React/TS; styled-components registry; port `GlobalStyle`, `resetr.css`, `font.css`; wire up ESLint + Prettier + Husky.
3. **Dependency upgrade** — drop all `gatsby-*` packages; `@fcongson/lagom-ui`/`@fcongson/lagom-tokens` already bumped to `^1.0.0` (done); bump FontAwesome, framer-motion, styled-components to latest; add `next`, an MDX solution, `gray-matter`, `@next/third-parties`, `@sentry/nextjs`.
4. **Content layer** — replace `allMdx`/`allPagesJson`/`allFile` GraphQL queries with direct fs reads + frontmatter parsing; keep the existing pattern of importing `content/data/*.json` directly.
5. **Routing** — port `src/pages/*.tsx` → `app/*/page.tsx`; port `src/templates/{post,blog,page}.tsx` → `app/blog/[slug]/page.tsx`, `app/blog/page/[page]/page.tsx`, `app/[slug]/page.tsx`, replicating the pagination/page-creation logic currently in `gatsby-node.js` via `generateStaticParams`.
6. **Images** — replace `GatsbyImage`/`useImage` with `next/image` pointed straight at `content/images` (copied into `public/`); drop the `allFile` lookup indirection.
7. **SEO/head** — replace the `SEO`/`Facebook`/`Twitter` components with per-route `generateMetadata`, preserving OG/Twitter tags.
8. **Analytics, monitoring, interactivity** — swap in the packages noted above; mark components needing browser APIs (`ScrollProgress`, framer-motion, intersection observer) as Client Components, leave everything else as Server Components by default.
9. **Build & deploy** — `next.config.js` with `output: 'export'`; update `netlify.toml` (`publish = "out"`, drop `@netlify/plugin-gatsby`); carry over `static/_redirects` to `public/_redirects`; update `package.json` scripts.
10. **Verification** — diff every route against current production; Lighthouse before/after; confirm metadata, alt text, and pagination parity; deploy preview on Netlify before merging; confirm TinaCMS still points at the right content paths.

## Decisions to make before starting

- **CMS**: Forestry config is dead weight — remove `.forestry/`. Confirm TinaCMS is the CMS going forward (it works fine with Next.js) and that nothing else still expects Forestry.
- **Image optimization under static export**: either ship `unoptimized: true` on `next/image` (simplest, larger payloads) or add a build-time optimization step (e.g. a static-export image plugin). Worth deciding up front since it affects page weight.
- **Private registry**: `lagom-ui`/`lagom-tokens` installs depend on a GitHub Packages token (`.npmrc` + `TOKEN` env var) — confirm that's still valid wherever the new build runs (local + Netlify).

## Suggested order of work (once you're ready to start)

1. Branch + scaffold Next.js app alongside the current Gatsby app.
2. Port layout, global styles, design system wiring.
3. Port static pages (home, about, photography, style-guide, 404).
4. Port blog (MDX + pagination) and the dynamic page template.
5. Port SEO, analytics, Sentry.
6. Netlify config + deploy preview.
7. Visual/functional QA against production.
8. Cut over, delete old Gatsby files.
