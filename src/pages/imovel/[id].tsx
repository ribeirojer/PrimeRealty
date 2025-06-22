import {
	Bath,
	Bed,
	Calendar,
	Camera,
	Car,
	Dumbbell,
	Heart,
	Mail,
	MapPin,
	Phone,
	Share2,
	Shield,
	Square,
	Star,
	Trees,
	Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ImovelDetalhes() {
	const property = {
		id: 1,
		price: "R$ 1.500.000",
		address: "Rua das Flores, 123, Jardins, São Paulo - SP",
		beds: 4,
		baths: 3,
		sqft: "250m²",
		lotSize: "500m²",
		type: "À Venda",
		yearBuilt: "2019",
		features: [
			"Piscina",
			"Garagem",
			"Jardim",
			"Churrasqueira",
			"Portaria",
			"Academia",
		],
		agent: {
			name: "Sarah Silva",
			phone: "(11) 99999-9999",
			email: "sarah@primerealty.com.br",
			image: "/placeholder.svg?height=80&width=80",
		},
		description:
			"Magnífica casa em condomínio fechado no coração dos Jardins. Esta propriedade única oferece o melhor em conforto e elegância, com acabamentos de primeira linha e uma localização privilegiada. Perfeita para famílias que buscam qualidade de vida e segurança.",
		amenities: [
			{ icon: Car, name: "2 Vagas de Garagem" },
			{ icon: Wifi, name: "Internet Fibra" },
			{ icon: Dumbbell, name: "Academia" },
			{ icon: Shield, name: "Segurança 24h" },
			{ icon: Trees, name: "Área Verde" },
		],
		images: [
			"/placeholder.svg?height=400&width=600",
			"/placeholder.svg?height=400&width=600",
			"/placeholder.svg?height=400&width=600",
			"/placeholder.svg?height=400&width=600",
		],
	};

	return (
		<Layout>
			<main className="flex-1">
				{/* Breadcrumb */}
				<div className="bg-gray-50 py-4">
					<div className="container mx-auto px-4 lg:px-6">
						<nav className="text-sm text-gray-600">
							<Link href="/" className="hover:text-blue-600">
								Início
							</Link>
							<span className="mx-2">/</span>
							<Link href="/imoveis" className="hover:text-blue-600">
								Imóveis
							</Link>
							<span className="mx-2">/</span>
							<span className="text-gray-900">Detalhes do Imóvel</span>
						</nav>
					</div>
				</div>

				{/* Property Header */}
				<section className="py-8">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
							<div>
								<div className="flex items-center gap-4 mb-4">
									<Badge className="bg-blue-600">{property.type}</Badge>
									<Badge variant="secondary">
										Construído em {property.yearBuilt}
									</Badge>
								</div>
								<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
									{property.price}
								</h1>
								<p className="text-xl text-gray-600 flex items-center">
									<MapPin className="h-5 w-5 mr-2" />
									{property.address}
								</p>
							</div>

							<div className="flex items-center space-x-4 mt-4 lg:mt-0">
								<Button variant="outline" size="sm">
									<Heart className="h-4 w-4 mr-2" />
									Favoritar
								</Button>
								<Button variant="outline" size="sm">
									<Share2 className="h-4 w-4 mr-2" />
									Compartilhar
								</Button>
								<Button variant="outline" size="sm">
									<Calendar className="h-4 w-4 mr-2" />
									Agendar Visita
								</Button>
							</div>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
							<div className="text-center">
								<Bed className="h-8 w-8 text-blue-600 mx-auto mb-2" />
								<div className="text-2xl font-bold">{property.beds}</div>
								<div className="text-gray-600">Quartos</div>
							</div>
							<div className="text-center">
								<Bath className="h-8 w-8 text-blue-600 mx-auto mb-2" />
								<div className="text-2xl font-bold">{property.baths}</div>
								<div className="text-gray-600">Banheiros</div>
							</div>
							<div className="text-center">
								<Square className="h-8 w-8 text-blue-600 mx-auto mb-2" />
								<div className="text-2xl font-bold">{property.sqft}</div>
								<div className="text-gray-600">Área Construída</div>
							</div>
							<div className="text-center">
								<Trees className="h-8 w-8 text-blue-600 mx-auto mb-2" />
								<div className="text-2xl font-bold">{property.lotSize}</div>
								<div className="text-gray-600">Terreno</div>
							</div>
						</div>
					</div>
				</section>

				{/* Image Gallery */}
				<section className="py-8 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
							<div className="lg:col-span-2">
								<div className="relative">
									<Image
										src={property.images[0] || "/placeholder.svg"}
										alt="Imagem principal"
										width={800}
										height={500}
										className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
									/>
									<Button className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/80">
										<Camera className="h-4 w-4 mr-2" />
										Ver Todas as Fotos
									</Button>
								</div>
							</div>
							<div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
								{property.images.slice(1, 4).map((image) => (
									<Image
										key={image}
										src={image || "/placeholder.svg"}
										alt={`Imagem ${image + 2}`}
										width={400}
										height={150}
										className="w-full h-32 lg:h-40 object-cover rounded-lg"
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Property Details */}
				<section className="py-12">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
							<div className="lg:col-span-2">
								<Card className="mb-8">
									<CardHeader>
										<CardTitle>Descrição do Imóvel</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-700 leading-relaxed">
											{property.description}
										</p>
									</CardContent>
								</Card>

								<Card className="mb-8">
									<CardHeader>
										<CardTitle>Características</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
											{property.features.map((feature) => (
												<Badge
													key={feature}
													variant="secondary"
													className="justify-center py-2"
												>
													{feature}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>Comodidades do Condomínio</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{property.amenities.map((amenity) => (
												<div
													key={amenity.name}
													className="flex items-center space-x-3"
												>
													<amenity.icon className="h-5 w-5 text-blue-600" />
													<span>{amenity.name}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>

							{/* Agent Contact */}
							<div>
								<Card className="sticky top-24">
									<CardHeader>
										<CardTitle>Corretor Responsável</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex items-center mb-6">
											<Image
												src={property.agent.image || "/placeholder.svg"}
												alt={property.agent.name}
												width={60}
												height={60}
												className="rounded-full mr-4"
											/>
											<div>
												<h3 className="font-semibold text-lg">
													{property.agent.name}
												</h3>
												<div className="flex text-yellow-400">
													{[...Array(5)].map((_) => (
														<Star
															key={property.agent.name}
															className="h-4 w-4 fill-current"
														/>
													))}
												</div>
											</div>
										</div>

										<div className="space-y-4">
											<Button className="w-full" size="lg">
												<Phone className="h-4 w-4 mr-2" />
												{property.agent.phone}
											</Button>
											<Button variant="outline" className="w-full" size="lg">
												<Mail className="h-4 w-4 mr-2" />
												Enviar E-mail
											</Button>
										</div>

										<div className="mt-6 pt-6 border-t">
											<h4 className="font-semibold mb-4">
												Solicitar Informações
											</h4>
											<form className="space-y-4">
												<Input placeholder="Seu nome" />
												<Input type="email" placeholder="Seu e-mail" />
												<Input type="tel" placeholder="Seu telefone" />
												<Textarea placeholder="Mensagem" rows={3} />
												<Button className="w-full">Enviar Mensagem</Button>
											</form>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Similar Properties */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
							Imóveis Similares
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[1, 2, 3].map((i) => (
								<Card
									key={i}
									className="overflow-hidden hover:shadow-lg transition-shadow"
								>
									<Image
										src="/placeholder.svg?height=200&width=400"
										alt={`Imóvel similar ${i}`}
										width={400}
										height={200}
										className="w-full h-48 object-cover"
									/>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold text-blue-600 mb-2">
											R$ 1.200.000
										</h3>
										<p className="text-gray-600 mb-4">
											Rua Exemplo, 456, Jardins
										</p>
										<div className="flex justify-between text-sm text-gray-500">
											<span>3 quartos</span>
											<span>2 banheiros</span>
											<span>180m²</span>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
