import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { Banknote, Gavel, Home, RefreshCw, ShieldCheck, Users } from "lucide-react";

const beneficios = [
    { icon: <Banknote className="h-7 w-7" aria-hidden="true" />, title: "Recebimento garantido", description: "Em caso de inadimplência, a seguradora paga os aluguéis em aberto conforme os limites da apólice — garantindo seu fluxo de receita sem depender do inquilino." },
    { icon: <Gavel className="h-7 w-7" aria-hidden="true" />, title: "Cobrança sem desgaste", description: "Após acionar a apólice, a seguradora assume o processo de recuperação do crédito junto ao inquilino. Você não precisa entrar em conflito direto nem contratar advogados." },
    { icon: <Home className="h-7 w-7" aria-hidden="true" />, title: "Proteção contra danos ao imóvel", description: "Planos completos cobrem danos causados pelo inquilino ao imóvel ao final da locação, protegendo seu patrimônio além da simples inadimplência." },
    { icon: <ShieldCheck className="h-7 w-7" aria-hidden="true" />, title: "Garantia juridicamente sólida", description: "A fiança locatícia é reconhecida pela Lei do Inquilinato, oferecendo ao proprietário respaldo legal completo em caso de litígio ou despejo." },
    { icon: <Users className="h-7 w-7" aria-hidden="true" />, title: "Inquilinos mais qualificados", description: "A análise de crédito realizada pela seguradora filtra locatários com bom perfil financeiro, reduzindo o risco de inadimplência desde a escolha do inquilino." },
    { icon: <RefreshCw className="h-7 w-7" aria-hidden="true" />, title: "Renovação simples e contínua", description: "A apólice é renovada anualmente de forma desburocratizada, mantendo a proteção ativa durante todo o período da locação sem interrupções." },
];

const FiancaBeneficiosProprietario = () => {
    return (
        <section aria-labelledby="beneficios-proprietario" className="py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealSection className="text-center mb-10">
                    <h2 id="beneficios-proprietario" className={`${abhayaLibre.className} text-3xl md:text-5xl text-primary mb-3`}>
                        Vantagens para o Proprietário
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Alugue seu imóvel com segurança, receba em dia e tenha o suporte de uma seguradora ao seu lado.
                    </p>
                </RevealSection>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Benefícios da fiança locatícia para o proprietário">
                    {beneficios.map((item, index) => (
                        <RevealSection key={item.title} as="li" delay={index * 60} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shrink-0" aria-hidden="true">
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

export default FiancaBeneficiosProprietario;
