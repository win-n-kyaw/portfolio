# Cloudflare Pages Deployment Guide

## Prerequisites

- Cloudflare account
- GitHub account with this repo pushed
- Node.js 20+

---

## Option A — Deploy via Cloudflare Dashboard (recommended)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

### 2. Create a Cloudflare Pages project

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Workers & Pages → Create → Pages → Connect to Git**
3. Authorize GitHub and select your repo
4. Configure the build settings:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

### 3. Set environment variables

In **Pages → Settings → Environment Variables**, add the following for both **Production** and **Preview** environments:

| Variable | Value |
|---|---|
| `PUBLIC_SANITY_PROJECT_ID` | your Sanity project ID |
| `PUBLIC_SANITY_DATASET` | `production` |
| `PUBLIC_FORMSPREE_ID` | your Formspree form ID |
| `NODE_VERSION` | `20` |

### 4. Deploy

Click **Save and Deploy**. Cloudflare will build and publish your site automatically.

Every push to `main` triggers a new production deployment. Pull requests get preview URLs automatically.

---

## Option B — Deploy via CLI (wrangler)

Use this for manual deploys or CI/CD pipelines.

### 1. Install wrangler

```bash
npm install -D wrangler
```

### 2. Authenticate

```bash
npx wrangler login
```

This opens a browser to authorize your Cloudflare account.

### 3. Build the site

```bash
npm run build
```

### 4. Deploy

**Production:**
```bash
npx wrangler pages deploy dist --project-name portfolio
```

**Preview (named branch):**
```bash
npx wrangler pages deploy dist --project-name portfolio --branch preview
```

---

## Option C — Deploy via GitHub Actions (CI/CD)

### 1. Get your Cloudflare credentials

- **Account ID:** Cloudflare Dashboard → right sidebar under "Account ID"
- **API Token:** My Profile → API Tokens → Create Token → use "Cloudflare Pages — Edit" template

### 2. Add secrets to GitHub

Go to your repo → **Settings → Secrets and variables → Actions** and add:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | your API token |
| `CLOUDFLARE_ACCOUNT_ID` | your account ID |

### 3. Create the workflow file

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          PUBLIC_SANITY_PROJECT_ID: ${{ secrets.PUBLIC_SANITY_PROJECT_ID }}
          PUBLIC_SANITY_DATASET: production
          PUBLIC_FORMSPREE_ID: ${{ secrets.PUBLIC_FORMSPREE_ID }}

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name portfolio
```

> Add `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_FORMSPREE_ID` to GitHub secrets as well if using this workflow.

---

## Custom Domain

1. Go to **Pages → your project → Custom domains → Set up a custom domain**
2. Enter your domain (e.g. `yourdomain.dev`)
3. Cloudflare will automatically provision an SSL certificate and configure DNS if your domain is on Cloudflare

---

## Sanity Studio at /studio

The embedded Sanity Studio is served as a client-side SPA. The `public/_redirects` file ensures all `/studio/*` routes correctly serve the studio shell:

```
/studio/*  /studio/index.html  200
```

This file is already in place — no further action needed.

After deploying, add your Cloudflare Pages domain to the allowed CORS origins in your Sanity project:

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your Sanity project
3. **API → CORS Origins → Add origin**
4. Add `https://your-pages-domain.pages.dev` and your custom domain

---

## Troubleshooting

**Build fails with Node version error**
→ Ensure `NODE_VERSION=20` is set in environment variables.

**Blog posts 404 after deploy**
→ Verify `[slug].astro` exports `getStaticPaths()` and returns all slugs from Sanity at build time.

**Sanity Studio shows blank page or 404 on refresh**
→ Confirm `public/_redirects` exists with the `/studio/*` rule.

**Environment variables not picked up**
→ Variables must be set in Cloudflare Pages dashboard before the build runs. Trigger a new deploy after adding them.
