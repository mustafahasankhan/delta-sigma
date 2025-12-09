"use client"

import { TextSlideUpByLine } from "@/components/animate-wrappers"
import { getConfig } from "@/lib/config"

export function EstablishedYearSection() {
  const config = getConfig()
  
  return (
    <section>
      <div className="container relative py-8 md:py-huge">
        <div className="grid place-items-center overflow-hidden px-4">
          <TextSlideUpByLine
            className="max-w-screen-md text-center text-2xl font-semibold leading-normal sm:text-4xl md:text-[5.625vw] md:leading-[1.3]"
            segmentClassName={(segment) =>
              segment === "experiences"
                ? "ms-[7vw] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                : ""
            }>
            {`Crafting digital\nexperiences\nsince ${config.establishedYear.year}`}
          </TextSlideUpByLine>
        </div>

        <div className="absolute inset-0 -z-10 grid grid-cols-2 bg-[size:80%_center] bg-repeat-round md:bg-[size:40%_center]">
          <div
            className="relative bg-cover bg-[position:100%_center] bg-no-repeat opacity-30 md:opacity-100"
            style={{ backgroundImage: "url(/section-bg.svg)" }}>
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-white to-transparent"></div>
          </div>
          <div
            className="relative bg-cover bg-[position:0%_center] bg-no-repeat opacity-30 md:opacity-100"
            style={{ backgroundImage: "url(/section-bg.svg)" }}>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-white"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

