"use client"

import { useRef } from "react"
import Image from "next/image"
import { HorizontalScrollTrigger } from "@/components/horizontal-scroll-trigger"
import { AnimatedLink } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { getConfig } from "@/lib/config"

export const OurWorksSection = () => {
  const config = getConfig()
  const projects = config.projects.slice(0, 2) // Show only 2 projects
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  if (!projects.length) return null
  
  return (
    <HorizontalScrollTrigger>
      <div className="flex h-dvh items-center py-8 md:py-[7.5vw]">
        <div ref={ref} className="flex flex-nowrap space-x-4 px-4 md:space-x-[2.5vw] md:px-[5.625rem]">
          <Heading projectCount={config.projects.length} />
          {projects.map((project, index) => (
            <motion.a
              href={`#`}
              key={project.id}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <Card className="relative aspect-[1.25] min-w-[80vw] overflow-hidden bg-transparent text-primary-foreground ring-0 ring-primary transition-shadow duration-300 hover:ring-4 md:min-w-[43.125vw]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="inset-0 -z-10 object-cover"
                  priority={index === 0}
                />
                <div className="flex size-full flex-col gap-2 md:gap-4">
                  <div className="self-end">{project.isLatest && <Badge className="text-xs md:text-sm">Latest</Badge>}</div>
                  <h2 className="mt-auto text-xl font-semibold md:text-3xl lg:variant-h2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {project.categories?.map((category) => (
                      <Badge key={category} variant="outline" className="text-xs md:text-sm">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
          <Ending />
        </div>
      </div>
    </HorizontalScrollTrigger>
  )
}

const Heading = ({ projectCount }: { projectCount: number }) => {
  return (
    <div className="flex min-w-[70vw] flex-col md:min-w-[32.5625vw]">
      <div className="flex items-center gap-3 md:gap-4">
        <h2 className="text-2xl font-semibold md:text-4xl lg:variant-h2">Work</h2>
        <div className="grid aspect-square size-10 place-items-center rounded-full border border-muted md:size-[70px]">
          <h5 className="text-sm md:text-lg">{projectCount}</h5>
        </div>
      </div>
      <h4 className="mt-4 text-sm leading-relaxed md:mt-12 md:max-w-[20vw] md:text-base">
        A selection of our crafted work, built from scratch by our talented in-house team.
      </h4>
      <div className="mt-6 md:mt-auto md:pt-8">
        <AnimatedLink href="#" variant="outline" className="text-sm md:text-base">
          Case Studies
        </AnimatedLink>
      </div>
    </div>
  )
}

const Ending = () => {
  return (
    <div className="flex aspect-[1.25] min-w-[70vw] flex-col items-center justify-center gap-4 md:min-w-[32.5625vw] md:gap-5">
      <h2 className="text-2xl font-semibold md:text-4xl lg:variant-h2">View More</h2>
      <AnimatedLink href="#" variant="outline" className="text-sm md:text-base">
        Case Studies
      </AnimatedLink>
    </div>
  )
}

