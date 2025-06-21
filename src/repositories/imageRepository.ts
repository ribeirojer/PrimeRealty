import { supabase } from "@/lib/supabase";

export const imageRepository = {
	async uploadToStorage(file: File, path: string) {
		return supabase.storage.from("property-images").upload(path, file, {
			cacheControl: "3600",
			upsert: true,
		});
	},

	async deleteFromStorage(path: string) {
		return supabase.storage.from("property-images").remove([path]);
	},

	async saveImageRecord(propertyId: string, url: string, order: number) {
		return supabase
			.from("property_images")
			.insert({
				property_id: propertyId,
				url,
				order,
			})
			.single();
	},

	async deleteImageRecord(imageId: string) {
		return supabase.from("property_images").delete().eq("id", imageId);
	},

	async updateImageOrder(imageId: string, order: number) {
		return supabase
			.from("property_images")
			.update({ order })
			.eq("id", imageId)
			.single();
	},

	async getImageById(imageId: string) {
		return supabase
			.from("property_images")
			.select("*")
			.eq("id", imageId)
			.single();
	},
};
