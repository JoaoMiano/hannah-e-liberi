import AboutSection from "@/components/layout/AboutSection"
import HeroSection from "@/components/layout/HeroSection"
import ServiceCard from "@/components/ServiceCard"
import { Heart } from "lucide-react"

const Page = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceCard title="Seguro de Vida" description="Proteção financeira para sua família em caso de imprevistos." icon={<Heart />} type="fisica" url="/pessoa-fisica/seguro-vida"/>
    </main>
  )
}

export default Page