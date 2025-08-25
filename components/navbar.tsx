"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const observerOptions = {
      rootMargin: "-100px 0px -70% 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navLinks = [
    { name: t("nav.home"), href: "#home", section: "home" },
    { name: t("nav.services"), href: "#services", section: "services" },
    { name: t("nav.about"), href: "#about", section: "about" },
    { name: t("nav.projects"), href: "#projects", section: "projects" },
    { name: t("nav.contact"), href: "#contact", section: "contact" },
  ]

  const getNavbarStyle = () => ({
    backgroundColor: scrolled ? "var(--navbar-bg, var(--background))" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "none",
  })

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}
        style={getNavbarStyle()}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="font-bold text-xl relative z-50 transition-all duration-300 hover:text-primary">
              Nestro<span className="text-primary">Builder</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-2 shadow-lg shadow-black/5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary rounded-full ${
                      activeSection === link.section ? "text-primary" : ""
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {activeSection === link.section && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <LanguageToggle />
              <ThemeToggle />
              <Link href="/services">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/25 transform hover:scale-[1.02] px-6">
                  {t("nav.getStarted")}
                </Button>
              </Link>
            </div>

            {/* Mobile Right-side controls */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed inset-x-0 bottom-4 z-50 flex justify-center pointer-events-none">
        <motion.div
          className="pointer-events-auto"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="bg-background/80 backdrop-blur-md border border-border/60 rounded-full p-2 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 rounded-full ${
                    activeSection === link.section
                      ? "text-base text-primary-foreground"
                      : "text-sm text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {activeSection === link.section && (
                    <motion.span
                      layoutId="mobile-active-pill"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
