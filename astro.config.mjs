import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadClient } from './src/lib/load-client.mjs';

const client = await loadClient();

export default defineConfig({
  site: client.site.url,
  base: process.env.BASE_PATH ?? '/',
  // Pas de sitemap pour la démo : elle est en noindex
  integrations: client.demo ? [] : [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
