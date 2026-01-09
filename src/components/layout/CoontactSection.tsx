
import { abhayaLibre } from "@/fonts/fonts"
import ContactForm from "../ContactForm"
import SocialLink from "../SocialLink"
import { Facebook, InstagramIcon, Linkedin, Mail, MessageCircle, Phone } from "lucide-react"
import QualitiesItem from "../QualitiesItem"

export const ContactSection = () => {
    return (
        <section id="contact" className=" border-t border-zinc-300">
            <div className="container mx-auto px-4 lg:px-6 py-12 md:py-18 lg:py-20">
                <div className="flex flex-col gap-4 items-center">
                    <div className="inline-block bg-chart-2 text-lg text-secondary px-4 py-2 rounded-full mb-4">
                        Entre em Contato
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className={`${abhayaLibre.className} text-center text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl`}>
                                Fale com Nossos Especialistas!
                            </h2>
                            <p className="text-center text-zinc-600 text-lg mb-8">
                                Sem filas ou burocracia. Tire suas dúvidas ou peça um orçamento em poucos minutos. Estamos prontos para te ouvir.
                            </p>
                            <div className="flex flex-col gap-4 mb-4">
                                <QualitiesItem title="Telefone" description="(11) 4524-4877" icon={<Phone />} />
                                <QualitiesItem title="E-mail" description="contato@hannaheliberi.com.br" icon={<Mail />} />
                            </div>

                            <h3 className={`${abhayaLibre.className} text-center text-primary text-xl md:text-2xl lg:text-3xl font-bold mb-6 max-w-3xl`}>
                                Nossas Redes Sociais
                            </h3>
                            <div className="flex gap-4 justify-center items-center">
                                <SocialLink
                                    href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"}
                                    icon={InstagramIcon}
                                    label="Instagram Hannah & Libere"
                                />

                                <SocialLink
                                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
                                    icon={Linkedin}
                                    label="LinkedIn Hannah & Libere"
                                />

                                <SocialLink
                                    href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "#"}
                                    icon={Facebook}
                                    label="Facebook Hannah & Libere"
                                />

                                <SocialLink
                                    href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"}
                                    icon={MessageCircle}
                                    label="WhatsApp Hannah & Libere"
                                />
                            </div>

                            <div className="border border-zinc-400 rounded-3xl bg-zinc-100 flex flex-col gap-2 py-4 px-8 mt-6">
                                <h4 className={`${abhayaLibre.className} text-xl font-semibold`}>Horário de Funcionamento</h4>
                                <p className="text-zinc-700">Segunda a Sexta: 08:30 às 17:00</p>

                            </div>

                        </div>

                        <ContactForm />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactSection