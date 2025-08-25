"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Only render the toggle on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full transition-all duration-300 ease-in-out">
        <span className="sr-only">Toggle language</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-all duration-300 ease-in-out hover:shadow-md hover:border-primary/30 hover:bg-background/80"
        >
          <Globe className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-smooth-scale">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`transition-colors duration-200 ease-in-out cursor-pointer ${
            language === "en" ? "bg-primary/10 text-primary" : ""
          }`}
        >
          {t("language.en")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ku")}
          className={`transition-colors duration-200 ease-in-out cursor-pointer ${
            language === "ku" ? "bg-primary/10 text-primary" : ""
          }`}
        >
          {t("language.ku")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
