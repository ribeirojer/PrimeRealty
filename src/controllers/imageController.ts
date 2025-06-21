import type { NextApiRequest, NextApiResponse } from "next";
import { imageRepository } from "@/repositories/imageRepository";
import { updateImageOrderSchema } from "@/schemas/imageSchemas";

// Desativar o body parser padrão para lidar com multipart
export const config = {
	api: {
		bodyParser: false,
	},
};

export async function uploadImageHandler(
	req: NextApiRequest,
	_res: NextApiResponse,
) {
	const _propertyId = req.query.id as string;

	/*const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err || !files.file) return res.status(400).json({ error: "Arquivo inválido" });

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const fileExt = file.originalFilename?.split(".").pop();
    const filename = `${propertyId}/${crypto.randomUUID()}.${fileExt}`;

    const upload = await imageRepository.uploadToStorage(file.filepath, filename);

    if (upload.error) return res.status(500).json({ error: upload.error.message });

    const publicUrl = supabase.storage.from("property-images").getPublicUrl(filename).data.publicUrl;

    const { data, error } = await imageRepository.saveImageRecord(propertyId, publicUrl, 0);
    if (error) return res.status(500).json({ error: error.message });

    return res.status(201).json({ image: data });
});
*/
}

export async function deleteImageHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const imageId = req.query.imageId as string;

	const { data: image, error } = await imageRepository.getImageById(imageId);
	if (error || !image)
		return res.status(404).json({ error: "Imagem não encontrada" });

	const path = image.url.split("/storage/v1/object/public/property-images/")[1];

	const remove = await imageRepository.deleteFromStorage(path);
	if (remove.error)
		return res.status(500).json({ error: remove.error.message });

	await imageRepository.deleteImageRecord(imageId);

	return res.status(200).json({ message: "Imagem deletada com sucesso" });
}

export async function updateImageOrderHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const imageId = req.query.imageId as string;
	const parsed = updateImageOrderSchema.safeParse(req.body);

	if (!parsed.success)
		return res.status(400).json({ error: parsed.error.format() });

	const { data, error } = await imageRepository.updateImageOrder(
		imageId,
		parsed.data.order,
	);
	if (error) return res.status(500).json({ error: error.message });

	return res.status(200).json({ image: data });
}
