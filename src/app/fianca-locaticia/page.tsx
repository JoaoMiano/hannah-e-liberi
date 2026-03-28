import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import FiancaExplanation from "@/components/layout/ServicePage/FiancaLocaticia/FiancaExplanation";
import FiancaBeneficiosStack from "@/components/layout/ServicePage/FiancaLocaticia/FiancaBeneficiosStack";
import { QuestsSection } from "@/components/layout/ServicePage/QuestsSection";
import ContactSection from "@/components/layout/ContactSection";
import { questsFiancaLocaticia } from "@/constants/servicos/questsFiancaLocaticia";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fiança Locatícia | Hannah & Liberi Corretora de Seguros",
    description:
        "Alugue sem fiador e com total segurança. Conheça a fiança locatícia — a garantia de aluguel que protege inquilinos e proprietários com agilidade, respaldo jurídico e cobertura completa.",
    keywords: [
        "fiança locatícia",
        "garantia de aluguel",
        "seguro fiança",
        "aluguel sem fiador",
        "proteção locatícia",
        "seguro locatício",
        "garantia locatícia",
        "inadimplência aluguel",
    ],
};

const FiancaLocaticia = () => {
    return (
        <main>
            <HeroSectionService
                title="Fiança Locatícia"
                description="Alugue sem fiador e sem burocracia. A garantia que protege inquilinos e proprietários com segurança jurídica, cobertura ampla e tranquilidade do início ao fim do contrato."
                imageUrl="/images/hero-images/financeiro/fianca-locaticia.jpg"
            />

            <FiancaExplanation />

            <FiancaBeneficiosStack />

            <QuestsSection quests={questsFiancaLocaticia} />

            <div id="contato">
                <ContactSection />
            </div>
        </main>
    );
};

export default FiancaLocaticia;
