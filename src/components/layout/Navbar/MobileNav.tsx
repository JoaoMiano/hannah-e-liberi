import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
    NavItem,
    pessoaFisicaPlanos,
    pessoaFisicaSeguros,
    pessoaFisicaSolucoes,
    pessoaJuridicaPlanos,
    pessoaJuridicaSeguros,
    pessoaJuridicaSolucoes
} from "@/constants/itens-navbar"
import { canava, Garacie } from "@/fonts/fonts"

function MobileNavGroup({ items }: { items: NavItem[] }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li key={item.name}>
                    <SheetTrigger asChild>
                        <Link
                            href={item.href}
                            className="text-sm text-muted-foreground block hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    </SheetTrigger>
                </li>
            ))}
        </ul>
    )
}

function MobileNavSection({ title, items }: { title: string; items: NavItem[] }) {
    return (
        <div>
            <p className="uppercase font-bold text-primary mb-2">{title}</p>
            <MobileNavGroup items={items} />
        </div>
    )
}

export function MobileNav() {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild className="hover:bg-transparent">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6 text-white"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 overflow-y-auto flex flex-col pt-10 px-4">
                    <div className="flex flex-col">
                        <h4 className={`${Garacie.className} uppercase text-center text-primary text-xl`}>Hannah & Liberi</h4>
                        <p className={`${canava.className} text-center text-md text-primary `}>Corretora de seguros</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">

                        {/* Para Você */}
                        <AccordionItem value="para-voce" className="border-none">
                            <AccordionTrigger className="hover:no-underline font-bold text-lg py-2 ">
                                Para Você
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-2 flex flex-col gap-4">
                                    <MobileNavSection title="Seguros" items={pessoaFisicaSeguros} />
                                    <MobileNavSection title="Planos" items={pessoaFisicaPlanos} />
                                    <MobileNavSection title="Financeiro" items={pessoaFisicaSolucoes} />
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Para Empresa */}
                        <AccordionItem value="para-empresa" className="border-none">
                            <AccordionTrigger className="hover:no-underline font-bold text-lg py-2 ">
                                Para Empresa
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-2 flex flex-col gap-4">
                                    <MobileNavSection title="Seguros" items={pessoaJuridicaSeguros} />
                                    <MobileNavSection title="Planos" items={pessoaJuridicaPlanos} />
                                    <MobileNavSection title="Financeiro" items={pessoaJuridicaSolucoes} />
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>

                    {/* Links Simples */}
                    <div className="flex flex-col gap-4 ">
                        <Link
                            href="#sobre"
                            className="text-lg font-bold hover:text-primary transition-colors py-2"
                        >
                            Sobre Nós
                        </Link>
                        <Link
                            href="/contato"
                            className="w-full"
                        >
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                                Contato
                            </Button>
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
