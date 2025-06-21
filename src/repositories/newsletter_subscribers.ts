import { supabase } from "@/lib/supabase";

export const isExistingEmail = async (email: string) => {
	const { data: existingEmail, error } = await supabase
		.from("newsletter_subscribers")
		.select("email")
		.eq("email", email)
		.single();

	if (existingEmail) {
		return true;
	}
	return false;
};

export const insertEmail = async (email: string) => {
	const { error } = await supabase
		.from("newsletter_subscribers")
		.insert({ email, status: "active" });

	if (error) {
		throw new Error(error.message);
	}
};

export const updateContactPreferences = async (
	subscribe: boolean,
	email: string,
) => {
	if (subscribe) {
		const { error } = await supabase
			.from("newsletter_subscribers")
			.update({ status: "active" })
			.eq("email", email);
		if (error) {
			throw new Error(error.message);
		}
	} else {
		const { error } = await supabase
			.from("newsletter_subscribers")
			.update({ status: "inactive" })
			.eq("email", email);
		if (error) {
			throw new Error(error.message);
		}
	}
};

export const deleteEmail = async (email: string) => {
	const { error } = await supabase
		.from("newsletter_subscribers")
		.delete()
		.eq("email", email);

	if (error) {
		throw new Error(error.message);
	}
};
