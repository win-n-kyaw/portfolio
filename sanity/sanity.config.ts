import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { codeInput } from '@sanity/code-input' 
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio CMS',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET || import.meta.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool(), codeInput(),],

  schema: {
    types: schemaTypes,
  },
});
