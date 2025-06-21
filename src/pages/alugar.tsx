import {
	CheckCircle,
	FileText,
	Heart,
	Key,
	MapPin,
	Phone,
	Search,
	Shield,
} from "lucide-react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function AlugarPage() {
	const benefits = [
		"Sem entrada ou financiamento",
		"Flexibilidade para mudanças",
		"Manutenção por conta do proprietário",
		"Localização privilegiada",
		"Mobiliado ou semi-mobiliado",
		"Contratos flexíveis",
	];

	const services = [
		{
			icon: Search,
			title: "Busca Personalizada",
			description:
				"Encontramos imóveis que atendem exatamente ao seu perfil e orçamento",
		},
		{
			icon: FileText,
			title: "Documentação Completa",
			description: "Cuidamos de toda a documentação e contratos de locação",
		},
		{
			icon: Shield,
			title: "Seguro Fiança",
			description:
				"Oferecemos opções de garantia locatícia para facilitar a aprovação",
		},
	];

	const featuredProperties = [
		{
			id: 1,
			price: "R$ 3.500/mês",
			address: "Rua Augusta, 789, Vila Madalena, São Paulo - SP",
			beds: 2,
			baths: 2,
			sqft: "85m²",
			features: ["Mobiliado", "Varanda", "Pet-Friendly"],
			isNew: true,
		},
		{
			id: 2,
			price: "R$ 2.800/mês",
			address: "Av. Faria Lima, 567, Itaim Bibi, São Paulo - SP",
			beds: 1,
			baths: 1,
			sqft: "55m²",
			features: ["Academia", "Piscina", "Coworking"],
			isNew: false,
		},
		{
			id: 3,
			price: "R$ 4.200/mês",
			address: "Rua dos Pinheiros, 321, Pinheiros, São Paulo - SP",
			beds: 3,
			baths: 2,
			sqft: "120m²",
			features: ["Terraço", "Churrasqueira", "2 Vagas"],
			isNew: true,
		},
	];

	return (
		<Layout>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-4xl mx-auto text-center">
							<Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-400/30">
								Locação Inteligente
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Alugue o Imóvel Ideal
							</h1>
							<p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
								Encontre o lar perfeito para alugar com flexibilidade e sem
								complicações
							</p>

							{/* Quick Search */}
							<Card className="bg-white text-gray-900 p-6 shadow-xl max-w-2xl mx-auto">
								<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
									<div className="relative">
										<MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
										<Input placeholder="Localização" className="pl-10" />
									</div>
									<Select value="type" onChange={(value) => console.log(value)}>
										<SelectTrigger>
											<SelectValue value="" placeholder="Quartos" />
										</SelectTrigger>
										<SelectContent
											value=""
											onChange={(value) => console.log(value)}
										>
											<SelectItem value="1">1 Quarto</SelectItem>
											<SelectItem value="2">2 Quartos</SelectItem>
											<SelectItem value="3">3+ Quartos</SelectItem>
										</SelectContent>
									</Select>
									<Select value="type" onChange={(value) => console.log(value)}>
										<SelectTrigger>
											<SelectValue value="" placeholder="Valor" />
										</SelectTrigger>
										<SelectContent
											value=""
											onChange={(value) => console.log(value)}
										>
											<SelectItem value="0-2000">Até R$ 2.000</SelectItem>
											<SelectItem value="2000-4000">
												R$ 2.000 - R$ 4.000
											</SelectItem>
											<SelectItem value="4000+">Acima de R$ 4.000</SelectItem>
										</SelectContent>
									</Select>
									<Button className="bg-purple-600 hover:bg-purple-700">
										<Search className="h-4 w-4 mr-2" />
										Buscar
									</Button>
								</div>
							</Card>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Vantagens de Alugar
								</h2>
								<p className="text-lg text-gray-700 mb-8">
									Aluguel oferece flexibilidade e praticidade para quem busca um
									novo lar sem os compromissos de longo prazo da compra.
								</p>
								<div className="space-y-4">
									{benefits.map((benefit, index) => (
										<div key={index} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
											<span className="text-gray-700">{benefit}</span>
										</div>
									))}
								</div>
								<div className="mt-8">
									<Button
										size="lg"
										className="bg-purple-600 hover:bg-purple-700"
									>
										<Key className="h-4 w-4 mr-2" />
										Quero Alugar
									</Button>
								</div>
							</div>
							<div>
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Apartamento para alugar"
									width={600}
									height={500}
									className="rounded-lg shadow-xl"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Como Te Ajudamos
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Oferecemos suporte completo para encontrar e alugar o imóvel
								ideal
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{services.map((service, index) => (
								<Card
									key={index}
									className="text-center p-8 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<service.icon className="h-16 w-16 text-purple-600 mx-auto mb-6" />
										<h3 className="text-xl font-semibold mb-4">
											{service.title}
										</h3>
										<p className="text-gray-600">{service.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Featured Properties */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Imóveis em Destaque
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Confira alguns dos melhores imóveis disponíveis para locação
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{featuredProperties.map((property) => (
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
										<Badge className="absolute top-4 left-4 bg-purple-600">
											Para Alugar
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
										<h3 className="text-xl font-bold text-purple-600 mb-2">
											{property.price}
										</h3>
										<p className="text-gray-600 mb-4 flex items-center">
											<MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
											{property.address}
										</p>

										<div className="flex justify-between text-sm text-gray-500 mb-4">
											<span>{property.beds} quartos</span>
											<span>{property.baths} banheiros</span>
											<span>{property.sqft}</span>
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

										<Button className="w-full bg-purple-600 hover:bg-purple-700">
											Ver Detalhes
										</Button>
									</CardContent>
								</Card>
							))}
						</div>

						<div className="text-center mt-12">
							<Button variant="outline" size="lg">
								Ver Todos os Imóveis para Alugar
							</Button>
						</div>
					</div>
				</section>

				{/* Process Section */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Processo Simples
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Em poucos passos você encontra e aluga o imóvel ideal
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							{[
								{
									step: "1",
									title: "Busque",
									description: "Encontre imóveis que atendem seu perfil",
								},
								{
									step: "2",
									title: "Visite",
									description: "Agende visitas aos imóveis selecionados",
								},
								{
									step: "3",
									title: "Aprove",
									description: "Análise de documentos e aprovação",
								},
								{
									step: "4",
									title: "Assine",
									description: "Assinatura do contrato e entrega das chaves",
								},
							].map((item, index) => (
								<div key={index} className="text-center">
									<div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">
										{item.step}
									</div>
									<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
									<p className="text-gray-600">{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 bg-purple-600 text-white">
					<div className="container mx-auto px-4 lg:px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Encontre Seu Próximo Lar
						</h2>
						<p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
							Temos centenas de imóveis disponíveis para locação em toda São
							Paulo
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="outline">
								<Search className="h-4 w-4 mr-2" />
								Buscar Imóveis
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-white border-white hover:bg-white hover:text-purple-600"
							>
								<Phone className="h-4 w-4 mr-2" />
								Falar com Especialista
							</Button>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
