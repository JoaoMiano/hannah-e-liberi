import { Button } from "../ui/button";
import Link from "next/link"
import { ChevronRight } from "lucide-react";
import { abhayaLibre } from "@/fonts/fonts";
import { getCompanyAge } from "@/helpers/yearsMarket";


const HeroSection = () => {
    return (
        <section className="relative text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="../../images/hero-images/hero-bg.jpg"
                    alt="Segurança e Proteção"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/65"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <div className="max-w-4xl">
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 ${abhayaLibre.className}`}>
                        Segurança e Tranquilidade <br />para Você e Sua Família
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-zinc-300">
                        Na Hannah & Libere, priorizamos o que é valioso para você. Com {getCompanyAge()} anos de atuação, nossa corretora oferece uma consultoria completa em seguros e soluções financeiras, entregando o cuidado exato que cada momento da sua vida exige.
                    </p>
                    {/* Botões de Ação */}
                    <div className="flex flex-col lg:flex-row gap-4 pb-14 lg:pb-20 border-b-zinc-500 border-b-2">
                        <Link
                            href="/contato"
                            className="w-52 lg:w-60 cursor-pointer"
                        >
                            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg cursor-pointer flex items-center justify-center gap-2 hover:gap-4">
                                Solicitar cotação <ChevronRight className="text-xl" />
                            </Button>
                        </Link>
                        <Link
                            href="/solucoes"
                            className=" w-52 lg:w-60 cursor-pointer bg-white rounded-md"
                        >
                            <Button className="w-full bg-primary-foreground border border-white hover:bg-primary-foreground/90 text-white text-lg cursor-pointer">
                                Ver soluções
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4 lg:pt-8">
                        <div className="">
                            <span className={`text-4xl text-secondary ${abhayaLibre.className}`}>{getCompanyAge()}+</span>
                            <p className="text-zinc-300 text-lg">Anos no Mercado</p>
                        </div>
                        <div className="">
                            <span className={`text-4xl text-secondary ${abhayaLibre.className}`}>1000+</span>
                            <p className="text-zinc-300 text-lg">Clientes Atendidos</p>
                        </div>
                        <div className="">
                            <span className={`text-4xl text-secondary ${abhayaLibre.className}`}>98%</span>
                            <p className="text-zinc-300 text-lg">Satisfação</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;