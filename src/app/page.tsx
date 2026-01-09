import AboutSection from "@/components/layout/AboutSection"
import HeroSection from "@/components/layout/HeroSection"
import PaternsSection from "@/components/layout/ParternsSection"
import ServicesSection from "@/components/layout/ServicesSection"
import TestimonialSection from "@/components/layout/TestimonialSection"


const Page = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <PaternsSection />
    </main>
  )
}

export default Page