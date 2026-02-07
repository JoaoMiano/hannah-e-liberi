import { abhayaLibre } from "@/fonts/fonts"
import { ArrowRight, Building, Car, ClipboardCheck, Heart, HeartPlus, Home, Van } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"

const ServicesSection = () => {
    return (
        <section className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
            <div className="flex flex-col items-center text-center mb-18">
                <div className="inline-block bg-chart-2 text-lg text-secondary px-4 py-2 rounded-full mb-4">
                    Nossas Soluções
                </div>
                <h2 className={`text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl ${abhayaLibre.className}`}>
                    Seguros e Soluções para Cada Momento da Sua Vida
                </h2>
                <p className="text-zinc-600 text-md lg:text-xl max-w-3xl">
                    Oferecemos uma ampla gama de produtos para proteger você, sua família e seu negócio
                </p>
            </div>

            {/* Serviços */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 py-4">
                {/* serviços pessoa fisica */}
                <ServiceCard
                    title="Seguro de Automóvel"
                    description="Proteção completa para seu veículo com coberturas personalizadas e assistência 24h."
                    icon={<Car />}
                    type="fisica"
                    url="seguros/pessoa-fisica/seguro-auto"
                />

                <ServiceCard
                    title="Seguro de Vida"
                    description="Proteja o futuro de quem você ama com nossos seguros de vida personalizados."
                    icon={<Heart />}
                    type="fisica"
                    url="seguros/pessoa-fisica/seguro-vida"
                />

                <ServiceCard
                    title="Seguro Residencial"
                    description="Proteja seu lar e seus bens contra imprevistos com tranquilidade total."
                    icon={<Home />}
                    type="fisica"
                    url="seguros/pessoa-fisica/seguro-residencial"
                />

                <ServiceCard
                    title="Plano Odontológico"
                    description="Cuidado completo para o seu sorriso: de limpezas a tratamentos especializados, com ampla rede credenciada."
                    icon={<ClipboardCheck />}
                    type="fisica"
                    url="/pessoa-fisica/seguro-residencial"
                />

                {/* serviços pessoa juridica */}

                <ServiceCard
                    title="Seguro Empresarial"
                    description="Proteção completa para seu negócio, patrimônio e continuidade operacional."
                    icon={<Building />}
                    type="juridica"
                    url="/pessoa-juridica/seguro-empresarial"
                />

                <ServiceCard
                    title="Seguro Frota"
                    description="Gestão eficiente e proteção para toda a frota da sua empresa."
                    icon={<Van />}
                    type="juridica"
                    url="/pessoa-juridica/seguro-frota"
                />

                <ServiceCard
                    title="Saúde Empresarial"
                    description="Plano de saúde corporativo com cobertura completa para seus colaboradores."
                    icon={<HeartPlus />}
                    type="juridica"
                    url="/pessoa-juridica/seguro-saude-corporativo"
                />

                <ServiceCard
                    title="Vida Empresarial"
                    description="Proteção financeira para seus colaboradores e segurança para o futuro da empresa."
                    icon={<HeartPlus />}
                    type="juridica"
                    url="/pessoa-juridica/seguro-saude-corporativo"
                />

            </div>

            <div className="flex flex-col items-center justify-center mt-10">

                <p className="text-zinc-600 text-md lg:text-xl">Não encontrou o que procura? Entre em contato conosco.</p>
                <p className="px-8 py-2 text-md lg:text-xl text-secondary rounded-md flex gap-2 hover:text-secondary/70 transition-colors duration-300 cursor-pointer">
                    <a href="#contato" >
                        Fale com um Especialista!
                    </a>
                    <ArrowRight />
                </p>

            </div>


        </section>
    )
}

export default ServicesSection