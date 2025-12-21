"use client"

import * as React from "react"
import * as RadixDialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

const dialogVariants = {
  closed: { opacity: 0, scale: 0.9 },
  open: { opacity: 1, scale: 1 },
}

// VisuallyHidden component for accessibility
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
)

export function ImageDialog({
  open,
  onOpenChange,
  children,
  className,
  title,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
  title?: string
}) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <RadixDialog.Portal forceMount>
            <RadixDialog.Overlay asChild>
              <motion.div
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={() => onOpenChange(false)}
              >
                <RadixDialog.Content
                  asChild
                  className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    variants={dialogVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className={cn("relative", className)}
                  >
                    <RadixDialog.Title asChild>
                      <VisuallyHidden>{title || "Project Image"}</VisuallyHidden>
                    </RadixDialog.Title>
                    {children}
                    <RadixDialog.Close className="absolute right-4 top-4 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors z-10">
                      <X className="w-6 h-6" />
                      <VisuallyHidden>Close</VisuallyHidden>
                    </RadixDialog.Close>
                  </motion.div>
                </RadixDialog.Content>
              </motion.div>
            </RadixDialog.Overlay>
          </RadixDialog.Portal>
        )}
      </AnimatePresence>
    </RadixDialog.Root>
  )
}

