import { supabase } from "@/lib/supabase";

export const saveContact = async (
	name: string,
	email: string,
	message: string,
) => {
	const id = crypto.randomUUID();

	const { data, error } = await supabase
		.from("contact")
		.insert([{ id, name, email, message }])
		.select()
		.single();

	if (error) {
		console.error("Error saving contact:", error);
		throw error;
	}

	return data;
};
