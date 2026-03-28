import { Testimonial } from "@/constants/testimonials"
import { Card, CardContent } from "./ui/card"
import { Quote, Star } from "lucide-react"

const TestimonialCard = ({ age, content, name }: Testimonial) => {
    return (
        <Card className="bg-white/8 backdrop-blur-sm border-white/15 text-white hover:bg-white/14 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary-foreground/10">
            <CardContent className="pt-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-3">
                    <Quote className="w-8 h-8 text-secondary/60" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-zinc-200 mb-6 leading-relaxed flex-1 text-sm lg:text-base">
                    &ldquo;{content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm shrink-0">
                        {name.charAt(0)}
                    </div>
                    <p className="font-semibold text-secondary text-sm">{`${name}, ${age} anos`}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default TestimonialCard
