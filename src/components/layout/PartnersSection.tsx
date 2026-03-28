import { abhayaLibre } from "@/fonts/fonts"
import { seguradoras } from "@/constants/seguradoras"
import { CardCompanyLogo } from "../CardCompanyLogo"
import { RevealSection } from "@/components/RevealSection"

const PartnersSection = () => {
    return (
        <section className="border-t border-zinc-100">
            <div className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <RevealSection className="flex flex-col items-center text-center mb-14">
                    <div className="inline-block bg-secondary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-4 border border-secondary/30">
                        Seguradoras
                    </div>
                    <h2 className={`text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl ${abhayaLibre.className}`}>
                        Nossos Parceiros de Confiança
                    </h2>
                    <p className="text-zinc-500 text-base lg:text-lg max-w-2xl">
                        Trabalhamos com as principais seguradoras do Brasil
                    </p>
                </RevealSection>

                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                    {seguradoras.map((seguradora, index) => (
                        <RevealSection key={index} delay={index * 40} variant="scale">
                            <CardCompanyLogo company={seguradora} />
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PartnersSection
