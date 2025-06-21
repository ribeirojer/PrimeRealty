import { Award, Shield, TrendingUp, Users } from "lucide-react";
import type React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection: React.FC = () => {
	return (
		<section className="py-16 lg:py-24">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Por Que Escolher a PrimeRealty?
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Oferecemos serviços imobiliários abrangentes com expertise
						incomparável
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{
							icon: Users,
							title: "Corretores Especialistas",
							description:
								"Nossos corretores experientes oferecem atendimento personalizado e expertise de mercado",
						},
						{
							icon: TrendingUp,
							title: "Análise de Mercado",
							description:
								"Obtenha insights detalhados do mercado e avaliações de propriedades de nossos especialistas",
						},
						{
							icon: Shield,
							title: "Transações Seguras",
							description:
								"Garantimos que todas as transações sejam seguras e legalmente compatíveis",
						},
						{
							icon: Award,
							title: "Premiada",
							description:
								"Reconhecida como a melhor imobiliária da região por 5 anos consecutivos",
						},
					].map((service, index) => (
						<Card
							key={index}
							className="text-center p-6 hover:shadow-lg transition-shadow"
						>
							<CardContent className="pt-6">
								<service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-3">{service.title}</h3>
								<p className="text-gray-600">{service.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
