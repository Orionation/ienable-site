import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ienable.ai',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'file' // Ensures URLs end with .html for backward compatibility
  },
  trailingSlash: 'never'
});
