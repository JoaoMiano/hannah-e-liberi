import { CardCompanyLogo } from "@/components/CardCompanyLogo";
import { RevealSection } from "@/components/RevealSection";
import { Servico } from "@/constants/servicos";
import { abhayaLibre } from "@/fonts/fonts";

export const InsuranceCompanySection = ({ service }: { service: Servico }) => {
    return (
        <section className="bg-primary relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative container mx-auto px-4 lg:px-6 py-12 md:py-16 lg:py-20">
                <RevealSection className="text-center mb-10">
                    <h2 className={`${abhayaLibre.className} text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2`}>
                        Nossos Parceiros
                    </h2>
                    <p className="text-zinc-300 text-base lg:text-lg">
                        Trabalhamos com as principais companhias do mercado para oferecer as melhores condições:
                    </p>
                </RevealSection>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {service.seguradoras.map((company, index) => (
                        <RevealSection key={index} delay={index * 50} variant="scale">
                            <CardCompanyLogo company={company} />
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
