import Image from "next/image"
import QualitiesItem from "../QualitiesItem"
import { Award, Shield, UsersRound } from "lucide-react"

const AboutSection = () => {
    return (
        <div className="border-b border-zinc-300">
            <section className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20 ">
                <div className="flex gap-10 flex-col lg:flex-row">
                    {/* image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="../../images/hero-images/about-section-image.jpg"
                                alt="Hannah & Libere - Parceria e Confiança"
                                className="w-full h-125 object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 left-70 text-white rounded-full shadow-xl">
                            <Image
                                src="/images/sublogo.jpg"
                                alt="Sublogo Hannah & Libere"
                                width={150}
                                height={150}
                                className="w-44 rounded-full"
                            />
                        </div>
                    </div>
                    {/* text content */}
                    <div className="flex-1">
                        <div className="inline-block bg-primary/10 w-60 text-primary px-4 py-2 rounded-full mb-4">
                            Sobre a Hannah & Libere
                        </div>

                        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                            Protegendo o que Realmente Importa desde 2018
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A Hannah & Libere nasceu com um propósito claro: oferecer segurança e tranquilidade
                            através de seguros e soluções financeiras personalizadas. Com 7 anos de trajetória
                            consolidada no mercado, nos tornamos referência em excelência e atendimento humanizado.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Nossa missão é ir além da simples contratação de apólices. Construímos relacionamentos
                            duradouros, baseados em confiança, transparência e compromisso genuíno com o bem-estar
                            de nossos clientes, sejam pessoas físicas ou empresas.
                        </p>
                        <div className="flex flex-col gap-4">
                            <QualitiesItem
                                title="Confiança"
                                description="Comprometidos com a ua segurança"
                                icon={<Shield />}
                            />
                            <QualitiesItem
                                title="Atendimento Personalizado"
                                description="Soluções sob medida para suas necessidades"
                                icon={<UsersRound />}
                            />
                            <QualitiesItem
                                title="Excêlencia"
                                description="7 anos de experiência no mercado"
                                icon={<Award />}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default AboutSection