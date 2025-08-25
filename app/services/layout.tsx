"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Scroll to top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}
