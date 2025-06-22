import {
	BarChart3,
	Building,
	Calculator,
	CheckCircle,
	FileText,
	Phone,
	Shield,
	Users,
	Wrench,
} from "lucide-react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AdministracaoPage() {
	const services = [
		{
			icon: Calculator,
			title: "Gestão Financeira",
			description:
				"Controle completo de receitas, despesas e inadimplência do condomínio",
			features: [
				"Cobrança de taxas",
				"Relatórios financeiros",
				"Controle de inadimplência",
				"Prestação de contas",
			],
		},
		{
			icon: Wrench,
			title: "Manutenção Predial",
			description:
				"Coordenação e supervisão de todos os serviços de manutenção",
			features: [
				"Manutenção preventiva",
				"Emergências 24h",
				"Rede de fornecedores",
				"Controle de qualidade",
			],
		},
		{
			icon: Users,
			title: "Gestão de Pessoas",
			description:
				"Administração completa de funcionários e prestadores de serviços",
			features: [
				"Folha de pagamento",
				"Treinamentos",
				"Controle de acesso",
				"Gestão de contratos",
			],
		},
		{
			icon: Shield,
			title: "Segurança e Portaria",
			description: "Sistemas de segurança e controle de acesso profissionais",
			features: [
				"Portaria 24h",
				"CFTV",
				"Controle de acesso",
				"Rondas de segurança",
			],
		},
		{
			icon: FileText,
			title: "Gestão Jurídica",
			description: "Suporte jurídico especializado em direito condominial",
			features: [
				"Assessoria jurídica",
				"Cobrança judicial",
				"Atas e convenções",
				"Compliance",
			],
		},
		{
			icon: BarChart3,
			title: "Relatórios e Analytics",
			description: "Relatórios detalhados e análises para tomada de decisão",
			features: [
				"Dashboard online",
				"Relatórios mensais",
				"Indicadores de performance",
				"Análise de custos",
			],
		},
	];

	const benefits = [
		"Redução de custos operacionais",
		"Maior transparência na gestão",
		"Atendimento 24/7 para emergências",
		"Equipe especializada e treinada",
		"Tecnologia de ponta",
		"Relatórios detalhados mensais",
		"Suporte jurídico incluído",
		"Manutenção preventiva",
	];

	const stats = [
		{ number: "150+", label: "Condomínios Administrados", icon: "🏢" },
		{ number: "15", label: "Anos de Experiência", icon: "📅" },
		{ number: "98%", label: "Satisfação dos Síndicos", icon: "⭐" },
		{ number: "24/7", label: "Suporte Disponível", icon: "🕐" },
	];

	return (
		<Layout>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-4xl mx-auto text-center">
							<Badge className="mb-6 bg-indigo-500/20 text-indigo-200 border-indigo-400/30">
								Administração Profissional
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Administração Predial Completa
							</h1>
							<p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
								Gestão profissional e transparente para seu condomínio com
								tecnologia de ponta e equipe especializada
							</p>

							{/* Quick Contact */}
							<Card className="bg-white text-gray-900 p-6 shadow-xl max-w-2xl mx-auto">
								<CardHeader className="pb-4">
									<CardTitle className="text-center">
										Solicite uma Proposta
									</CardTitle>
								</CardHeader>
								<CardContent>
									<form className="space-y-4">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input placeholder="Nome do síndico" />
											<Input placeholder="Telefone" />
										</div>
										<Input placeholder="Nome do condomínio" />
										<Input placeholder="Número de unidades" type="number" />
										<Textarea
											placeholder="Conte-nos sobre seu condomínio..."
											rows={3}
										/>
										<Button className="w-full bg-indigo-600 hover:bg-indigo-700">
											<Building className="h-4 w-4 mr-2" />
											Solicitar Proposta
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
							{stats.map((stat) => (
								<div key={stat.label} className="group">
									<div className="text-4xl mb-2">{stat.icon}</div>
									<div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-200">
										{stat.number}
									</div>
									<div className="text-gray-600 font-medium">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Nossos Serviços
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Oferecemos uma gestão completa e profissional para seu
								condomínio
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{services.map((service) => (
								<Card
									key={service.title}
									className="p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<service.icon className="h-12 w-12 text-indigo-600 mb-4" />
										<h3 className="text-xl font-semibold mb-3">
											{service.title}
										</h3>
										<p className="text-gray-600 mb-4">{service.description}</p>
										<ul className="space-y-2">
											{service.features.map((feature) => (
												<li
													key={feature}
													className="flex items-center text-sm text-gray-600"
												>
													<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
													{feature}
												</li>
											))}
										</ul>
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
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Por Que Escolher Nossa Administração?
								</h2>
								<p className="text-lg text-gray-700 mb-8">
									Nossa experiência e tecnologia garantem uma gestão eficiente,
									transparente e econômica para seu condomínio.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{benefits.map((benefit) => (
										<div key={benefit} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
											<span className="text-gray-700 text-sm">{benefit}</span>
										</div>
									))}
								</div>
								<div className="mt-8">
									<Button
										size="lg"
										className="bg-indigo-600 hover:bg-indigo-700"
									>
										<Building className="h-4 w-4 mr-2" />
										Quero uma Proposta
									</Button>
								</div>
							</div>
							<div>
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Administração predial"
									width={600}
									height={500}
									className="rounded-lg shadow-xl"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Technology Section */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Tecnologia Avançada
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Utilizamos as melhores ferramentas tecnológicas para uma gestão
								moderna e eficiente
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									title: "App do Morador",
									description:
										"Aplicativo exclusivo para comunicação e serviços",
									icon: "📱",
								},
								{
									title: "Portal Online",
									description: "Acesso 24h a documentos e relatórios",
									icon: "💻",
								},
								{
									title: "Sistema de Cobrança",
									description: "Gestão automatizada de taxas e inadimplência",
									icon: "💳",
								},
								{
									title: "Relatórios Digitais",
									description: "Dashboards em tempo real com indicadores",
									icon: "📊",
								},
							].map((tech) => (
								<Card
									key={tech.title}
									className="text-center p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<div className="text-4xl mb-4">{tech.icon}</div>
										<h3 className="text-lg font-semibold mb-3">{tech.title}</h3>
										<p className="text-gray-600 text-sm">{tech.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Process Section */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Como Funciona
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Um processo simples para iniciar a administração do seu
								condomínio
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							{[
								{
									step: "1",
									title: "Diagnóstico",
									description:
										"Análise completa da situação atual do condomínio",
								},
								{
									step: "2",
									title: "Proposta",
									description: "Apresentação de proposta personalizada",
								},
								{
									step: "3",
									title: "Transição",
									description: "Processo de transição suave e organizada",
								},
								{
									step: "4",
									title: "Gestão",
									description: "Início da administração profissional",
								},
							].map((item) => (
								<div key={item.step} className="text-center">
									<div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">
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
				<section className="py-16 bg-indigo-600 text-white">
					<div className="container mx-auto px-4 lg:px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Transforme a Gestão do Seu Condomínio
						</h2>
						<p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
							Solicite uma proposta personalizada e descubra como podemos
							otimizar a administração do seu condomínio
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="outline">
								<Phone className="h-4 w-4 mr-2" />
								Falar com Especialista
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-white border-white hover:bg-white hover:text-indigo-600"
							>
								<Building className="h-4 w-4 mr-2" />
								Solicitar Proposta
							</Button>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
