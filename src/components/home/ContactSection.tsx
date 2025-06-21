import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export function ContactSection() {
	return (
		<section className="py-16 lg:py-24 bg-gray-50">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Pronto para Começar?
						</h2>
						<p className="text-xl text-gray-600">
							Entre em contato com nossa equipe especializada hoje para uma
							consulta gratuita
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
							<div className="space-y-4">
								<div className="flex items-center">
									<Phone className="h-5 w-5 text-blue-600 mr-3" />
									<span>(555) 123-4567</span>
								</div>
								<div className="flex items-center">
									<Mail className="h-5 w-5 text-blue-600 mr-3" />
									<span>info@primerealty.com</span>
								</div>
								<div className="flex items-center">
									<MapPin className="h-5 w-5 text-blue-600 mr-3" />
									<span>
										123 Business Ave, Suite 100
										<br />
										City, State 12345
									</span>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardHeader className="px-0 pt-0">
								<CardTitle>Envie-nos uma Mensagem</CardTitle>
								<CardDescription>
									Preencha o formulário abaixo e retornaremos em até 24 horas
								</CardDescription>
							</CardHeader>
							<CardContent className="px-0 pb-0">
								<form className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Input placeholder="Nome" />
										<Input placeholder="Sobrenome" />
									</div>
									<Input type="email" placeholder="Endereço de E-mail" />
									<Input placeholder="Número de Telefone" />
									<Select value="buyng" onChange={() => {}}>
										<SelectTrigger>
											<SelectValue
												value="buying"
												placeholder="Tenho interesse em..."
											/>
										</SelectTrigger>
										<SelectContent value="buying" onChange={() => {}}>
											<SelectItem value="buying">Comprar um Imóvel</SelectItem>
											<SelectItem value="selling">Vender um Imóvel</SelectItem>
											<SelectItem value="renting">Alugar um Imóvel</SelectItem>
											<SelectItem value="investing">
												Oportunidades de Investimento
											</SelectItem>
										</SelectContent>
									</Select>
									<Textarea
										placeholder="Conte-nos sobre suas necessidades..."
										rows={4}
									/>
									<Button className="w-full">Enviar Mensagem</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
