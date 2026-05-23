import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const updates = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/updates' }),
  schema: z.object({
    date: z.coerce.date(),
  }),
});

export const collections = { updates };
