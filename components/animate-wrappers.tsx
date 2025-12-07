"use client"

import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion } from "framer-motion"
import { TextAnimate, TextAnimateProps } from "./ui/text-animate"

// Text animation wrappers
export function TextSlideUpByLine(props: TextAnimateProps) {
  return <TextAnimate by="line" startOnView animation="slideUp" once={true} {...props} />
}

export function TextSlideUpByWord(props: TextAnimateProps) {
  return <TextAnimate by="word" duration={0.2} startOnView animation="slideUp" once={true} {...props} />
}

export function TextSlideUpByCharacter(props: TextAnimateProps) {
  return <TextAnimate by="character" startOnView animation="slideUp" once={true} {...props} />
}

export function TextSlideUpByText(props: TextAnimateProps) {
  return <TextAnimate by="text" startOnView animation="slideUp" once={true} {...props} />
}

export function TextFadeInByText(props: TextAnimateProps) {
  return <TextAnimate by="text" startOnView animation="fadeIn" once={true} {...props} />
}

// Block animation wrapper
export function BlockSlideUp({
  whileInView = { translateY: "0%", opacity: 1 },
  transition = { delay: 0.6, duration: 0.3 },
  viewport = { once: true },
  style = { translateY: "50%", opacity: 0 },
  containerClassName,
  ...props
}: HTMLMotionProps<"div"> & { containerClassName?: string }) {
  return (
    <div className={cn("-m-4 overflow-clip p-4", containerClassName)}>
      <motion.div whileInView={whileInView} transition={transition} viewport={viewport} style={style} {...props} />
    </div>
  )
}

