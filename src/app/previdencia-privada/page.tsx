import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import PrevidenciaExplanation from "@/components/layout/ServicePage/PrevidenciaPrivada/PrevidenciaExplanation";
import PrevidenciaComparativo from "@/components/layout/ServicePage/PrevidenciaPrivada/PrevidenciaComparativo";
import PrevidenciaBenefits from "@/components/layout/ServicePage/PrevidenciaPrivada/PrevidenciaBenefits";
import { QuestsSection } from "@/components/layout/ServicePage/QuestsSection";
import ContactSection from "@/components/layout/ContactSection";
import { questsPrevidencia } from "@/constants/servicos/questsPrevidencia";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Previdência Privada | Hannah & Liberi Corretora de Seguros",
    description:
        "Planeje sua aposentadoria com segurança e inteligência fiscal. Conheça os planos PGBL e VGBL e descubra como a previdência privada pode proteger seu patrimônio e sua família.",
    keywords: [
        "previdência privada",
        "PGBL",
        "VGBL",
        "aposentadoria",
        "planejamento financeiro",
        "dedução IR",
        "sucessão patrimonial",
        "portabilidade previdência",
    ],
};

const PrevidenciaPrivada = () => {
    return (
        <main>
            <HeroSectionService
                title="Previdência Privada"
                description="Construa a liberdade financeira que você merece. Planeje sua aposentadoria hoje com inteligência fiscal, proteção patrimonial e tranquilidade para o futuro."
                imageUrl="/images/hero-images/financeiro/previdencia-privada.jpg"
            />

            <PrevidenciaExplanation />

            <PrevidenciaComparativo />

            <PrevidenciaBenefits />

            <QuestsSection quests={questsPrevidencia} />

            <div id="contato">
                <ContactSection />
            </div>
        </main>
    );
};

export default PrevidenciaPrivada;
