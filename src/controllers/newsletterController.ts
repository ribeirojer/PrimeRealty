import type { NextApiRequest, NextApiResponse } from "next";
import { newsletterRepository } from "@/repositories/newsletterRepository";
import { emailSchema, sendNewsletterSchema } from "@/schemas/newsletterSchemas";

// Simples controle de admin fake
function isAdmin(req: NextApiRequest) {
	return req.headers["x-admin-key"] === process.env.ADMIN_KEY;
}

export async function subscribeHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const parsed = emailSchema.safeParse(req.body);
	if (!parsed.success)
		return res.status(400).json({ error: parsed.error.format() });

	const { email } = parsed.data;
	const existing = await newsletterRepository.isSubscribed(email);
	if (existing.data)
		return res.status(409).json({ error: "Email já inscrito" });

	const { data, error } = await newsletterRepository.subscribe(email);
	if (error) return res.status(500).json({ error: error.message });

	return res.status(201).json({ message: "Inscrição realizada", data });
}

export async function unsubscribeHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const parsed = emailSchema.safeParse(req.body);
	if (!parsed.success)
		return res.status(400).json({ error: parsed.error.format() });

	const { email } = parsed.data;

	const { error } = await newsletterRepository.unsubscribe(email);
	if (error) return res.status(500).json({ error: error.message });

	return res.status(200).json({ message: "Inscrição cancelada" });
}

export async function getSubscribersHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (!isAdmin(req)) return res.status(403).json({ error: "Acesso negado" });

	const { data, error } = await newsletterRepository.getAllSubscribers();
	if (error) return res.status(500).json({ error: error.message });

	return res.status(200).json(data);
}

export async function sendNewsletterHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (!isAdmin(req)) return res.status(403).json({ error: "Acesso negado" });

	const parsed = sendNewsletterSchema.safeParse(req.body);
	if (!parsed.success)
		return res.status(400).json({ error: parsed.error.format() });

	const { subject, content } = parsed.data;
	const { data: subscribers } = await newsletterRepository.getAllSubscribers();

	if (!subscribers || subscribers.length === 0) {
		return res.status(404).json({ error: "Nenhum inscrito encontrado" });
	}

	// Simulação de envio em massa
	for (const { email } of subscribers) {
		console.log(`Enviando email para ${email}: ${subject}`);
		// Integre com serviço como Resend, SendGrid etc.
	}

	return res.status(200).json({ message: "Newsletter enviada" });
}
