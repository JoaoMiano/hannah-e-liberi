export type seguradora = {
    nome: string;
    logoUrl: string;
}

export type duvida = {
    pergunta: string;
    resposta: string;
}

type Cobertura = {
    titulo: string;
    descricao?: string;
}

export type Servico = {
    slug: string;
    type: 'fisica' | 'juridica';
    titulo: string;
    descricao: string;
    imagemUrl: string;
    coberturas: Cobertura[];
    seguradoras: seguradora[];
    duvidasFrequentes: duvida[];
}

export const servicos: Servico[] = [
    {
        slug: "seguro-vida",
        titulo: "Seguro Vida",
        type: "fisica",
        descricao: "Proteja sua família com nosso seguro de vida personalizado.",
        imagemUrl: "/images/hero-images/seguro-vida.jpg",
        coberturas: [
            {
                titulo: "Morte (Qualquer Causa)",
                descricao: "Garante o pagamento de uma indenização aos beneficiários em caso de falecimento do segurado, proporcionando suporte financeiro imediato."
            },
            {
                titulo: "Invalidez por Acidente (IPA)",
                descricao: "Pagamento de indenização total ou parcial caso o segurado sofra um acidente que cause a perda definitiva de funções de membros ou órgãos."
            },
            {
                titulo: "Doenças Graves",
                descricao: "Recebimento de capital em vida ao ser diagnosticado com doenças críticas (como câncer ou infarto), auxiliando nos custos do tratamento e recuperação."
            },
            {
                titulo: "Assistência Funeral",
                descricao: "Cobertura das despesas ou prestação de serviços organizacionais para o sepultamento ou cremação, aliviando a família de burocracias e custos."
            },
            {
                titulo: "Incapacidade Temporária (DIT)",
                descricao: "Ideal para profissionais autônomos: garante o pagamento de diárias caso você precise se afastar do trabalho por ordens médicas devido a doença ou acidente."
            }
        ],
        seguradoras: [
            {
                nome: "Seguradora A",
                logoUrl: "/images/seguradoras/seguradora-a.png"
            }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que é coberto pelo seguro?",
                resposta: "O seguro cobre morte acidental, doenças graves e assistência funeral."
            }
        ]
    },
    {
        slug: "seguro-auto",
        titulo: "Seguro Auto",
        type: "fisica",
        descricao: "Proteja seu veículo com as melhores coberturas do mercado. Oferecemos seguros personalizados com assistência 24h, carro reserva e condições especiais para você dirigir com tranquilidade",
        imagemUrl: "/images/hero-images/seguro-auto.jpg",
        coberturas: [
            {
                titulo: "Seguros para Carro, Moto e Caminhão",
                descricao: "Proteção completa para seu veículo, seja ele um carro, moto ou caminhão, com coberturas personalizadas para atender suas necessidades."
            },
            {
                titulo: "Colisão, Roubo e Furto",
                descricao: "Proteção completa que cobre danos por batidas, incêndio, além de indenização em casos de roubo ou furto do veículo."
            },
            {
                titulo: "Danos a Terceiros (RCF-V)",
                descricao: "Cobre despesas com danos materiais e corporais causados a outras pessoas em acidentes de trânsito sob sua responsabilidade."
            },
            {
                titulo: "Fenômenos da Natureza",
                descricao: "Segurança contra imprevistos climáticos, como enchentes, alagamentos, queda de árvores e chuvas de granizo."
            },
            {
                titulo: "Assistência 24h",
                descricao: "Suporte total em qualquer emergência, incluindo guincho, chaveiro, auxílio mecânico e socorro para pane elétrica."
            },
            {
                titulo: "Carro Reserva",
                descricao: "Mobilidade garantida enquanto seu veículo estiver em reparo, para que você não fique na mão."
            }
        ],
        seguradoras: [
            {
                nome: "Seguradora A",
                logoUrl: "/images/seguradoras/seguradora-a.png"
            }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que é coberto pelo seguro?",
                resposta: "O seguro cobre morte acidental, doenças graves e assistência funeral."
            }
        ]
    }
]