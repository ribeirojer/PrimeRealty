import { supabase } from "@/lib/supabase";

export const newsletterRepository = {
	async subscribe(email: string) {
		return supabase.from("newsletter_subscribers").insert({ email }).single();
	},

	async unsubscribe(email: string) {
		return supabase.from("newsletter_subscribers").delete().eq("email", email);
	},

	async getAllSubscribers() {
		return supabase.from("newsletter_subscribers").select("email");
	},

	async isSubscribed(email: string) {
		return supabase
			.from("newsletter_subscribers")
			.select("*")
			.eq("email", email)
			.single();
	},
};
