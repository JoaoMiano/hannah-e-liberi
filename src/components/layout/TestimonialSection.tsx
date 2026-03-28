import { testimonials } from "@/constants/testimonials"
import { abhayaLibre } from "@/fonts/fonts"
import TestimonialCard from "../TestimonialCard"
import { RevealSection } from "@/components/RevealSection"

const TestimonialSection = () => {
    return (
        <section className="bg-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <RevealSection className="flex flex-col justify-center items-center gap-3 mb-12">
                    <div className="inline-block bg-secondary/15 border border-secondary/25 text-secondary text-sm font-medium px-4 py-2 rounded-full">
                        Depoimentos de Clientes
                    </div>
                    <h2 className={`${abhayaLibre.className} text-3xl md:text-5xl lg:text-6xl text-white text-center`}>
                        O Que Nossos Clientes Dizem
                    </h2>
                    <p className="text-zinc-300 max-w-2xl text-center text-base md:text-lg">
                        A confiança dos nossos clientes é nosso maior patrimônio
                    </p>
                </RevealSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <RevealSection key={index} delay={index * 80} variant="scale">
                            <TestimonialCard age={testimonial.age} content={testimonial.content} name={testimonial.name} />
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
