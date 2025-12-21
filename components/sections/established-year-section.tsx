"use client"

import Image from "next/image"
import { TextSlideUpByLine } from "@/components/animate-wrappers"
import { getConfig } from "@/lib/config"

export function EstablishedYearSection() {
  const config = getConfig()
  
  return (
    <section>
      <div className="container relative py-8 md:py-huge">
        <div className="grid place-items-center overflow-hidden px-4">
          <div className="relative w-full">
            {/* Logo background - replaces section-bg.svg */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="relative w-full max-w-4xl h-full min-h-[300px] md:min-h-[500px] opacity-10 md:opacity-15">
                <Image
                  src="/logos/logo.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
            
            {/* Text overlay */}
            <TextSlideUpByLine
              className="relative max-w-screen-md text-center text-2xl font-semibold leading-normal sm:text-4xl md:text-[5.625vw] md:leading-[1.3]"
              segmentClassName={(segment) =>
                segment === "experiences"
                  ? "ms-[7vw] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  : ""
              }>
              {`Crafting digital\nexperiences\nsince ${config.establishedYear.year}`}
            </TextSlideUpByLine>
          </div>
        </div>
      </div>
    </section>
  )
}

