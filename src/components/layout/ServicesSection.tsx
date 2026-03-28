import { abhayaLibre } from "@/fonts/fonts"
import { ArrowRight, Building, Car, ClipboardCheck, Heart, HeartPlus, Home, Van } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import Link from "next/link"
import { RevealSection } from "@/components/RevealSection"

const services = [
    { title: "Seguro de Automóvel", description: "Proteção completa para seu veículo com coberturas personalizadas e assistência 24h.", icon: <Car />, type: "fisica" as const, url: "seguros/pessoa-fisica/seguro-auto" },
    { title: "Seguro de Vida", description: "Proteja o futuro de quem você ama com nossos seguros de vida personalizados.", icon: <Heart />, type: "fisica" as const, url: "seguros/pessoa-fisica/seguro-vida" },
    { title: "Seguro Residencial", description: "Proteja seu lar e seus bens contra imprevistos com tranquilidade total.", icon: <Home />, type: "fisica" as const, url: "seguros/pessoa-fisica/seguro-residencial" },
    { title: "Plano Odontológico", description: "Cuidado completo para o seu sorriso: de limpezas a tratamentos especializados, com ampla rede credenciada.", icon: <ClipboardCheck />, type: "fisica" as const, url: "/pessoa-fisica/seguro-residencial" },
    { title: "Seguro Empresarial", description: "Proteção completa para seu negócio, patrimônio e continuidade operacional.", icon: <Building />, type: "juridica" as const, url: "/pessoa-juridica/seguro-empresarial" },
    { title: "Seguro Frota", description: "Gestão eficiente e proteção para toda a frota da sua empresa.", icon: <Van />, type: "juridica" as const, url: "/pessoa-juridica/seguro-frota" },
    { title: "Saúde Empresarial", description: "Plano de saúde corporativo com cobertura completa para seus colaboradores.", icon: <HeartPlus />, type: "juridica" as const, url: "/pessoa-juridica/seguro-saude-corporativo" },
    { title: "Vida Empresarial", description: "Proteção financeira para seus colaboradores e segurança para o futuro da empresa.", icon: <HeartPlus />, type: "juridica" as const, url: "/pessoa-juridica/seguro-saude-corporativo" },
]

const ServicesSection = () => {
    return (
        <section className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
            <RevealSection className="flex flex-col items-center text-center mb-14">
                <div className="inline-block bg-secondary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-4 border border-secondary/30">
                    Nossas Soluções
                </div>
                <h2 className={`text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl ${abhayaLibre.className}`}>
                    Seguros e Soluções para Cada Momento da Sua Vida
                </h2>
                <p className="text-zinc-500 text-base lg:text-lg max-w-2xl">
                    Oferecemos uma ampla gama de produtos para proteger você, sua família e seu negócio
                </p>
            </RevealSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 py-4">
                {services.map((s, i) => (
                    <RevealSection key={s.title} delay={i * 50} variant="scale">
                        <ServiceCard title={s.title} description={s.description} icon={s.icon} type={s.type} url={s.url} />
                    </RevealSection>
                ))}
            </div>

            <RevealSection delay={100} className="flex flex-col items-center justify-center mt-12 gap-2">
                <p className="text-zinc-500 text-base lg:text-lg">Não encontrou o que procura? Entre em contato conosco.</p>
                <Link href="#contato" className="inline-flex items-center gap-2 text-base lg:text-lg font-medium text-primary-foreground hover:text-primary-foreground/70 transition-all duration-300 group">
                    Fale com um Especialista
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </RevealSection>
        </section>
    )
}

export default ServicesSection
