import ContactSection from "@/components/layout/CoontactSection";
import CoverageSection from "@/components/layout/ServicePage/CoverageSection";
import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import { InsuranceCompanySection } from "@/components/layout/ServicePage/InsuranceCompanySection";
import { QuestsSection } from "@/components/layout/ServicePage/QuestsSection";
import { Servico } from "@/data/servicos";
import { planos } from "@/data/servicos/planos";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const plano = planos.find(
    (item: Servico) => item.slug === slug
  );

  if (!plano) {
    notFound();
  }

  return (
    <div>
      <HeroSectionService
        title={plano.titulo}
        description={plano.descricao}
        imageUrl={plano.imageUrl}
      />
      <CoverageSection service={plano} />
      <InsuranceCompanySection service={plano} />
      <QuestsSection quests={plano.duvidasFrequentes} />
      <div id="contato">
        <ContactSection />
      </div>

    </div>
  );
}

export default Page;