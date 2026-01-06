import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
