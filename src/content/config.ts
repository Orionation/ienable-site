import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    readTime: z.string(),
    featured: z.boolean().optional(),
    emoji: z.string().optional(),
    author: z.string().default('iEnable Team'),
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    day: z.number(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    videoUrl: z.string().optional(),
    hookVideoUrl: z.string().optional(),
    scores: z.object({
      production: z.number(),
      storytelling: z.number(),
      brand: z.number(),
      innovation: z.number(),
    }).optional(),
  }),
});

export const collections = { blog, journal };
