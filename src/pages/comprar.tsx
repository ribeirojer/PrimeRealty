import {
	Calculator,
	CheckCircle,
	Clock,
	FileText,
	Heart,
	Home,
	MapPin,
	Phone,
	Search,
	Shield,
	TrendingUp,
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

export default function ComprarPage() {
	const steps = [
		{
			number: "01",
			title: "Defina seu Perfil",
			description:
				"Conte-nos suas necessidades, orçamento e preferências de localização",
			icon: Users,
		},
		{
			number: "02",
			title: "Busca Personalizada",
			description:
				"Nossa equipe seleciona imóveis que atendem exatamente ao seu perfil",
			icon: Search,
		},
		{
			number: "03",
			title: "Visitas Agendadas",
			description: "Acompanhamos você nas visitas aos imóveis pré-selecionados",
			icon: Clock,
		},
		{
			number: "04",
			title: "Negociação",
			description: "Negociamos o melhor preço e condições para você",
			icon: TrendingUp,
		},
		{
			number: "05",
			title: "Documentação",
			description: "Cuidamos de toda a documentação e processos legais",
			icon: FileText,
		},
		{
			number: "06",
			title: "Entrega das Chaves",
			description: "Acompanhamos até a entrega das chaves do seu novo lar",
			icon: Home,
		},
	];

	const benefits = [
		"Consultoria gratuita e personalizada",
		"Acesso exclusivo a imóveis off-market",
		"Negociação profissional do preço",
		"Análise completa da documentação",
		"Suporte com financiamento bancário",
		"Acompanhamento pós-compra",
	];

	const services = [
		{
			icon: Calculator,
			title: "Simulação de Financiamento",
			description:
				"Calculamos as melhores condições de financiamento para seu perfil",
		},
		{
			icon: FileText,
			title: "Análise Jurídica",
			description:
				"Verificamos toda a documentação para garantir segurança na compra",
		},
		{
			icon: Shield,
			title: "Seguro Garantia",
			description:
				"Oferecemos proteção completa durante todo o processo de compra",
		},
	];

	return (
		<Layout>
			<main className="flex-1">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="max-w-4xl mx-auto text-center">
							<Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
								Compra Inteligente
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Compre Seu Imóvel dos Sonhos
							</h1>
							<p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
								Encontre o imóvel perfeito com nossa consultoria especializada e
								processo simplificado
							</p>

							{/* Quick Search */}
							<Card className="bg-white text-gray-900 p-6 shadow-xl max-w-2xl mx-auto">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="relative">
										<MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
										<Input
											placeholder="Onde você quer morar?"
											className="pl-10"
										/>
									</div>
									<Select value="apartamento" onChange={() => {}}>
										<SelectTrigger>
											<SelectValue value="" placeholder="Tipo de imóvel" />
										</SelectTrigger>
										<SelectContent value="apartamento" onChange={() => {}}>
											<SelectItem value="">Selecione</SelectItem>
											<SelectItem value="apartamento">Apartamento</SelectItem>
											<SelectItem value="casa">Casa</SelectItem>
											<SelectItem value="sobrado">Sobrado</SelectItem>
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

				{/* Process Steps */}
				<section className="py-16 lg:py-24 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Como Funciona
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Um processo simples e transparente para você comprar seu imóvel
								com segurança
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{steps.map((step) => (
								<Card
									key={step.title}
									className="relative p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<div className="flex items-center mb-4">
											<div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
												{step.number}
											</div>
											<step.icon className="h-8 w-8 text-blue-600" />
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
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Por Que Comprar Conosco?
								</h2>
								<p className="text-lg text-gray-700 mb-8">
									Oferecemos uma experiência completa e personalizada para que
									você encontre o imóvel ideal com segurança e tranquilidade.
								</p>
								<div className="space-y-4">
									{benefits.map((benefit) => (
										<div key={benefit} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
											<span className="text-gray-700">{benefit}</span>
										</div>
									))}
								</div>
								<div className="mt-8">
									<Button size="lg">
										<Heart className="h-4 w-4 mr-2" />
										Quero Comprar
									</Button>
								</div>
							</div>
							<div>
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Família feliz com nova casa"
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
								Serviços Inclusos
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Oferecemos suporte completo durante todo o processo de compra
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{services.map((service) => (
								<Card
									key={service.title}
									className="text-center p-8 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<service.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
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

				{/* CTA Section */}
				<section className="py-16 bg-blue-600 text-white">
					<div className="container mx-auto px-4 lg:px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Pronto para Comprar?
						</h2>
						<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
							Fale com nossos especialistas e dê o primeiro passo para
							conquistar seu novo lar
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="outline">
								<Phone className="h-4 w-4 mr-2" />
								Falar com Especialista
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-white border-white hover:bg-white hover:text-blue-600"
							>
								Ver Imóveis Disponíveis
							</Button>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
