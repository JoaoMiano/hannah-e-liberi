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
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-full object-cover object-bottom opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 to-transparent"></div>
      </div>

      <div className="relative container mx-auto py-8 lg:py-12 px-4 lg:px-8 flex items-center h-96 md:h-110 lg:h-120">
        <div className="max-w-3xl flex flex-col gap-4">


          <h1 className={`text-4xl md:text-5xl lg:text-6xl text-white font-bold ${abhayaLibre.className}`}>
            {props.title}
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed">
            {props.description}
          </p>

          <Link
            href="#contato"
            className="w-52 lg:w-60 cursor-pointer"
          >
            <Button className="w-full bg-transparent border border-secondary text-white text-lg cursor-pointer flex items-center justify-center gap-2 hover:gap-4">
              Solicitar cotação <ChevronDown className="text-xl" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}