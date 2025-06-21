import {
	Briefcase,
	CheckCircle,
	Clock,
	DollarSign,
	GraduationCap,
	Heart,
	TrendingUp,
	Upload,
	Users,
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
import { Textarea } from "@/components/ui/textarea";

export default function CarreirasPage() {
	const benefits = [
		{
			icon: DollarSign,
			title: "Remuneração Competitiva",
			description: "Salário base + comissões atrativas + benefícios",
		},
		{
			icon: TrendingUp,
			title: "Crescimento Profissional",
			description: "Plano de carreira estruturado e oportunidades de promoção",
		},
		{
			icon: GraduationCap,
			title: "Treinamento Contínuo",
			description: "Cursos, workshops e certificações pagas pela empresa",
		},
		{
			icon: Users,
			title: "Ambiente Colaborativo",
			description: "Equipe unida e cultura de apoio mútuo",
		},
		{
			icon: Clock,
			title: "Flexibilidade",
			description: "Horários flexíveis e possibilidade de home office",
		},
		{
			icon: Heart,
			title: "Qualidade de Vida",
			description: "Plano de saúde, vale-refeição e outros benefícios",
		},
	];

	const openPositions = [
		{
			title: "Corretor de Imóveis Sênior",
			department: "Vendas",
			location: "São Paulo - SP",
			type: "CLT",
			experience: "3+ anos",
			description:
				"Buscamos corretor experiente para atuar com imóveis de alto padrão na região dos Jardins.",
			requirements: [
				"CRECI ativo",
				"Experiência em vendas",
				"Conhecimento do mercado paulistano",
				"Carteira de clientes",
			],
			salary: "R$ 4.000 - R$ 8.000 + comissões",
		},
		{
			title: "Consultor Imobiliário Júnior",
			department: "Vendas",
			location: "São Paulo - SP",
			type: "CLT",
			experience: "0-2 anos",
			description:
				"Oportunidade para iniciantes na área imobiliária com treinamento completo.",
			requirements: [
				"CRECI ativo ou em processo",
				"Ensino médio completo",
				"Boa comunicação",
				"Proatividade",
			],
			salary: "R$ 2.500 - R$ 4.000 + comissões",
		},
		{
			title: "Especialista em Locação",
			department: "Locação",
			location: "São Paulo - SP",
			type: "CLT",
			experience: "2+ anos",
			description:
				"Profissional para atuar exclusivamente com locação residencial e comercial.",
			requirements: [
				"CRECI ativo",
				"Experiência em locação",
				"Conhecimento jurídico básico",
				"Organização",
			],
			salary: "R$ 3.500 - R$ 6.000 + comissões",
		},
		{
			title: "Coordenador de Marketing",
			department: "Marketing",
			location: "São Paulo - SP",
			type: "CLT",
			experience: "4+ anos",
			description:
				"Liderar estratégias de marketing digital e campanhas para divulgação de imóveis.",
			requirements: [
				"Superior em Marketing/Publicidade",
				"Experiência com marketing digital",
				"Conhecimento em redes sociais",
				"Liderança",
			],
			salary: "R$ 6.000 - R$ 10.000",
		},
		{
			title: "Analista Financeiro",
			department: "Financeiro",
			location: "São Paulo - SP",
			type: "CLT",
			experience: "2+ anos",
			description:
				"Responsável por análise financeira, relatórios e controle de comissões.",
			requirements: [
				"Superior em Administração/Contabilidade",
				"Excel avançado",
				"Experiência financeira",
				"Atenção aos detalhes",
			],
			salary: "R$ 4.500 - R$ 7.000",
		},
		{
			title: "Estagiário de Vendas",
			department: "Vendas",
			location: "São Paulo - SP",
			type: "Estágio",
			experience: "Estudante",
			description:
				"Estágio para estudantes interessados em conhecer o mercado imobiliário.",
			requirements: [
				"Cursando ensino superior",
				"Disponibilidade 6h/dia",
				"Interesse em vendas",
				"Boa comunicação",
			],
			salary: "R$ 1.200 + benefícios",
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
								Trabalhe Conosco
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Construa Sua Carreira Conosco
							</h1>
							<p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
								Faça parte de uma equipe vencedora e construa uma carreira
								sólida no mercado imobiliário
							</p>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Por Que Trabalhar Conosco?
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Oferecemos um ambiente de trabalho estimulante com excelentes
								oportunidades de crescimento
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{benefits.map((benefit, index) => (
								<Card
									key={index}
									className="text-center p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
										<h3 className="text-xl font-semibold mb-3">
											{benefit.title}
										</h3>
										<p className="text-gray-600">{benefit.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Open Positions */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Vagas Abertas
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Confira nossas oportunidades disponíveis e candidate-se
							</p>
						</div>

						<div className="space-y-6">
							{openPositions.map((position, index) => (
								<Card
									key={index}
									className="p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
											<div>
												<h3 className="text-xl font-bold text-gray-900 mb-2">
													{position.title}
												</h3>
												<div className="flex flex-wrap gap-2 mb-2">
													<Badge variant="secondary">
														{position.department}
													</Badge>
													<Badge variant="outline">{position.location}</Badge>
													<Badge variant="outline">{position.type}</Badge>
													<Badge variant="outline">{position.experience}</Badge>
												</div>
											</div>
											<div className="text-right">
												<div className="text-lg font-semibold text-green-600">
													{position.salary}
												</div>
											</div>
										</div>

										<p className="text-gray-700 mb-4">{position.description}</p>

										<div className="mb-4">
											<h4 className="font-semibold mb-2">Requisitos:</h4>
											<ul className="space-y-1">
												{position.requirements.map((req, idx) => (
													<li
														key={idx}
														className="flex items-center text-sm text-gray-600"
													>
														<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
														{req}
													</li>
												))}
											</ul>
										</div>

										<div className="flex gap-4">
											<Button className="bg-green-600 hover:bg-green-700">
												<Briefcase className="h-4 w-4 mr-2" />
												Candidatar-se
											</Button>
											<Button variant="outline">Mais Detalhes</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Application Form */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-2xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
									Candidate-se
								</h2>
								<p className="text-xl text-gray-600">
									Preencha o formulário abaixo e envie seu currículo
								</p>
							</div>

							<Card className="p-8">
								<CardContent className="p-0">
									<form className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input placeholder="Nome completo" />
											<Input type="email" placeholder="E-mail" />
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input type="tel" placeholder="Telefone" />
											<Input placeholder="LinkedIn (opcional)" />
										</div>

										<Select value="vaga" onChange={() => {}}>
											<SelectTrigger>
												<SelectValue value="" placeholder="Vaga de interesse" />
											</SelectTrigger>
											<SelectContent value="vaga" onChange={() => {}}>
												{openPositions.map((position, index) => (
													<SelectItem key={index} value={position.title}>
														{position.title}
													</SelectItem>
												))}
												<SelectItem value="other">Outra vaga</SelectItem>
											</SelectContent>
										</Select>

										<Textarea
											placeholder="Conte-nos sobre sua experiência e por que quer trabalhar conosco..."
											rows={4}
										/>

										<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
											<Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
											<p className="text-gray-600 mb-2">
												Clique para enviar seu currículo
											</p>
											<p className="text-sm text-gray-500">
												PDF, DOC ou DOCX até 5MB
											</p>
											<Button variant="outline" className="mt-4">
												Selecionar Arquivo
											</Button>
										</div>

										<Button
											className="w-full bg-green-600 hover:bg-green-700"
											size="lg"
										>
											<Briefcase className="h-4 w-4 mr-2" />
											Enviar Candidatura
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Culture Section */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Nossa Cultura
								</h2>
								<p className="text-lg text-gray-700 mb-6">
									Acreditamos que pessoas felizes e motivadas entregam os
									melhores resultados. Por isso, investimos em um ambiente de
									trabalho positivo e colaborativo.
								</p>
								<div className="space-y-4">
									{[
										"Ambiente descontraído e profissional",
										"Reconhecimento por resultados",
										"Eventos e confraternizações",
										"Programa de mentoria",
										"Feedback constante",
										"Oportunidades de crescimento",
									].map((item, index) => (
										<div key={index} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
											<span className="text-gray-700">{item}</span>
										</div>
									))}
								</div>
							</div>
							<div>
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Equipe trabalhando"
									width={600}
									height={500}
									className="rounded-lg shadow-xl"
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
