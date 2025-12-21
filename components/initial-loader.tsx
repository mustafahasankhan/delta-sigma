"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

export const waitTime = 2500
export function InitialLoader({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, waitTime)

    return () => {
      clearTimeout(timer)
      window?.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [])

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="animator-loader"
          initial={{ translateX: "0%" }}
          exit={{ translateX: "100%", transition: { delay: 0.5, duration: 0.7, when: "afterChildren" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5, when: "afterChildren" } }}
            className="flex flex-col items-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/logos/icon.svg"
                alt="PICTORIAL"
                fill
                className="object-contain"
                priority
              />
            </div>
            <motion.div
              className="mt-6 h-1 bg-white w-64 md:w-80"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div key="content">{children}</motion.div>
      )}
    </AnimatePresence>
  )
}

