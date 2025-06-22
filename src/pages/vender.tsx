import {
	Award,
	Camera,
	CheckCircle,
	Clock,
	DollarSign,
	Phone,
	Star,
	TrendingUp,
	Users,
} from "lucide-react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function VenderPage() {
	const steps = [
		{
			number: "01",
			title: "Avaliação Gratuita",
			description: "Fazemos uma avaliação completa e gratuita do seu imóvel",
			icon: DollarSign,
		},
		{
			number: "02",
			title: "Estratégia de Marketing",
			description: "Criamos um plano personalizado para divulgar seu imóvel",
			icon: TrendingUp,
		},
		{
			number: "03",
			title: "Fotos Profissionais",
			description: "Fotografias de alta qualidade para destacar seu imóvel",
			icon: Camera,
		},
		{
			number: "04",
			title: "Divulgação",
			description: "Anunciamos em todos os principais portais e redes sociais",
			icon: Users,
		},
		{
			number: "05",
			title: "Visitas Qualificadas",
			description:
				"Agendamos e acompanhamos visitas com compradores interessados",
			icon: Clock,
		},
		{
			number: "06",
			title: "Fechamento",
			description: "Negociamos e fechamos a venda com as melhores condições",
			icon: Award,
		},
	];

	const benefits = [
		"Avaliação gratuita e precisa do imóvel",
		"Marketing digital profissional",
		"Fotos e tour virtual inclusos",
		"Divulgação em múltiplos canais",
		"Acompanhamento de visitas",
		"Negociação especializada",
		"Suporte jurídico completo",
		"Comissão competitiva",
	];

	const testimonials = [
		{
			name: "Carlos Mendes",
			location: "Jardins, SP",
			text: "Venderam minha casa 15% acima do valor esperado em apenas 20 dias!",
			rating: 5,
		},
		{
			name: "Ana Paula",
			location: "Vila Madalena, SP",
			text: "Processo super profissional, desde a avaliação até a entrega das chaves.",
			rating: 5,
		},
		{
			name: "Roberto Silva",
			location: "Moema, SP",
			text: "Equipe dedicada que realmente se preocupa em conseguir o melhor preço.",
			rating: 5,
		},
	];

	return (
		<Layout>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-4xl mx-auto text-center">
							<Badge className="mb-6 bg-green-500/20 text-green-200 border-green-400/30">
								Venda Inteligente
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Venda Seu Imóvel Pelo Melhor Preço
							</h1>
							<p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
								Marketing profissional, avaliação precisa e negociação
								especializada para maximizar o valor do seu imóvel
							</p>

							{/* Quick Form */}
							<Card className="bg-white text-gray-900 p-6 shadow-xl max-w-2xl mx-auto">
								<CardHeader className="pb-4">
									<CardTitle className="text-center">
										Solicite uma Avaliação Gratuita
									</CardTitle>
								</CardHeader>
								<CardContent>
									<form className="space-y-4">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input placeholder="Seu nome" />
											<Input placeholder="Seu telefone" />
										</div>
										<Input placeholder="Endereço do imóvel" />
										<Textarea
											placeholder="Conte-nos sobre seu imóvel..."
											rows={3}
										/>
										<Button className="w-full bg-green-600 hover:bg-green-700">
											<DollarSign className="h-4 w-4 mr-2" />
											Solicitar Avaliação
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							{[
								{ number: "1.247", label: "Imóveis Vendidos", icon: "🏠" },
								{ number: "18", label: "Dias Médios p/ Venda", icon: "⏱️" },
								{ number: "98%", label: "Satisfação dos Clientes", icon: "⭐" },
								{ number: "15%", label: "Acima da Tabela FIPE", icon: "📈" },
							].map((stat) => (
								<div key={stat.label} className="group">
									<div className="text-4xl mb-2">{stat.icon}</div>
									<div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">
										{stat.number}
									</div>
									<div className="text-gray-600 font-medium">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Process Steps */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Como Vendemos Seu Imóvel
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Um processo estruturado e eficiente para vender seu imóvel
								rapidamente e pelo melhor preço
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{steps.map((step) => (
								<Card
									key={step.number}
									className="relative p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<div className="flex items-center mb-4">
											<div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
												{step.number}
											</div>
											<step.icon className="h-8 w-8 text-green-600" />
										</div>
										<h3 className="text-xl font-semibold mb-3">{step.title}</h3>
										<p className="text-gray-600">{step.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Vendendo imóvel"
									width={600}
									height={500}
									className="rounded-lg shadow-xl"
								/>
							</div>
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Vantagens de Vender Conosco
								</h2>
								<p className="text-lg text-gray-700 mb-8">
									Nossa experiência e estratégia de marketing garantem que seu
									imóvel seja vendido rapidamente e pelo melhor preço do
									mercado.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{benefits.map((benefit) => (
										<div key={benefit} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
											<span className="text-gray-700 text-sm">{benefit}</span>
										</div>
									))}
								</div>
								<div className="mt-8">
									<Button size="lg" className="bg-green-600 hover:bg-green-700">
										<DollarSign className="h-4 w-4 mr-2" />
										Quero Vender
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Quem Vendeu Recomenda
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Veja o que nossos clientes falam sobre nossa experiência de
								venda
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{testimonials.map((testimonial) => (
								<Card
									key={testimonial.name}
									className="p-8 hover:shadow-xl transition-shadow duration-300"
								>
									<CardContent className="p-0">
										<div className="flex text-yellow-400 mb-4">
											{[...Array(testimonial.rating)].map((_, _i) => (
												<Star
													key={testimonial.rating}
													className="h-5 w-5 fill-current"
												/>
											))}
										</div>
										<blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
											"{testimonial.text}"
										</blockquote>
										<div>
											<div className="font-semibold text-gray-900">
												{testimonial.name}
											</div>
											<div className="text-gray-500 text-sm">
												{testimonial.location}
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 bg-green-600 text-white">
					<div className="container mx-auto px-4 lg:px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Pronto para Vender?
						</h2>
						<p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
							Solicite uma avaliação gratuita e descubra quanto vale seu imóvel
							hoje
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="outline">
								<Phone className="h-4 w-4 mr-2" />
								Falar com Especialista
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-white border-white hover:bg-white hover:text-green-600"
							>
								<DollarSign className="h-4 w-4 mr-2" />
								Avaliação Online
							</Button>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
