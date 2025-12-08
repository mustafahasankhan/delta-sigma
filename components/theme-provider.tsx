"use client"

import { useEffect } from "react"
import { getConfig } from "@/lib/config"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const config = getConfig()
  
  useEffect(() => {
    if (config.theme?.colors) {
      const root = document.documentElement
      if (config.theme.colors.primary) {
        root.style.setProperty('--primary', config.theme.colors.primary)
      }
      if (config.theme.colors.secondary) {
        root.style.setProperty('--secondary', config.theme.colors.secondary)
      }
      if (config.theme.colors.accent) {
        root.style.setProperty('--accent', config.theme.colors.accent)
      }
    }
  }, [config.theme])

  return <>{children}</>
}

