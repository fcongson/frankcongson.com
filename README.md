# frankcongson.com

My personal site and blog, covering design systems, design tokens, and more. Built with Next.js and TypeScript on my own design system, Lagom.

Live at [frankcongson.com](https://frankcongson.com). See also [frankcongson.dev](https://frankcongson.dev) for my career journey.

## Stack

- [Next.js](https://nextjs.org) (App Router) with React 19 and TypeScript
- [styled-components](https://styled-components.com) for styling, themed with [Lagom UI](https://github.com/fcongson/lagom-ui) and [Lagom Tokens](https://github.com/fcongson/lagom-tokens)
- MDX and JSON content in `content/`, read at build time with `gray-matter` and `next-mdx-remote`
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Sentry](https://sentry.io) for error monitoring and Google Analytics via `@next/third-parties`
- Deployed to [Netlify](https://www.netlify.com)

## Getting started

The Lagom packages are installed from GitHub Packages, so you need a personal access token with `read:packages` in your user-level `~/.npmrc` before installing.

```bash
yarn install
yarn dev
```

The dev server runs on `0.0.0.0`, so you can open the site from other devices on your network.

## Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Build the site |
| `yarn start` | Serve the production build |
| `yarn lint` | Run ESLint |
| `yarn format` | Format `src/` with Prettier |
| `yarn clean` | Remove `.next` and `out` |

## Content

Posts and pages live in `content/` as MDX and JSON files. Add or edit files there and rebuild.
