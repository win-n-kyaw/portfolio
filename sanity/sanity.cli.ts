import { defineCliConfig } from 'sanity/cli';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET ?? 'production',
  },
  deployment: {
    appId: process.env.SANITY_APP_ID,
  },
});
