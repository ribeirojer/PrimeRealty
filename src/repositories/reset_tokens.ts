import { supabase } from "@/lib/supabase";

export async function createResetToken(userId: string) {
	const token = crypto.randomUUID();

	const { data: resetToken, error: resetTokenError } = await supabase
		.from("reset_tokens")
		.insert([{ user_id: userId, token }])
		.select("token")
		.single();

	if (resetTokenError) {
		throw new Error(
			`Erro ao criar token de redefinição de senha: ${resetTokenError.message}`,
		);
	}

	return resetToken.token;
}

export async function validateResetToken(token: string) {
	const { data: resetToken, error: resetTokenError } = await supabase
		.from("reset_tokens")
		.select("user_id, created_at")
		.eq("token", token)
		.single();
	if (resetTokenError) {
		throw new Error(
			`Erro ao buscar token de redefinição de senha: ${resetTokenError.message}`,
		);
	}
	if (!resetToken) {
		throw new Error("Token de redefinição de senha inválido.");
	}
	const tokenExpirationTime =
		new Date(resetToken.created_at).getTime() + 60 * 60 * 1000;
	if (Date.now() > tokenExpirationTime) {
		throw new Error("O token de redefinição de senha expirou.");
	}
	return resetToken;
}

export async function removeResetToken(token: string) {
	const { error: deleteTokenError } = await supabase
		.from("reset_tokens")
		.delete()
		.eq("token", token);
	if (deleteTokenError) {
		throw new Error(
			`Erro ao excluir token de redefinição de senha: ${deleteTokenError.message}`,
		);
	}
}
