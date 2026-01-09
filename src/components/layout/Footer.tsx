import { abhayaLibre } from "@/fonts/fonts";
import { getCompanyAge } from "@/helpers/yearsMarket";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-primary text-zinc-200 py-4 flex flex-col items-center justify-center">
            <div className="container mx-auto py-4 lg:py-6 px-4 lg:px-8  ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 border-b border-zinc-400">
                    <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center">
                        <Link href="/">
                            <Image
                                src="/images/logoPrimaria.jpg"
                                alt="Logo Hannah & Liberi"
                                width={150}
                                height={50}
                                className="rounded-lg"
                            />
                        </Link>

                        <p className="text-sm lg:text-md text-zinc-400 w-full">
                            Corretora de seguros com {getCompanyAge()} anos de mercado, comprometida em levar segurança e tranquilidade aos nossos clientes.
                        </p>
                    </div>

                    {/* Redes sociais */}

                    <div className="flex flex-col gap-4 items-center justify-center mt-4">
                        <h3 className={`text-xl font-semibold mb-2 ${abhayaLibre.className}`}>Siga-nos</h3>
                        <ul className="flex flex-col gap-2 mb-4">
                            <li>
                                <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                                    <div className="bg-white/10 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                                        <Instagram size={30} />
                                    </div>
                                    Instagram
                                </a>
                            </li>

                            <li>
                                <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                                    <div className="bg-white/10 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                                        <Facebook size={30} />
                                    </div>
                                    Facebook
                                </a>
                            </li>

                            <li>
                                <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                                    <div className="bg-white/10 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                                        <Linkedin size={30} />
                                    </div>
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Informaçes legais */}
                    <div className="flex flex-col gap-4 items-center justify-center mt-4">
                        <h3 className={`text-xl font-semibold mb-2 ${abhayaLibre.className}`}>Informações Legais</h3>
                        <ul className="flex flex-col gap-2 mb-4">
                            <li>
                                <Link href="/politica-de-privacidade" className="text-sm hover:underline">
                                    Política de Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link href="/termos-de-uso" className="text-sm hover:underline">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <p className="text-zinc-600">SUSESP N° 202038806</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Hannah & Liberi. Todos os direitos reservados.</p>

        </footer>
    )
}

export default Footer;