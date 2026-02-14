import { company } from "@/data/seguradoras";
import Image from "next/image";

// Dica: Use letras maiúsculas para Types/Interfaces
type CardCompanyLogoProps = {
    company: company;
}

export const CardCompanyLogo = ({ company }: CardCompanyLogoProps) => {
    return (
        <div className="group cursor-pointer flex flex-col items-center justify-center p-2 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-100">

            {/* Container da Imagem com proporção controlada */}
            <div className="relative aspect-video flex items-center justify-center overflow-hidden">
                <Image
                    alt={company.alt}
                    src={company.src}
                    width={120}
                    height={60}
                    className="object-contain "
                    priority={false}
                />
            </div>

            {/* Título com estilo mais refinado */}
            <h3 className="mt-2 text-sm font-semibold text-gray-600  tracking-wider text-center group-hover:text-secondary transition-colors">
                {company.alt}
            </h3>

        </div>
    );
};