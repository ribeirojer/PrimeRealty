import { z } from "zod";

export const emailSchema = z.object({
	email: z.string().email(),
});

export const sendNewsletterSchema = z.object({
	subject: z.string().min(3),
	content: z.string().min(10),
});
