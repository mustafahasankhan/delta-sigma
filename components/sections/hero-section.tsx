"use client"

import { useEffect, useState } from "react"
import { BlockSlideUp, TextSlideUpByWord } from "@/components/animate-wrappers"
import { AnimatedLink } from "@/components/ui/animated-button"
import { getConfig } from "@/lib/config"
import { AnimatePresence, motion } from "framer-motion"

const variants = {
  initial: {
    y: 8,
    opacity: 0,
    duration: 0.3,
  },
  animate: {
    y: 0,
    opacity: 1,
    duration: 0.3,
  },
  exit: {
    y: 8,
    opacity: 0,
    duration: 0.5,
  },
}

const AchievementsBadge = () => {
  const config = getConfig()
  const achievements = config.hero.rotatingBadges
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [achievements.length])

  return (
    <div className="relative flex items-center gap-3 text-base sm:gap-4 sm:text-lg md:gap-6 md:text-2xl">
      <div className="grid size-12 place-items-center overflow-hidden rounded-full bg-black text-sm text-white sm:size-16 sm:text-base md:size-[72px] md:text-xl">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ease: "easeOut" }}>
            {achievements[currentIndex].value}
          </motion.span>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ ease: "easeOut", delay: 0.1 }}
          className="text-muted">
          {achievements[currentIndex].label}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export const HeroSection = () => {
  const config = getConfig()
  
  return (
    <section>
      <div className="container flex min-h-screen flex-col justify-end gap-y-8 py-8 md:gap-y-huge md:py-huge">
        <div className="max-w-7xl text-4xl font-semibold leading-tight sm:text-5xl md:text-huge md:leading-tight">
          <TextSlideUpByWord
            delay={0.3}
            staggerChildren={0.1}
            segmentClassName={(segment) =>
              segment === config.hero.highlightWord
                ? "animate-gradientMove bg-gradient-to-r from-primary via-secondary to-primary bg-[length:1600px_100%] bg-clip-text text-transparent"
                : ""
            }>
            {config.hero.title}
          </TextSlideUpByWord>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <BlockSlideUp transition={{ delay: 0.6, duration: 0.3 }}>
            <AchievementsBadge />
          </BlockSlideUp>
          <BlockSlideUp containerClassName="md:ms-auto md:max-w-lg" transition={{ delay: 0.6, duration: 0.3 }}>
            <p className="text-base leading-tight sm:text-lg md:text-[28.8px]">
              {config.hero.subtitle}
            </p>
          </BlockSlideUp>
          <div className="flex flex-wrap gap-4">
            <BlockSlideUp transition={{ delay: 0.6, duration: 0.3 }}>
              <AnimatedLink href={config.hero.cta.link} className="text-sm sm:text-base md:text-2xl">{config.hero.cta.text}</AnimatedLink>
            </BlockSlideUp>
            {config.hero.secondaryCta && (
              <BlockSlideUp transition={{ delay: 0.7, duration: 0.3 }}>
                <AnimatedLink href={config.hero.secondaryCta.link} variant="outline" className="text-sm sm:text-base md:text-2xl">{config.hero.secondaryCta.text}</AnimatedLink>
              </BlockSlideUp>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

