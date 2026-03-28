import AdvantagesService from "@/components/AdvantagesService";
import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { CalendarCheck, ShieldCheck, TrendingUp, Users } from "lucide-react";

const PrevidenciaExplanation = () => {
    return (
        <section aria-labelledby="o-que-e-previdencia" className="container mx-auto py-12 px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* O que é Previdência Privada */}
                <RevealSection variant="left" className="text-center md:text-left flex-1">
                    <h2
                        id="o-que-e-previdencia"
                        className={`${abhayaLibre.className} text-4xl md:text-5xl text-primary mb-4 text-center`}
                    >
                        O que é Previdência Privada?
                    </h2>
                    <div className="flex flex-col gap-4 text-md md:text-lg text-zinc-800 text-justify">
                        <p>A <strong>previdência privada</strong> é uma modalidade de investimento de longo prazo voltada para a formação de uma reserva financeira para a aposentadoria ou para objetivos futuros — como educação dos filhos, compra de imóvel ou planejamento sucessório.</p>
                        <p>Diferente da previdência social (INSS), que é gerida pelo governo, a previdência privada é contratada junto a seguradoras ou bancos autorizados pela SUSEP e oferece maior flexibilidade, rentabilidade potencial superior e benefícios fiscais relevantes.</p>
                        <p>Existem dois tipos principais: o <strong>PGBL</strong>, indicado para quem declara o IR pelo modelo completo e deseja deduzir as contribuições da base de cálculo, e o <strong>VGBL</strong>, mais adequado para quem usa o modelo simplificado ou já atingiu o limite de dedução.</p>
                        <p>Em ambos os casos, o dinheiro é aplicado em fundos de investimento geridos por profissionais, com opções de perfil conservador, moderado ou arrojado, conforme a tolerância ao risco e o horizonte de investimento de cada cliente.</p>
                    </div>
                </RevealSection>

                {/* Por que começar agora? */}
                <RevealSection variant="right" delay={120} className="p-6 bg-primary/10 rounded-xl mt-8 md:mt-0 shrink-0 flex-1">
                    <h3 className={`${abhayaLibre.className} text-3xl text-primary mb-4 text-center`}>
                        Por que começar agora?
                    </h3>
                    <div className="flex flex-col gap-4">
                        <AdvantagesService title="Juros compostos a seu favor" description="Quanto mais cedo você começa, mais o tempo trabalha por você. Os rendimentos se acumulam sobre rendimentos, gerando um crescimento exponencial do seu patrimônio ao longo dos anos." icon={<TrendingUp className="h-6 w-6" />} />
                        <AdvantagesService title="Economia no Imposto de Renda" description="Com o PGBL, você pode deduzir até 12% da sua renda bruta anual na declaração do IR, reduzindo o imposto a pagar agora e construindo patrimônio para o futuro." icon={<ShieldCheck className="h-6 w-6" />} />
                        <AdvantagesService title="Parcelas que cabem no seu orçamento" description="É possível começar com contribuições mensais pequenas e aumentar gradualmente. A disciplina de aportes regulares é mais importante do que o valor inicial." icon={<CalendarCheck className="h-6 w-6" />} />
                        <AdvantagesService title="Proteção para sua família" description="A previdência privada é um dos instrumentos mais eficientes de sucessão patrimonial — o saldo vai diretamente aos beneficiários, sem inventário e com vantagens fiscais." icon={<Users className="h-6 w-6" />} />
                    </div>
                </RevealSection>
            </div>
        </section>
    );
};

export default PrevidenciaExplanation;
