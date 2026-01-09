import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Hannah & Liberi - Corretora de Seguro",
  description: "Corretora de Seguros especializada em oferecer as melhores soluções em seguros para você e sua família. Proteja o que mais importa com nossos serviços personalizados e atendimento de qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className } scrollbar-thumb-primary scrollbar-track-zinc-200 scrollbar-w-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
