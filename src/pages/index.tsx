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
			</main>
		</Layout>
	);
}
