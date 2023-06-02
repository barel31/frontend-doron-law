import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

export default defineConfig({
	name: 'default',
	title: 'Doron Sanity',

	projectId: 'cprr9tyl',
	dataset: 'production',

	plugins: [deskTool(), visionTool(), unsplashImageAsset()],

	schema: {
		types: schemaTypes,
	},
});
