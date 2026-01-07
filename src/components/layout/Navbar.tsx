import Link from "next/link"
import { Menu } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    NavItem,
    pessoaFisicaPlanos,
    pessoaFisicaSeguros,
    pessoaFisicaSolucoes,
    pessoaJuridicaPlanos,
    pessoaJuridicaSeguros,
    pessoaJuridicaSolucoes
} from "@/data/itens-navbar"
import Image from "next/image"

import { canava, Garacie } from "@/fonts/fonts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur">
            <div className="container mx-auto py-2 lg:py-4 px-4 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl">
                    <Image
                        src="/images/logoSecundaria.jpg"
                        alt="Hannah & Liberi Logo"
                        width={150}
                        height={100}
                        className="w-28 lg:w-32"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex">
                    <NavigationMenu>
                        <NavigationMenuList>

                            {/* Menu Para Você */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Para Você</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid grid-cols-3 gap-3 px-2 py-4 w-105">
                                        <NavList title="Seguros" items={pessoaFisicaSeguros} />
                                        <NavList title="Planos" items={pessoaFisicaPlanos} />
                                        <NavList title="Financeiro" items={pessoaFisicaSolucoes} />
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Menu Para Sua Empresa */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Para Empresa</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid grid-cols-3 gap-3 px-2 py-4 w-105">
                                        <NavList title="Seguros" items={pessoaJuridicaSeguros} />
                                        <NavList title="Planos" items={pessoaJuridicaPlanos} />
                                        <NavList title="Financeiro" items={pessoaJuridicaSolucoes} />
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Sobre nos */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/sobre"
                                        className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                                    >
                                        Sobre Nós
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/contato"
                                        className="block select-none space-y-1 rounded-md py-2 px-8 leading-none no-underline outline-none transition-colors bg-secondary text-white text-sm hover:text-white hover:bg-secondary-foreground"
                                    >
                                        Contato
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                        {/* O Viewport faz a mágica da transição suave */}
                        <NavigationMenuViewport />
                    </NavigationMenu>
                </div>

                {/* Mobile Navigation (Menu Hambúrguer) */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 overflow-y-auto flex flex-col pt-10 px-4">
                            <div className="flex flex-col">
                                <h4 className={`${Garacie.className} uppercase text-center text-primary text-xl`}>Hannah & Liberi</h4>
                                <p className={`${canava.className} text-center text-md text-primary `}>Corretora de seguros</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full">

                                {/* Trigger Para Você */}
                                <AccordionItem value="para-voce" className="border-none">
                                    <AccordionTrigger className="hover:no-underline font-bold text-lg py-2 ">
                                        Para Você
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-2 flex flex-col gap-4">
                                            <div>
                                                <p className="uppercase font-bold text-primary mb-2">Seguros</p>
                                                <MobileNavGroup items={pessoaFisicaSeguros} />
                                            </div>
                                            <div>
                                                <p className="uppercase font-bold text-primary mb-2">Planos</p>
                                                <MobileNavGroup items={pessoaFisicaPlanos} />
                                            </div>
                                            <div>
                                                <p className="uppercase font-bold text-primary mb-2">Financeiro</p>
                                                <MobileNavGroup items={pessoaFisicaSolucoes} />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* Trigger Para Empresa */}
                                <AccordionItem value="para-empresa" className="border-none">
                                    <AccordionTrigger className="hover:no-underline font-bold text-lg py-2 ">
                                        Para Empresa
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-2 flex flex-col gap-4">
                                            <div>
                                                <p className="uppercase font-bold text-primary mb-2">Seguros</p>
                                                <MobileNavGroup items={pessoaJuridicaSeguros} />
                                            </div>
                                            <div>
                                                <p className="uppercase font-bold text-primary mb-2">Planos</p>
                                                <MobileNavGroup items={pessoaJuridicaPlanos} />
                                            </div>
                                            <div>
                                                <p className="uppercase font-bold text-primary mb-2">Financeiro</p>
                                                <MobileNavGroup items={pessoaJuridicaSolucoes} />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                            </Accordion>

                            {/* Links Simples: Sobre e Contato */}
                            <div className="flex flex-col gap-4 ">
                                <Link
                                    href="/sobre"
                                    className="text-lg font-bold hover:text-primary transition-colors py-2"
                                >
                                    Sobre Nós
                                </Link>
                                <Link
                                    href="/contato"
                                    className="w-full"
                                >
                                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                                        Contato
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

// Subcomponente para organizar as listas no Desktop
function NavList({ title, items }: { title: string; items: NavItem[] }) {
    return (
        <div>
            <h5 className={`mb-1 text-sm p-2 font-bold leading-none text-primary uppercase tracking-wider ${canava.className}`}>
                {title}
            </h5>
            <ul className="flex flex-col gap-1">
                {items.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="text-sm text-zinc-900 block leading-none p-2 rounded-md hover:bg-accent transition-colors">
                            {item.name}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}

// Subcomponente para a lista Mobile
function MobileNavGroup({ items }: { items: NavItem[] }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li key={item.name}>
                    <SheetTrigger asChild>
                        {/* O SheetTrigger asChild aqui faz o menu fechar automaticamente ao clicar no link */}
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