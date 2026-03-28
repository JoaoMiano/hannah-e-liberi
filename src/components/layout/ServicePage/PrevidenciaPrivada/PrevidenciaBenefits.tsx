import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { ArrowLeftRight, BadgePercent, FileCheck, PiggyBank, ShieldCheck, Users } from "lucide-react";

const benefits = [
    { icon: <Users className="h-7 w-7" aria-hidden="true" />, title: "Sucessão patrimonial simplificada", description: "O saldo da previdência é transferido diretamente aos beneficiários indicados, sem necessidade de inventário ou ação judicial — agilidade e proteção para quem você ama." },
    { icon: <BadgePercent className="h-7 w-7" aria-hidden="true" />, title: "Dedução fiscal no IR", description: "Com o PGBL, contribuições de até 12% da renda bruta anual são dedutíveis do Imposto de Renda, gerando uma economia real no presente enquanto você constrói o futuro." },
    { icon: <ArrowLeftRight className="h-7 w-7" aria-hidden="true" />, title: "Portabilidade garantida por lei", description: "Você pode migrar seu plano para outra seguradora ou fundo sem pagar impostos — compare, negocie e encontre sempre a melhor condição para o seu dinheiro." },
    { icon: <PiggyBank className="h-7 w-7" aria-hidden="true" />, title: "Acúmulo de longo prazo", description: "Os aportes se somam ao longo dos anos com a força dos juros compostos. Quanto mais cedo você começa, maior o patrimônio acumulado na aposentadoria." },
    { icon: <ShieldCheck className="h-7 w-7" aria-hidden="true" />, title: "Proteção regulada pela SUSEP", description: "Os planos são supervisionados pela SUSEP e seu patrimônio é segregado do da seguradora, garantindo segurança mesmo diante de adversidades do mercado." },
    { icon: <FileCheck className="h-7 w-7" aria-hidden="true" />, title: "Flexibilidade de resgate", description: "Escolha entre receber o saldo em parcela única, renda mensal vitalícia ou renda por prazo determinado — adaptando o recebimento à sua realidade na aposentadoria." },
];

const PrevidenciaBenefits = () => {
    return (
        <section aria-labelledby="beneficios-previdencia" className="bg-primary/5 py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <RevealSection className="text-center mb-10">
                    <h2 id="beneficios-previdencia" className={`${abhayaLibre.className} text-3xl md:text-5xl text-primary mb-3`}>
                        Benefícios da Previdência Privada
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Mais do que poupar, é uma estratégia completa de planejamento financeiro e proteção patrimonial.
                    </p>
                </RevealSection>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Benefícios da previdência privada">
                    {benefits.map((benefit, index) => (
                        <RevealSection
                            key={benefit.title}
                            as="li"
                            delay={index * 60}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-white shrink-0" aria-hidden="true">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-primary">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </RevealSection>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PrevidenciaBenefits;
