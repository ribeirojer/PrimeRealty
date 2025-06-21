import type { NextApiRequest, NextApiResponse } from "next";

export default function listFavorites(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "GET") {
		// Simular favoritos
		const favorites = [
			{ id: 1, title: "Casa na Praia" },
			{ id: 2, title: "Apartamento Centro" },
		];
		return res.status(200).json(favorites);
	}

	return res.status(405).end();
}
