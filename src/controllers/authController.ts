import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { signToken } from "@/lib/jwt";
import { userRepository } from "@/repositories/userRepository";
import { registerSchema } from "@/schemas/authSchemas";

export async function registerHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const parsed = registerSchema.safeParse(req.body);

	if (!parsed.success) {
		return res.status(400).json({ error: parsed.error.format() });
	}

	const { email } = parsed.data;
	const existing = await userRepository.getUserByEmail(email);

	if (existing.data) {
		return res.status(409).json({ error: "Email já registrado" });
	}

	const { data, error } = await userRepository.createUser(parsed.data);

	if (error) return res.status(500).json({ error: error.message });

	return res.status(201).json({ user: data });
}

export async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
	const { email, password } = req.body;

	const { data: user } = await userRepository.getUserByEmail(email);
	if (!user) return res.status(401).json({ error: "Credenciais inválidas" });

	const match = await bcrypt.compare(password, user.password);
	if (!match) return res.status(401).json({ error: "Credenciais inválidas" });

	const token = signToken({ id: user.id, role: user.role });

	return res
		.status(200)
		.json({ token, user: { id: user.id, name: user.name, role: user.role } });
}
