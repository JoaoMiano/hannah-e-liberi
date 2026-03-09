import { Cobertura, Company, Quest } from "@/types/services";

export type Seguro = {
    slug: string;
    type: 'fisica' | 'juridica';
    titulo: string;
    descricao: string;
    imageUrl: string;
    coberturas: Cobertura[];
    seguradoras: Company[];
    duvidasFrequentes: Quest[];
}

export const seguros: Seguro[] = [
    //vida (pessoa física)
    {
        slug: "seguro-vida",
        titulo: "Seguro Vida",
        type: "fisica",
        descricao: "Proteja sua família com nosso seguro de vida personalizado.",
        imageUrl: "/images/hero-images/seguros/seguro-vida.jpg",
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
            { alt: "Akad", src: "/images/seguradoras/akad.PNG" },
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" },
            { alt: "HDI", src: "/images/seguradoras/hdi.webp" },
            { alt: "Itaú", src: "/images/seguradoras/itau.jpg" },
            { alt: "Mapfre", src: "/images/seguradoras/mapfre.png" },
            { alt: "Metlife", src: "/images/seguradoras/metlife.jpg" },
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Pottencial", src: "/images/seguradoras/pottencial.png" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.webp" },
            { alt: "Sura", src: "/images/seguradoras/sura.png" },
            { alt: "Tokio Marine", src: "/images/seguradoras/tokio.svg" },
            { alt: "Unimed Seguros", src: "/images/seguradoras/unimed.png" },
            { alt: "Yelum", src: "/images/seguradoras/yelum.webp" },
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" },
            { alt: "Bradesco", src: "/images/seguradoras/bradesco.svg" },
        ],
        duvidasFrequentes: [
            {
                pergunta: "O seguro de vida serve apenas para casos de morte?",
                resposta: "Não. O seguro de vida moderno oferece coberturas para serem usadas em vida, como indenização por invalidez (total ou parcial), diagnóstico de doenças graves (como câncer ou infarto) e até diárias de internação hospitalar."
            },
            {
                pergunta: "Quem recebe a indenização precisa pagar imposto ou passar por inventário?",
                resposta: "Não. De acordo com a legislação brasileira, o seguro de vida não é considerado herança. Por isso, o valor é pago diretamente aos beneficiários, livre de impostos e sem precisar passar pelo processo burocrático de inventário."
            },
            {
                pergunta: "Posso escolher qualquer pessoa como beneficiário?",
                resposta: "Sim. Você tem total liberdade para escolher quem receberá a indenização (familiares, amigos ou parceiros) e pode alterar essa indicação a qualquer momento na sua apólice."
            },
            {
                pergunta: "Existe carência para começar a usar o seguro?",
                resposta: "Para acidentes pessoais, a cobertura costuma ser imediata após a aceitação da proposta. Para morte natural ou doenças, algumas seguradoras podem aplicar carências que variam de 60 a 90 dias, dependendo do contrato."
            },
            {
                pergunta: "O que acontece se eu quiser cancelar o seguro?",
                resposta: "O cancelamento pode ser feito a qualquer momento sem multas. No entanto, nos seguros tradicionais, o valor pago não é devolvido. A exceção são os seguros de 'Vida Resgatável', que permitem retirar uma parte do montante após um período determinado."
            }
        ]
    },
    //auto (pessoa física)
    {
        slug: "seguro-auto",
        titulo: "Seguro Auto",
        type: "fisica",
        descricao: "Proteja seu veículo com as melhores coberturas do mercado. Oferecemos seguros personalizados com assistência 24h, carro reserva e condições especiais para você dirigir com tranquilidade",
        imageUrl: "/images/hero-images/seguros/seguro-auto.jpg",
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
            { alt: "Akad", src: "/images/seguradoras/akad.PNG" },
            { alt: "Aliro", src: "/images/seguradoras/aliro.png" },
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" },
            { alt: "Azul", src: "/images/seguradoras/azul.png" },
            { alt: "Bradesco", src: "/images/seguradoras/bradesco.svg" },
            { alt: "HDI", src: "/images/seguradoras/hdi.webp" },
            { alt: "Itaú", src: "/images/seguradoras/itau.jpg" },
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Suhai", src: "/images/seguradoras/suhai.webp" },
            { alt: "Sura", src: "/images/seguradoras/sura.png" },
            { alt: "Tokio Marine", src: "/images/seguradoras/tokio.svg" },
            { alt: "Yelum", src: "/images/seguradoras/yelum.webp" },
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que é a franquia e quando eu preciso pagá-la?",
                resposta: "A franquia é a participação obrigatória do segurado em caso de danos parciais no veículo (consertos). Você paga o valor fixado na apólice diretamente à oficina, e a seguradora cobre o restante. Em casos de perda total, roubo/furto ou danos a terceiros, você não paga franquia."
            },
            {
                pergunta: "O seguro cobre qualquer pessoa que estiver dirigindo meu carro?",
                resposta: "Depende da sua apólice. Geralmente, condutores eventuais estão cobertos, mas pessoas que dirigem o veículo regularmente (ex: filhos ou cônjuges) devem ser listadas como condutores adicionais para garantir que a cobertura seja válida em caso de sinistro."
            },
            {
                pergunta: "Qual a diferença entre cobertura de Terceiros e cobertura Completa?",
                resposta: "A cobertura de Terceiros (RCF-V) indeniza apenas danos materiais ou corporais que você causar a outros veículos ou pessoas. Já a cobertura Completa (Compreensiva) protege o seu próprio veículo contra colisão, incêndio, roubo e furto, além de incluir a cobertura para terceiros."
            },
            {
                pergunta: "Como funciona a Classe de Bônus na renovação?",
                resposta: "A Classe de Bônus é um sistema de pontuação: a cada ano que você renova o seguro sem registrar nenhum sinistro, você ganha um nível (ponto). Quanto maior sua classe de bônus, maior o desconto que você recebe no valor do seguro, e esse bônus pertence ao CPF do segurado, não ao carro."
            },
            {
                pergunta: "Tenho direito a carro reserva por quanto tempo?",
                resposta: "O período de carro reserva varia conforme a cláusula contratada, sendo os prazos mais comuns de 7, 15 ou 30 dias. Ele pode ser acionado em situações de sinistro coberto, como colisões que exijam reparo ou em casos de roubo e furto enquanto o processo de indenização ocorre."
            }
        ]
    },
    //residencial (pessoa física)
    {
        slug: "seguro-residencial",
        titulo: "Seguro Residencial",
        type: "fisica",
        descricao: "Proteja seu patrimônio e sua família com coberturas completas que vão desde danos elétricos até serviços de assistência 24h. Mais do que um seguro, a tranquilidade que o seu lar merece.",
        imageUrl: "/images/hero-images/seguros/seguro-residencial.jpg",
        coberturas: [
            {
                titulo: "Incêndio, Raio e Explosão",
                descricao: "A cobertura básica que protege a estrutura do imóvel e tudo o que está dentro dele contra fogo, descargas elétricas atmosféricas e explosões de qualquer natureza."
            },
            {
                titulo: "Danos Elétricos",
                descricao: "Garante a reposição de eletrodomésticos, eletrônicos e instalações que venham a queimar devido a curto-circuitos ou variações de tensão na rede elétrica."
            },
            {
                titulo: "Roubo e Furto Qualificado",
                descricao: "Protege seus bens (móveis, roupas, eletrônicos) em caso de assalto ou invasão do imóvel que deixe vestígios de arrombamento."
            },
            {
                titulo: "Responsabilidade Civil Familiar",
                descricao: "Cobre danos causados involuntariamente a terceiros, como um vazamento no seu apartamento que estraga o teto do vizinho ou um objeto que cai da sua janela."
            },
            {
                titulo: "Vendaval e Granizo",
                descricao: "Indenização por danos causados por ventos fortes ou chuvas de granizo que venham a danificar telhados, janelas e o conteúdo da residência."
            },
            {
                titulo: "Quebra de Vidros",
                descricao: "Cobre a substituição de vidros de janelas, portas, espelhos e até tampos de mesa que se quebrem acidentalmente."
            },
            {
                titulo: "Perda ou Pagamento de Aluguel",
                descricao: "Caso o imóvel fique inabitável após um sinistro, o seguro paga as despesas de aluguel em outro local ou compensa o valor que você deixaria de receber se o imóvel estivesse alugado."
            }
        ],
        seguradoras: [
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" },
            { alt: "Azul", src: "/images/seguradoras/azul.png" },
            { alt: "HDI", src: "/images/seguradoras/hdi.webp" },
            { alt: "Itaú", src: "/images/seguradoras/itau.jpg" },
            { alt: "Mapfre", src: "/images/seguradoras/mapfre.png" },
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Pottencial", src: "/images/seguradoras/pottencial.png" },
            { alt: "Sura", src: "/images/seguradoras/sura.png" },
            { alt: "Tokio Marine", src: "/images/seguradoras/tokio.svg" },
            { alt: "Unimed Seguros", src: "/images/seguradoras/unimed.png" },
            { alt: "Yelum", src: "/images/seguradoras/yelum.webp" },
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que está coberto na garantia básica do seguro residencial?",
                resposta: "A cobertura básica obrigatória cobre danos causados por incêndio, queda de raio (dentro do terreno) e explosão de qualquer natureza. Outras proteções, como roubo ou danos elétricos, são contratadas como coberturas adicionais."
            },
            {
                pergunta: "As assistências 24h (chaveiro, encanador, eletricista) têm custo extra?",
                resposta: "Geralmente não. A maioria dos planos já inclui um pacote de assistência dia e noite. Você paga apenas pelas peças trocadas, se necessário, mas a mão de obra do profissional costuma ser gratuita dentro do limite da apólice."
            },
            {
                pergunta: "Danos causados por curto-circuito em eletrodomésticos estão cobertos?",
                resposta: "Sim, desde que você contrate a cobertura adicional de 'Danos Elétricos'. Ela protege contra oscilações de energia e curtos que queimem computadores, geladeiras e outros aparelhos."
            },
            {
                pergunta: "O seguro cobre qualquer tipo de vazamento?",
                resposta: "Depende. O seguro residencial cobre danos causados por vazamentos acidentais e súbitos (rompimento de tubulação). Problemas crônicos por falta de manutenção ou infiltrações lentas geralmente não têm cobertura."
            },
            {
                pergunta: "Se eu moro em apartamento, ainda preciso de seguro residencial?",
                resposta: "Sim. O seguro do condomínio cobre apenas as áreas comuns e a estrutura global do prédio. O seu seguro individual protege o conteúdo do seu imóvel (móveis, eletrônicos) e danos que você possa causar a vizinhos, como um vazamento no seu banheiro."
            }
        ]

    },
    //seguro ramos elementares (pessoa física)
    {
        slug: "ramos-elementares",
        titulo: "Seguro de Ramos Elementares",
        type: "fisica",
        descricao: "Proteja o patrimônio da sua empresa com seguros de ramos elementares. Coberturas completas contra incêndios, roubos, danos elétricos e responsabilidades civis, garantindo segurança e continuidade para o seu negócio.",
        imageUrl: "/images/hero-images/seguros/ramos-elementares.jpg",
        coberturas: [
            {
                titulo: "Incêndio, Raio e Explosão",
                descricao: "Cobertura básica que protege o patrimônio da empresa contra danos causados por incêndio, queda de raio e explosões."
            },
            {
                titulo: "Danos Elétricos",
                descricao: "Garante indenização por prejuízos causados a equipamentos e instalações elétricas devido a curtos-circuitos ou oscilações de energia."
            },
            {
                titulo: "Roubo e Furto Qualificado",
                descricao: "Protege bens e mercadorias contra roubo ou furto mediante arrombamento ou invasão do estabelecimento."
            },
            {
                titulo: "Vendaval e Granizo",
                descricao: "Cobertura para danos causados por ventos fortes, tempestades e queda de granizo que possam afetar a estrutura do imóvel."
            },
            {
                titulo: "Responsabilidade Civil",
                descricao: "Cobre danos materiais ou corporais causados a terceiros durante as atividades da empresa."
            },
            {
                titulo: "Equipamentos e Máquinas",
                descricao: "Proteção contra danos acidentais em máquinas e equipamentos essenciais para o funcionamento do negócio."
            },
            {
                titulo: "Lucros Cessantes",
                descricao: "Indenização pela perda de faturamento caso a empresa precise interromper suas atividades após um sinistro coberto."
            }
        ],
        seguradoras: [
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" },
            { alt: "HDI", src: "/images/seguradoras/hdi.webp" },
            { alt: "Mapfre", src: "/images/seguradoras/mapfre.png" },
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Tokio Marine", src: "/images/seguradoras/tokio.svg" },
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" },
            { alt: "Sompo", src: "/images/seguradoras/sompo.png" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que são seguros de ramos elementares?",
                resposta: "São seguros voltados para a proteção patrimonial de empresas, cobrindo riscos como incêndio, roubo, danos elétricos e responsabilidade civil."
            },
            {
                pergunta: "Esse seguro é obrigatório para empresas?",
                resposta: "Na maioria dos casos não é obrigatório, mas é altamente recomendado para proteger o patrimônio e evitar prejuízos financeiros inesperados."
            },
            {
                pergunta: "O seguro cobre mercadorias também?",
                resposta: "Sim, desde que estejam incluídas na apólice, as mercadorias podem ser protegidas contra diversos riscos como incêndio e roubo."
            },
            {
                pergunta: "Posso contratar coberturas específicas para minha empresa?",
                resposta: "Sim. O seguro de ramos elementares é flexível e pode ser personalizado de acordo com as necessidades do seu negócio."
            },
            {
                pergunta: "Equipamentos eletrônicos estão cobertos?",
                resposta: "Sim, desde que a cobertura para equipamentos e danos elétricos esteja incluída na apólice contratada."
            }
        ]
    },
    //seguro viagem (pessoa física)
    {
        slug: "seguro-viagem",
        titulo: "Seguro Viagem",
        type: "fisica",
        descricao: "Viaje com tranquilidade sabendo que você está protegido contra imprevistos. O seguro viagem oferece cobertura para despesas médicas, extravio de bagagem e diversos outros incidentes que podem acontecer durante sua viagem.",
        imageUrl: "/images/hero-images/seguros/seguro-viagem.jpg",
        coberturas: [
            {
                titulo: "Despesas Médicas e Hospitalares",
                descricao: "Cobertura para atendimentos médicos, hospitalares e tratamentos emergenciais durante a viagem, garantindo assistência quando você mais precisar."
            },
            {
                titulo: "Atendimento Odontológico",
                descricao: "Cobertura para atendimentos odontológicos de urgência durante a viagem, incluindo consultas e procedimentos emergenciais."
            },
            {
                titulo: "Extravio de Bagagem",
                descricao: "Indenização em caso de extravio, dano ou perda de bagagem durante o transporte pela companhia aérea."
            },
            {
                titulo: "Cancelamento de Viagem",
                descricao: "Reembolso de despesas em caso de cancelamento ou interrupção da viagem por motivos cobertos pela apólice."
            },
            {
                titulo: "Traslado Médico",
                descricao: "Cobertura para transporte médico em caso de necessidade de remoção para um hospital ou retorno ao país de origem."
            },
            {
                titulo: "Regresso Sanitário",
                descricao: "Garante o retorno ao país de origem com acompanhamento médico caso o viajante não possa retornar normalmente."
            },
            {
                titulo: "Assistência 24h",
                descricao: "Central de atendimento disponível 24 horas para auxiliar em emergências médicas, perda de documentos e outras situações durante a viagem."
            }
        ],
        seguradoras: [
            { alt: "Assist Card", src: "/images/seguradoras/assist-card.png" },
            { alt: "GTA", src: "/images/seguradoras/gta.png" },
            { alt: "Intermac", src: "/images/seguradoras/intermac.png" },
            { alt: "Affinity", src: "/images/seguradoras/affinity.png" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.png" },
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O seguro viagem é obrigatório?",
                resposta: "Depende do destino. Alguns países exigem seguro viagem com cobertura mínima, como os países da Europa que fazem parte do Tratado de Schengen."
            },
            {
                pergunta: "Quando devo contratar o seguro viagem?",
                resposta: "O ideal é contratar o seguro assim que comprar as passagens, garantindo cobertura inclusive para cancelamentos quando previsto na apólice."
            },
            {
                pergunta: "O seguro cobre despesas médicas por doença?",
                resposta: "Sim, o seguro viagem cobre despesas médicas emergenciais por doença ou acidente durante o período da viagem."
            },
            {
                pergunta: "E se minha bagagem for extraviada?",
                resposta: "O seguro oferece indenização conforme as condições da apólice caso a bagagem seja extraviada pela companhia aérea."
            },
            {
                pergunta: "Posso usar o seguro em qualquer país?",
                resposta: "Sim, desde que o destino esteja incluído na cobertura do plano contratado."
            }
        ]
    },
    // seguro aluguel (pessoa física)
    {
        slug: "seguro-aluguel",
        titulo: "Seguro Aluguel",
        type: "fisica",
        descricao: "Proteja seu imóvel alugado contra inadimplência do inquilino e acidentes, garantindo tranquilidade para locadores e locatários.",
        imageUrl: "/images/hero-images/seguros/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Inadimplência de Aluguel",
                descricao: "Cobre o valor dos aluguéis em atraso por um período determinado, até que a situação seja regularizada."
            },
            {
                titulo: "Danos ao Imóvel",
                descricao: "Repara danos causados ao imóvel pelo locatário além do desgaste natural, como incêndio, roubo e vandalismo."
            },
            {
                titulo: "Despesas Jurídicas",
                descricao: "Cobertura de custos com ações de despejo e cobrança, incluindo honorários advocatícios e custas processuais."
            },
            {
                titulo: "Revisão de Garantias",
                descricao: "Suporte para analisar e escolher a modalidade de garantia mais adequada (fiador, depósito caução ou seguro)."
            }
        ],
        seguradoras: [
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.webp" },
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Quem pode contratar o seguro aluguel?",
                resposta: "O locador (proprietário) geralmente contrata o seguro para proteger seu patrimônio, mas em alguns casos o inquilino também pode contratar para facilitar a locação."
            },
            {
                pergunta: "O seguro cobre multas por rescisão do contrato?",
                resposta: "Em geral não. O foco é na inadimplência e danos ao imóvel; multas contratuais são de responsabilidade das partes, a menos que esteja previsto em contrato."
            },
            {
                pergunta: "Como funciona a vistoria no início e no fim da locação?",
                resposta: "A seguradora pode exigir laudo de vistoria inicial e final para comprovar as condições do imóvel e verificar possíveis danos cobertos."
            }
        ]
    },
    // seguro para frota (pessoa jurídica)
    {
        slug: "seguro-frota",
        titulo: "Seguro Frota",
        type: "juridica",
        descricao: "Proteja todos os veículos da sua empresa com um único seguro, simplificando contratos e oferecendo coberturas consistentes para proteger sua operação.",
        imageUrl: "/images/hero-images/seguros/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Cobertura para Colisão e Roubo",
                descricao: "Proteção para veículos da frota contra colisões, incêndio, roubo e furto, com opções de franquia adaptáveis."
            },
            {
                titulo: "Responsabilidade Civil",
                descricao: "Cobre danos causados a terceiros, incluindo pessoas e bens, em acidentes envolvendo veículos da frota."
            },
            {
                titulo: "Assistência 24h",
                descricao: "Serviço de guincho e atendimento emergencial para qualquer veículo da frota em todo o país."
            },
            {
                titulo: "Despesas com Motorista",
                descricao: "Cobertura para indenização de despesas e danos pessoais de motoristas e ocupantes em acidentes cobertos."
            }
        ],
        seguradoras: [
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "Tokio Marine", src: "/images/seguradoras/tokio.svg" },
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Qual a vantagem de segurar a frota inteira em vez de veículos individualmente?",
                resposta: "A gestão é mais simples e os custos costumam ser menores, pois a seguradora oferece condições especiais para contratos em volume."
            },
            {
                pergunta: "Posso incluir/excluir veículos da frota ao longo do tempo?",
                resposta: "Sim. Normalmente é possível ajustar a frota com adições ou exclusões mediante comunicação à seguradora e atualização do contrato."
            },
            {
                pergunta: "O seguro cobre motoristas terceiros?",
                resposta: "Sim, o seguro costuma cobrir qualquer motorista autorizado pela empresa, desde que tenha habilitação compatível e registre-se no contrato."
            }
        ]
    },
    // seguro empresarial (pessoa jurídica)
    {
        slug: "seguro-empresarial",
        titulo: "Seguro Empresarial",
        type: "juridica",
        descricao: "Proteja seu negócio contra riscos como incêndio, roubo, responsabilidade civil e interrupção de atividades com um seguro completo e sob medida.",
        imageUrl: "/images/hero-images/seguros/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Incêndio e Roubo",
                descricao: "Proteção à estrutura, equipamentos e estoque contra incêndio, roubo e danos causados por terceiros."
            },
            {
                titulo: "Responsabilidade Civil",
                descricao: "Cobre danos causados a terceiros em função das atividades da empresa, incluindo acidentes com clientes e fornecedores."
            },
            {
                titulo: "Quebra de Maquinário",
                descricao: "Repara ou substitui máquinas e equipamentos essenciais em caso de falhas ou acidentes que prejudiquem a produção."
            },
            {
                titulo: "Lucros Cessantes",
                descricao: "Compensação por perdas financeiras caso a empresa precise interromper as atividades após um sinistro coberto."
            }
        ],
        seguradoras: [
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" },
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" },
            { alt: "HDI", src: "/images/seguradoras/hdi.webp" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Como definir o valor do seguro empresarial?",
                resposta: "O valor é baseado no patrimônio a ser protegido, faturamento da empresa e riscos específicos do setor, por isso cada proposta é personalizada."
            },
            {
                pergunta: "O seguro cobre prejuízos causados por falta de energia?",
                resposta: "Sim, há coberturas específicas para danos elétricos e perdas decorrentes de interrupção de energia, dependendo das cláusulas contratadas."
            },
            {
                pergunta: "Posso segurar apenas parte dos bens da empresa?",
                resposta: "Sim, você pode escolher cobrir apenas imóveis, estoques, equipamentos ou combinar diversas proteções conforme sua necessidade."
            }
        ]
    },
    // seguro de transportes (pessoa jurídica)
    {
        slug: "seguro-transportes",
        titulo: "Seguro de Transportes",
        type: "juridica",
        descricao: "Proteja cargas e veículos em deslocamento com coberturas que vão de roubo e avaria até responsabilidade civil em transporte.",
        imageUrl: "/images/hero-images/seguros/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Cargas em Transporte Terrestre",
                descricao: "Cobertura para mercadorias transportadas em caminhões, vans ou utilitários contra roubo, incêndio e danos acidentais."
            },
            {
                titulo: "Transporte Marítimo e Aéreo",
                descricao: "Opções para proteger cargas importadas ou exportadas contra avarias, perda e extravio durante deslocamentos internacionais."
            },
            {
                titulo: "Responsabilidade Civil Transporte",
                descricao: "Cobre danos causados a terceiros durante o transporte, incluindo acidentes com outras pessoas ou veículos."
            },
            {
                titulo: "Cobertura de Alagamento e Fenômenos Naturais",
                descricao: "Proteção para cargas afetadas por enchentes, tempestades e outros riscos naturais durante o transporte."
            }
        ],
        seguradoras: [
            { alt: "Mapfre", src: "/images/seguradoras/mapfre.png" },
            { alt: "Zurich", src: "/images/seguradoras/zurich.webp" },
            { alt: "Allianz", src: "/images/seguradoras/allianz.svg" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "O que é transporte coberto pelo seguro?",
                resposta: "São mercadorias e bens que estão em trânsito entre origem e destino, incluindo cargas em trânsito nacional e internacional."
            },
            {
                pergunta: "O seguro cobre roubo durante o trajeto?",
                resposta: "Sim, desde que a carga seja roubada enquanto estiver em trânsito e a apólice inclua essa cobertura."
            },
            {
                pergunta: "Preciso declarar todos os itens transportados?",
                resposta: "Sim, para garantir a cobertura correta, é importante declarar corretamente o valor e a natureza da carga a ser transportada."
            }
        ]
    },
    // seguro vida coletivo (pessoa jurídica)
    {
        slug: "seguro-vida-coletivo",
        titulo: "Seguro Vida Coletivo",
        type: "juridica",
        descricao: "Ofereça proteção aos colaboradores da sua empresa com um seguro de vida coletivo que garante cobertura em caso de morte, invalidez e doenças graves.",
        imageUrl: "/images/hero-images/seguros/hero-bg.jpg",
        coberturas: [
            {
                titulo: "Morte Natural ou Acidental",
                descricao: "Pagamento de indenização aos beneficiários em caso de falecimento do colaborador por qualquer causa."
            },
            {
                titulo: "Invalidez por Acidente",
                descricao: "Cobertura para invalidez total ou parcial decorrente de acidentes, garantindo suporte financeiro ao colaborador."
            },
            {
                titulo: "Doenças Graves",
                descricao: "Indenização em vida ao ser diagnosticado com doenças graves previstas na apólice, como câncer ou infarto."
            },
            {
                titulo: "Assistência Funeral",
                descricao: "Cobertura de despesas relacionadas a funeral, aliviando a família em um momento delicado."
            }
        ],
        seguradoras: [
            { alt: "Porto Seguro", src: "/images/seguradoras/porto.svg" },
            { alt: "SulAmérica", src: "/images/seguradoras/sulamerica.webp" },
            { alt: "Itaú", src: "/images/seguradoras/itau.jpg" }
        ],
        duvidasFrequentes: [
            {
                pergunta: "Quem pode ser incluído no seguro vida coletivo?",
                resposta: "Geralmente são elegíveis os funcionários ativos da empresa, podendo incluir estagiários e dependentes conforme a apólice."
            },
            {
                pergunta: "O seguro pode ser estendido a familiares?",
                resposta: "Depende da apólice; algumas permitem incluir cônjuges e filhos como beneficiários ou como dependentes cobertos pelo plano."
            },
            {
                pergunta: "Como funciona a fiscalização da apólice?",
                resposta: "A seguradora avalia a relação de empregados e atualiza a apólice periodicamente, garantindo que todos os beneficiários estejam corretamente registrados."
            }
        ]
    },
]