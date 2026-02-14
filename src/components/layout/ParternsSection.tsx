import { abhayaLibre } from "@/fonts/fonts"
import { seguradoras } from "@/data/seguradoras"
import { CardCompanyLogo } from "../CardCompanyLogo"


const PaternsSection = () => {
    return (
        <section>
            <div className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <div className="flex flex-col items-center text-center mb-18">
                    <div className="inline-block bg-chart-2 text-lg text-secondary px-4 py-2 rounded-full mb-4">
                        Seguradoras
                    </div>
                    <h2 className={`text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl ${abhayaLibre.className}`}>
                        Nossos Parceiros de Confiança
                    </h2>
                    <p className="text-zinc-600 text-md lg:text-xl max-w-3xl">
                       Trabalhamos com as principais seguradoras do Brasil
                    </p>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 ">
                    {seguradoras.map((seguradora, index) => (
                        <CardCompanyLogo
                            key={index}
                            company={seguradora}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PaternsSection