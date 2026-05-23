// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kurohomeless.pages.dev',
  integrations: [sitemap()],
  security: { csp: true },
});
