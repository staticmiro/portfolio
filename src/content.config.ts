import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    status: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({
      name: z.string(),
      url: z.string(),
      icon: z.string().optional()
    })).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    lang: z.enum(['en', 'pl']).default('en')
  })
});

export const collections = {
  'projects': projectsCollection,
};
