import type { NextApiRequest, NextApiResponse } from "next";
import {
	propertyCreateHandler,
	propertyListHandler,
} from "@/controllers/propertyController";
import { requireAuth } from "@/middlewares/requireAuth";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "GET") return propertyListHandler(req, res);
	if (req.method === "POST")
		return requireAuth(propertyCreateHandler, ["admin", "corretor"])(req, res);
	return res.status(405).end();
}
