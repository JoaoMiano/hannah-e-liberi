import { Cobertura, Company, Quest } from "@/types/services";

export type Plano = {
    slug: string;
    type: 'fisica' | 'juridica';
    titulo: string;
    descricao: string;
    imageUrl: string;
    coberturas: Cobertura[];
    seguradoras: Company[];
    duvidasFrequentes: Quest[];
}

export const planos: Plano[] = [
    //plano odontologico - pessoa fisica
    {
        slug: "plano-odontologico",
        titulo: "Plano Odontológico",
        type: "fisica",
        descricao: "Cuide do seu sorriso com um plano odontológico completo, com cobertura para consultas, limpezas, tratamentos e urgências. Atendimento rápido, ampla rede credenciada e a tranquilidade de manter a saúde bucal sempre em dia.",
        imageUrl: "/images/hero-images/planos/plano-odontologico.jpg",
        coberturas: [
            {
                titulo: "Consultas e Avaliações",
                descricao: "Consultas odontológicas para avaliação da saúde bucal, diagnóstico e orientação preventiva com dentistas especializados."
            },
            {
                titulo: "Limpeza e Prevenção",
                descricao: "Cobertura para limpezas, aplicação de flúor e orientações de higiene bucal para prevenir cáries e doenças gengivais."
            },
            {
                titulo: "Restaurações",
                descricao: "Tratamento de cáries com restaurações em resina para recuperar a função e estética dos dentes."
            },
            {
                titulo: "Tratamento de Canal",
                descricao: "Cobertura para tratamento de canal (endodontia), eliminando infecções e preservando o dente natural."
            },
            {
                titulo: "Extrações",
                descricao: "Remoção de dentes quando necessário, incluindo dentes do siso conforme indicação profissional."
            },
            {
                titulo: "Radiografias",
                descricao: "Exames radiográficos para diagnóstico preciso e acompanhamento de tratamentos odontológicos."
            },
            {
                titulo: "Urgência e Emergência",
                descricao: "Atendimento odontológico de urgência para dores intensas, fraturas dentárias ou outros problemas inesperados."
            }
        ],
        seguradoras: [
            { alt: "Amil Dental", src: "/images/seguradoras/amil-dental.png" },
            { alt: "Bradesco Dental", src: "/images/seguradoras/bradesco-dental.png" },
            { alt: "MetLife", src: "/images/seguradoras/metlife.png" },
            { alt: "OdontoPrev", src: "/images/seguradoras/odontoprev.png" },
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.png" },
            { alt: "Uniodonto", src: "/images/seguradoras/uniodonto.png" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que um plano odontológico cobre?",
                resposta: "A maioria dos planos odontológicos cobre consultas, limpezas, restaurações, radiografias, extrações e tratamentos básicos conforme o rol mínimo da ANS."
            },
            {
                pergunta: "Plano odontológico tem carência?",
                resposta: "Sim. Normalmente há prazos de carência para alguns procedimentos, mas atendimentos de urgência costumam ter liberação mais rápida."
            },
            {
                pergunta: "Posso usar o plano logo após contratar?",
                resposta: "Alguns procedimentos simples podem ser liberados rapidamente, mas tratamentos mais complexos podem exigir o cumprimento da carência prevista em contrato."
            },
            {
                pergunta: "O plano cobre aparelho ortodôntico?",
                resposta: "Depende do plano contratado. Alguns planos cobrem apenas a manutenção básica, enquanto outros incluem documentação e tratamento ortodôntico."
            },
            {
                pergunta: "Posso escolher qualquer dentista?",
                resposta: "Os atendimentos são realizados por profissionais dentro da rede credenciada do plano, garantindo qualidade e custo reduzido."
            }
        ]
    },
    //plano de saúde - pessoa fisica
    {
        slug: "plano-saude",
        titulo: "Plano de Saúde",
        type: "fisica",
        descricao: "Proteja o que é mais importante com um plano de saúde sob medida. Tenha acesso às melhores redes de hospitais, laboratórios e especialistas, garantindo atendimento ágil e de qualidade para você e sua família.",
        imageUrl: "/images/hero-images/planos/plano-saude.jpg",
        coberturas: [
            {
                titulo: "Consultas Médicas",
                descricao: "Acesso a uma ampla rede de médicos especialistas para consultas eletivas em consultórios e clínicas."
            },
            {
                titulo: "Exames Laboratoriais e Imagem",
                descricao: "Cobertura completa para exames de sangue, radiografias, ultrassonografias, ressonâncias e muito mais."
            },
            {
                titulo: "Internações e Cirurgias",
                descricao: "Suporte total para internações hospitalares, procedimentos cirúrgicos e acompanhamento pós-operatório."
            },
            {
                titulo: "Pronto-Socorro 24h",
                descricao: "Atendimento de urgência e emergência em hospitais credenciados a qualquer hora do dia ou da noite."
            },
            {
                titulo: "Maternidade e Parto",
                descricao: "Acompanhamento pré-natal completo e assistência integral à mãe e ao bebê durante o parto."
            },
            {
                titulo: "Terapias Especializadas",
                descricao: "Sessões de fisioterapia, fonoaudiologia, psicoterapia e terapia ocupacional conforme indicação médica."
            }
        ],
        seguradoras: [
            { alt: "Amil", src: "/images/seguradoras/amil.png" },
            { alt: "Bradesco Saúde", src: "/images/seguradoras/bradesco-saude.png" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.png" },
            { alt: "Unimed", src: "/images/seguradoras/unimed.png" },
            { alt: "NotreDame Intermédica", src: "/images/seguradoras/gndi.png" },
            { alt: "Seguros Unimed", src: "/images/seguradoras/seguros-unimed.png" },
            { alt: "Porto Saúde", src: "/images/seguradoras/porto.svg" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que é carência no plano de saúde?",
                resposta: "É o tempo que você precisa esperar após contratar o plano para utilizar determinados serviços, como cirurgias ou exames complexos."
            },
            {
                pergunta: "Qual a diferença entre plano com e sem coparticipação?",
                resposta: "No plano com coparticipação, a mensalidade é menor e você paga uma pequena taxa ao usar serviços. Sem coparticipação, o valor mensal é fixo, independente do uso."
            },
            {
                pergunta: "O plano cobre atendimento em todo o Brasil?",
                resposta: "Depende da abrangência contratada. Existem planos com cobertura regional (cidades específicas) ou nacional."
            },
            {
                pergunta: "Posso incluir dependentes no meu plano?",
                resposta: "Sim, geralmente é possível incluir cônjuges, filhos e, em alguns casos, dependentes diretos como pais ou irmãos, dependendo da operadora."
            }
        ]
    },
    //pet - pessoa fisica
    {
        slug: "pet-saude",
        titulo: "Petlove Saúde",
        type: "fisica",
        descricao: "O cuidado que seu melhor amigo merece. Com o plano de saúde Petlove, você garante assistência veterinária completa, de vacinas a cirurgias, com a tranquilidade de uma rede credenciada de confiança e atendimento especializado.",
        imageUrl: "/images/hero-images/planos/petlove-saude.jpg",
        coberturas: [
            {
                titulo: "Consultas e Urgências",
                descricao: "Atendimento com clínicos gerais e suporte 24h para casos de urgência e emergência em clínicas parceiras."
            },
            {
                titulo: "Vacinas e Prevenção",
                descricao: "Cobertura das principais vacinas (V8/V10, Antirrábica) e exames de rotina para manter a saúde em dia."
            },
            {
                titulo: "Exames Laboratoriais",
                descricao: "Realização de exames de sangue, fezes, urina e diagnósticos por imagem para check-ups precisos."
            },
            {
                titulo: "Especialistas",
                descricao: "Acesso a veterinários especializados como cardiologistas, dermatologistas e ortopedistas sob encaminhamento."
            },
            {
                titulo: "Cirurgias e Internações",
                descricao: "Segurança total para procedimentos cirúrgicos programados e suporte hospitalar completo se o pet precisar."
            },
            {
                titulo: "Limpeza de Tártaro",
                descricao: "Tratamento preventivo bucal para evitar infecções e garantir a saúde dentária do seu cão ou gato."
            }
        ],
        seguradoras: [
            { alt: "Petlove", src: "/images/seguradoras/petlove.png" },
            { alt: "Porto Pet", src: "/images/seguradoras/porto-pet.png" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Existe limite de idade para o pet entrar no plano?",
                resposta: "Não! A Petlove aceita pets de todas as idades, desde filhotes até os mais idosos, sem restrição de entrada."
            },
            {
                pergunta: "O plano tem carência?",
                resposta: "Sim, existem prazos de carência que variam conforme o procedimento, mas atendimentos de urgência possuem os prazos mais curtos."
            },
            {
                pergunta: "Como encontro uma clínica próxima?",
                resposta: "A busca é feita diretamente pelo aplicativo da Petlove, onde você filtra por localização e especialidade dentro da rede credenciada."
            },
            {
                pergunta: "O plano Petlove cobre castração?",
                resposta: "Sim, a castração está inclusa na maioria dos planos, respeitando o período de carência contratual."
            },
            {
                pergunta: "Preciso pagar algo na hora da consulta?",
                resposta: "Depende do plano: alguns possuem coparticipação (um valor fixo reduzido por uso) e outros oferecem cobertura integral sem taxas extras."
            }
        ]
    },
    // saúde empresarial (pessoa jurídica)
    {
        slug: "saude-empresarial",
        titulo: "Saúde Empresarial",
        type: "juridica",
        descricao: "Ofereça cobertura médica de qualidade para seus colaboradores com planos empresariais que incluem consultas, exames e internações.",
        imageUrl: "/images/hero-images/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Consultas e Exames",
                descricao: "Acesso a médicos especialistas e exames laboratoriais sem burocracia para os colaboradores."
            },
            {
                titulo: "Internações e Cirurgias",
                descricao: "Cobertura para procedimentos hospitalares e cirúrgicos, com direito a acomodação conforme plano."
            },
            {
                titulo: "Atendimento de Emergência",
                descricao: "Pronto-socorro disponível 24h em hospitais e clínicas credenciadas."
            },
            {
                titulo: "Programas de Bem-Estar",
                descricao: "Iniciativas de prevenção, saúde mental e qualidade de vida para reduzir absenteísmo e aumentar a produtividade."
            }
        ],
        seguradoras: [
            { alt: "Amil", src: "/images/seguradoras/amil.png" },
            { alt: "Bradesco Saúde", src: "/images/seguradoras/bradesco-saude.png" },
            { alt: "Unimed", src: "/images/seguradoras/unimed.png" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Qual a diferença entre plano individual e empresarial?",
                resposta: "O empresarial costuma ter preços mais competitivos por conta do volume e exige número mínimo de colaboradores para contratação."
            },
            {
                pergunta: "Posso incluir dependentes no plano empresarial?",
                resposta: "Sim, a maioria dos planos permite incluir dependentes como cônjuges e filhos, com variação no valor da mensalidade."
            },
            {
                pergunta: "Como é feito o reembolso de consultas?",
                resposta: "Alguns planos oferecem reembolso mediante apresentação de notas fiscais e relatórios, caso o atendimento não seja em rede credenciada."
            }
        ]
    },
    // odonto pme (pessoa jurídica)
    {
        slug: "odonto-pme",
        titulo: "Odonto PME",
        type: "juridica",
        descricao: "Cuide do sorriso dos seus colaboradores com um plano odontológico empresarial que oferece ampla cobertura e rede credenciada.",
        imageUrl: "/images/hero-images/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Atendimentos de Rotina",
                descricao: "Consultas, limpezas e radiografias para manter a saúde bucal em dia."
            },
            {
                titulo: "Tratamentos Restauradores",
                descricao: "Restaurações, extrações e tratamentos de canal com profissionais qualificados."
            },
            {
                titulo: "Ortodontia e Próteses",
                descricao: "Opções de cobertura para aparelhos ortodônticos e próteses, dependendo do plano contratado."
            },
            {
                titulo: "Urgência e Emergência",
                descricao: "Atendimentos de urgência odontológica para aliviar dores e tratar fraturas de forma rápida."
            }
        ],
        seguradoras: [
            { alt: "OdontoPrev", src: "/images/seguradoras/odontoprev.png" },
            { alt: "Bradesco Dental", src: "/images/seguradoras/bradesco-dental.png" },
            { alt: "Uniodonto", src: "/images/seguradoras/uniodonto.png" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O plano cobre procedimentos estéticos?",
                resposta: "Em geral, planos empresariais cobrem procedimentos de saúde bucal, e procedimentos estéticos podem exigir cobertura adicional."
            },
            {
                pergunta: "Como incluir novos colaboradores no plano?",
                resposta: "A inclusão é feita pela empresa junto à operadora, normalmente com um prazo para início da cobertura após o cadastro."
            },
            {
                pergunta: "Há carência para tratamentos?",
                resposta: "Sim, alguns procedimentos têm carência, mas atendimentos de urgência costumam ser liberados mais rapidamente."
            }
        ]
    },
    // vida empresarial (pessoa jurídica)
    {
        slug: "vida-empresarial",
        titulo: "Vida Empresarial",
        type: "juridica",
        descricao: "Ofereça tranquilidade aos seus colaboradores e familiares com um seguro de vida empresarial que protege contra imprevistos.",
        imageUrl: "/images/hero-images/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Morte por Qualquer Causa",
                descricao: "Indenização aos beneficiários em caso de falecimento do empregado, independente da causa."
            },
            {
                titulo: "Invalidez por Acidente",
                descricao: "Cobertura para invalidez total ou parcial decorrente de acidentes, com pagamento de capital."
            },
            {
                titulo: "Doenças Graves",
                descricao: "Pagamento antecipado de parte do capital em caso de diagnóstico de doenças graves previstas no contrato."
            },
            {
                titulo: "Assistência Funeral",
                descricao: "Cobertura de despesas com funeral para dar suporte à família no momento delicado."
            }
        ],
        seguradoras: [
            { alt: "Metlife", src: "/images/seguradoras/metlife.jpg" },
            { alt: "Mapfre", src: "/images/seguradoras/mapfre.png" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.webp" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O seguro precisa ter funcionários específicos para ser contratado?",
                resposta: "Geralmente há um número mínimo de colaboradores para contratar o seguro empresarial, mas isso varia conforme a seguradora."
            },
            {
                pergunta: "Quem pode ser beneficiário?",
                resposta: "Os benefícios são pagos aos beneficiários indicados pelo colaborador, como cônjuge, filhos ou outros dependentes."
            },
            {
                pergunta: "O colaborador pode alterar o beneficiário?",
                resposta: "Sim, é comum que o segurado possa alterar a indicação de beneficiários ao longo do tempo."
            }
        ]
    },
]