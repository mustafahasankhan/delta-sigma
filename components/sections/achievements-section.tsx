"use client"

import { TextSlideUpByWord } from "@/components/animate-wrappers"
import Counter from "@/components/ui/counter"
import { motion } from "framer-motion"
import { getConfig } from "@/lib/config"

export function AchievementsSection() {
  const config = getConfig()
  
  return (
    <section>
      <div className="container py-huge">
        <div className="flex items-end justify-between gap-8">
          <div>
            <TextSlideUpByWord as="h2" className="variant-h2 max-w-screen-lg">
              {config.achievements.heading}
            </TextSlideUpByWord>
            <div className="mt-huge flex items-center gap-16">
              {config.achievements.stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileInView="visible"
                  viewport={{ once: true }}
                  initial="hidden"
                  transition={{ staggerChildren: 0.1 }}
                  className="space-y-8">
                  <motion.h2
                    variants={{ visible: { translateY: 0 }, hidden: { translateY: 100 } }}
                    transition={{ duration: 0.3 }}
                    className="variant-h2 whitespace-nowrap">
                    <Counter
                      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                      value={value}
                      inViewOnce={true}
                    />
                  </motion.h2>
                  <motion.h4
                    variants={{ visible: { opacity: 1, translateY: 0 }, hidden: { opacity: 0, translateY: 100 } }}
                    transition={{ duration: 0.3 }}
                    className="variant-h4 whitespace-nowrap">
                    {label}
                  </motion.h4>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="max-w-[35.625vw]">
            <h4 className="variant-h4">
              {config.achievements.description}
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

