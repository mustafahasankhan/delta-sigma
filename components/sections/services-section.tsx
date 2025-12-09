"use client"

import Link from "next/link"
import { TextSlideUpByText, TextSlideUpByWord } from "@/components/animate-wrappers"
import { AnimatedButton as Button } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { getConfig } from "@/lib/config"

const MotionCard = motion.create(Card)

export function ServicesSection() {
  const config = getConfig()
  
  return (
    <section className="container py-8 md:py-huge">
      <TextSlideUpByWord as="h2" className="variant-h2">
        We're good at
      </TextSlideUpByWord>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_50.75vw] lg:items-end">
        <div>
          <div className="mt-4 space-y-2 md:mt-6 md:space-y-4">
            <p className="text-sm md:text-base">Services</p>
            {config.services.map((item) => (
              <Link href={`#`} key={item} className="block overflow-hidden text-xl font-semibold sm:text-2xl md:text-[2vw]">
                <TextSlideUpByText>{item}</TextSlideUpByText>
              </Link>
            ))}
          </div>
        </div>
        <MotionCard
          whileInView="visible"
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{ visible: { scaleY: 1 }, hidden: { scaleY: 0 } }}
          viewport={{ once: true }}
          className="origin-top bg-primary p-0 text-primary-foreground">
          <motion.div
            transition={{ delay: 0.9 }}
            variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
            className="p-6 md:p-12 lg:p-16">
            <h3 className="text-xl font-semibold leading-tight sm:text-2xl md:text-3xl">
              {config.servicesCta.heading}
            </h3>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8 md:gap-4">
              <Button variant="ghost" className="w-full sm:w-auto">
                {config.servicesCta.buttonText}
              </Button>
              <Badge size="lg" variant="outline" className="border-current py-3 text-sm md:py-4 md:text-base">
                {config.servicesCta.phone}
              </Badge>
            </div>
          </motion.div>
        </MotionCard>
      </div>
    </section>
  )
}

