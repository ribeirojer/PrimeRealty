import type { NextApiRequest, NextApiResponse } from "next";
import { userRepository } from "@/repositories/userRepository";
import { updateProfileSchema } from "@/schemas/userSchemas";

// 🔐 Exemplo fictício de extração de ID
function getUserIdFromRequest(req: NextApiRequest): string | null {
	return req.headers["x-user-id"]?.toString() || null;
}

export async function profileHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const userId = getUserIdFromRequest(req);

	if (!userId) return res.status(401).json({ error: "Não autenticado" });

	if (req.method === "GET") {
		const { data, error } = await userRepository.getUserById(userId);
		if (error) return res.status(500).json({ error: error.message });
		return res.status(200).json({ user: data });
	}

	if (req.method === "PUT") {
		const parsed = updateProfileSchema.safeParse(req.body);
		if (!parsed.success)
			return res.status(400).json({ error: parsed.error.format() });

		const { data, error } = await userRepository.updateUserProfile(
			userId,
			parsed.data,
		);
		if (error) return res.status(500).json({ error: error.message });
		return res.status(200).json({ user: data });
	}

	return res.status(405).end();
}
