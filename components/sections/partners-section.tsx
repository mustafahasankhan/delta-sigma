"use client"

import { TextSlideUpByWord } from "@/components/animate-wrappers"
import { getConfig } from "@/lib/config"

export function PartnersSection() {
  const config = getConfig()
  
  return (
    <section>
      <div className="container py-huge">
        <TextSlideUpByWord as="h2" className="variant-h2 max-w-screen-xl">
          {config.partners.heading}
        </TextSlideUpByWord>
      </div>
    </section>
  )
}

