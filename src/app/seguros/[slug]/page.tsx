import { ContactSection } from "@/components/layout/CoontactSection";
import { CoverageSection } from "@/components/layout/ServicePage/CoverageSection";
import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import { InsuranceCompanySection } from "@/components/layout/ServicePage/InsuranceCompanySection";
import { QuestsSection } from "@/components/layout/ServicePage/QuestsSection";
import { Servico } from "@/data/servicos";
import { seguros } from "@/data/servicos/seguros";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const seguro = seguros.find(
    (item: Servico) => item.slug === slug
  );

  if (!seguro) {
    notFound();
  }

  return (
    <div>
      <HeroSectionService
        title={seguro.titulo}
        description={seguro.descricao}
        imageUrl={seguro.imageUrl}
      />
      <CoverageSection service={seguro} />
      <InsuranceCompanySection service={seguro} />
      <QuestsSection quests={seguro.duvidasFrequentes} />
      <div id="contato">
        <ContactSection />
      </div>

    </div>
  );
}

export default Page;