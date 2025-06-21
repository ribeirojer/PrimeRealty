import type { NextApiRequest, NextApiResponse } from "next";
import { propertyRepository } from "@/repositories/propertyRepository";
import {
	createPropertySchema,
	updatePropertySchema,
	updateStatusSchema,
} from "@/schemas/propertySchemas";

export async function propertyListHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { data, error } = await propertyRepository.list(req.query);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json(data);
}

export async function propertyCreateHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const parsed = createPropertySchema.safeParse(req.body);
	if (!parsed.success)
		return res.status(400).json({ error: parsed.error.format() });

	const { data, error } = await propertyRepository.create(parsed.data);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(201).json(data);
}

export async function propertyDetailHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { id } = req.query;
	const { data, error } = await propertyRepository.getById(id as string);
	if (error) return res.status(404).json({ error: "Imóvel não encontrado" });
	return res.status(200).json(data);
}

export async function propertyUpdateHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { id } = req.query;
	const parsed = updatePropertySchema.safeParse(req.body);
	if (!parsed.success)
		return res.status(400).json({ error: parsed.error.format() });

	const { data, error } = await propertyRepository.update(
		id as string,
		parsed.data,
	);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json(data);
}

export async function propertyDeleteHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { id } = req.query;
	const { error } = await propertyRepository.remove(id as string);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(204).end();
}

export async function propertyStatusHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { id } = req.query;
	const parsed = updateStatusSchema.safeParse(req.body);
	if (!parsed.success)
		return res.status(400).json({ error: parsed.error.format() });

	const { data, error } = await propertyRepository.updateStatus(
		id as string,
		parsed.data.status,
	);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json(data);
}

export async function featuredPropertiesHandler(
	_req: NextApiRequest,
	res: NextApiResponse,
) {
	const { data, error } = await propertyRepository.getFeatured();
	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json(data);
}

export async function similarPropertiesHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { id } = req.query;
	const { data, error } = await propertyRepository.getSimilar(id as string);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json(data);
}

export async function searchPropertiesHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { data, error } = await propertyRepository.search(req.query);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json(data);
}

export async function propertiesByAgentHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { id } = req.query;
	const { data, error } = await propertyRepository.getByAgent(id as string);
	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json(data);
}
