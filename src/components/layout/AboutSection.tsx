import Image from "next/image"
import QualitiesItem from "../QualitiesItem"
import { Award, Shield, UsersRound } from "lucide-react"
import { getCompanyAge } from "@/helpers/years-market"
import { abhayaLibre } from "@/fonts/fonts"
import { RevealSection } from "@/components/RevealSection"

const AboutSection = () => {
    return (
        <div className="border-b border-zinc-200">
            <section className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <div className="flex gap-10 lg:gap-16 flex-col lg:flex-row items-center">
                    {/* image */}
                    <RevealSection variant="left" className="relative flex-1 w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-125">
                            <Image
                                src="/images/hero-images/about-section-image.jpg"
                                alt="Hannah & Libere - Parceria e Confiança"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 left-70 text-white rounded-full shadow-xl ring-4 ring-white transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/sublogo-v2.jpg"
                                alt="Sublogo Hannah & Libere"
                                width={150}
                                height={150}
                                className="w-44 rounded-full"
                            />
                        </div>
                    </RevealSection>

                    {/* text content */}
                    <RevealSection variant="right" delay={120} className="flex-1">
                        <div className="inline-block bg-primary/8 text-primary text-sm font-medium px-4 py-2 rounded-full mb-5 border border-primary/15">
                            Sobre a Libere & Meneguetti
                        </div>

                        <h2 className={`text-3xl md:text-4xl text-primary mb-6 leading-tight ${abhayaLibre.className}`}>
                            Protegendo o que Realmente Importa desde 2018
                        </h2>

                        <p className="text-gray-500 mb-5 leading-relaxed">
                            A Libere & Meneguetti nasceu com um propósito claro: oferecer segurança e tranquilidade
                            através de seguros e soluções financeiras personalizadas. Com {getCompanyAge()} anos de trajetória
                            consolidada no mercado, nos tornamos referência em excelência e atendimento humanizado.
                        </p>

                        <p className="text-gray-500 mb-10 leading-relaxed">
                            Nossa missão é ir além da simples contratação de apólices. Construímos relacionamentos
                            duradouros, baseados em confiança, transparência e compromisso genuíno com o bem-estar
                            de nossos clientes, sejam pessoas físicas ou empresas.
                        </p>

                        <div className="flex flex-col gap-5">
                            <QualitiesItem title="Confiança" description="Comprometidos com a sua segurança" icon={<Shield />} />
                            <QualitiesItem title="Atendimento Personalizado" description="Soluções sob medida para suas necessidades" icon={<UsersRound />} />
                            <QualitiesItem title="Excelência" description={`${getCompanyAge()} anos de experiência no mercado`} icon={<Award />} />
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}

export default AboutSection
