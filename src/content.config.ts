// src/content.config.ts
import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        status: z.enum(['Active', 'Completed', 'Published']),
    }),
});

const entries = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/entries" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        project: reference('projects'),
    }),
});

export const collections = { projects, entries };