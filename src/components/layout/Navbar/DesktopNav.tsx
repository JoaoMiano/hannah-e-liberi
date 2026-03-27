import Link from "next/link"
import { ChevronDown } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    NavItem,
    pessoaFisicaPlanos,
    pessoaFisicaSeguros,
    pessoaFisicaSolucoes,
    pessoaJuridicaPlanos,
    pessoaJuridicaSeguros,
    pessoaJuridicaSolucoes
} from "@/constants/itens-navbar"
import { canava } from "@/fonts/fonts"

function NavList({ title, items }: { title: string; items: NavItem[] }) {
    return (
        <div>
            <h5 className={`mb-1 text-md p-2 font-bold leading-none text-primary uppercase tracking-wider ${canava.className}`}>
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

export function DesktopNav() {
    return (
        <div className="hidden lg:flex">
            <NavigationMenu>
                <NavigationMenuList className="gap-2">

                    {/* Menu Para Você */}
                    <NavigationMenuItem >
                        <NavigationMenuTrigger>Para Você <ChevronDown className="pl-2" /></NavigationMenuTrigger>
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
                        <NavigationMenuTrigger>Para Empresa <ChevronDown className="pl-2" /></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid grid-cols-3 gap-3 px-2 py-4 w-105">
                                <NavList title="Seguros" items={pessoaJuridicaSeguros} />
                                <NavList title="Planos" items={pessoaJuridicaPlanos} />
                                <NavList title="Financeiro" items={pessoaJuridicaSolucoes} />
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Sobre Nós */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/#sobre"
                                className=" font-medium select-none space-y-1 text-black bg-white rounded-md px-4 py-2 h-9 flex items-center justify-center leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                                <p>Sobre Nós</p>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#contato"
                                className=" font-medium select-none space-y-1 text-white bg-primary-foreground rounded-md px-8 py-2 h-9 flex items-center justify-center leading-none no-underline outline-none transition-colors hover:bg-primary-foreground/70 focus:bg-primary-foreground/70 hover:text-white text-sm"
                            >
                                <p className="pointer-events-none">Contato</p>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
                <NavigationMenuViewport />
            </NavigationMenu>
        </div>
    )
}
