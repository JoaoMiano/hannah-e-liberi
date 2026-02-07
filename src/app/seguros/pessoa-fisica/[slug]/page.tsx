import { ContactSection } from "@/components/layout/CoontactSection";
import { CoverageSection } from "@/components/layout/ServicePage/CoverageSection";
import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import { Servico, servicos } from "@/data/servicos";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const servico = servicos.find(
    (item: Servico) => item.slug === slug
  );

  if (!servico) {
    notFound();
  }

  return (
      <div>
        <HeroSectionService
          title={servico.titulo}
          description={servico.descricao}
          imageUrl={servico.imagemUrl}
        />
        <CoverageSection service={servico} />
        <ContactSection />

      </div>
  );
}

export default Page;