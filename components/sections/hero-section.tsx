"use client"

import { useEffect, useState } from "react"
import { BlockSlideUp } from "@/components/animate-wrappers"
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
    <div className="relative flex items-center gap-3 text-base sm:gap-4 sm:text-lg md:gap-6 md:text-xl">
      <div className="grid size-12 place-items-center overflow-hidden rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-sm text-white sm:size-14 sm:text-base md:size-16 md:text-lg font-semibold">
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
          className="text-white/70">
          {achievements[currentIndex].label}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

// Component to render hero title with highlighted letters
const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] text-white"
    >
      <div>
        We turn <span className="text-primary">i</span>deas
      </div>
      <div className="mt-2">
        <span className="text-primary">i</span>nto visuals
      </div>
      <div className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/90">
        That move people
      </div>
    </motion.div>
  )
}

export const HeroSection = () => {
  const config = getConfig()
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex min-h-screen flex-col justify-between py-8 md:py-12">
        {/* Spacer for header */}
        <div className="h-20" />

        {/* Main Content */}
        {/* <div className="flex-1 flex flex-col justify-center">
          <HeroTitle />
        </div> */}

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left - Stats Badge */}
          <BlockSlideUp transition={{ delay: 0.6, duration: 0.3 }}>
            <AchievementsBadge />
          </BlockSlideUp>

          {/* Center - Description */}
          <BlockSlideUp containerClassName="md:max-w-md" transition={{ delay: 0.7, duration: 0.3 }}>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              {config.hero.subtitle}
            </p>
          </BlockSlideUp>

          {/* Right - CTA Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            <BlockSlideUp transition={{ delay: 0.8, duration: 0.3 }}>
              <AnimatedLink 
                href={config.hero.cta.link} 
                className="text-sm sm:text-base md:text-lg bg-primary hover:bg-primary/90 text-white border-primary"
              >
                {config.hero.cta.text}
              </AnimatedLink>
            </BlockSlideUp>
            {config.hero.secondaryCta && (
              <BlockSlideUp transition={{ delay: 0.9, duration: 0.3 }}>
                <AnimatedLink 
                  href={config.hero.secondaryCta.link} 
                  variant="outline" 
                  className="text-sm sm:text-base md:text-lg border-white/30 text-white hover:bg-white/10"
                >
                  {config.hero.secondaryCta.text}
                </AnimatedLink>
              </BlockSlideUp>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
