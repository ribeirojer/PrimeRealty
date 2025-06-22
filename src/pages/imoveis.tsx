import {
	Bath,
	Bed,
	Grid3X3,
	Heart,
	List,
	MapPin,
	Search,
	SlidersHorizontal,
	Square,
	Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Checkbox from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function ImoveisPage() {
	const [_selectedPropertyType, _setSelectedPropertyType] = useState("");
	const [_selectedPriceRange, _setSelectedPriceRange] = useState("");
	const [_selectedBusinessType, _setSelectedBusinessType] = useState(""); // State for selected business type (buy/rent)
	const _propertyTypes = [
		{ value: "casa", label: "Casa" },
		{ value: "apartamento", label: "Apartamento" },
		{ value: "sobrado", label: "Sobrado" },
		{ value: "terreno", label: "Terreno" },
		{ value: "comercial", label: "Comercial" },
		{ value: "rural", label: "Rural" },
		{ value: "industrial", label: "Industrial" },
		{ value: "loteamento", label: "Loteamento" },
		{ value: "condominio", label: "Condomínio" },
		{ value: "flat", label: "Flat" },
		{ value: "cobertura", label: "Cobertura" },
		{ value: "kitnet", label: "Kitnet" },
		{ value: "studio", label: "Studio" },
		{ value: "loft", label: "Loft" },
		{ value: "chacara", label: "Chácara" },
		{ value: "fazenda", label: "Fazenda" },
		{ value: "pousada", label: "Pousada" },
		{ value: "galpao", label: "Galpão" },
		{ value: "sala_comercial", label: "Sala Comercial" },
		{ value: "predio", label: "Prédio" },
		{ value: "casa_de_vila", label: "Casa de Vila" },
		{ value: "casa_de_condominio", label: "Casa de Condomínio" },
		{ value: "apartamento_de_condominio", label: "Apartamento de Condomínio" },
		{ value: "apartamento_de_luxo", label: "Apartamento de Luxo" },
		{ value: "casa_de_luxo", label: "Casa de Luxo" },
		{ value: "casa_de_praia", label: "Casa de Praia" },
		{ value: "casa_de_campo", label: "Casa de Campo" },
		{ value: "casa_de_madeira", label: "Casa de Madeira" },
		{ value: "casa_de_alvenaria", label: "Casa de Alvenaria" },
		{ value: "casa_de_balneario", label: "Casa de Balneário" },
		{ value: "casa_de_veraneio", label: "Casa de Veraneio" },
		{ value: "casa_de_sitio", label: "Casa de Sítio" },
	];
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
			features: ["Varanda", "Vaga", "Pet-Friendly"],
			agent: "Maria Oliveira",
			daysOnMarket: 3,
			isNew: false,
		},
		{
			id: 4,
			price: "R$ 950.000",
			address: "Rua dos Pinheiros, 321, Pinheiros, São Paulo - SP",
			beds: 3,
			baths: 2,
			sqft: "95m²",
			type: "À Venda",
			yearBuilt: "2018",
			features: ["Sacada", "Churrasqueira", "Lazer"],
			agent: "João Costa",
			daysOnMarket: 8,
			isNew: false,
		},
		{
			id: 5,
			price: "R$ 3.200/mês",
			address: "Av. Faria Lima, 567, Itaim Bibi, São Paulo - SP",
			beds: 1,
			baths: 1,
			sqft: "45m²",
			type: "Para Alugar",
			yearBuilt: "2022",
			features: ["Mobiliado", "Academia", "Coworking"],
			agent: "Ana Santos",
			daysOnMarket: 2,
			isNew: true,
		},
		{
			id: 6,
			price: "R$ 1.200.000",
			address: "Rua Harmonia, 890, Vila Madalena, São Paulo - SP",
			beds: 2,
			baths: 1,
			sqft: "80m²",
			type: "À Venda",
			yearBuilt: "2017",
			features: ["Terraço", "Churrasqueira", "Pet-Friendly"],
			agent: "Pedro Lima",
			daysOnMarket: 15,
			isNew: false,
		},
	];

	return (
		<Layout>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								Encontre Seu Imóvel Ideal
							</h1>
							<p className="text-xl mb-8 text-blue-100">
								Explore nossa seleção completa de imóveis em São Paulo
							</p>

							{/* Search Form */}
							<Card className="bg-white text-gray-900 p-6 shadow-xl">
								<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
									<div className="relative">
										<MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
										<Input placeholder="Localização" className="pl-10" />
									</div>
									<Select value="tipo" onChange={(value) => console.log(value)}>
										<SelectTrigger>
											<SelectValue value="" placeholder="Tipo" />
										</SelectTrigger>
										<SelectContent
											value=""
											onChange={(value) => console.log(value)}
										>
											<SelectItem value="casa">Casa</SelectItem>
											<SelectItem value="apartamento">Apartamento</SelectItem>
											<SelectItem value="sobrado">Sobrado</SelectItem>
										</SelectContent>
									</Select>
									<Select
										value="preco"
										onChange={(value) => console.log(value)}
									>
										<SelectTrigger>
											<SelectValue value="" placeholder="Preço" />
										</SelectTrigger>
										<SelectContent
											value=""
											onChange={(value) => console.log(value)}
										>
											<SelectItem value="0-500k">R$ 0 - R$ 500k</SelectItem>
											<SelectItem value="500k-1m">R$ 500k - R$ 1M</SelectItem>
											<SelectItem value="1m+">R$ 1M+</SelectItem>
										</SelectContent>
									</Select>
									<Button className="bg-blue-600 hover:bg-blue-700">
										<Search className="h-4 w-4 mr-2" />
										Buscar
									</Button>
								</div>
							</Card>
						</div>
					</div>
				</section>

				{/* Filters and Results */}
				<section className="py-8 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="flex flex-col lg:flex-row gap-8">
							{/* Sidebar Filters */}
							<div className="lg:w-1/4">
								<Card className="p-6 sticky top-24">
									<div className="flex items-center mb-6">
										<SlidersHorizontal className="h-5 w-5 mr-2" />
										<h3 className="text-lg font-semibold">Filtros</h3>
									</div>

									<div className="space-y-6">
										<div>
											<h4 className="font-medium mb-3">Tipo de Negócio</h4>
											<div className="space-y-2">
												<div className="flex items-center space-x-2">
													<Checkbox
														checked={true}
														id={useId()}
														label=""
														onChange={() => console.log("Venda selected")}
													/>
													<label htmlFor="venda" className="text-sm">
														À Venda
													</label>
												</div>
												<div className="flex items-center space-x-2">
													<Checkbox
														checked={false}
														id={useId()}
														label=""
														onChange={() => console.log("Aluguel selected")}
													/>
													<label htmlFor="aluguel" className="text-sm">
														Para Alugar
													</label>
												</div>
											</div>
										</div>

										<div>
											<h4 className="font-medium mb-3">Quartos</h4>
											<div className="grid grid-cols-4 gap-2">
												{[1, 2, 3, 4].map((num) => (
													<Button
														key={num}
														variant="outline"
														size="sm"
														className="h-10"
													>
														{num}+
													</Button>
												))}
											</div>
										</div>

										<div>
											<h4 className="font-medium mb-3">Banheiros</h4>
											<div className="grid grid-cols-4 gap-2">
												{[1, 2, 3, 4].map((num) => (
													<Button
														key={num}
														variant="outline"
														size="sm"
														className="h-10"
													>
														{num}+
													</Button>
												))}
											</div>
										</div>

										<div>
											<h4 className="font-medium mb-3">Características</h4>
											<div className="space-y-2">
												{[
													"Piscina",
													"Garagem",
													"Jardim",
													"Academia",
													"Portaria",
												].map((feature) => (
													<div
														key={feature}
														className="flex items-center space-x-2"
													>
														<Checkbox
															id={feature}
															label=""
															onChange={() =>
																console.log(`${feature} selected`)
															}
															checked={true}
														/>
														<label htmlFor={feature} className="text-sm">
															{feature}
														</label>
													</div>
												))}
											</div>
										</div>

										<Button className="w-full">Aplicar Filtros</Button>
									</div>
								</Card>
							</div>

							{/* Results */}
							<div className="lg:w-3/4">
								<div className="flex justify-between items-center mb-6">
									<div>
										<h2 className="text-2xl font-bold text-gray-900">
											Imóveis Encontrados
										</h2>
										<p className="text-gray-600">
											{properties.length} imóveis disponíveis
										</p>
									</div>

									<div className="flex items-center space-x-4">
										<Select
											value="order"
											onChange={(value) => console.log(value)}
										>
											<SelectTrigger className="w-48">
												<SelectValue value="" placeholder="Ordenar por" />
											</SelectTrigger>
											<SelectContent
												value="order"
												onChange={(value) => console.log(value)}
											>
												<SelectItem value="relevance">Relevância</SelectItem>
												<SelectItem value="price-low">Menor Preço</SelectItem>
												<SelectItem value="price-high">Maior Preço</SelectItem>
												<SelectItem value="newest">Mais Recentes</SelectItem>
												<SelectItem value="size">Tamanho</SelectItem>
											</SelectContent>
										</Select>

										<div className="flex border rounded-lg">
											<Button variant="ghost" size="sm">
												<Grid3X3 className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="sm">
												<List className="h-4 w-4" />
											</Button>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{properties.map((property) => (
										<Card
											key={property.id}
											className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
										>
											<div className="relative overflow-hidden">
												<Image
													src="/placeholder.svg?height=200&width=400"
													alt={`Imóvel em ${property.address}`}
													width={400}
													height={200}
													className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
												/>
												<Badge
													className={`absolute top-4 left-4 ${
														property.type === "Para Alugar"
															? "bg-green-600"
															: "bg-blue-600"
													}`}
												>
													{property.type}
												</Badge>
												{property.isNew && (
													<Badge className="absolute top-4 right-4 bg-red-500 animate-pulse">
														Novo
													</Badge>
												)}
												<Button
													size="sm"
													variant="ghost"
													className="absolute bottom-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												>
													<Heart className="h-4 w-4" />
												</Button>
											</div>

											<CardContent className="p-6">
												<div className="flex justify-between items-start mb-3">
													<h3 className="text-xl font-bold text-blue-600">
														{property.price}
													</h3>
													<div className="flex text-yellow-400">
														{[...Array(5)].map((_, _i) => (
															<Star
																key={property.id}
																className="h-4 w-4 fill-current"
															/>
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
														{property.sqft}
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
														{property.daysOnMarket} dias
													</span>
												</div>

												<Link href={`/imovel/${property.id}`}>
													<Button className="w-full">Ver Detalhes</Button>
												</Link>
											</CardContent>
										</Card>
									))}
								</div>

								{/* Pagination */}
								<div className="flex justify-center mt-12">
									<div className="flex space-x-2">
										<Button variant="outline">Anterior</Button>
										<Button>1</Button>
										<Button variant="outline">2</Button>
										<Button variant="outline">3</Button>
										<Button variant="outline">Próximo</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
