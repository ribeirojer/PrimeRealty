import Image from "next/image";
import { ContactSection } from "@/components/home/ContactSection";
import EnhancedStatsSection from "@/components/home/EnhancedStatsSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { HeroSection } from "@/components/home/HeroSection";
import { NeighborhoodHighlights } from "@/components/home/NeighborhoodHighlights";
import NewsletterSection from "@/components/home/NewsletterSection";
import ServicesSection from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import Layout from "@/components/Layout";

export default function RealEstateHomepage() {
	return (
		<Layout>
			<main className="flex-1">
				<HeroSection />
				<FeaturedProperties />
				<TestimonialsSection />
				<NeighborhoodHighlights />
				<ServicesSection />
				<EnhancedStatsSection />
				<NewsletterSection />
				<ContactSection />
				<a
					target="_blank"
					rel="noopener external"
					className="whats"
					href="https://api.whatsapp.com/send?phone=5547992340581&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20imóvel%20da%20PrimeRealty."
				>
					<Image
						src={"/WhatsApp.png"}
						className="logo"
						alt="WhatsApp-logo"
						width={50}
						height={50}
					/>
				</a>
			</main>
		</Layout>
	);
}
