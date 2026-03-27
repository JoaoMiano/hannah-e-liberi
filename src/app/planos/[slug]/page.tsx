import ContactSection from "@/components/layout/ContactSection";
import CoverageSection from "@/components/layout/ServicePage/CoverageSection";
import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import { InsuranceCompanySection } from "@/components/layout/ServicePage/InsuranceCompanySection";
import { QuestsSection } from "@/components/layout/ServicePage/QuestsSection";
import { Servico } from "@/constants/servicos";
import { planos } from "@/constants/servicos/planos";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plano = planos.find((item: Servico) => item.slug === slug);

  return {
    title: plano
      ? `${plano.titulo} | Hannah & Liberi`
      : "Plano não encontrado",
    description: plano?.descricao,
  };
}

export function generateStaticParams() {
  return planos.map((p) => ({ slug: p.slug }));
}

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