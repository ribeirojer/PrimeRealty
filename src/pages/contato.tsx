import { Clock, HeadphonesIcon, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContatoPage() {
	const contactInfo = [
		{
			icon: Phone,
			title: "Telefone",
			details: ["(11) 3333-4444", "(11) 99999-9999"],
			description: "Atendimento de segunda a sexta, 8h às 18h",
		},
		{
			icon: Mail,
			title: "E-mail",
			details: ["contato@primerealty.com.br", "vendas@primerealty.com.br"],
			description: "Respondemos em até 2 horas",
		},
		{
			icon: MapPin,
			title: "Endereço",
			details: [
				"Av. Paulista, 1000 - Conjunto 100",
				"São Paulo, SP - 01310-100",
			],
			description: "Próximo ao metrô Trianon-MASP",
		},
		{
			icon: Clock,
			title: "Horário de Funcionamento",
			details: ["Segunda a Sexta: 8h às 18h", "Sábado: 9h às 14h"],
			description: "Plantão de emergência 24h",
		},
	];

	const departments = [
		{
			name: "Vendas",
			phone: "(11) 99999-1001",
			email: "vendas@primerealty.com.br",
			description: "Compra e venda de imóveis",
		},
		{
			name: "Locação",
			phone: "(11) 99999-1002",
			email: "locacao@primerealty.com.br",
			description: "Aluguel residencial e comercial",
		},
		{
			name: "Administração Predial",
			phone: "(11) 99999-1003",
			email: "administracao@primerealty.com.br",
			description: "Gestão de condomínios",
		},
		{
			name: "Atendimento ao Cliente",
			phone: "(11) 99999-1004",
			email: "atendimento@primerealty.com.br",
			description: "Suporte e dúvidas gerais",
		},
	];

	return (
		<Layout>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Entre em Contato
							</h1>
							<p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
								Estamos aqui para ajudar você a encontrar o imóvel perfeito ou
								esclarecer qualquer dúvida
							</p>
						</div>
					</div>
				</section>

				{/* Contact Info */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{contactInfo.map((info) => (
								<Card
									key={info.title}
									className="text-center p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<info.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
										<h3 className="text-xl font-semibold mb-3">{info.title}</h3>
										<div className="space-y-1 mb-3">
											{info.details.map((detail) => (
												<p key={detail} className="text-gray-900 font-medium">
													{detail}
												</p>
											))}
										</div>
										<p className="text-sm text-gray-600">{info.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Contact Form & Map */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							{/* Contact Form */}
							<div>
								<Card className="p-8">
									<CardHeader className="px-0 pt-0">
										<CardTitle className="text-2xl">
											Envie sua Mensagem
										</CardTitle>
										<p className="text-gray-600">
											Preencha o formulário e retornaremos em até 2 horas
										</p>
									</CardHeader>
									<CardContent className="px-0 pb-0">
										<form className="space-y-6">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<Input placeholder="Nome" />
												<Input placeholder="Sobrenome" />
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<Input type="email" placeholder="E-mail" />
												<Input type="tel" placeholder="Telefone" />
											</div>

											<Select value="" onChange={() => {}}>
												<SelectTrigger>
													<SelectValue value="" placeholder="Assunto" />
												</SelectTrigger>
												<SelectContent value="" onChange={() => {}}>
													<SelectItem value="comprar">
														Quero Comprar um Imóvel
													</SelectItem>
													<SelectItem value="vender">
														Quero Vender um Imóvel
													</SelectItem>
													<SelectItem value="alugar">
														Quero Alugar um Imóvel
													</SelectItem>
													<SelectItem value="administracao">
														Administração Predial
													</SelectItem>
													<SelectItem value="duvidas">
														Dúvidas Gerais
													</SelectItem>
													<SelectItem value="outros">Outros</SelectItem>
												</SelectContent>
											</Select>

											<Textarea placeholder="Sua mensagem..." rows={5} />

											<Button className="w-full" size="lg">
												<Send className="h-4 w-4 mr-2" />
												Enviar Mensagem
											</Button>
										</form>
									</CardContent>
								</Card>
							</div>

							{/* Map & Office Info */}
							<div className="space-y-8">
								<Card className="p-6">
									<CardHeader className="px-0 pt-0">
										<CardTitle>Nossa Localização</CardTitle>
									</CardHeader>
									<CardContent className="px-0 pb-0">
										<div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
											<div className="text-center text-gray-600">
												<MapPin className="h-12 w-12 mx-auto mb-2" />
												<p>Mapa Interativo</p>
												<p className="text-sm">
													Av. Paulista, 1000 - São Paulo
												</p>
											</div>
										</div>
										<div className="space-y-2">
											<p className="font-medium">
												🚇 Próximo ao Metrô Trianon-MASP
											</p>
											<p className="font-medium">🚌 Várias linhas de ônibus</p>
											<p className="font-medium">
												🚗 Estacionamento conveniado
											</p>
										</div>
									</CardContent>
								</Card>

								<Card className="p-6">
									<CardHeader className="px-0 pt-0">
										<CardTitle>Visite Nosso Escritório</CardTitle>
									</CardHeader>
									<CardContent className="px-0 pb-0">
										<Image
											src="/placeholder.svg?height=200&width=400"
											alt="Escritório PrimeRealty"
											width={400}
											height={200}
											className="w-full h-48 object-cover rounded-lg mb-4"
										/>
										<p className="text-gray-600 mb-4">
											Nosso escritório está localizado no coração da Paulista,
											em um ambiente moderno e acolhedor.
										</p>
										<Button variant="outline" className="w-full">
											<MapPin className="h-4 w-4 mr-2" />
											Ver no Google Maps
										</Button>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Departments */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Contato por Departamento
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Fale diretamente com o departamento que pode melhor atendê-lo
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{departments.map((dept) => (
								<Card
									key={dept.name}
									className="p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<div className="flex items-start justify-between mb-4">
											<div>
												<h3 className="text-xl font-semibold mb-2">
													{dept.name}
												</h3>
												<p className="text-gray-600 text-sm">
													{dept.description}
												</p>
											</div>
											<HeadphonesIcon className="h-8 w-8 text-blue-600" />
										</div>

										<div className="space-y-3">
											<Button
												variant="outline"
												className="w-full justify-start"
											>
												<Phone className="h-4 w-4 mr-2" />
												{dept.phone}
											</Button>
											<Button
												variant="outline"
												className="w-full justify-start"
											>
												<Mail className="h-4 w-4 mr-2" />
												{dept.email}
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Perguntas Frequentes
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Encontre respostas para as dúvidas mais comuns
							</p>
						</div>

						<div className="max-w-3xl mx-auto space-y-6">
							{[
								{
									question: "Qual o horário de atendimento?",
									answer:
										"Atendemos de segunda a sexta das 8h às 18h, e sábados das 9h às 14h. Temos plantão 24h para emergências.",
								},
								{
									question: "Vocês cobram taxa para avaliação de imóveis?",
									answer:
										"Não, nossa avaliação é completamente gratuita e sem compromisso.",
								},
								{
									question: "Como posso agendar uma visita?",
									answer:
										"Você pode agendar através do nosso site, WhatsApp ou ligando diretamente para nossos corretores.",
								},
								{
									question: "Vocês trabalham com financiamento?",
									answer:
										"Sim, temos parcerias com os principais bancos e ajudamos em todo o processo de financiamento.",
								},
								{
									question: "Qual a comissão para venda de imóveis?",
									answer:
										"Nossa comissão é competitiva e varia conforme o valor e tipo do imóvel. Entre em contato para uma proposta personalizada.",
								},
							].map((faq) => (
								<Card key={faq.question} className="p-6">
									<CardContent className="p-0">
										<h3 className="text-lg font-semibold mb-3">
											{faq.question}
										</h3>
										<p className="text-gray-600">{faq.answer}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Emergency Contact */}
				<section className="py-16 bg-red-600 text-white">
					<div className="container mx-auto px-4 lg:px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Emergência 24h
						</h2>
						<p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
							Para emergências relacionadas a imóveis administrados por nós
						</p>
						<Button size="lg" variant="outline">
							<Phone className="h-4 w-4 mr-2" />
							(11) 99999-0000
						</Button>
					</div>
				</section>
			</main>
		</Layout>
	);
}
