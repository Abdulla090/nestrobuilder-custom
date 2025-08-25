"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const sectionRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="about" ref={sectionRef} className="w-full py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl -z-10" />
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/10 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/me.jpg"
                alt="About Nestro Builder"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />

              {/* Animated decorative elements */}
              <motion.div
                className="absolute top-4 left-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg text-xs font-medium"
                animate={isMounted ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Since 2018
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg text-xs font-medium"
                animate={isMounted ? { y: [0, 5, 0] } : {}}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                100+ Projects Delivered
              </motion.div>

              {/* Add floating particles - only on client side */}
              {isMounted &&
                [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/30"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-4">
                {t("about.badge")}
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{t("about.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("about.description")}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{t("about.mission.title")}</h3>
                  <p className="text-muted-foreground">{t("about.mission.description")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{t("about.approach.title")}</h3>
                  <p className="text-muted-foreground">{t("about.approach.description")}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 text-center">
                <h3 className="text-3xl font-bold text-primary">100+</h3>
                <p className="text-sm text-muted-foreground">{t("about.stats.projects")}</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 text-center">
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-sm text-muted-foreground">{t("about.stats.clients")}</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 text-center">
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-sm text-muted-foreground">{t("about.stats.years")}</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 text-center">
                <h3 className="text-3xl font-bold text-primary">24/7</h3>
                <p className="text-sm text-muted-foreground">{t("about.stats.support")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
