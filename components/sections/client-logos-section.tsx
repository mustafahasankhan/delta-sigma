"use client"

import Image from "next/image"
import { TextSlideUpByWord } from "@/components/animate-wrappers"
import { motion } from "framer-motion"

// Client logos from /public/clients folder
const clientLogos = [
  { name: "Andrew", src: "/clients/andrew.svg" },
  { name: "Brand Bench", src: "/clients/brand bench.svg" },
  { name: "Dangus", src: "/clients/dangus.svg" },
  { name: "HMN Studio", src: "/clients/hmn STUDIO.svg" },
  { name: "Kamal Pharma", src: "/clients/kamal pharma.svg" },
  { name: "Mithilanchal Traders", src: "/clients/mithilanchal traders.svg" },
  { name: "Naxatralab", src: "/clients/Naxatralab.svg" },
  { name: "Niwesh Niti", src: "/clients/niwesh niti.svg" },
  { name: "Powerprime", src: "/clients/powerprime.svg" },
  { name: "Powerteck", src: "/clients/powerteck.svg" },
  { name: "Startup Mahakumbh", src: "/clients/Startup Mahakumbh.svg" },
]

export function ClientLogosSection() {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      {/* Heading */}
      <div className="container mb-8 md:mb-12">
        <TextSlideUpByWord as="p" className="text-center text-muted-foreground text-base md:text-lg">
          Brands who believe in our creativity
        </TextSlideUpByWord>
      </div>
      
      {/* Auto-sliding logos - right to left */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-12 md:gap-20"
          animate={{
            x: [0, -2200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Triple the logos for seamless loop */}
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={48}
                className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
