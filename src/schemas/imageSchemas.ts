import { z } from "zod";

export const uploadImageSchema = z.object({
	file: z.any(), // será tratado via `formData`
});

export const updateImageOrderSchema = z.object({
	order: z.number().min(0),
});
