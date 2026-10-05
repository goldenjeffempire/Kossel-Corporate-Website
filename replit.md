# Kossel LTD.

A premium corporate website for Kossel LTD., showcasing its engineering, industrial services, products, projects, and HSE and quality capabilities.

## Run & Operate

- **artifacts/kossel-website: web** workflow — runs the website preview with `pnpm --filter @workspace/kossel-website run dev`; the artifact supplies `PORT=25235` and `BASE_PATH=/`. Use Replit's Run control to start the website.
- `pnpm install --frozen-lockfile` — install the imported workspace dependencies using the existing lockfile
- `pnpm run typecheck` — full typecheck across all packages
- `PORT=25235 BASE_PATH=/ pnpm --filter @workspace/kossel-website run build` — production website build
- The current marketing website is static and does not require any secrets or a database to run.
- Render deployment is defined in `render.yaml`; it builds `artifacts/kossel-website/dist/public` as a CDN-backed static site, so the frontend does not sleep.
- Render should remain a static site for genuine continuous availability: static sites are CDN-served and do not need keep-alive pings or web-service health checks.
- Set `VITE_SITE_URL` only when deploying to a domain other than the canonical `https://www.kosselgroup.com`; it must be an HTTPS origin. Keep this consistent with the final host served by Render.
- Production builds prerender the real React content for all seven public routes and hydrate it in the browser. Build-time SEO checks must pass before publishing; `pnpm --filter @workspace/kossel-website run check:seo` checks an existing build.
- Optional production settings: `VITE_GOOGLE_SITE_VERIFICATION` adds the Search Console verification meta tag, and a valid `VITE_GA_MEASUREMENT_ID` (such as `G-...`) enables privacy-conscious Google Analytics initialization. Both remain inactive when unset.

## Stack

- pnpm workspaces, Node.js 20.20, TypeScript 5.9
- Website: React 19, Vite 7, Tailwind CSS, Wouter, Framer Motion
- Supporting workspace packages: Express 5 API, PostgreSQL + Drizzle ORM, Zod, and Orval code generation

## Where things live

- `artifacts/kossel-website/` — website source, routes, layout components, and Vite configuration
- `attached_assets/` — supplied imagery and generated industrial photography used by the website
- `artifacts/api-server/` and `lib/` — shared backend and database scaffolding; not required by the current static website

## Product

- Multi-page company website with home, about, services, products, projects, HSE & quality, and contact pages.

## Gotchas

- The Vite configuration requires both `PORT` and `BASE_PATH`; the managed artifact workflow supplies them and uses port `25235` to match the website artifact manifest. Do not create a second website workflow on that port.
- In Render, the build command supplies `PORT=10000 BASE_PATH=/`; keep both values present because the Vite configuration validates them during builds.
