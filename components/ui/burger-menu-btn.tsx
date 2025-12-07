"use client"

import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion, stagger, useAnimate } from "framer-motion"

export function BurgerMenuBtn({ ref, className, ...props }: HTMLMotionProps<"button">) {
  const [scope, animate] = useAnimate()
  const onHoverStart = () => {
    animate(
      "span",
      {
        y: [0, -24, 24, -2, 0],
        scale: [1, 1.2, 1.2, 1.2, 1],
      },
      {
        duration: 0.7,
        times: [0, 0.5, 0.5, 0.9, 1],
        delay: stagger(0.1),
      }
    )
  }
  return (
    <motion.button
      ref={ref}
      onHoverStart={onHoverStart}
      className={cn(
        "relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-[#71777e]",
        className
      )}
      {...props}>
      <span ref={scope} className="flex items-center justify-center">
        <span className="absolute inset-0 -top-[6px] m-auto block h-0.5 w-3.5 origin-center bg-foreground"></span>
        <span className="absolute inset-0 top-[6px] m-auto block h-0.5 w-3.5 origin-center bg-foreground"></span>
      </span>
    </motion.button>
  )
}

