import AboutSection from "@/components/layout/AboutSection"
import ContactSection from "@/components/layout/CoontactSection"
import HeroSection from "@/components/layout/HeroSection"
import PaternsSection from "@/components/layout/ParternsSection"
import ServicesSection from "@/components/layout/ServicesSection"
import TestimonialSection from "@/components/layout/TestimonialSection"


const Page = () => {
  return (
    <main>
      <HeroSection /> 

      <div id="sobre">
        <AboutSection />
      </div>

      <ServicesSection />
      <TestimonialSection />
      <PaternsSection />
      
      <div id="contato">
        <ContactSection />
      </div>
      
    </main>
  )
}

export default Page