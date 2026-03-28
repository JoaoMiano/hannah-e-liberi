import { Button } from "@/components/ui/button";
import { abhayaLibre } from "@/fonts/fonts";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
}

export const HeroSectionService = (props: Props) => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-full object-cover object-bottom opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/75 to-transparent" />
      </div>

      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto py-10 lg:py-16 px-4 lg:px-8 flex items-center h-96 md:h-110 lg:h-120">
        <div className="max-w-3xl flex flex-col gap-5">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
            Hannah & Liberi
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight animate-fade-up ${abhayaLibre.className}`}
            style={{ animationDelay: "80ms" }}>
            {props.title}
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed animate-fade-up"
            style={{ animationDelay: "160ms" }}>
            {props.description}
          </p>

          <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Link href="#contato" className="w-52 lg:w-60 cursor-pointer block">
              <Button className="w-full bg-primary-foreground hover:bg-primary-foreground/90 text-white text-base cursor-pointer flex items-center justify-center gap-2 hover:gap-3 py-5 transition-all duration-300 shadow-lg shadow-primary-foreground/30">
                Solicitar cotação <ChevronDown className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
