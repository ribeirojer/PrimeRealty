import {
	Home,
	Mail,
	MessageCircle,
	Phone,
	Star,
	TrendingUp,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EquipePage() {
	const teamMembers = [
		{
			name: "Sarah Silva",
			role: "Diretora Comercial",
			experience: "15 anos",
			specialties: ["Imóveis de Luxo", "Investimentos"],
			description:
				"Especialista em imóveis de alto padrão com vasta experiência no mercado paulistano.",
			image: "/placeholder.svg?height=300&width=300",
			stats: { sales: "450+", rating: 4.9, clients: "200+" },
			contact: { phone: "(11) 99999-1001", email: "sarah@primerealty.com.br" },
		},
		{
			name: "Carlos Santos",
			role: "Corretor Senior",
			experience: "12 anos",
			specialties: ["Apartamentos", "Primeira Compra"],
			description:
				"Focado em ajudar famílias a encontrarem seu primeiro lar com segurança e tranquilidade.",
			image: "/placeholder.svg?height=300&width=300",
			stats: { sales: "380+", rating: 4.8, clients: "150+" },
			contact: { phone: "(11) 99999-1002", email: "carlos@primerealty.com.br" },
		},
		{
			name: "Maria Oliveira",
			role: "Especialista em Locação",
			experience: "8 anos",
			specialties: ["Locação Residencial", "Locação Comercial"],
			description:
				"Expert em locações com foco em encontrar a melhor opção para inquilinos e proprietários.",
			image: "/placeholder.svg?height=300&width=300",
			stats: { sales: "320+", rating: 4.9, clients: "180+" },
			contact: { phone: "(11) 99999-1003", email: "maria@primerealty.com.br" },
		},
		{
			name: "João Costa",
			role: "Corretor Especialista",
			experience: "10 anos",
			specialties: ["Casas", "Condomínios Fechados"],
			description:
				"Especializado em casas e condomínios fechados na zona oeste de São Paulo.",
			image: "/placeholder.svg?height=300&width=300",
			stats: { sales: "290+", rating: 4.7, clients: "120+" },
			contact: { phone: "(11) 99999-1004", email: "joao@primerealty.com.br" },
		},
		{
			name: "Ana Santos",
			role: "Consultora Imobiliária",
			experience: "6 anos",
			specialties: ["Jovens Profissionais", "Studios"],
			description:
				"Focada em atender jovens profissionais em busca de seu primeiro imóvel.",
			image: "/placeholder.svg?height=300&width=300",
			stats: { sales: "180+", rating: 4.8, clients: "90+" },
			contact: { phone: "(11) 99999-1005", email: "ana@primerealty.com.br" },
		},
		{
			name: "Pedro Lima",
			role: "Gerente de Vendas",
			experience: "14 anos",
			specialties: ["Lançamentos", "Plantas"],
			description:
				"Especialista em lançamentos imobiliários e vendas na planta.",
			image: "/placeholder.svg?height=300&width=300",
			stats: { sales: "420+", rating: 4.9, clients: "160+" },
			contact: { phone: "(11) 99999-1006", email: "pedro@primerealty.com.br" },
		},
	];

	const departments = [
		{
			name: "Vendas",
			description: "Equipe especializada em compra e venda de imóveis",
			members: 12,
			icon: TrendingUp,
		},
		{
			name: "Locação",
			description: "Especialistas em locação residencial e comercial",
			members: 8,
			icon: Home,
		},
		{
			name: "Administração Predial",
			description: "Gestão profissional de condomínios",
			members: 15,
			icon: Users,
		},
		{
			name: "Atendimento",
			description: "Suporte e atendimento ao cliente",
			members: 6,
			icon: MessageCircle,
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
								Nossa Equipe
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Conheça Nossos Especialistas
							</h1>
							<p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
								Profissionais experientes e dedicados para ajudar você a
								encontrar o imóvel perfeito
							</p>
						</div>
					</div>
				</section>

				{/* Team Stats */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							{[
								{ number: "67", label: "Profissionais", icon: "👥" },
								{
									number: "15",
									label: "Anos de Experiência Média",
									icon: "📅",
								},
								{ number: "2.847", label: "Imóveis Vendidos", icon: "🏠" },
								{ number: "99%", label: "Satisfação dos Clientes", icon: "⭐" },
							].map((stat, index) => (
								<div key={index} className="group">
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

				{/* Departments */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Nossos Departamentos
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Equipes especializadas para atender todas as suas necessidades
								imobiliárias
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{departments.map((dept, index) => (
								<Card
									key={index}
									className="text-center p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="pt-6">
										<dept.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
										<h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
										<p className="text-gray-600 mb-4">{dept.description}</p>
										<Badge variant="secondary">
											{dept.members} profissionais
										</Badge>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Team Members */}
				<section className="py-16 lg:py-24 bg-white">
					<div className="container mx-auto px-4 lg:px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Nossos Corretores
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Conheça alguns dos nossos principais especialistas em imóveis
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{teamMembers.map((member, index) => (
								<Card
									key={index}
									className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
								>
									<div className="relative">
										<Image
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											width={300}
											height={300}
											className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-4 right-4">
											<Badge className="bg-blue-600">{member.experience}</Badge>
										</div>
									</div>

									<CardContent className="p-6">
										<div className="flex items-center justify-between mb-2">
											<h3 className="text-xl font-bold text-gray-900">
												{member.name}
											</h3>
											<div className="flex text-yellow-400">
												{[...Array(5)].map((_, i) => (
													<Star key={i} className="h-4 w-4 fill-current" />
												))}
											</div>
										</div>

										<p className="text-blue-600 font-medium mb-3">
											{member.role}
										</p>
										<p className="text-gray-600 text-sm mb-4">
											{member.description}
										</p>

										<div className="flex flex-wrap gap-1 mb-4">
											{member.specialties.map((specialty) => (
												<Badge
													key={specialty}
													variant="secondary"
													className="text-xs"
												>
													{specialty}
												</Badge>
											))}
										</div>

										<div className="grid grid-cols-3 gap-4 text-center mb-4 py-4 bg-gray-50 rounded-lg">
											<div>
												<div className="font-bold text-blue-600">
													{member.stats.sales}
												</div>
												<div className="text-xs text-gray-600">Vendas</div>
											</div>
											<div>
												<div className="font-bold text-blue-600">
													{member.stats.rating}
												</div>
												<div className="text-xs text-gray-600">Avaliação</div>
											</div>
											<div>
												<div className="font-bold text-blue-600">
													{member.stats.clients}
												</div>
												<div className="text-xs text-gray-600">Clientes</div>
											</div>
										</div>

										<div className="space-y-2">
											<Button variant="outline" className="w-full" size="sm">
												<Phone className="h-4 w-4 mr-2" />
												{member.contact.phone}
											</Button>
											<Button variant="outline" className="w-full" size="sm">
												<Mail className="h-4 w-4 mr-2" />
												Enviar E-mail
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Join Team CTA */}
				<section className="py-16 bg-blue-600 text-white">
					<div className="container mx-auto px-4 lg:px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Faça Parte da Nossa Equipe
						</h2>
						<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
							Estamos sempre em busca de profissionais talentosos para se juntar
							ao nosso time
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/carreiras">
								<Button size="lg" variant="outline">
									<Users className="h-4 w-4 mr-2" />
									Ver Vagas Abertas
								</Button>
							</Link>
							<Button
								size="lg"
								variant="outline"
								className="text-white border-white hover:bg-white hover:text-blue-600"
							>
								<Mail className="h-4 w-4 mr-2" />
								Enviar Currículo
							</Button>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
