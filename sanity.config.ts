import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

export default defineConfig({
  name: 'default',
  title: 'Doron Sanity',

  projectId: 'cprr9tyl',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
});
