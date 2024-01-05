import * as z from 'zod';

export const createBookSchema = z.object({
    id: z.number().int().min(0),
    name: z.string(),
    description: z.string(),
    authorName: z.string(),
    pages: z.number().int().min(0),
    status: z.string(),
    year: z.string().optional(),
    image: z.string().optional(),
    quantity: z.number().int().min(0),
});