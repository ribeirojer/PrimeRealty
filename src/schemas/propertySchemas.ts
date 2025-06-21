import { z } from "zod";

export const createPropertySchema = z.object({
	title: z.string().min(3),
	description: z.string().min(10),
	price: z.number().positive(),
	location: z.string(),
	agent_id: z.string().uuid(),
	type: z.enum(["casa", "apartamento", "terreno"]),
	status: z.enum(["disponível", "vendido", "alugado"]),
	featured: z.boolean().optional(),
});

export const updatePropertySchema = createPropertySchema.partial();

export const updateStatusSchema = z.object({
	status: z.enum(["disponível", "vendido", "alugado"]),
});

export type CreatePropertyInput = z.infer<typeof createPropertySchema>;
export type UpdatePropertyInput = z.infer<typeof updatePropertySchema>;
