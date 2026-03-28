import AdvantagesService from "@/components/AdvantagesService";
import { RevealSection } from "@/components/RevealSection";
import { abhayaLibre } from "@/fonts/fonts";
import { FileCheck, HandshakeIcon, ShieldCheck, Zap } from "lucide-react";

const FiancaExplanation = () => {
    return (
        <section aria-labelledby="o-que-e-fianca" className="container mx-auto py-12 px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* O que é Fiança Locatícia */}
                <RevealSection variant="left" className="text-center md:text-left flex-1">
                    <h2 id="o-que-e-fianca" className={`${abhayaLibre.className} text-4xl md:text-5xl text-primary mb-4 text-center`}>
                        O que é Fiança Locatícia?
                    </h2>
                    <div className="flex flex-col gap-4 text-md md:text-lg text-zinc-800 text-justify">
                        <p>A <strong>fiança locatícia</strong> é uma modalidade de garantia de aluguel regulamentada pela Lei do Inquilinato (Lei 8.245/91), que substitui o fiador pessoa física por uma apólice emitida por uma seguradora autorizada pela SUSEP.</p>
                        <p>Ao contratar, o inquilino apresenta ao proprietário uma garantia sólida e respaldada: caso haja inadimplência, a seguradora assume o pagamento dos aluguéis e encargos em aberto, sem que o proprietário precise recorrer a processos judiciais desgastantes.</p>
                        <p>Para o inquilino, o benefício é a <strong>desburocratização</strong> — não é mais necessário encontrar um fiador disposto a assumir a responsabilidade, o que muitas vezes trava a locação. Com a análise de crédito do locatário, a seguradora emite a apólice de forma ágil.</p>
                        <p>Para o proprietário, significa <strong>segurança jurídica e financeira</strong>: recebimento garantido mesmo em casos de vacância por inadimplência, proteção de danos ao imóvel e suporte de especialistas em caso de rescisão contratual.</p>
                    </div>
                </RevealSection>

                {/* Destaques */}
                <RevealSection variant="right" delay={120} className="p-6 bg-primary/10 rounded-xl mt-8 md:mt-0 shrink-0 flex-1">
                    <h3 className={`${abhayaLibre.className} text-3xl text-primary mb-4 text-center`}>
                        Por que escolher a fiança locatícia?
                    </h3>
                    <div className="flex flex-col gap-4">
                        <AdvantagesService title="Sem fiador, sem burocracia" description="Elimine a necessidade de buscar um fiador pessoa física. A apólice de seguro substitui essa exigência com mais agilidade e segurança para todas as partes." icon={<HandshakeIcon className="h-6 w-6" />} />
                        <AdvantagesService title="Processo rápido e digital" description="A análise de crédito e emissão da apólice são feitas de forma ágil, sem papelada excessiva — permitindo que a locação seja fechada em dias, não semanas." icon={<Zap className="h-6 w-6" />} />
                        <AdvantagesService title="Cobertura ampla e flexível" description="Além do aluguel, a apólice pode cobrir IPTU, condomínio, danos ao imóvel e encargos contratuais, conforme o plano escolhido." icon={<ShieldCheck className="h-6 w-6" />} />
                        <AdvantagesService title="Previsto em lei" description="A fiança locatícia é uma garantia legalmente reconhecida pela Lei do Inquilinato, conferindo segurança jurídica ao contrato de locação de ponta a ponta." icon={<FileCheck className="h-6 w-6" />} />
                    </div>
                </RevealSection>
            </div>
        </section>
    );
};

export default FiancaExplanation;
