import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['draft', 'review', 'published']),
    brand: z.string().default('wapitee'),
    topic: z.string(),
    lang: z.enum(['en', 'zh']).default('en'),
    tags: z.array(z.string()).default([]),
    created: z.string(),
    updated: z.string().optional(),
    verified: z.string().optional(),
    sources: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      })
    ).default([]),
    summary: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
