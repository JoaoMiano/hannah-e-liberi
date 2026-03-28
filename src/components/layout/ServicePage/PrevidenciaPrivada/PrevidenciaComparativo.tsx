import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { CheckCircle, Info } from "lucide-react";

const pgblItems = [
    { label: "Indicado para", value: "Quem declara IR pelo modelo completo" },
    { label: "Dedução fiscal", value: "Até 12% da renda bruta anual" },
    { label: "Tributação no resgate", value: "IR incide sobre o total resgatado (aporte + rendimentos)" },
    { label: "Perfil de investidor", value: "Renda tributável elevada, horizonte longo" },
];

const vgblItems = [
    { label: "Indicado para", value: "Quem declara IR pelo modelo simplificado ou é isento" },
    { label: "Dedução fiscal", value: "Não há dedução de contribuições" },
    { label: "Tributação no resgate", value: "IR incide somente sobre os rendimentos" },
    { label: "Perfil de investidor", value: "Autônomo, aposentado, ou quem já atingiu o teto do PGBL" },
];

const PrevidenciaComparativo = () => {
    return (
        <section aria-labelledby="pgbl-vs-vgbl" className="border-t border-b border-gray-300">
            <div className="container mx-auto py-12 px-4 lg:px-8">
                <RevealSection className="text-center mb-8">
                    <h2 id="pgbl-vs-vgbl" className={`${abhayaLibre.className} text-2xl md:text-4xl text-primary mb-2`}>
                        PGBL vs VGBL
                    </h2>
                    <p className="text-lg text-zinc-700">
                        Entenda qual modalidade faz mais sentido para o seu perfil e seus objetivos financeiros.
                    </p>
                </RevealSection>

                <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                    <RevealSection variant="left" delay={80} className="flex flex-col gap-2 bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm flex-1 hover:shadow-md transition-all duration-300">
                        <h3 className="text-xl md:text-2xl italic font-semibold text-blue-800 text-start mb-1">PGBL</h3>
                        <ul className="space-y-3 text-zinc-800">
                            {pgblItems.map((item) => (
                                <li key={item.label} className="flex items-start gap-2 text-md md:text-lg">
                                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span><strong>{item.label}:</strong> {item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </RevealSection>

                    <RevealSection variant="right" delay={80} className="flex flex-col gap-2 bg-primary/5 border border-primary/20 p-6 rounded-xl shadow-sm flex-1 hover:shadow-md transition-all duration-300">
                        <h3 className="text-xl md:text-2xl italic font-semibold text-primary text-start mb-1">VGBL</h3>
                        <ul className="space-y-3 text-zinc-800">
                            {vgblItems.map((item) => (
                                <li key={item.label} className="flex items-start gap-2 text-md md:text-lg">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                                    <span><strong>{item.label}:</strong> {item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </RevealSection>
                </div>

                <RevealSection delay={200} className="mt-6 flex items-start gap-3 bg-secondary/20 border border-secondary/40 rounded-xl p-4 text-sm text-zinc-700">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <p>A escolha entre PGBL e VGBL depende do seu perfil fiscal e dos seus objetivos. Nossos especialistas podem analisar o seu caso e indicar a melhor estratégia personalizada para você.</p>
                </RevealSection>
            </div>
        </section>
    );
};

export default PrevidenciaComparativo;
