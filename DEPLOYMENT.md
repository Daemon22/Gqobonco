# Gqobonco deployment guide

This repository is a static React/Vite site served by the small Express production wrapper in `server/index.ts`.

## Verified locally

- `pnpm install --frozen-lockfile`
- `pnpm run check`
- `pnpm run build`
- `NODE_ENV=production PORT=4173 pnpm start`
- Homepage, route manifest, client-side fallback routes, and Brand Kit assets returned HTTP 200.

## Production deployment

Use Node.js 22.13+ and pnpm 10.4.1+.

```bash
pnpm install --frozen-lockfile
pnpm run build
NODE_ENV=production PORT=3000 pnpm start
```

The server listens on `0.0.0.0` through the platform's normal Node process binding and serves the compiled site from `dist/public`. Set `PORT` to the port assigned by the hosting provider.

## Deployment checks

After startup, verify:

- `/` returns the site HTML.
- `/manus-routes.json` returns the JSON route manifest.
- `/projects/smartwater-guardian` returns the SPA shell for client-side routing.
- `/assets/brandkit/33-smartwater-guardian-logo-clean.jpg` and `/assets/brandkit/34-smartwater-guardian-logo-scenic.jpg` return successfully.

No database, API key, or runtime environment variable is required for the current static-only experience. The supplied Brand Kit is bundled under `client/public/assets/brandkit/` and copied into `dist/public/assets/brandkit/` by the production build.

## Deployment package

The prepared archive contains the source, lockfile, documentation, and verified `dist/` output. It intentionally excludes `node_modules/`, caches, and local logs. A deployment platform may either serve the included `dist/` output or rebuild it from the source using the commands above.
