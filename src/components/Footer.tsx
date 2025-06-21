import { Home } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<Link href="/" className="flex items-center space-x-2 mb-4">
							<Home className="h-8 w-8 text-blue-400" />
							<span className="text-xl font-bold">PrimeRealty</span>
						</Link>
						<p className="text-gray-400 mb-4">
							Seu parceiro de confiança para encontrar a propriedade perfeita.
							Excelência em imóveis desde 2008.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Serviços</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link href="/comprar" className="hover:text-white">
									Comprar Imóvel
								</Link>
							</li>
							<li>
								<Link href="/vender" className="hover:text-white">
									Vender Imóvel
								</Link>
							</li>
							<li>
								<Link href="/alugar" className="hover:text-white">
									Alugar Imóvel
								</Link>
							</li>
							<li>
								<Link href="/administracao" className="hover:text-white">
									Administração Predial
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Empresa</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link href="/sobre" className="hover:text-white">
									Sobre Nós
								</Link>
							</li>
							<li>
								<Link href="/equipe" className="hover:text-white">
									Nossa Equipe
								</Link>
							</li>
							<li>
								<Link href="/carreiras" className="hover:text-white">
									Carreiras
								</Link>
							</li>
							<li>
								<Link href="/contato" className="hover:text-white">
									Contato
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">
							Informações de Contato
						</h4>
						<div className="space-y-2 text-gray-400">
							<p>(11) 9999-9999</p>
							<p>contato@primerealty.com.br</p>
							<p>
								Av. Paulista, 1000
								<br />
								Conjunto 100
								<br />
								São Paulo, SP 01310-100
							</p>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} PrimeRealty. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
