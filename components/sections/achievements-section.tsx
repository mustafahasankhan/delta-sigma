"use client"

import { TextSlideUpByWord } from "@/components/animate-wrappers"
import Counter from "@/components/ui/counter"
import { motion } from "framer-motion"
import { getConfig } from "@/lib/config"

export function AchievementsSection() {
  const config = getConfig()
  
  return (
    <section>
      <div className="container py-12 md:py-24">
        {/* Centered heading and description */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <TextSlideUpByWord as="h2" className="text-2xl font-semibold sm:text-3xl md:text-4xl mb-6">
            {config.achievements.heading}
          </TextSlideUpByWord>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {config.achievements.description}
          </p>
        </div>

        {/* Stats row with dividers */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
          {config.achievements.stats.map(({ value, label }, index) => (
            <motion.div
              key={label}
              whileInView="visible"
              viewport={{ once: true }}
              initial="hidden"
              transition={{ staggerChildren: 0.1 }}
              className={`flex flex-col items-center text-center px-8 md:px-16 ${
                index < config.achievements.stats.length - 1 
                  ? "md:border-r md:border-muted-foreground/20" 
                  : ""
              }`}
            >
              <motion.h2
                variants={{ visible: { translateY: 0, opacity: 1 }, hidden: { translateY: 20, opacity: 0 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="whitespace-nowrap text-4xl font-semibold sm:text-5xl md:text-6xl text-primary"
              >
                <Counter
                  variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                  value={value}
                  inViewOnce={true}
                />
                +
              </motion.h2>
              <motion.p
                variants={{ visible: { opacity: 1, translateY: 0 }, hidden: { opacity: 0, translateY: 10 } }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="text-sm text-muted-foreground mt-2 md:text-base"
              >
                {label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
