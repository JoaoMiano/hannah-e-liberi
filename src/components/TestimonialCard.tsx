import { Testimonial } from "@/data/testimonials"
import { Card, CardContent } from "./ui/card"
import { Quote, Star } from "lucide-react"


const TestimonialCard = ({age, content, name}:Testimonial) => {
    return (
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
            <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="mb-4">
                    <Quote className="w-10 h-10 text-secondary/50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-100 mb-6 leading-relaxed">
                    "{content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">

                    <div>
                        <p className="font-bold text-secondary">{`${name}, ${age} anos`}</p>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TestimonialCard