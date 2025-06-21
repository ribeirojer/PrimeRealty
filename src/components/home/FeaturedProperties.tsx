import { Bath, Bed, Heart, MapPin, Square, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function FeaturedProperties() {
	const properties = [
		{
			id: 1,
			price: "R$ 1.500.000",
			address: "Rua das Flores, 123, Jardins, São Paulo - SP",
			beds: 4,
			baths: 3,
			sqft: "250m²",
			type: "À Venda",
			yearBuilt: "2019",
			lotSize: "500m²",
			features: ["Piscina", "Garagem", "Jardim"],
			agent: "Sarah Silva",
			daysOnMarket: 12,
			isNew: true,
		},
		{
			id: 2,
			price: "R$ 2.800.000",
			address: "Av. Paulista, 456, Bela Vista, São Paulo - SP",
			beds: 3,
			baths: 2,
			sqft: "180m²",
			type: "À Venda",
			yearBuilt: "2021",
			lotSize: "N/A",
			features: ["Vista da Cidade", "Portaria", "Academia"],
			agent: "Carlos Santos",
			daysOnMarket: 5,
			isNew: true,
		},
		{
			id: 3,
			price: "R$ 4.500/mês",
			address: "Rua Augusta, 789, Vila Madalena, São Paulo - SP",
			beds: 2,
			baths: 2,
			sqft: "120m²",
			type: "Para Alugar",
			yearBuilt: "2020",
			lotSize: "N/A",
			features: ["Varanda", "Vaga", "Pet-Friendly"],
			agent: "Maria Oliveira",
			daysOnMarket: 3,
			isNew: false,
		},
	];

	return (
		<section className="py-16 lg:py-24 bg-gray-50">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Imóveis em Destaque
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Descubra nossa seleção especial de imóveis premium
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{properties.map((property) => (
						<Card
							key={property.id}
							className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-0 shadow-lg"
						>
							<div className="relative overflow-hidden">
								<Image
									src="/placeholder.svg?height=250&width=400"
									alt={`Property at ${property.address}`}
									width={400}
									height={250}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<Badge
									className={`absolute top-4 left-4 ${property.type === "Para Alugar" ? "bg-green-600" : "bg-blue-600"}`}
								>
									{property.type}
								</Badge>
								{property.isNew && (
									<Badge className="absolute top-4 right-4 bg-red-500 animate-pulse">
										Novo
									</Badge>
								)}
								<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<Button className="bg-white/90 text-gray-900 hover:bg-white">
										Ver Fotos
									</Button>
								</div>
							</div>

							<CardContent className="p-6">
								<div className="flex justify-between items-start mb-4">
									<div>
										<h3 className="text-2xl font-bold text-blue-600 mb-1">
											{property.price}
										</h3>
										<p className="text-sm text-gray-500">
											Construído em {property.yearBuilt}
										</p>
									</div>
									<div className="flex text-yellow-400">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="h-4 w-4 fill-current" />
										))}
									</div>
								</div>

								<p className="text-gray-600 mb-4 flex items-center">
									<MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
									{property.address}
								</p>

								<div className="grid grid-cols-3 gap-4 text-sm text-gray-500 mb-4">
									<span className="flex items-center">
										<Bed className="h-4 w-4 mr-1" />
										{property.beds} quartos
									</span>
									<span className="flex items-center">
										<Bath className="h-4 w-4 mr-1" />
										{property.baths} banheiros
									</span>
									<span className="flex items-center">
										<Square className="h-4 w-4 mr-1" />
										{property.sqft} sqft
									</span>
								</div>

								<div className="flex flex-wrap gap-1 mb-4">
									{property.features.map((feature) => (
										<Badge
											key={feature}
											variant="secondary"
											className="text-xs"
										>
											{feature}
										</Badge>
									))}
								</div>

								<div className="flex justify-between items-center mb-4">
									<span className="text-sm text-gray-500">
										Corretor: {property.agent}
									</span>
									<span className="text-sm text-gray-500">
										{property.daysOnMarket} dias no mercado
									</span>
								</div>

								<div className="flex gap-2">
									<Button className="flex-1">Ver Detalhes</Button>
									<Button variant="outline">
										<Heart className="h-4 w-4" />
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Button variant="outline">Ver Todos os Imóveis</Button>
				</div>
			</div>
		</section>
	);
}
