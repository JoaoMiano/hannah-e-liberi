import { abhayaLibre } from "@/fonts/fonts"
import Image from "next/image"

const TermosDeUso = () => {
    return (
        <section className="container mx-auto max-w-4xl py-4 lg:py-6 px-4 lg:px-8">
            <header className="mb-6 flex justify-center">
                <Image
                    width={690}
                    height={390}
                    src="/images/logoPrimaria.jpg"
                    alt="Logo Hannah & Liberi"
                    className="max-w-60 max-h-30 lg:max-h-50 lg:max-w-100"
                />
            </header>

            <main className="flex flex-col gap-8 text-zinc-600 text-justify">
                {/* Introdução */}
                <div className="flex flex-col gap-4 text-md lg:text-lg">
                    <h1 className={`${abhayaLibre.className} text-center text-2xl md:text-3xl lg:text-4xl text-primary`}>
                        Termos de Uso
                    </h1>
                    <p>
                        Seja bem-vindo ao portal da <strong>Hannah & Liberi</strong>. Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições. Estes termos regem a relação entre a corretora e o usuário no ambiente digital.
                    </p>
                    <p>
                        A Hannah & Liberi atua na intermediação de contratos de seguros, conectando você às melhores seguradoras do mercado. Nosso compromisso é com a transparência, ética e segurança das suas informações.
                    </p>
                </div>

                {/* Seção 1: Objeto */}
                <div className="space-y-2">
                    <h2 className={`${abhayaLibre.className} pl-2 text-start font-semibold text-lg md:text-xl lg:text-2xl text-zinc-700`}>
                        1. Objeto e Serviços
                    </h2>
                    <p>
                        Este site tem como finalidade fornecer informações institucionais, realizar simulações de seguros e facilitar o contato para contratação de apólices. É importante destacar que a Hannah & Liberi é uma corretora de seguros, e a aceitação final do risco é sempre da seguradora escolhida.
                    </p>
                </div>

                {/* Seção 2: Responsabilidades do Usuário */}
                <div className="space-y-2">
                    <h2 className={`${abhayaLibre.className} pl-2 text-start font-semibold text-lg md:text-xl lg:text-2xl text-zinc-700`}>
                        2. Responsabilidades do Usuário
                    </h2>
                    <p>
                        O usuário compromete-se a fornecer dados <strong>exatos e verídicos</strong> em todas as simulações e formulários. Informações incorretas podem comprometer a validade do seguro e o direito a futuras indenizações. Além disso, o usuário deve utilizar o site de forma lícita, respeitando as leis vigentes e os direitos de propriedade intelectual.
                    </p>
                </div>

                {/* Seção 3: Propriedade Intelectual */}
                <div className="space-y-2">
                    <h2 className={`${abhayaLibre.className} pl-2 text-start font-semibold text-lg md:text-xl lg:text-2xl text-zinc-700`}>
                        3. Propriedade Intelectual
                    </h2>
                    <p>
                        Todo o conteúdo disponibilizado neste site, incluindo logotipos, textos, imagens e design, é de propriedade da <strong>Hannah & Liberi</strong> ou de seus parceiros. A reprodução ou uso não autorizado desses materiais é estritamente proibida e protegida pela legislação de direitos autorais.
                    </p>
                </div>

                {/* Seção 4: Limitação de Responsabilidade */}
                <div className="space-y-2">
                    <h2 className={`${abhayaLibre.className} pl-2 text-start font-semibold text-lg md:text-xl lg:text-2xl text-zinc-700`}>
                        4. Limitação de Responsabilidade
                    </h2>
                    <p>
                        Esforçamo-nos para garantir que todas as informações e cotações sejam precisas. No entanto, os valores apresentados em simulações são estimativos e podem sofrer alterações conforme as políticas técnicas das seguradoras. Não nos responsabilizamos por danos decorrentes de falhas técnicas externas ou uso indevido das informações aqui contidas.
                    </p>
                </div>

                {/* Seção 5: Privacidade e LGPD */}
                <div className="space-y-2">
                    <h2 className={`${abhayaLibre.className} pl-2 text-start font-semibold text-lg md:text-xl lg:text-2xl text-zinc-700`}>
                        5. Proteção de Dados (LGPD)
                    </h2>
                    <p>
                        O tratamento dos seus dados pessoais é realizado em total conformidade com a <a href="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd" className="text-blue-900/90 hover:underline">LGPD</a>. Para entender como coletamos, usamos e protegemos suas informações, por favor, consulte nossa <strong>Política de Privacidade</strong> disponível neste site.
                    </p>
                </div>

                {/* Seção Final: Contato e Foro */}
                <div className="space-y-4">
                    <h2 className={`${abhayaLibre.className} pl-2 text-start font-semibold text-lg md:text-xl lg:text-2xl text-zinc-700`}>
                        6. Disposições Gerais
                    </h2>
                    <p>
                        Estes termos podem ser atualizados periodicamente para refletir melhorias em nossos serviços ou mudanças legislativas. Recomendamos a consulta regular desta página.
                    </p>
                    <p>
                        Se você tiver qualquer dúvida sobre estes termos, entre em contato através do e-mail <strong>contato@hannaheliberi.com.br</strong> ou pelo telefone <strong>(11) 4524-4877</strong>. Fica eleito o foro da comarca de Itatiba/SP para dirimir quaisquer questões relativas a este documento.
                    </p>
                </div>
            </main>
        </section>
    )
}

export default TermosDeUso