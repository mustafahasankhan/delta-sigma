"use client"

import Image from "next/image"
import { TextSlideUpByWord } from "@/components/animate-wrappers"
import { AnimatedLink } from "@/components/ui/animated-button"
import { getConfig } from "@/lib/config"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { 
  Sparkles, 
  Target, 
  Eye, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Palette,
  Film,
  Scissors,
  Share2,
  PenTool,
  Package
} from "lucide-react"

const serviceIcons: Record<string, React.ElementType> = {
  "Brand Identity": Palette,
  "Motion Graphics": Film,
  "Video Editing": Scissors,
  "Social-First Visuals": Share2,
  "Logo Design": PenTool,
  "Packaging Design": Package,
}

export default function AboutPage() {
  const config = getConfig()
  const about = config.about
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              About PICTORIAL
            </motion.div>

            <TextSlideUpByWord as="h1" className="variant-h1 mb-6">
              {about.hero.title}
            </TextSlideUpByWord>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="variant-h4 text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              {about.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="variant-p text-muted-foreground max-w-2xl mx-auto"
            >
              {about.hero.description}
            </motion.p>

            {/* Tagline Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-primary/10 max-w-2xl mx-auto"
            >
              <p className="text-xl md:text-2xl font-semibold text-foreground italic">
                "{about.hero.tagline}"
              </p>
              <p className="text-muted-foreground mt-2">{about.hero.taglineDescription}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Split Section */}
      <section className="py-16 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Eye className="w-4 h-4" />
                Who We Are
              </div>

              <h2 className="variant-h2 mb-8">{about.whoWeAre.title}</h2>

              <div className="space-y-6">
                <p className="variant-p text-muted-foreground leading-relaxed">
                  {about.whoWeAre.description}
                </p>
                <p className="variant-p text-muted-foreground leading-relaxed">
                  {about.whoWeAre.text}
                </p>
                <p className="variant-p font-semibold text-foreground">
                  {about.whoWeAre.closing}
                </p>
              </div>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-secondary/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 rounded-full border-2 border-dashed border-primary/30"
                />
                
                {/* Center logo */}
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Image
                    src="/logos/icon.svg"
                    alt="PICTORIAL"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 w-12 h-12 rounded-xl bg-card shadow-lg flex items-center justify-center"
                >
                  <Target className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 left-10 w-12 h-12 rounded-xl bg-card shadow-lg flex items-center justify-center"
                >
                  <Zap className="w-6 h-6 text-secondary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Bento Grid */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="variant-h2 mb-4">{about.whatWeDo.title}</h2>
            <p className="variant-p text-muted-foreground max-w-2xl mx-auto">
              {about.whatWeDo.subtitle}
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.whatWeDo.services.map((service, index) => {
              const Icon = serviceIcons[service.title] || Sparkles
              const isLarge = index === 0 || index === 3
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-3xl bg-card p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${
                    isLarge ? "lg:col-span-1" : ""
                  }`}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach - Timeline Style */}
      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Our Process
              </div>
              <h2 className="variant-h2 mb-4">{about.approach.title}</h2>
              <p className="variant-p text-muted-foreground">
                {about.approach.subtitle}
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

              {["Understand", "Design", "Refine", "Deliver"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="p-6 rounded-2xl bg-card">
                      <span className="text-5xl font-bold text-primary/20">0{index + 1}</span>
                      <h3 className="text-2xl font-semibold mt-2 mb-2">{step}</h3>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary z-10 flex-shrink-0" />

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>

            {/* Focus text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
            >
              {about.approach.focus}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why PICTORIAL - Feature Cards */}
      <section className="py-16 md:py-32 bg-foreground text-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="variant-h2 mb-4">{about.whyPictorial.title}</h2>
          </motion.div>

          {/* Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {about.whyPictorial.points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-background/5 hover:bg-background/10 border border-background/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-lg leading-relaxed">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-xl font-semibold mt-16 max-w-2xl mx-auto"
          >
            {about.whyPictorial.closing}
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary via-primary to-secondary p-12 md:p-20"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            </div>

            <div className="relative text-center text-primary-foreground">
              <h2 className="variant-h2 mb-6">{about.cta.title}</h2>
              <p className="variant-p max-w-2xl mx-auto mb-4 opacity-90">
                {about.cta.description}
              </p>
              <p className="text-xl font-semibold mb-10 opacity-90">
                {about.cta.closing}
              </p>
              <AnimatedLink 
                href="/contact" 
                variant="ghost"
                className="group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </AnimatedLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
