"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring } from "framer-motion"

export const ScrollMarquee = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [elementWidth, setElementWidth] = useState(0)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const yProgress = useSpring(scrollYProgress, { damping: 60, stiffness: 700 })
  useEffect(() => {
    if (!targetRef.current) return
    const handleOnResize = () => {
      if (!targetRef.current) return
      setElementWidth(targetRef.current.scrollWidth)
    }
    window.addEventListener("resize", handleOnResize)
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === targetRef.current) handleOnResize()
      }
    })
    handleOnResize()
    resizeObserver.observe(targetRef.current)
    return () => {
      window.removeEventListener("resize", handleOnResize)
      resizeObserver.disconnect()
    }
  }, [targetRef])
  return (
    <section ref={targetRef} className={cn("overflow-hidden", containerClassName)}>
      <motion.div
        style={{
          ["--element-width" as string]: elementWidth,
          ["--progress" as string]: yProgress,
        }} className={cn("min-w-full w-max translate-x-[calc(var(--progress)_*_-50%)]", className)}>
        {children}
      </motion.div>
    </section>
  )
}

