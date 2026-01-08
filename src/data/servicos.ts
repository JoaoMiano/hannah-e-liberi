export type seguradora = {
    nome: string;
    logoUrl: string;
}

export type duvidaFrequente = {
    pergunta: string;
    resposta: string;
}

export type Servico = {
    slug: string;
    titulo: string;
    descricao: string;
    imagemUrl: string;
    beneficios: string[];
    seguradoras: seguradora[];
    duvidasFrequentes: duvidaFrequente[];
}

export const servicos: Servico[] = [
    {
        slug: "seguro-vida",
        titulo: "Seguro de Vida",
        descricao: "Proteja sua família com nosso seguro de vida personalizado.",
        imagemUrl: "/images/hero-images/seguro-vida.jpg",
        beneficios: [
            "Proteção financeira para sua família",
            "Cobertura para doenças graves",
            "Assistência funeral"
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
        titulo: "Seguro de Auto",
        descricao: "Proteção completa para seu veículo em caso de acidentes.",
        imagemUrl: "/images/hero-images/seguro-auto.jpg",
        beneficios: [
            "Proteção financeira para sua família",
            "Cobertura para doenças graves",
            "Assistência funeral"
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