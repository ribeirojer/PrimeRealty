import type { NextApiRequest, NextApiResponse } from "next";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") return res.status(405).end();

	const { email, password } = req.body;

	// Simule verificação
	if (email === "admin@email.com" && password === "123456") {
		return res.status(200).json({ token: "fake-jwt-token" });
	}

	return res.status(401).json({ error: "Credenciais inválidas" });
}
