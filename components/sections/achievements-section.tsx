"use client"

import { TextSlideUpByWord } from "@/components/animate-wrappers"
import Counter from "@/components/ui/counter"
import { motion } from "framer-motion"
import { getConfig } from "@/lib/config"

export function AchievementsSection() {
  const config = getConfig()
  
  return (
    <section>
      <div className="container py-8 md:py-huge">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <TextSlideUpByWord as="h2" className="variant-h2 max-w-screen-lg">
              {config.achievements.heading}
            </TextSlideUpByWord>
            <div className="mt-8 flex flex-wrap items-center gap-8 md:mt-huge md:gap-16">
              {config.achievements.stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileInView="visible"
                  viewport={{ once: true }}
                  initial="hidden"
                  transition={{ staggerChildren: 0.1 }}
                  className="space-y-3 md:space-y-8">
                  <motion.h2
                    variants={{ visible: { translateY: 0 }, hidden: { translateY: 100 } }}
                    transition={{ duration: 0.3 }}
                    className="whitespace-nowrap text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                    <Counter
                      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                      value={value}
                      inViewOnce={true}
                    />
                    {value >= 100 ? '+' : ''}
                  </motion.h2>
                  <motion.h4
                    variants={{ visible: { opacity: 1, translateY: 0 }, hidden: { opacity: 0, translateY: 100 } }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base md:whitespace-nowrap">
                    {label}
                  </motion.h4>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full md:max-w-[35.625vw]">
            <h4 className="text-base leading-relaxed md:text-lg">
              {config.achievements.description}
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

