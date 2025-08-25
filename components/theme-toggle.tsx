"use client"

import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only render the toggle on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full w-9 h-9 transition-all duration-300 ease-in-out">
        <span className="sr-only">Toggle theme</span>
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
          <div className="relative w-[1.2rem] h-[1.2rem]">
            {/* Show different icons based on the current theme */}
            {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out" />}
            {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out" />}
            {theme === "purple" && (
              <Palette className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out" />
            )}
            {!theme && <Palette className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out" />}
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-smooth-scale">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="transition-colors duration-200 ease-in-out cursor-pointer"
        >
          <Sun className="h-4 w-4 mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="transition-colors duration-200 ease-in-out cursor-pointer"
        >
          <Moon className="h-4 w-4 mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("purple")}
          className="transition-colors duration-200 ease-in-out cursor-pointer"
        >
          <Palette className="h-4 w-4 mr-2" />
          Purple
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
