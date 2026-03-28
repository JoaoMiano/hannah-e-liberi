import { abhayaLibre } from "@/fonts/fonts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
    type: 'fisica' | 'juridica';
    url: string;
}

const ServiceCard = ({ title, description, icon, type, url }: Props) => {
    return (
        <Link href={url} className="block group outline-none h-full">
            <Card className="w-full h-full flex flex-col transition-all duration-300 shadow-sm shadow-zinc-300 hover:shadow-lg hover:shadow-zinc-400/40 border border-transparent hover:border-secondary/30 overflow-hidden hover:-translate-y-1">

                <CardHeader className="flex-none">
                    <CardTitle className="flex flex-col items-start gap-2">
                        <div className="w-12 h-12 p-2.5 bg-primary/8 rounded-xl text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary-foreground group-hover:text-white group-hover:scale-110">
                            {icon}
                        </div>

                        <span className="text-xs lg:text-sm font-medium text-secondary mt-1">
                            {type === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}
                        </span>

                        <div className={`${abhayaLibre.className} text-xl lg:text-2xl font-normal text-zinc-900 leading-tight min-h-12 lg:min-h-16 flex items-center`}>
                            {title}
                        </div>
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-gray-500 text-sm lg:text-base line-clamp-4 lg:line-clamp-3 leading-relaxed">
                        {description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 font-medium text-sm text-primary-foreground transition-all duration-300 group-hover:gap-2.5 mt-auto">
                        Saiba mais <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ServiceCard;
