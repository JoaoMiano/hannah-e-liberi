import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { BadgeCheck, Clock, CreditCard, Search, Smile, ThumbsUp } from "lucide-react";

const beneficios = [
    { icon: <BadgeCheck className="h-7 w-7" aria-hidden="true" />, title: "Sem necessidade de fiador", description: "Chega de pedir favores a amigos ou familiares. A apólice substitui o fiador pessoa física, deixando o processo de locação mais independente e menos constrangedor." },
    { icon: <CreditCard className="h-7 w-7" aria-hidden="true" />, title: "Sem imobilizar capital", description: "Diferente do depósito caução, você não precisa desembolsar meses de aluguel antecipado. O custo da apólice é muito menor e não compromete seu fluxo de caixa." },
    { icon: <Clock className="h-7 w-7" aria-hidden="true" />, title: "Aprovação ágil", description: "A análise de crédito é rápida e o processo de emissão da apólice costuma ser concluído em poucos dias úteis — permitindo que você feche o aluguel sem demora." },
    { icon: <Search className="h-7 w-7" aria-hidden="true" />, title: "Mais imóveis acessíveis", description: "Proprietários que aceitam fiança locatícia ampliam o leque de opções disponíveis para você. Com a garantia em mãos, sua proposta se torna mais competitiva." },
    { icon: <Smile className="h-7 w-7" aria-hidden="true" />, title: "Processo sem desgaste", description: "Nenhum familiar ou amigo precisará ser exposto a riscos financeiros. A responsabilidade da garantia fica inteiramente com a seguradora." },
    { icon: <ThumbsUp className="h-7 w-7" aria-hidden="true" />, title: "Credibilidade na negociação", description: "Apresentar uma apólice de seguradora reconhecida demonstra seriedade ao proprietário e aumenta suas chances de aprovação no processo seletivo do imóvel." },
];

const FiancaBeneficiosInquilino = () => {
    return (
        <section aria-labelledby="beneficios-inquilino" className="bg-primary/5 py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealSection className="text-center mb-10">
                    <h2 id="beneficios-inquilino" className={`${abhayaLibre.className} text-3xl md:text-5xl text-primary mb-3`}>
                        Vantagens para o Inquilino
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Alugue com mais liberdade, agilidade e sem depender de ninguém para ser seu fiador.
                    </p>
                </RevealSection>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Benefícios da fiança locatícia para o inquilino">
                    {beneficios.map((item, index) => (
                        <RevealSection key={item.title} as="li" delay={index * 60} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-white shrink-0" aria-hidden="true">
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

export default FiancaBeneficiosInquilino;
