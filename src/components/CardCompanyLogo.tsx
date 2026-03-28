import type { Company } from "@/types/services";
import Image from "next/image";

type CardCompanyLogoProps = {
    company: Company;
}

export const CardCompanyLogo = ({ company }: CardCompanyLogoProps) => {
    return (
        <div className="group cursor-pointer flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-secondary/30">

            <div className="relative aspect-video flex items-center justify-center overflow-hidden w-full">
                <Image
                    alt={company.alt}
                    src={company.src}
                    width={120}
                    height={60}
                    className="object-contain transition-all duration-300 group-hover:scale-105"
                    priority={false}
                />
            </div>

            <h3 className="mt-2 text-xs font-semibold text-gray-400 tracking-wider text-center group-hover:text-secondary transition-colors duration-300">
                {company.alt}
            </h3>
        </div>
    );
};
