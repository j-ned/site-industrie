import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadClient } from './src/lib/load-client.mjs';

const client = await loadClient();

export default defineConfig({
  site: client.site.url,
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
