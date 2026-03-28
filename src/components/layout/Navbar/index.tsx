"use client";

import Link from "next/link"
import Image from "next/image"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import { useEffect, useState } from "react"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-primary/20"
                    : "bg-primary"
            }`}
        >
            <div className="container mx-auto py-4 lg:py-6 px-4 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl transition-opacity duration-200 hover:opacity-80">
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
