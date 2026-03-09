import { Cobertura, Company, Quest } from "@/types/services";





export type Servico = {
    slug: string;
    type: 'fisica' | 'juridica';
    titulo: string;
    descricao: string;
    imageUrl: string;
    coberturas: Cobertura[];
    seguradoras: Company[];
    duvidasFrequentes: Quest[];
}

export const servicos: Servico[] = [
    // consórcio (pessoa física + jurídica)
    {
        slug: "consorcio",
        titulo: "Consórcio",
        type: "fisica",
        descricao: "Planeje grandes aquisições com parcelas que cabem no seu bolso. O consórcio é uma forma organizada e econômica de comprar imóveis, veículos ou serviços sem juros.",
        imageUrl: "/images/hero-images/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Carta de Crédito Personalizada",
                descricao: "Escolha o valor do crédito que melhor se adapta ao seu objetivo e faça uso do montante ao ser contemplado."
            },
            {
                titulo: "Administradora Regulamentada",
                descricao: "Trabalhamos com administradoras autorizadas pelo Banco Central, garantindo transparência e segurança durante todo o plano."
            },
            {
                titulo: "Lances e Sorteios",
                descricao: "Acelere sua contemplação com lances ou aguarde ser sorteado; você decide o melhor caminho para conquistar seu bem."
            },
            {
                titulo: "Flexibilidade de Prazos",
                descricao: "Planos com prazos variados que se adaptam ao seu orçamento e ao seu planejamento financeiro."
            }
        ],
        seguradoras: [
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Bradesco", src: "/images/seguradoras/bradesco.svg" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.webp" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O consórcio é uma forma de financiamento?",
                resposta: "Não. No consórcio você paga parcelas para formar um grupo que se ajuda mutuamente; não há cobrança de juros, apenas taxa de administração."
            },
            {
                pergunta: "Como sei quando serei contemplado?",
                resposta: "A contemplação pode ocorrer por sorteio ou por lance. Você escolhe se deseja ofertar um lance para antecipar a entrega da carta de crédito."
            },
            {
                pergunta: "Posso usar o consórcio para comprar diferentes tipos de bens?",
                resposta: "Sim. Existem cartas de crédito específicas para imóveis, veículos e serviços (como reforma), que podem ser utilizadas dentro das regras do plano."
            }
        ]
    },
    // previdência privada (pessoa física)
    {
        slug: "previdencia",
        titulo: "Previdência Privada",
        type: "fisica",
        descricao: "Garanta estabilidade financeira no futuro com um plano de previdência que se adapta ao seu ritmo de vida e ao seu momento profissional.",
        imageUrl: "/images/hero-images/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Acumulação Programada",
                descricao: "Contribuições mensais que formam um capital para complementar a aposentadoria ou alcançar objetivos de longo prazo."
            },
            {
                titulo: "Benefício por Sobrevivência",
                descricao: "Receba uma renda mensal ou saque o valor acumulado ao atingir a idade ou o prazo definidos no contrato."
            },
            {
                titulo: "Cobertura por Invalidez",
                descricao: "Em casos de invalidez total ou parcial, o plano pode liberar o capital acumulado ou pagar uma renda adicional ao participante."
            },
            {
                titulo: "Vantagens Fiscais",
                descricao: "Em planos PGBL e VGBL, há benefícios fiscais que ajudam a otimizar o seu investimento para o futuro."
            }
        ],
        seguradoras: [
            { alt: "Itaú", src: "/images/seguradoras/itau.jpg" },
            { alt: "Bradesco", src: "/images/seguradoras/bradesco.svg" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.webp" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Qual a diferença entre PGBL e VGBL?",
                resposta: "No PGBL você deduz as contribuições do imposto de renda, ideal para quem faz declaração completa; no VGBL o imposto é cobrado sobre o rendimento, planejado para quem faz declaração simplificada."
            },
            {
                pergunta: "Posso resgatar o valor antes da aposentadoria?",
                resposta: "Sim, mas pode haver cobrança de taxas e tributação, dependendo do prazo e do regime de tributação escolhido."
            },
            {
                pergunta: "O plano de previdência é seguro?",
                resposta: "Sim, é regulado pela SUSEP e conta com regras claras sobre garantias e liquidez, além de oferecer diferentes perfis de investimento conforme seu apetite de risco."
            }
        ]
    },
    // fiança locatícia (pessoa jurídica)
    {
        slug: "fianca-locaticia",
        titulo: "Fiança Locatícia",
        type: "juridica",
        descricao: "Garantia de aluguel para empresas e locadores, substituindo o fiador e facilitando a locação de imóveis comerciais.",
        imageUrl: "/images/hero-images/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Garantia de Aluguel",
                descricao: "Pagamento do aluguel em caso de inadimplência do locatário, conforme valores e prazos definidos em contrato."
            },
            {
                titulo: "Cobertura de Danos ao Imóvel",
                descricao: "Reembolso por danos causados ao imóvel pelo locatário que extrapolem o desgaste natural."
            },
            {
                titulo: "Despesas Jurídicas",
                descricao: "Cobertura de custos relacionados a processos de despejo ou cobranças judiciais."
            },
            {
                titulo: "Assistência na Locação",
                descricao: "Suporte no processo de análise cadastral e emissão da garantia, para agilizar a formalização do contrato."
            }
        ],
        seguradoras: [
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" },
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Qual a diferença entre fiança locatícia e seguro fiança?",
                resposta: "No Brasil, os termos são usados de forma similar: ambos substituem o fiador e garantem o pagamento do aluguel em caso de inadimplência."
            },
            {
                pergunta: "Como funciona a análise do locatário?",
                resposta: "A seguradora analisa o histórico financeiro e cadastral do locatário para aprovar ou não a garantia do contrato."
            },
            {
                pergunta: "O valor pago é devolvido ao final do contrato?",
                resposta: "Não. A taxa paga é o custo do serviço de garantia; só é reembolsado se houver saldo não utilizado em caso de sinistro."
            }
        ]
    }

]