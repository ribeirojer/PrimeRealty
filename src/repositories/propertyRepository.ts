import { supabase } from "@/lib/supabase";
import type {
	CreatePropertyInput,
	UpdatePropertyInput,
} from "@/schemas/propertySchemas";

export const propertyRepository = {
	async list(
		filters: { status?: string; type?: string; location?: string } = {},
	) {
		let query = supabase.from("properties").select("*");

		if (filters.status) query = query.eq("status", filters.status);
		if (filters.type) query = query.eq("type", filters.type);
		if (filters.location)
			query = query.ilike("location", `%${filters.location}%`);

		return query;
	},

	async getById(id: string) {
		return supabase.from("properties").select("*").eq("id", id).single();
	},

	async create(data: CreatePropertyInput) {
		return supabase.from("properties").insert(data).single();
	},

	async update(id: string, data: UpdatePropertyInput) {
		return supabase.from("properties").update(data).eq("id", id).single();
	},

	async remove(id: string) {
		return supabase.from("properties").delete().eq("id", id);
	},

	async updateStatus(id: string, status: string) {
		return supabase.from("properties").update({ status }).eq("id", id).single();
	},

	async getFeatured() {
		return supabase
			.from("properties")
			.select("*")
			.eq("featured", true)
			.limit(6);
	},

	async getSimilar(id: string) {
		const base = await propertyRepository.getById(id);
		if (!base.data) return { data: [], error: null };

		return supabase
			.from("properties")
			.select("*")
			.neq("id", id)
			.eq("type", base.data.type)
			.limit(3);
	},

	async getByAgent(agentId: string) {
		return supabase.from("properties").select("*").eq("agent_id", agentId);
	},

	async search(
		filters: {
			min_price?: number;
			max_price?: number;
			location?: string;
			type?: string;
		} = {},
	) {
		let query = supabase.from("properties").select("*");

		if (filters.min_price) query = query.gte("price", filters.min_price);
		if (filters.max_price) query = query.lte("price", filters.max_price);
		if (filters.location)
			query = query.ilike("location", `%${filters.location}%`);
		if (filters.type) query = query.eq("type", filters.type);

		return query;
	},
};
