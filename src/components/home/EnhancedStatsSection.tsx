export default function EnhancedStatsSection() {
	return (
		<section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
			<div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
			<div className="container mx-auto px-4 lg:px-6 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Nosso Histórico Fala
					</h2>
					<p className="text-xl text-blue-100 max-w-2xl mx-auto">
						Números que mostram nosso compromisso com a excelência e satisfação
						do cliente
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					{[
						{ number: "2.847", label: "Imóveis Vendidos", icon: "🏠" },
						{ number: "18", label: "Anos de Experiência", icon: "📅" },
						{ number: "99.2%", label: "Satisfação do Cliente", icon: "⭐" },
						{ number: "67", label: "Corretores Especialistas", icon: "👥" },
					].map((stat) => (
						<div key={stat.label} className="group">
							<div className="text-4xl mb-2">{stat.icon}</div>
							<div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-200">
								{stat.number}
							</div>
							<div className="text-blue-100 font-medium">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
