import { supabase } from "@/lib/supabase";

export const saveSearch = async ({
	searchTerm,
	userId,
	userIp,
	userAgent,
}: {
	searchTerm: string;
	userId?: string | null;
	userIp: string;
	userAgent: string;
}) => {
	const { data, error } = await supabase
		.from("search_logs")
		.insert([
			{
				search_term: searchTerm,
				user_id: userId,
				user_ip: userIp,
				user_agent: userAgent,
			},
		])
		.select()
		.single();

	if (error) {
		console.error("Error saving search:", error);
		throw error;
	}

	return data;
};
