"use client"

import * as React from "react"
import { createContext, forwardRef, useContext, useState, type ForwardedRef } from "react"
import Link from "next/link"
import { AnimatedLink } from "@/components/ui/animated-button"
import { cn } from "@/lib/utils"
import * as RadixDialog from "@radix-ui/react-dialog"
import { BlockSlideUp, TextFadeInByText } from "./animate-wrappers"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { getSiteConfig } from "@/lib/config"

const DialogOpenContext = createContext<boolean>(false)

export function DialogRoot({ children, ...props }: RadixDialog.DialogProps) {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <DialogOpenContext.Provider value={isOpen}>
      <RadixDialog.Root onOpenChange={setOpen} {...props}>
        {children}
      </RadixDialog.Root>
    </DialogOpenContext.Provider>
  )
}

export const DialogTrigger = RadixDialog.Trigger

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.5, delay: 0.3 } },
  open: { opacity: 1, transition: { duration: 0.5 } },
}

const dialogVariants = {
  initial: { opacity: 0, scaleY: 2, y: "-100%" },
  open: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: {
      default: { delay: 0.5, duration: 0.3, staggerChildren: 0.1 },
      scaleY: { delay: 0.3, duration: 0.8 },
    },
  },
  closed: { opacity: 0, transition: { duration: 0.3 } },
}

let dialogContainer: HTMLDivElement

function getEnsureDialogContainer() {
  if (!dialogContainer) {
    dialogContainer = document.createElement("div")
    dialogContainer.className = "fixed inset-0 z-[999] grid place-items-center pointer-events-none"
    document.body.append(dialogContainer)
  }
  return dialogContainer
}

function DialogContentCore(
  { children, className, title, ...props }: RadixDialog.DialogContentProps,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const isOpen = useContext(DialogOpenContext)
  const siteConfig = getSiteConfig()

  return (
    <AnimatePresence>
      {isOpen && (
        <RadixDialog.Portal forceMount container={getEnsureDialogContainer()}>
          <RadixDialog.Overlay asChild>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-auto">
              <RadixDialog.Content forceMount ref={forwardedRef} asChild {...props}>
                <motion.div
                  variants={dialogVariants}
                  initial="initial"
                  animate="open"
                  exit="closed"
                  className={cn(
                    "relative mx-4 md:mx-auto flex w-full max-w-[940px] origin-bottom items-center justify-center",
                    className
                  )}>
                  <RadixDialog.Title className="hidden">{title}</RadixDialog.Title>
                  <div className="h-[85dvh] md:h-[90dvh] w-full max-w-[940px] overflow-y-auto rounded-2xl md:rounded-3xl bg-foreground text-background">
                    <div className="sticky top-0 flex items-center justify-between bg-inherit px-4 py-4 md:px-12 md:py-8">
                      <TextFadeInByText
                        as="h5"
                        className="font-base text-base md:text-xl leading-snug">
                        Navigation
                      </TextFadeInByText>
                      <RadixDialog.Close className="group grid size-10 place-items-center rounded-full bg-[#ffffff26] transition-colors hover:bg-[#ffffff40]">
                        <X className="transition-transform group-hover:scale-110" />
                      </RadixDialog.Close>
                    </div>

                    <div className="px-4 pb-6 md:px-12 md:pb-12">
                      <div className="my-4 md:my-8 space-y-3 md:space-y-4">
                        {[
                          { label: "Work", href: "/work" },
                          { label: "About", href: "/about" },
                          { label: "Services", href: "/#services" },
                          { label: "Contact", href: "/contact" },
                        ].map((menu, i) => (
                          <motion.div
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.2, duration: 0.2 }}
                            viewport={{ once: false }}
                            style={{ opacity: 0 }}
                            key={menu.label}
                            className="flex items-center gap-4">
                            <AnimatedLink
                              href={menu.href}
                              className="rounded-none border-0 bg-transparent p-0 text-3xl md:text-5xl font-semibold outline-none ring-0 hover:bg-transparent hover:ring-0">
                              {menu.label}
                            </AnimatedLink>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 md:mt-8 flex items-center justify-between gap-4 py-4">
                        <div className="font-base flex flex-wrap gap-x-6 md:gap-x-8 gap-y-2 text-sm md:text-base">
                          <p className="block w-full text-muted">Follow Us</p>
                          {[
                            { href: siteConfig.social.instagram, label: "Instagram" },
                            { href: (siteConfig.social as Record<string, string>).linkedin, label: "LinkedIn" },
                          ].filter(s => s.href && s.href !== "#").map(({ href, label }, i) => (
                            <div key={label} className="overflow-hidden">
                              <motion.div
                                whileInView={{ translateY: "0%" }}
                                transition={{ delay: 0.3 + i * 0.2, duration: 0.2 }}
                                viewport={{ once: false }}
                                style={{ translateY: "100%" }}>
                                <Link
                                  href={href}
                                  target="_blank"
                                  className="relative before:absolute before:right-0 before:top-0 before:size-1 before:translate-y-2 before:border-r-[1.5px] before:border-t-[1.5px] before:border-background before:opacity-0 before:transition-all before:content-[''] hover:before:translate-x-2 hover:before:translate-y-0 hover:before:opacity-100">
                                  {label}
                                </Link>
                              </motion.div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RadixDialog.Content>
            </motion.div>
          </RadixDialog.Overlay>
        </RadixDialog.Portal>
      )}
    </AnimatePresence>
  )
}

export const DialogContent = forwardRef(DialogContentCore)

