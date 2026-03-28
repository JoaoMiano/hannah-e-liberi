import { Button } from "../ui/button";
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react";
import { abhayaLibre } from "@/fonts/fonts";
import { getCompanyAge } from "@/helpers/years-market";

const HeroSection = () => {
    return (
        <section className="relative text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-images/hero-bg.jpg"
                    alt="Segurança e Proteção"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/40" />
            </div>

            {/* Decorative blur blob */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative container mx-auto px-4 lg:px-6 py-16 md:py-24 lg:py-28">
                <div className="max-w-4xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        Corretora de Seguros com {getCompanyAge()} anos de experiência
                    </div>

                    <h1
                        className={`text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight animate-fade-up ${abhayaLibre.className}`}
                        style={{ animationDelay: "100ms" }}
                    >
                        Segurança e Tranquilidade <br />
                        <span className="text-secondary">para Você e Sua Família</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl lg:text-2xl mb-10 text-zinc-300 max-w-2xl leading-relaxed animate-fade-up"
                        style={{ animationDelay: "200ms" }}
                    >
                        Com {getCompanyAge()} anos de atuação, oferecemos consultoria completa em seguros e soluções financeiras com o cuidado exato que cada momento da sua vida exige.
                    </p>

                    {/* CTAs */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 pb-14 lg:pb-20 border-b border-white/20 animate-fade-up"
                        style={{ animationDelay: "300ms" }}
                    >
                        <Link href="#contato" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-white text-base px-8 py-6 cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 shadow-lg shadow-primary-foreground/30">
                                Solicitar cotação <ChevronRight className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/solucoes" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto bg-transparent border border-white/40 text-white text-base px-8 py-6 cursor-pointer hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                            >
                                Ver soluções
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div
                        className="grid grid-cols-3 gap-4 pt-8 animate-fade-up"
                        style={{ animationDelay: "420ms" }}
                    >
                        {[
                            { value: `${getCompanyAge()}+`, label: "Anos no Mercado" },
                            { value: "1000+", label: "Clientes Atendidos" },
                            { value: "98%", label: "Satisfação" },
                        ].map((stat) => (
                            <div key={stat.label} className="group">
                                <span className={`block text-3xl lg:text-4xl text-secondary font-bold transition-transform duration-300 group-hover:-translate-y-0.5 ${abhayaLibre.className}`}>
                                    {stat.value}
                                </span>
                                <p className="text-zinc-300 text-sm lg:text-lg mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection;
