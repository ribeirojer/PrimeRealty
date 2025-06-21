import { MapPin, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function HeroSection() {
	return (
		<section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24 lg:py-32 overflow-hidden">
			<div className="absolute inset-0 bg-black/20"></div>
			<div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

			<div className="container mx-auto px-4 lg:px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30 text-sm px-4 py-2">
						#1 Imobiliária da Região
					</Badge>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
						Encontre Sua Casa dos Sonhos
					</h1>
					<p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
						Descubra o imóvel perfeito com nossa orientação especializada,
						listagens abrangentes e atendimento personalizado que torna sua
						jornada de compra de casa perfeita
					</p>

					{/* Enhanced Search Form */}
					<Card className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 shadow-2xl border-0 rounded-2xl">
						<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
							<div className="space-y-2">
								<label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
									Localização
								</label>
								<div className="relative">
									<MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
									<Input
										placeholder="Cidade, Estado, CEP"
										className="pl-11 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
									Tipo de Imóvel
								</label>
								<Select value="house" onChange={() => {}}>
									<SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg">
										<SelectValue value="house" placeholder="Selecione o tipo" />
									</SelectTrigger>
									<SelectContent value="house" onChange={() => {}}>
										<SelectItem value="house">🏠 Casa</SelectItem>
										<SelectItem value="condo">🏢 Apartamento</SelectItem>
										<SelectItem value="townhouse">🏘️ Sobrado</SelectItem>
										<SelectItem value="apartment">🏬 Kitnet</SelectItem>
										<SelectItem value="land">🌳 Terreno</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
									Faixa de Preço
								</label>
								<Select value="0-200k" onChange={() => {}}>
									<SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg">
										<SelectValue
											value="0-200k"
											placeholder="Selecione a faixa"
										/>
									</SelectTrigger>
									<SelectContent value="0-200k" onChange={() => {}}>
										<SelectItem value="0-200k">💰 R$ 0 - R$ 500k</SelectItem>
										<SelectItem value="200k-500k">
											💰 R$ 500k - R$ 1M
										</SelectItem>
										<SelectItem value="500k-1m">💰 R$ 1M - R$ 2M</SelectItem>
										<SelectItem value="1m-2m">💰 R$ 2M - R$ 3M</SelectItem>
										<SelectItem value="2m+">💰 R$ 3M+</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
									Quartos
								</label>
								<Select value="any" onChange={() => {}}>
									<SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg">
										<SelectValue value="any" placeholder="Qualquer" />
									</SelectTrigger>
									<SelectContent value="any" onChange={() => {}}>
										<SelectItem value="1">1+ Quarto</SelectItem>
										<SelectItem value="2">2+ Quartos</SelectItem>
										<SelectItem value="3">3+ Quartos</SelectItem>
										<SelectItem value="4">4+ Quartos</SelectItem>
										<SelectItem value="5">5+ Quartos</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="flex items-end">
								<Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
									<Search className="h-5 w-5 mr-2" />
									Buscar Imóveis
								</Button>
							</div>
						</div>

						<div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
							<span className="text-sm text-gray-600 font-medium">
								Buscas populares:
							</span>
							{[
								"Casas de Luxo",
								"Frente ao Mar",
								"Lançamentos",
								"Investimento",
							].map((tag) => (
								<Badge
									key={tag}
									variant="secondary"
									className="cursor-pointer hover:bg-blue-100 transition-colors"
								>
									{tag}
								</Badge>
							))}
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}
