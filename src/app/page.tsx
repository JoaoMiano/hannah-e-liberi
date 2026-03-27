import AboutSection from "@/components/layout/AboutSection"
import ContactSection from "@/components/layout/ContactSection"
import HeroSection from "@/components/layout/HeroSection"
import PartnersSection from "@/components/layout/PartnersSection"
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
      <PartnersSection />
      
      <div id="contato">
        <ContactSection />
      </div>
      
    </main>
  )
}

export default Page