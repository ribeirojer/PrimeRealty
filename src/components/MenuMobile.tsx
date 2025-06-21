import { Store, UserCircle, UserPlus, XCircle } from "lucide-react";
import Link from "next/link";

type Props = {
	fecharMenu: () => void;
	user: any | null | undefined;
};

export default function MenuMobile({ fecharMenu, user }: Props) {
	return (
		<nav className="fixed inset-0 bg-[--action-blue] bg-opacity-90 flex flex-col items-center justify-center gap-6 z-50 transition duration-300 ease-in-out">
			<div className="mx-auto flex flex-col gap-6">
				<button
					type="button"
					onClick={fecharMenu}
					aria-label="Fechar Menu"
					className="absolute top-4 right-4 text-[--navy-blue] text-2xl"
				>
					<XCircle size={32} />
				</button>
				<Link
					href="/loja"
					onClick={fecharMenu}
					className="text-[--navy-blue] text-xl font-semibold hover:text-[--navy-blue-hover] flex items-center"
				>
					<Store size={32} />
					<span className="ml-2">Loja</span>
				</Link>
				{user ? (
					<Link
						href="/perfil"
						onClick={fecharMenu}
						className="text-[--navy-blue] text-xl font-semibold hover:text-[--navy-blue-hover] flex items-center"
					>
						<UserCircle size={32} />
						Perfil
					</Link>
				) : (
					<>
						<Link
							href="/entrar"
							onClick={fecharMenu}
							className="text-[--navy-blue] text-xl font-semibold hover:text-[--navy-blue-hover] flex items-center"
						>
							<UserCircle size={32} />
							<span className="ml-2">Entrar</span>
						</Link>
						<Link
							href="/cadastrar"
							onClick={fecharMenu}
							className="text-[--navy-blue] text-xl font-semibold hover:text-[--navy-blue-hover] flex items-center"
						>
							<UserPlus size={32} />
							<span className="ml-2">Cadastrar</span>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}
