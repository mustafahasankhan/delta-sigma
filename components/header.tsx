"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import useDetectScroll from "@smakss/react-scroll-direction"
import { BurgerMenuBtn } from "./ui/burger-menu-btn"
import { DialogContent, DialogRoot, DialogTrigger } from "./dialog-menu"

export function Header() {
  const { scrollDir, scrollPosition } = useDetectScroll()
  const translate = scrollPosition.top === 0 ? 0 : scrollDir === "up" ? 0 : 1
  
  return (
    <>
      <header
        style={{ ["--translate" as string]: translate }}
        className="container fixed top-0 z-40 flex h-16 translate-y-[calc(var(--translate)_*_-100%)] items-center gap-4 transition-transform duration-700 md:h-[100px] md:gap-8">
        <Link href="/" className="block">
          <Logo className="max-w-24 md:max-w-32" />
        </Link>
        <div className="ms-auto">
          <DialogRoot>
            <DialogTrigger asChild>
              <BurgerMenuBtn />
            </DialogTrigger>
            <DialogContent title="Main Menu" />
          </DialogRoot>
        </div>
      </header>
      <div
        style={{ ["--translate" as string]: translate }}
        className="pointer-events-none fixed top-0 z-30 h-16 w-full translate-y-[calc(var(--translate)_*_-100%)] transition-transform delay-100 duration-300 md:h-[100px]">
        <div className="h-full w-full backdrop-blur-md" />
      </div>
    </>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src="/logos/logo.svg"
        alt="PICTORIAL"
        width={200}
        height={125}
        className="h-auto w-full object-contain"
        priority
      />
    </div>
  )
}

