import { CardCompanyLogo } from "@/components/CardCompanyLogo";
import { Servico } from "@/data/servicos";
import { abhayaLibre } from "@/fonts/fonts";

export const InsuranceCompanySection = ({ service }: { service: Servico }) => {
    return (
        <section className="bg-primary">
            <div className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <div >
                    <h2 className={`${abhayaLibre.className} text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2`}>
                        Nossos Parceiros
                    </h2>
                    <p className="text-center text-zinc-300 text-lg mb-8">
                        Trabalhamos com as principais companhias do mercado para oferecer as melhores condições:
                    </p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {service.seguradoras.map((company, index) => (
                        <CardCompanyLogo
                            key={index}
                            company={company}
        
                        />
                    ))}

                </div>
            </div>

        </section>
    )
}