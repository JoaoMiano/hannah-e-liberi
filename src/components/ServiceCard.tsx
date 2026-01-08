import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Abhaya_Libre } from "next/font/google";

const abhayaLibre = Abhaya_Libre({
    subsets: ['latin'],
    weight: ['400', '700'],
})

type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
    type: 'fisica' | 'juridica';
    url: string;
}

const ServiceCard = ({ title, description, icon, type, url }: Props) => {
    return (
        <a href={url} className="no-underline">
            <div className="block group max-w-60 shadow-xl shadow-primary">
                <Card className="transition-all duration-300 group-hover:border-secondary border-transparent border">
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
                    <CardContent className="space-y-4">
                        <p className="text-gray-600">{description}</p>

                        <span className="inline-block font-medium text-sm text-primary transition-colors duration-300 group-hover:text-secondary">
                            Saiba mais →
                        </span>
                    </CardContent>
                </Card>
            </div>
        </a>
    )
}

export default ServiceCard