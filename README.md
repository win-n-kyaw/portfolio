# Win Naing Kyaw — Portfolio

A professional portfolio website built with **Astro**, **Sanity CMS**, and **Tailwind CSS**. Deployed on **Cloudflare Pages** for free.

## Quick Start (Local Demo)

```bash
# 1. Install dependencies
cd portfolio
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) — the site works immediately with fallback data from your CV.

## Features

- Dark/light theme toggle with system preference detection
- All content editable via Sanity Studio (visual editor)
- Contact form via Formspree (50 free submissions/month)
- PDF resume auto-generated from site content (client-side)
- Fully responsive design
- Blog section with individual post pages
- Certifications showcase (CKA, CKAD, Terraform)

## Setting Up Sanity CMS (Optional — site works without it)

1. Create a free Sanity account at [sanity.io](https://www.sanity.io)
2. Create a new project and note the **Project ID**
3. Update the config files:

```bash
# In the root .env file:
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production

# In sanity/sanity.config.ts and sanity/sanity.cli.ts:
# Replace 'YOUR_PROJECT_ID' with your actual project ID
```

4. Deploy Sanity Studio:

```bash
cd sanity
npm install
npx sanity deploy   # Deploys to yourname.sanity.studio (free)
```

5. Add content via Sanity Studio and rebuild the site.

## Setting Up Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID (e.g., `xwkgabnr`)
3. Add to your `.env`:

```
PUBLIC_FORMSPREE_ID=your_formspree_id
```

## Deploy to Cloudflare Pages (Free)

1. Push this project to a GitHub or GitLab repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your repository
4. Set build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Add environment variables:
   - `PUBLIC_SANITY_PROJECT_ID` (if using Sanity)
   - `PUBLIC_SANITY_DATASET` = `production`
   - `PUBLIC_FORMSPREE_ID` (if using Formspree)
6. Deploy — your site will be live at `yourproject.pages.dev`

## Auto-Rebuild on Content Changes (Optional)

To rebuild the site when you update Sanity content:

1. In Cloudflare Pages, go to Settings → Build hooks
2. Create a deploy hook and copy the URL
3. In Sanity, go to API → Webhooks
4. Add the Cloudflare deploy hook URL
5. Now your site rebuilds automatically when content changes

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Astro components (Hero, About, Skills, etc.)
│   ├── data/            # Fallback data (used when Sanity is not connected)
│   ├── layouts/         # Page layouts
│   ├── lib/             # Sanity client
│   ├── pages/           # Astro pages (index, blog)
│   └── styles/          # Global CSS
├── sanity/              # Sanity Studio (separate deploy)
│   └── schemas/         # Content schemas
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Editing Content

**With Sanity (recommended for ongoing use):**
- Open your Sanity Studio (yourname.sanity.studio)
- Edit any section — About, Experience, Projects, Skills, Blog
- Content updates trigger a site rebuild

**Without Sanity (quick edits):**
- Edit `src/data/fallback.ts` directly
- Push changes → Cloudflare auto-rebuilds

## Tech Stack

| Layer        | Technology          | Cost    |
|-------------|--------------------| --------|
| Frontend    | Astro + Tailwind   | Free    |
| CMS         | Sanity             | Free    |
| Contact     | Formspree          | Free    |
| Hosting     | Cloudflare Pages   | Free    |
| Domain      | .pages.dev         | Free    |
