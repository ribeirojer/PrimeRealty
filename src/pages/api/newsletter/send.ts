import { sendNewsletterHandler } from "@/controllers/newsletterController";
import { requireAuth } from "@/middlewares/requireAuth";

export default requireAuth(sendNewsletterHandler, ["admin"]);
