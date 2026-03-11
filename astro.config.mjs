// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
    site: 'https://kurohomeless.pages.dev',
    integrations: [sitemap(), playformCompress()],
});