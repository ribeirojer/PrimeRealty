import type { NextApiRequest, NextApiResponse } from "next";
import {
	propertyDeleteHandler,
	propertyDetailHandler,
	propertyUpdateHandler,
} from "@/controllers/propertyController";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "GET") return propertyDetailHandler(req, res);
	if (req.method === "PUT") return propertyUpdateHandler(req, res);
	if (req.method === "DELETE") return propertyDeleteHandler(req, res);
	return res.status(405).end();
}
