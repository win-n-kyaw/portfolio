import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import { schemaTypes } from './sanity/schemas/index.ts';

const sanityProjectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.PUBLIC_SANITY_DATASET ?? 'production';

if (!sanityProjectId) {
  throw new Error('Missing required env var: PUBLIC_SANITY_PROJECT_ID');
}

export default defineConfig({
  integrations: [
    tailwind(),

    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: true,
      studioBasePath: '/studio',
      schema: {
        types: schemaTypes,
      },
    }),
  ],
  output: 'static',
});
