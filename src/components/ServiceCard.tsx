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
        <Link href={url} className="block group outline-none">
                <Card className="w-full transition-all duration-300 shadow-md shadow-zinc-500 group-hover:border-secondary border-transparent border">
                    <CardHeader>
                        <CardTitle className="flex flex-col items-start gap-2">
                            <div className="w-14 h-14 p-2 bg-chart-1 rounded-md text-primary flex items-center justify-center group-hover:bg-chart-2 group-hover:text-secondary transition-colors duration-300">
                                {icon}
                            </div>
                            <span className="text-xs font-medium text-secondary">{type === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}</span>
                            <div className={`${abhayaLibre.className} text-xl lg:text-2xl font-normal text-zinc-900`}>
                                {title}
                            </div>

                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-gray-600 h-20">{description}</p>

                        <span className="inline-block font-medium text-sm text-primary transition-colors duration-300 group-hover:text-secondary">
                            Saiba mais →
                        </span>
                    </CardContent>
                </Card>
        </Link>
    )
}

export default ServiceCard