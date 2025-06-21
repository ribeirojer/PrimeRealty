import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
export function NeighborhoodHighlights() {
	return (
		<section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-blue-100 text-blue-800">
						Explore Regiões
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Bairros Populares
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Descubra as comunidades mais procuradas com as melhores comodidades
						e estilo de vida
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							name: "Jardins",
							properties: "245 Imóveis",
							avgPrice: "R$ 2.5M",
							image: "/placeholder.svg?height=300&width=400",
							features: ["Shopping de Luxo", "Melhores Escolas", "Área Nobre"],
						},
						{
							name: "Vila Madalena",
							properties: "892 Imóveis",
							avgPrice: "R$ 1.8M",
							image: "/placeholder.svg?height=300&width=400",
							features: ["Vida Noturna", "Arte e Cultura", "Gastronomia"],
						},
						{
							name: "Moema",
							properties: "156 Imóveis",
							avgPrice: "R$ 1.2M",
							image: "/placeholder.svg?height=300&width=400",
							features: ["Parques", "Comércio Local", "Transporte"],
						},
					].map((neighborhood, index) => (
						<Card
							key={index}
							className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg"
						>
							<div className="relative overflow-hidden">
								<Image
									src={neighborhood.image || "/placeholder.svg"}
									alt={neighborhood.name}
									width={400}
									height={300}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4 text-white">
									<h3 className="text-2xl font-bold mb-1">
										{neighborhood.name}
									</h3>
									<p className="text-blue-200">{neighborhood.properties}</p>
								</div>
								<Badge className="absolute top-4 right-4 bg-blue-600 text-white">
									Avg {neighborhood.avgPrice}
								</Badge>
							</div>
							<CardContent className="p-6">
								<div className="flex flex-wrap gap-2">
									{neighborhood.features.map((feature) => (
										<Badge
											key={feature}
											variant="secondary"
											className="text-xs"
										>
											{feature}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
