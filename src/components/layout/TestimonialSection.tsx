import { testimonials } from "@/data/testimonials"
import { abhayaLibre } from "@/fonts/fonts"
import test from "node:test"
import TestimonialCard from "../TestimonialCard"

const TestimonialSection = () => {
    return (
        <section className="bg-primary">
            <div className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <div className="flex flex-col justify-center items-center gap-4 ">
                    <div className="inline-block bg-secondary/10 border border-secondary/30 text-center max-w-82 text-md lg:text-lg text-background px-4 py-2 rounded-full mb-4">
                        Depoimentos de Clientes
                    </div>
                    <h2 className={`${abhayaLibre.className} text-3xl md:text-5xl lg:text-6xl text-white`}>
                        O Que Nossos Clientes Dizem
                    </h2>
                    <p className="text-gray-300 max-w-3xl text-center text-lg md:text-xl lg:text-xl">
                        A confiança dos nossos clientes é nosso maior patrimônio
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    {/* Testimonial Cards */}
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            age={testimonial.age}
                            content={testimonial.content}
                            name={testimonial.name}
                        />
                    ))}
                </div>    
            </div>
            
        </section>
    )

}

export default TestimonialSection