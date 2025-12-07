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
    <div className="relative flex items-center gap-6 text-2xl">
      <div className="grid size-[72px] place-items-center overflow-hidden rounded-full bg-black text-white">
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
      <div className="container flex min-h-screen flex-col justify-end gap-y-huge py-huge">
        <div className="max-w-7xl text-huge/tight font-semibold">
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
        <div className="flex items-center gap-8">
          <BlockSlideUp transition={{ delay: 0.6, duration: 0.3 }}>
            <AchievementsBadge />
          </BlockSlideUp>
          <BlockSlideUp containerClassName="ms-auto max-w-lg" transition={{ delay: 0.6, duration: 0.3 }}>
            <p className="text-[28.8px] leading-tight">
              {config.hero.subtitle}
            </p>
          </BlockSlideUp>
          <BlockSlideUp transition={{ delay: 0.6, duration: 0.3 }}>
            <AnimatedLink href={config.hero.cta.link}>{config.hero.cta.text}</AnimatedLink>
          </BlockSlideUp>
          {config.hero.secondaryCta && (
            <BlockSlideUp transition={{ delay: 0.7, duration: 0.3 }}>
              <AnimatedLink href={config.hero.secondaryCta.link} variant="outline">{config.hero.secondaryCta.text}</AnimatedLink>
            </BlockSlideUp>
          )}
        </div>
      </div>
    </section>
  )
}

