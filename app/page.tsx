import { ParallaxImage } from "@/components/parallax-image"
import { ScrollMarquee } from "@/components/scroll-marquee"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { EstablishedYearSection } from "@/components/sections/established-year-section"
import { HeroSection } from "@/components/sections/hero-section"
import { OurWorksSection } from "@/components/sections/our-works-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TrustSection } from "@/components/sections/trust-section"
import { WhatWeDoSection } from "@/components/sections/what-we-do-section"
import { getConfig } from "@/lib/config"

export default function Page() {
  const config = getConfig()
  
  return (
    <>
      <HeroSection />
      <OurWorksSection />
      <WhatWeDoSection />
      <TrustSection />
      <section>
        <div className="container py-4 md:py-0">
          <ParallaxImage className="aspect-video md:aspect-[1.75176]" src={config.team.image} alt={config.team.alt} />
        </div>
      </section>
      <PartnersSection />
      <ScrollMarquee className="whitespace-nowrap px-[20vw] py-8 text-[12vw] font-semibold leading-tight sm:px-[30vw] sm:text-[10vw] md:px-[50dvw] md:py-huge md:text-[9.375vw]">
        {config.marquee.text}
      </ScrollMarquee>
      <AchievementsSection />
      <EstablishedYearSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  )
}
