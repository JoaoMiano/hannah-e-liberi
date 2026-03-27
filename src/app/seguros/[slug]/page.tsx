import { ContactSection } from "@/components/layout/ContactSection";
import { CoverageSection } from "@/components/layout/ServicePage/CoverageSection";
import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import { InsuranceCompanySection } from "@/components/layout/ServicePage/InsuranceCompanySection";
import { QuestsSection } from "@/components/layout/ServicePage/QuestsSection";
import { Servico } from "@/constants/servicos";
import { seguros } from "@/constants/servicos/seguros";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seguro = seguros.find((item: Servico) => item.slug === slug);

  return {
    title: seguro
      ? `${seguro.titulo} | Hannah & Liberi`
      : "Seguro não encontrado",
    description: seguro?.descricao,
  };
}

export function generateStaticParams() {
  return seguros.map((s) => ({ slug: s.slug }));
}

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