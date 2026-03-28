"use client";

import { Servico } from "@/constants/servicos";
import { abhayaLibre } from "@/fonts/fonts";
import { RevealSection } from "@/components/RevealSection";

export const CoverageSection = ({ service }: { service: Servico }) => {
    return (
        <section className="container mx-auto py-12 lg:py-16 px-4 lg:px-8">
            <RevealSection className="text-center mb-10">
                <h2 className={`${abhayaLibre.className} text-4xl md:text-5xl text-primary mb-4`}>Coberturas</h2>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                    Contratando um {service.titulo} com a gente, você garante diversas coberturas básicas e adicionais. Confira as principais.
                </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.coberturas.map((cobertura, index) => (
                    <RevealSection
                        key={index}
                        delay={index * 60}
                        className="bg-white p-6 rounded-xl border border-gray-100 hover:border-secondary/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                        <h3 className={`${abhayaLibre.className} text-2xl text-primary font-semibold mb-2`}>{cobertura.titulo}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{cobertura.descricao}</p>
                    </RevealSection>
                ))}
            </div>
        </section>
    );
}

export default CoverageSection;
