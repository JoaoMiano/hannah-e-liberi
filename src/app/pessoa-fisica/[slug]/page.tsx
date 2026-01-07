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
    <main>
      <h1>Rota dinâmica: {servico.titulo}</h1>
      <p>Detalhes do serviço: {slug}</p>
    </main>
  );
}

export default Page;