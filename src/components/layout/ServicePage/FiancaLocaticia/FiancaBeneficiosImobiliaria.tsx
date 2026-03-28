import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { BarChart3, CheckSquare, HandCoins, Layers, Star, TrendingUp } from "lucide-react";

const beneficios = [
    { icon: <CheckSquare className="h-7 w-7" aria-hidden="true" />, title: "Fechamento mais rápido", description: "Com a fiança locatícia, a locação é concluída com mais agilidade — sem depender da disponibilidade de um fiador pessoa física que pode demorar dias para ser apresentado e aprovado." },
    { icon: <HandCoins className="h-7 w-7" aria-hidden="true" />, title: "Recebimento de comissão garantido", description: "Menos inadimplência significa maior previsibilidade no recebimento das comissões. A imobiliária não perde honorários por contratos paralisados ou rescindidos por inadimplência." },
    { icon: <Star className="h-7 w-7" aria-hidden="true" />, title: "Diferencial competitivo", description: "Oferecer a fiança locatícia como opção de garantia posiciona a imobiliária como moderna e facilitadora, atraindo mais inquilinos e tornando os imóveis mais fáceis de locar." },
    { icon: <Layers className="h-7 w-7" aria-hidden="true" />, title: "Gestão de carteira simplificada", description: "A seguradora centraliza o controle da garantia e assume a cobrança em caso de inadimplência, reduzindo o trabalho operacional da equipe de administração de locações." },
    { icon: <BarChart3 className="h-7 w-7" aria-hidden="true" />, title: "Menor taxa de vacância", description: "Imóveis com garantia locatícia disponível atraem um perfil maior de candidatos, acelerando a locação e reduzindo o tempo em que o imóvel fica sem inquilino." },
    { icon: <TrendingUp className="h-7 w-7" aria-hidden="true" />, title: "Relacionamento com o proprietário fortalecido", description: "Proprietários se sentem mais seguros ao saber que a imobiliária utiliza instrumentos profissionais de garantia, aumentando a fidelização e as indicações de novos imóveis." },
];

const FiancaBeneficiosImobiliaria = () => {
    return (
        <section aria-labelledby="beneficios-imobiliaria" className="bg-primary/5 py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealSection className="text-center mb-10">
                    <h2 id="beneficios-imobiliaria" className={`${abhayaLibre.className} text-3xl md:text-5xl text-primary mb-3`}>
                        Vantagens para a Imobiliária
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Feche mais contratos, reduza a inadimplência e ofereça um serviço mais profissional para proprietários e inquilinos.
                    </p>
                </RevealSection>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Benefícios da fiança locatícia para a imobiliária">
                    {beneficios.map((item, index) => (
                        <RevealSection key={item.title} as="li" delay={index * 60} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-foreground text-white shrink-0" aria-hidden="true">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </RevealSection>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FiancaBeneficiosImobiliaria;
