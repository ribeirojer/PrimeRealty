import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NewsletterSection() {
	return (
		<section className="py-16 bg-gray-900 text-white">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Mantenha-se Atualizado
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Receba as últimas informações do mercado, novos lançamentos e
						oportunidades exclusivas em seu e-mail
					</p>

					<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
						<Input
							type="email"
							placeholder="Digite seu endereço de e-mail"
							className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
						/>
						<Button className="h-12 bg-blue-600 hover:bg-blue-700 px-8">
							Inscrever-se
						</Button>
					</div>

					<p className="text-sm text-gray-400 mt-4">
						Junte-se a 5.000+ inscritos. Sem spam, cancele a qualquer momento.
					</p>
				</div>
			</div>
		</section>
	);
}
