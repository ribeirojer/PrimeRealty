import type { NextApiRequest, NextApiResponse } from "next";

export default function favoriteHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const {
		query: { id },
		method,
	} = req;

	if (method === "POST") {
		return res.status(201).json({ message: `Favorito ${id} adicionado` });
	}

	if (method === "DELETE") {
		return res.status(200).json({ message: `Favorito ${id} removido` });
	}

	return res.status(405).end();
}
