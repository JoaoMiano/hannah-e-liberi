import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Liberi & Meneghetti - Corretora de Seguros",
  description: "Corretora de Seguros especializada em oferecer as melhores soluções em seguros para você e sua família. Proteja o que mais importa com nossos serviços personalizados e atendimento de qualidade.",
  metadataBase: new URL("https://corretoralm.com.br"),
  openGraph: {
    title: "Liberi & Meneghetti - Corretora de Seguros",
    description: "Corretora de Seguros especializada em oferecer as melhores soluções em seguros para você e sua família. Proteja o que mais importa com nossos serviços personalizados e atendimento de qualidade.",
    url: "https://corretoralm.com.br",
    siteName: "Liberi & Meneghetti",
    images: [
      {
        url: "/images/logoPrimaria.png",
        width: 1200,
        height: 630,
        alt: "Liberi & Meneghetti - Corretora de Seguros",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberi & Meneghetti - Corretora de Seguros",
    description: "Corretora de Seguros especializada em oferecer as melhores soluções em seguros para você e sua família.",
    images: ["/images/logoPrimaria.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className } scrollbar-thumb-primary scrollbar-track-zinc-200 scrollbar-w-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
