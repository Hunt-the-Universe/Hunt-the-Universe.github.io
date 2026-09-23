import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    date: z.string(),
    time: z.string(),
    location: z.string(),
    description: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { events, pages };
