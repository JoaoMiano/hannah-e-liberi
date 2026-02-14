import { Servico } from "@/data/servicos";
import { abhayaLibre } from "@/fonts/fonts";


export const CoverageSection = ({ service }: { service: Servico }) => {
    return (
        <main className="container mx-auto py-8 lg:py-12 px-4 lg:px-8">
            <div>
                <h2 className={`${abhayaLibre.className} text-5xl text-primary mb-4 text-center`}>Coberturas</h2>
                <p className="text-gray-600 mb-8 text-lg text-center">Contratando um {service.titulo} com a gente, você garante diversas coberturas básicas e adicionais. Confira as principais.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.coberturas.map((cobertura, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-white hover:border-secondary/50 shadow-md transition-colors duration-200 cursor-pointer">
                        <h3 className={`${abhayaLibre.className} text-2xl text-primary font-semibold mb-2`}>{cobertura.titulo}</h3>
                        <p className="text-gray-600">{cobertura.descricao}</p>
                    </div>
                ))}
            </div>
        </main>

    )
}

export default CoverageSection;