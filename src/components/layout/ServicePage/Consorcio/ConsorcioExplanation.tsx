import AdvantagesService from "@/components/AdvantagesService";
import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { BadgeDollarSign, Calculator, Clock, Trophy } from "lucide-react";

const ConsorcioExplanation = () => {
    return (
        <section className="container mx-auto py-12 px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Explicação do Consórcio */}
                <RevealSection variant="left" className="flex-1 text-center">
                    <h2 className={`${abhayaLibre.className} text-4xl md:text-5xl text-primary mb-4 text-center`}>O que é o Consórcio?</h2>
                    <div className="flex flex-col gap-4 text-md md:text-lg text-zinc-800 text-justify">
                        <p>O <strong>consórcio</strong> é uma modalidade de compra coletiva e planejada, regulamentada pelo Banco Central do Brasil, que permite a aquisição de bens e serviços de forma programada e sem a incidência de juros.</p>
                        <p>Na prática, funciona assim: um grupo de pessoas com o mesmo objetivo de compra se reúne através de uma administradora autorizada. Cada participante paga parcelas mensais que formam um fundo comum usado para contemplar os membros do grupo.</p>
                        <p>A contemplação acontece de duas formas: por <strong>sorteio mensal</strong>, onde todos os participantes adimplentes têm chances iguais, ou por <strong>lance</strong>, onde você pode ofertar um valor adicional para antecipar o recebimento da sua carta de crédito.</p>
                        <p>Ao ser contemplado, você recebe uma <strong>carta de crédito</strong> no valor contratado, que pode ser utilizada para comprar o bem à vista, garantindo maior poder de negociação e desconto junto ao vendedor.</p>
                    </div>
                </RevealSection>

                {/* Características */}
                <RevealSection variant="right" delay={120} className="p-6 bg-primary/10 rounded-xl mt-8 md:mt-0 shrink-0 md:flex-1">
                    <h3 className={`${abhayaLibre.className} text-3xl text-primary mb-4 text-center`}>Principais vantagens</h3>
                    <div className="flex flex-col gap-4">
                        <AdvantagesService title="Sem cobranças de juros" description="Diferente do financiamento tradicional, no consórcio você não paga juros. Existe apenas uma taxa de administração, que é significativamente menor do que os juros cobrados em outras modalidades de crédito." icon={<BadgeDollarSign className="h-6 w-6" />} />
                        <AdvantagesService title="Parcelas acessíveis" description="Você escolhe o valor da carta de crédito e o prazo de pagamento, permitindo que as parcelas se adequem ao seu orçamento mensal sem comprometer suas finanças." icon={<Calculator className="h-6 w-6" />} />
                        <AdvantagesService title="Poder de compra à vista" description="Com a carta de crédito em mãos, você compra o bem à vista, podendo negociar descontos e melhores condições diretamente com o vendedor." icon={<Trophy className="h-6 w-6" />} />
                        <AdvantagesService title="Flexibilidade na contemplação" description="Você pode aguardar o sorteio mensal ou ofertar lances para antecipar sua contemplação. O lance pode ser feito com recursos próprios ou utilizando parte do próprio crédito (lance embutido)." icon={<Clock className="h-6 w-6" />} />
                    </div>
                </RevealSection>
            </div>
        </section>
    );
};

export default ConsorcioExplanation;
