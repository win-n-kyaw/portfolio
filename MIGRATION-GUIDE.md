# Cloudflare Pages (Static) → Workers (SSR) Migration Guide

## Current Status

**Done:**
- `astro.config.mjs` — Cloudflare adapter added, `output: 'hybrid'`, studio removed
- `package.json` — Studio deps removed (sanity, styled-components, etc.)
- All pages set to `export const prerender = false` (SSR)
- `sanity.cli.ts` — uses dotenv to load root `.env`
- `wrangler.toml` — configured with `main` and `[assets]` for Workers deployment
- `public/_redirects` — deleted (Workers handles routing)
- `Experience.astro` — `formatDate` hardened against ISO datetime and invalid dates
- `wrangler@4` installed as devDependency

**Not done (follow steps below):**

---

## Step 1: Clean Build Locally

```bash
nvm use 22
rm -rf node_modules package-lock.json
npm install
npx astro build
```

If OOM error persists, try:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npx astro build
```

Verify build output exists at `dist/`.

## Step 2: Set Environment Variables on Cloudflare Workers

The Worker needs env vars at runtime. Two options:

### Option A: Via wrangler.toml (visible in repo — OK for PUBLIC_ vars)

Add to `wrangler.toml`:

```toml
[vars]
PUBLIC_SANITY_PROJECT_ID = "your_project_id"
PUBLIC_SANITY_DATASET = "production"
PUBLIC_FORMSPREE_ID = "your_formspree_id"
```

### Option B: Via Cloudflare Dashboard (preferred if you don't want vars in repo)

1. Go to Cloudflare Dashboard → Workers & Pages → `portfolio`
2. Settings → Variables and Secrets
3. Add: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_FORMSPREE_ID`

### Option C: Via CLI

```bash
wrangler secret put PUBLIC_SANITY_PROJECT_ID
wrangler secret put PUBLIC_FORMSPREE_ID
```

> **Note:** `import.meta.env.PUBLIC_*` vars in Astro are inlined at BUILD time, not runtime.
> So these vars must also be available when you run `astro build`.
> If building in CI (e.g. GitHub Actions), set them as CI secrets/env vars too.

## Step 3: Test Locally with Wrangler

```bash
npx astro build
npx wrangler dev
```

This runs the Worker locally with miniflare. Visit `http://localhost:8787`.
Verify Sanity data (dates, blog posts, etc.) loads correctly.

## Step 4: Deploy the Worker

```bash
npx astro build && npx wrangler deploy
```

Verify at: https://portfolio.winnkyawhc.workers.dev/

For production env specifically:
```bash
npx wrangler deploy --env production
```

## Step 5: Fix "Still Showing Old Pages Data"

The dates not updating means one of:

1. **Your domain still points to the old Cloudflare Pages project**, not the Worker
   - Go to Cloudflare Dashboard → your domain's DNS settings
   - Check if the CNAME/A record points to Pages or Workers
   - Update the custom domain: Workers & Pages → `portfolio` Worker → Triggers → Custom Domains → Add your domain

2. **Env vars not set on the Worker** → Sanity client gets `null` projectId → falls back to fallback data
   - Check `wrangler secret list` or Dashboard to confirm vars exist
   - Remember: `PUBLIC_*` vars are baked in at build time by Astro

3. **Old Pages project is still active and bound to the domain**
   - Go to Workers & Pages → find the old Pages project
   - Remove its custom domain binding first
   - Then add the domain to the Worker

## Step 6: Disable/Delete Old Cloudflare Pages Project

Once the Worker is confirmed working:

1. Dashboard → Workers & Pages → find old Pages project
2. Remove custom domain bindings
3. Delete the project (or keep it disabled)

## Step 7: Update CI/CD (if using GitHub auto-deploy)

If pushing to `main` triggers a Cloudflare Pages rebuild, you need to either:

### Option A: Disconnect Pages git integration
- Dashboard → Pages project → Settings → Builds → disconnect repo

### Option B: Switch to Workers CI via GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm install
      - run: npx astro build
        env:
          PUBLIC_SANITY_PROJECT_ID: ${{ secrets.PUBLIC_SANITY_PROJECT_ID }}
          PUBLIC_SANITY_DATASET: production
          PUBLIC_FORMSPREE_ID: ${{ secrets.PUBLIC_FORMSPREE_ID }}
      - run: npx wrangler deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

Set these GitHub repo secrets:
- `CLOUDFLARE_API_TOKEN` — create at Cloudflare Dashboard → My Profile → API Tokens
- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_FORMSPREE_ID`

## Step 8: Deploy Sanity Studio Separately

```bash
cd sanity
npm install
npx sanity deploy
```

This hosts the studio at `https://<name>.sanity.studio`.

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npx astro dev` | Local dev server |
| `npx wrangler dev` | Local Worker preview (after build) |
| `npx astro build && npx wrangler deploy` | Deploy to Workers |
| `cd sanity && npx sanity deploy` | Deploy studio |
| `wrangler secret put VAR_NAME` | Set Worker secret |
| `wrangler secret list` | List Worker secrets |

## File Structure (after migration)

```
portfolio/           → Astro site → deploys to Cloudflare Workers
├── src/
├── astro.config.mjs
├── wrangler.toml
├── package.json
└── .env             → local only (gitignored)

sanity/              → Sanity Studio → deploys to sanity.studio
├── schemas/
├── sanity.config.ts
├── sanity.cli.ts
└── package.json
```
