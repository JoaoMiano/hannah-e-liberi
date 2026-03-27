import Link from "next/link"
import Image from "next/image"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-primary backdrop-blur">
            <div className="container mx-auto py-4 lg:py-6 px-4 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl ">
                    <Image
                        src="/images/logoPrimaria.png"
                        alt="Liberi & Meneghetti Logo"
                        width={150}
                        height={100}
                        className="w-28 lg:w-32"
                    />
                </Link>

                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    )
}
