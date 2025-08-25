"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu, X, ChevronRight, Home } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const { t } = useLanguage()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Get the appropriate background color based on theme
  const getNavbarStyle = () => {
    return {
      backgroundColor: scrolled ? "var(--navbar-bg, var(--background))" : "var(--background)",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      borderBottom: "1px solid var(--border)",
    }
  }

  // Determine background color for mobile menu
  const getBackgroundColor = () => {
    if (theme === "light") return "#f2f2f2" // Light theme background
    if (theme === "dark") return "#1a1a1a" // Dark theme background
    return "#09090b" // Purple theme background
  }

  // Generate breadcrumbs
  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean)

    // Don't show breadcrumbs on main services page
    if (paths.length === 1 && paths[0] === "services") {
      return null
    }

    const breadcrumbs = [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
    ]

    let currentPath = "/services"

    // Add additional breadcrumbs based on path
    for (let i = 1; i < paths.length; i++) {
      const path = paths[i]
      currentPath += `/${path}`

      // Format the path for display
      const formattedName = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      breadcrumbs.push({
        name: formattedName,
        href: currentPath,
      })
    }

    return (
      <div className="flex items-center text-sm text-muted-foreground py-4 overflow-x-auto">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center whitespace-nowrap">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-primary transition-colors">
                {index === 0 ? <Home className="h-4 w-4" /> : crumb.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 transition-all duration-300 ease-in-out" style={getNavbarStyle()}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="font-bold text-xl relative z-50 transition-all duration-300 hover:text-primary">
              Nestro<span className="text-primary">Builder</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary">
                Home
              </Link>
              <Link
                href="/services"
                className={`text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary ${
                  pathname.startsWith("/services") ? "text-primary" : ""
                }`}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
              <Link href="/contact">
                <Button className="rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 transform hover:scale-[1.02]">
                  {t("nav.getStarted")}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 transition-transform duration-300 ease-in-out hover:scale-105"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6 transform transition-all duration-300 ease-in-out">
                  {isMenuOpen ? (
                    <X className="h-6 w-6 absolute top-0 left-0 transition-all duration-300 ease-in-out transform rotate-0 scale-100" />
                  ) : (
                    <Menu className="h-6 w-6 absolute top-0 left-0 transition-all duration-300 ease-in-out transform rotate-0 scale-100" />
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{
            backgroundColor: getBackgroundColor(),
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
          }}
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6 pt-20">
            <Link
              href="/"
              className="block text-xl font-medium transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-1 nav-item-visible"
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "70ms",
              }}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`block text-xl font-medium transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-1 nav-item-visible ${
                pathname.startsWith("/services") ? "text-primary" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "140ms",
              }}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="block text-xl font-medium transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-1 nav-item-visible"
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "210ms",
              }}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="block text-xl font-medium transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-1 nav-item-visible"
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "280ms",
              }}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="block text-xl font-medium transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-1 nav-item-visible"
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "350ms",
              }}
            >
              Contact
            </Link>
            <div
              className="pt-4 nav-item-visible"
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "420ms",
              }}
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 transform hover:scale-[1.02]">
                  {t("nav.getStarted")}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="container px-4 md:px-6">{generateBreadcrumbs()}</div>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}
