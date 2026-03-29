import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sanity from '@sanity/astro';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const sanityProjectId = env.PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = env.PUBLIC_SANITY_DATASET ?? 'production';

if (!sanityProjectId) {
  throw new Error('Missing required env var: PUBLIC_SANITY_PROJECT_ID');
}

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    react(),

    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: false,
    }),
  ],
  output: 'hybrid',
});
