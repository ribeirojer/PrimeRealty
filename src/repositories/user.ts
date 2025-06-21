import bcrypt, { hashSync } from "bcryptjs"; // Importe a biblioteca para criptografar senhas
import jwt from "jsonwebtoken"; // Importe a biblioteca para geração de tokens JWT
import { supabase } from "@/lib/supabase";

// Número máximo de tentativas de redefinição de senha permitidas
const MAX_RESET_PASSWORD_ATTEMPTS = 5;
// Tempo de bloqueio em milissegundos após exceder o número máximo de tentativas
const BLOCK_TIME = 60 * 60 * 1000; // 1 hora

// Chave secreta para assinar tokens JWT
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function createUser(
	name: string,
	email: string,
	password: string | Buffer,
	newsletter = false,
) {
	// Verifique se o email já está em uso
	const { data: existingUser, error: userError } = await supabase
		.from("users")
		.select("email")
		.eq("email", email);

	if (userError) {
		throw new Error(
			`Erro ao verificar o email existente: ${userError.message}`,
		);
	}

	if (existingUser && existingUser.length > 0) {
		throw new Error("O email já está em uso");
	}

	// Criptografe a senha antes de armazená-la
	const salt = await bcrypt.genSalt(10);
	const passwordhash = await bcrypt.hash(password as string, salt);

	const { data, error } = await supabase
		.from("users")
		.insert([
			{
				name,
				email,
				password_hash: passwordhash,
				verification_token: crypto.randomUUID(),
				is_subscribed_newsletter: newsletter,
			},
		])
		.select()
		.single();

	if (error) {
		throw new Error(`Erro ao criar o usuário: ${error.message}`);
	}

	return data;
}

export async function getUserByEmail(email: string) {
	const { data, error } = await supabase
		.from("users")
		.select("*")
		.eq("email", email)
		.single();

	if (error && error.code !== "PGRST116") {
		throw new Error(`Erro ao buscar usuário: ${error.message}`);
	}

	return data;
}

export async function loginUser(email: string, password: string | Buffer) {
	const { data: user, error: userError } = await supabase
		.from("users")
		.select("*")
		.eq("email", email)
		.single();

	if (userError) {
		throw new Error(`Erro ao buscar o usuário: ${userError.message}`);
	}

	if (!user) {
		throw new Error("Credenciais inválidas");
	}

	const passwordMatch = await bcrypt.compare(
		password as string,
		user.password_hash,
	);
	if (!passwordMatch) {
		throw new Error("Credenciais inválidas");
	}

	const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
		expiresIn: "1h",
	});
	if (!token) {
		throw new Error("Erro ao gerar o token");
	}
	console.log(token);

	return {
		user: {
			name: user.name,
			email: user.email,
		},
		token,
	};
}

export function verifyPassword(
	password: string | Buffer,
	passwordToCompare: string | Buffer,
) {
	return bcrypt.compare(
		typeof passwordToCompare === "string"
			? passwordToCompare
			: passwordToCompare.toString(),
		typeof password === "string" ? password : password.toString(),
	);
}

export async function verifyEmail(token: string) {
	const { data: user, error: userError } = await supabase
		.from("users")
		.update({ verified: true })
		.eq("verification_token", token)
		.single();

	if (userError) {
		throw new Error(`Erro ao verificar o email: ${userError.message}`);
	}

	return user;
}

export async function checkResetAttempts(userId: string) {
	const { data: userData, error: userError } = await supabase
		.from("users")
		.select("reset_password_attempts, reset_password_last_attempt, email")
		.eq("id", userId)
		.single();

	if (userError) {
		throw new Error(`Erro ao buscar dados do usuário: ${userError.message}`);
	}

	if (
		userData.reset_password_attempts >= MAX_RESET_PASSWORD_ATTEMPTS &&
		userData.reset_password_last_attempt &&
		Date.now() <
			new Date(userData.reset_password_last_attempt).getTime() + BLOCK_TIME
	) {
		throw new Error(
			"Você excedeu o número máximo de tentativas de redefinição de senha. Tente novamente mais tarde.",
		);
	}
	return userData;
}

export async function updateResetAttempts(
	userId: string,
	userData: { reset_password_attempts: number },
) {
	const { error: updateError } = await supabase
		.from("users")
		.update({ reset_password_attempts: userData.reset_password_attempts + 1 })
		.eq("id", userId);
	if (updateError) {
		throw new Error(
			`Erro ao atualizar tentativas de redefinição de senha: ${updateError.message}`,
		);
	}
}

export async function updateName(name: string, email: string) {
	const { data: updatedUser, error: updateUserError } = await supabase
		.from("users")
		.update({ name })
		.eq("email", email)
		.single();

	if (updateUserError) {
		throw new Error(
			`Erro ao atualizar nome do usuário: ${updateUserError.message}`,
		);
	}

	return updatedUser;
}

export async function updatePassword(userId: string, password: string) {
	const hashedPassword = hashSync(password, 10);

	const { error: updateUserError } = await supabase
		.from("users")
		.update({ password_hash: hashedPassword })
		.eq("id", userId)
		.single();

	if (updateUserError) {
		throw new Error(
			`Erro ao atualizar senha do usuário: ${updateUserError.message}`,
		);
	}
	return true;
}

export async function deleteAccount(email: string) {
	const { error: deleteUserError } = await supabase
		.from("users")
		.delete()
		.eq("email", email);

	if (deleteUserError) {
		throw new Error(
			`Erro ao deletar conta do usuário: ${deleteUserError.message}`,
		);
	}
	return true;
}

export async function updateContactPreferencesUser(
	subscribe: boolean,
	email: string,
) {
	const { error: updateUserError } = await supabase
		.from("users")
		.update({ is_subscribed_newsletter: subscribe })
		.eq("email", email);

	if (updateUserError) {
		throw new Error(
			`Erro ao atualizar preferências de contato do usuário: ${updateUserError.message}`,
		);
	}
	return true;
}
