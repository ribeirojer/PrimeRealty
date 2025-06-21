import { Home, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
	return (
		<header className="bg-white shadow-sm border-b sticky top-0 z-50">
			<div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<Home className="h-8 w-8 text-blue-600" />
					<span className="text-xl font-bold text-gray-900">PrimeRealty</span>
				</Link>

				<nav className="hidden md:flex items-center space-x-8">
					<Link
						href="#"
						className="text-gray-700 hover:text-blue-600 font-medium"
					>
						Comprar
					</Link>
					<Link
						href="#"
						className="text-gray-700 hover:text-blue-600 font-medium"
					>
						Vender
					</Link>
					<Link
						href="#"
						className="text-gray-700 hover:text-blue-600 font-medium"
					>
						Alugar
					</Link>
					<Link
						href="#"
						className="text-gray-700 hover:text-blue-600 font-medium"
					>
						Sobre Nós
					</Link>
					<Link
						href="#"
						className="text-gray-700 hover:text-blue-600 font-medium"
					>
						Contato
					</Link>
				</nav>

				<div className="flex items-center space-x-4">
					<Button variant="outline" className="hidden sm:inline-flex">
						<Phone className="h-4 w-4 mr-2" />
						(11) 9999-9999
					</Button>
					<Button>Começar</Button>
				</div>
			</div>
		</header>
	);
}
