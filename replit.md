# Kossel Ltd.

A premium corporate website for Kossel Ltd., showcasing its engineering, industrial services, products, projects, and HSE and quality capabilities.

## Run & Operate

- **Kossel Website** workflow — runs the website preview using `PORT=25235 BASE_PATH=/ pnpm --filter @workspace/kossel-website run dev`
- `pnpm run typecheck` — full typecheck across all packages
- `PORT=25235 BASE_PATH=/ pnpm --filter @workspace/kossel-website run build` — production website build
- The current marketing website is static and does not require any secrets or a database to run.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Website: React 19, Vite 7, Tailwind CSS, Wouter, Framer Motion
- Supporting workspace packages: Express 5 API, PostgreSQL + Drizzle ORM, Zod, and Orval code generation

## Where things live

- `artifacts/kossel-website/` — website source, routes, layout components, and Vite configuration
- `attached_assets/` — supplied imagery and generated industrial photography used by the website
- `artifacts/api-server/` and `lib/` — shared backend and database scaffolding; not required by the current static website

## Product

- Multi-page company website with home, about, services, products, projects, HSE & quality, and contact pages.

## Gotchas

- The Vite configuration requires both `PORT` and `BASE_PATH`; the preview workflow must use port `25235` to match the imported website artifact manifest.
