import { Award, CheckCircle, Heart, Shield, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SobrePage() {
	const stats = [
		{ number: "2.847", label: "Imóveis Vendidos", icon: "🏠" },
		{ number: "18", label: "Anos de Experiência", icon: "📅" },
		{ number: "99.2%", label: "Satisfação do Cliente", icon: "⭐" },
		{ number: "67", label: "Corretores Especialistas", icon: "👥" },
	];

	const values = [
		{
			icon: Target,
			title: "Foco no Cliente",
			description:
				"Colocamos as necessidades dos nossos clientes em primeiro lugar, oferecendo soluções personalizadas.",
		},
		{
			icon: Shield,
			title: "Transparência",
			description:
				"Mantemos total transparência em todos os processos, garantindo confiança e segurança.",
		},
		{
			icon: Heart,
			title: "Compromisso",
			description:
				"Estamos comprometidos em encontrar a solução perfeita para cada cliente.",
		},
		{
			icon: Award,
			title: "Excelência",
			description:
				"Buscamos sempre a excelência em nossos serviços e relacionamentos.",
		},
	];

	const timeline = [
		{
			year: "2008",
			event: "Fundação da PrimeRealty com foco em imóveis residenciais",
		},
		{ year: "2012", event: "Expansão para imóveis comerciais e corporativos" },
		{
			year: "2015",
			event: "Abertura da segunda filial e crescimento da equipe",
		},
		{
			year: "2018",
			event: "Lançamento da plataforma digital e serviços online",
		},
		{
			year: "2020",
			event: "Adaptação para vendas virtuais durante a pandemia",
		},
		{ year: "2023", event: "Reconhecimento como melhor imobiliária da região" },
	];

	return (
		<Layout>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-4xl mx-auto text-center">
							<Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
								Desde 2008
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Sobre a PrimeRealty
							</h1>
							<p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
								Há mais de 15 anos conectando pessoas aos seus lares dos sonhos
								com expertise, dedicação e um atendimento que faz a diferença.
							</p>
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							{stats.map((stat) => (
								<div key={stat.label} className="group">
									<div className="text-4xl mb-2">{stat.icon}</div>
									<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
										{stat.number}
									</div>
									<div className="text-gray-600 font-medium">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Mission Section */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Nossa Missão
								</h2>
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									Facilitar a realização do sonho da casa própria, oferecendo um
									serviço personalizado e de excelência que supera as
									expectativas dos nossos clientes. Acreditamos que cada família
									merece encontrar o lar perfeito.
								</p>
								<p className="text-lg text-gray-700 mb-8 leading-relaxed">
									Com uma equipe de profissionais altamente qualificados e um
									profundo conhecimento do mercado imobiliário, transformamos o
									processo de compra, venda ou locação em uma experiência
									positiva e memorável.
								</p>
								<div className="flex flex-wrap gap-4">
									<Badge className="bg-blue-100 text-blue-800 px-4 py-2">
										Confiança
									</Badge>
									<Badge className="bg-blue-100 text-blue-800 px-4 py-2">
										Transparência
									</Badge>
									<Badge className="bg-blue-100 text-blue-800 px-4 py-2">
										Excelência
									</Badge>
								</div>
							</div>
							<div>
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Equipe PrimeRealty"
									width={600}
									height={500}
									className="rounded-lg shadow-xl"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Nossos Valores
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Os princípios que guiam nossa empresa e definem nossa cultura
								organizacional
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{values.map((value) => (
								<Card
									key={value.title}
									className="text-center p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
										<h3 className="text-xl font-semibold mb-3">
											{value.title}
										</h3>
										<p className="text-gray-600">{value.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Timeline Section */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Nossa História
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Uma jornada de crescimento, inovação e conquistas ao longo dos
								anos
							</p>
						</div>

						<div className="max-w-4xl mx-auto">
							<div className="space-y-8">
								{timeline.map((item) => (
									<div key={item.year} className="flex items-start">
										<div className="flex-shrink-0 w-24 text-right mr-8">
											<Badge className="bg-blue-600 text-white px-3 py-1 text-sm font-bold">
												{item.year}
											</Badge>
										</div>
										<div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-6"></div>
										<div className="flex-1">
											<p className="text-lg text-gray-700">{item.event}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Why Choose Us */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Por que escolher a PrimeRealty"
									width={600}
									height={500}
									className="rounded-lg shadow-xl"
								/>
							</div>
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Por Que Escolher a PrimeRealty?
								</h2>
								<div className="space-y-4">
									{[
										"Equipe especializada com mais de 15 anos de experiência",
										"Atendimento personalizado para cada cliente",
										"Tecnologia de ponta para facilitar o processo",
										"Rede de parceiros confiáveis (bancos, cartórios, etc.)",
										"Suporte completo do início ao fim da transação",
										"Pós-venda dedicado para garantir sua satisfação",
									].map((item) => (
										<div key={item} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
											<span className="text-gray-700">{item}</span>
										</div>
									))}
								</div>
								<div className="mt-8">
									<Link href="/contato">
										<Button size="lg">Fale Conosco</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 bg-blue-600 text-white">
					<div className="container mx-auto px-4 lg:px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Pronto para Encontrar Seu Próximo Lar?
						</h2>
						<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
							Nossa equipe está pronta para ajudá-lo a encontrar o imóvel
							perfeito. Entre em contato conosco hoje mesmo!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/imoveis">
								<Button size="lg" variant="outline">
									Ver Imóveis
								</Button>
							</Link>
							<Link href="/contato">
								<Button
									size="lg"
									variant="outline"
									className="text-white border-white hover:bg-white hover:text-blue-600"
								>
									Falar com Especialista
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
