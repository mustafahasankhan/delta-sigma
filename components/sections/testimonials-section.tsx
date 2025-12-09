"use client"

import { useRef } from "react"
import { TextSlideUpByText, TextSlideUpByWord } from "@/components/animate-wrappers"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoaderCircle } from "lucide-react"
import { MotionValue, motion, useScroll } from "framer-motion"
import { getConfig } from "@/lib/config"

type Testimonial = {
  id: string
  author: {
    name: string
    company?: string
    image?: string
  }
  content: string
}

export function TestimonialsSection() {
  const config = getConfig()
  const testimonials = config.testimonials
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  })
  
  if (!testimonials.length) return null
  
  return (
    <section
      style={{
        backgroundImage:
          "radial-gradient(circle at -30% 21%,hsl(var(--primary)) 0,transparent 30%),radial-gradient(circle at 120% 80%,hsl(var(--primary)) 0,transparent 30%)",
      }}
      className="relative min-h-screen bg-foreground text-background">
      <div className="container py-8 md:max-w-[84.375vw] md:py-huge">
        <Heading />
        <div ref={target} className="relative mt-6 space-y-6 md:mt-8 md:space-y-12">
          {testimonials.map((testimonial) => (
            <TestimonialComponent key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <div className="container relative flex h-full justify-end pb-[16rem] pt-[30rem]">
          <div className="sticky right-0 top-1/2 h-max -translate-y-1/2">
            <ProgressBar progress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Heading() {
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  })
  return (
    <motion.div
      ref={target}
      style={{ ["--progress" as string]: scrollYProgress }}
      className="scale-[calc(100%_-_(var(--progress)_*_10%))] space-y-8">
      <TextSlideUpByWord as="h2" className="variant-h2">
        Client Feedback
      </TextSlideUpByWord>
      <div className="flex items-end justify-between gap-4">
        <TextSlideUpByText as="h4" className="variant-h4">
          We're collaborators - We build tight-knit partnerships with our clients.
        </TextSlideUpByText>
        <div className="variant-h4 inline-flex items-center gap-4 text-muted">
          <LoaderCircle className="animate-spin" size={40} />
          <span>Keep scrolling</span>
        </div>
      </div>
    </motion.div>
  )
}

function TestimonialComponent({ id, author: { name, company, image }, content }: Testimonial) {
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "start start"],
  })
  return (
    <motion.div
      ref={target}
      style={{ ["--progress" as string]: scrollYProgress }}
      className="scale-[calc(0.95_+_(var(--progress)_*_0.05))] rounded-2xl bg-transparent p-4 text-background ring-1 ring-[#fff3] md:scale-[calc(0.8_+_(var(--progress)_*_0.2))] md:rounded-[32px] md:p-[4vw]">
      <div className="mb-4 mt-4 md:mb-8 md:mt-10">
        <p className="text-lg font-semibold leading-snug sm:text-xl md:text-2xl lg:text-[2vw]">"{content}"</p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Avatar className="size-12 md:size-16">
            <AvatarImage src={image} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h5 className="text-sm text-muted md:text-base lg:text-lg">{name}</h5>
        </div>
        {company && <h4 className="text-sm text-primary md:text-base lg:text-lg">{company}</h4>}
      </div>
    </motion.div>
  )
}

function ProgressBar({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="relative h-[200px] w-2 overflow-hidden rounded-full bg-secondary">
      <motion.div
        style={{ ["--progress" as string]: progress }}
        className="h-full w-full flex-1 translate-y-[calc((var(--progress)_*_100%)_-_100%)] bg-primary"></motion.div>
    </div>
  )
}

