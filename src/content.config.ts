import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
