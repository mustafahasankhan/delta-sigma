"use client"

import { TextSlideUpByLine, TextSlideUpByWord } from "@/components/animate-wrappers"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { getConfig } from "@/lib/config"

const MotionCard = motion.create(Card)

export function TrustSection() {
  const config = getConfig()
  
  return (
    <section>
      <div className="container py-8 md:py-huge">
        <div className="flex flex-col gap-6 md:items-end md:justify-between lg:flex-row">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <TextSlideUpByWord as="h2" className="variant-h2">
              Your Digital Partner
            </TextSlideUpByWord>
            <h4 className="text-base leading-relaxed md:text-lg">
              We partner with companies of all sizes to solve complex business challenges and define their digital strategies and objectives that deliver results. We help bring ideas to life and create brands, websites & digital products that work.
            </h4>
            <div className="mt-6 md:mt-huge">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center -space-x-4 md:-space-x-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Avatar key={i} className="size-12 md:size-16">
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <h5 className="text-sm text-muted md:text-base lg:text-lg">Brands who've trusted us...</h5>
              </div>
            </div>
          </div>

          <MotionCard
            whileInView="visible"
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{ visible: { scaleY: 1 }, hidden: { scaleY: 0 } }}
            viewport={{ once: true }}
            className="origin-top p-0">
            <motion.div
              transition={{ delay: 0.9 }}
              variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              className="flex divide-x-2 p-6 md:p-12 lg:p-16">
              {(
                [
                  [20, "Years on the market"],
                  [500, "Satisfied Customers"],
                ] as const
              ).map((item) => (
                <div key={item[1]} className="flex-1 space-y-2 p-4 text-center md:space-y-4 md:p-[2vw]">
                  <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">{item[0]}</h2>
                  <h4 className="text-xs sm:text-sm md:whitespace-nowrap md:text-base">{item[1]}</h4>
                </div>
              ))}
            </motion.div>
          </MotionCard>
        </div>
      </div>
    </section>
  )
}

