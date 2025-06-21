import type { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "@/lib/jwt";

export function requireAuth(handler: Function, allowedRoles: string[] = []) {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		const token = req.headers.authorization?.split(" ")[1];

		if (!token) return res.status(401).json({ error: "Token ausente" });

		try {
			const decoded = verifyToken(token) as { id: string; role: string };

			if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
				return res.status(403).json({ error: "Acesso negado" });
			}

			(req as any).user = decoded; // injeta o usuário no req

			return handler(req, res);
		} catch (_error) {
			return res.status(401).json({ error: "Token inválido" });
		}
	};
}
