import { company } from "./seguradoras";


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
    seguradoras: company[];
    duvidasFrequentes: duvida[];
}

export const servicos: Servico[] = [
    //vida - pessoa fisica
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
    //auto - pessoa fisica
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
    //residencial - pessoa fisica
    {
        slug: "seguro-residencial",
        titulo: "Seguro Residencial",
        type: "fisica",
        descricao: "Proteja seu patrimônio e sua família com coberturas completas que vão desde danos elétricos até serviços de assistência 24h. Mais do que um seguro, a tranquilidade que o seu lar merece.",
        imagemUrl: "/images/hero-images/seguro-residencial.jpg",
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

    }
]