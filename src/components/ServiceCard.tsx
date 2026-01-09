import { abhayaLibre } from "@/fonts/fonts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
            <Card className="w-full h-full flex flex-col transition-all duration-300 shadow-md shadow-zinc-500 group-hover:border-secondary border-transparent border overflow-hidden">

                <CardHeader className="flex-none">
                    <CardTitle className="flex flex-col items-start gap-2">
                        <div className="w-14 h-14 p-2 bg-chart-1 rounded-md text-primary flex items-center justify-center group-hover:bg-chart-2 group-hover:text-secondary transition-colors duration-300">
                            {icon}
                        </div>

                        <span className="text-xs lg:text-sm font-medium text-secondary">
                            {type === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}
                        </span>


                        <div className={`${abhayaLibre.className} text-xl lg:text-2xl font-normal text-zinc-900 leading-tight min-h-12 lg:min-h-16 flex items-center`}>
                            {title}
                        </div>
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-gray-600 text-sm lg:text-base line-clamp-4 lg:line-clamp-3">
                        {description}
                    </p>

                    <span className="inline-block font-medium text-sm text-primary transition-colors duration-300 group-hover:text-secondary mt-auto">
                        Saiba mais →
                    </span>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ServiceCard;