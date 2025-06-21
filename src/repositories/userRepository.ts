import { supabase } from "@/lib/supabase";
import type { RegisterInput } from "@/schemas/authSchemas";
import type { UpdateProfileInput } from "@/schemas/userSchemas";

export const userRepository = {
	async createUser(data: RegisterInput) {
		return await supabase.from("users").insert(data).single();
	},

	async getUserByEmail(email: string) {
		return await supabase.from("users").select("*").eq("email", email).single();
	},

	async updateUserProfile(userId: string, data: UpdateProfileInput) {
		return await supabase.from("users").update(data).eq("id", userId).single();
	},

	async getUserById(userId: string) {
		return await supabase.from("users").select("*").eq("id", userId).single();
	},
};
