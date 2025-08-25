"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Modern, professional animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-[100vh] flex items-start pt-20 md:pt-28 lg:pt-32 overflow-hidden"
    >
      {/* Background elements with subtle animation */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 relative">
          <div className="space-y-4">
            <motion.div className="inline-block mb-6" initial="hidden" animate="visible" variants={fadeIn} custom={0}>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 transition-all duration-300">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-primary"></span>
                {t("hero.badge")}
              </span>
            </motion.div>

            <div>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-5xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={slideUp}
                custom={1}
              >
                {t("hero.title1")}
                <span className="block mt-2 relative">
                  {t("hero.title2")}
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  ></motion.span>
                </span>
              </motion.h1>
            </div>

            <motion.p
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6"
              initial="hidden"
              animate="visible"
              variants={slideUp}
              custom={2}
            >
              {t("hero.description")}
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.div initial="hidden" animate="visible" variants={slideInLeft} custom={3}>
              <Link href="/services">
                <Button
                  size="lg"
                  className="rounded-full px-8 group relative overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    {t("hero.cta.start")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={slideInRight} custom={3}>
              <Link href="/services#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {t("hero.cta.work")}
                </Button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator - HIDDEN ON MOBILE */}
      {isMounted && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="text-base text-muted-foreground mb-3 hover:text-primary transition-colors duration-300">
            Scroll to explore
          </div>
          <div className="w-8 h-14 rounded-full border-2 border-primary/30 flex justify-center pt-2 scroll-indicator hover:border-primary/50 transition-colors duration-300">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary scroll-dot"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
