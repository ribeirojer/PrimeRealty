import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export function TestimonialsSection() {
	const testimonials = [
		{
			name: "Sarah & Mike Silva",
			location: "Jardins, São Paulo",
			text: "A PrimeRealty tornou nossa experiência de compra absolutamente perfeita. Sua expertise e dedicação nos ajudaram a encontrar nossa casa dos sonhos em apenas 3 semanas!",
			rating: 5,
			image: "/placeholder.svg?height=80&width=80",
		},
		{
			name: "Carlos Santos",
			location: "Vila Madalena, São Paulo",
			text: "Como comprador de primeira viagem, estava nervoso com o processo. A equipe me guiou em cada etapa e negociou um preço incrível. Não poderia estar mais feliz!",
			rating: 5,
			image: "/placeholder.svg?height=80&width=80",
		},
		{
			name: "Maria Oliveira",
			location: "Moema, São Paulo",
			text: "Vendi minha propriedade 20% acima do preço pedido em apenas 10 dias! Sua estratégia de marketing e conhecimento de mercado são incomparáveis. Altamente recomendado!",
			rating: 5,
			image: "/placeholder.svg?height=80&width=80",
		},
	];

	return (
		<section className="py-16 lg:py-24 bg-white">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-blue-100 text-blue-800">
						Histórias de Sucesso
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						O Que Nossos Clientes Dizem
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Não acredite apenas em nossa palavra - ouça de famílias que
						encontraram sua casa perfeita conosco
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.name}
							className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
						>
							<CardContent className="p-0">
								<div className="flex text-yellow-400 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={`${testimonial.name}-${i}`}
											className="h-5 w-5 fill-current"
										/>
									))}
								</div>
								<blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
									"{testimonial.text}"
								</blockquote>
								<div className="flex items-center">
									<Image
										src={testimonial.image || "/placeholder.svg"}
										alt={testimonial.name}
										width={60}
										height={60}
										className="rounded-full mr-4"
									/>
									<div>
										<div className="font-semibold text-gray-900">
											{testimonial.name}
										</div>
										<div className="text-gray-500 text-sm">
											{testimonial.location}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
