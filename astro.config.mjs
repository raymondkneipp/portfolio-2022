import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [react(), tailwind()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
