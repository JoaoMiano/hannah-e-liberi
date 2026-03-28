import { abhayaLibre } from "@/fonts/fonts";
import { getCompanyAge } from "@/helpers/years-market";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-primary text-zinc-300">
            <div className="container mx-auto px-4 lg:px-8 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-10 border-b border-white/10">
                    {/* Brand */}
                    <div className="flex flex-col gap-5 items-center md:items-start">
                        <Link href="/" className="transition-opacity hover:opacity-80">
                            <Image
                                src="/images/logoPrimaria.png"
                                alt="Logo Hannah & Liberi"
                                width={150}
                                height={50}
                                className="rounded-lg"
                            />
                        </Link>
                        <p className="text-sm text-zinc-400 leading-relaxed text-center md:text-left max-w-xs">
                            Corretora de seguros com {getCompanyAge()} anos de mercado, comprometida em levar segurança e tranquilidade aos nossos clientes.
                        </p>
                    </div>

                    {/* Redes sociais */}
                    <div className="flex flex-col gap-4 items-center">
                        <h3 className={`text-lg font-semibold text-white mb-1 ${abhayaLibre.className}`}>Siga-nos</h3>
                        <ul className="flex flex-col gap-3 w-full max-w-xs">
                            {[
                                { href: process.env.NEXT_PUBLIC_INSTAGRAM_URL, icon: <InstagramIcon size={18} />, label: "Instagram" },
                                { href: process.env.NEXT_PUBLIC_FACEBOOK_URL, icon: <FacebookIcon size={18} />, label: "Facebook" },
                                { href: process.env.NEXT_PUBLIC_LINKEDIN_URL, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
                            ].map(({ href, icon, label }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-all duration-300 group"
                                    >
                                        <div className="bg-white/8 group-hover:bg-primary-foreground/80 rounded-full p-2 w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                            {icon}
                                        </div>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Informações legais */}
                    <div className="flex flex-col gap-4 items-center">
                        <h3 className={`text-lg font-semibold text-white mb-1 ${abhayaLibre.className}`}>Informações Legais</h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li>
                                <Link href="/politica-de-privacidade-e-cookies" className="text-zinc-400 hover:text-white transition-colors duration-200">
                                    Política de Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link href="/termos-de-uso" className="text-zinc-400 hover:text-white transition-colors duration-200">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <p className="text-zinc-500 text-xs">SUSESP N° 202038806</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-sm text-zinc-500 pt-6">
                    &copy; {new Date().getFullYear()} Hannah & Liberi. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
