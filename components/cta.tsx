"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function CTA() {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10" />

      {/* Animated background elements - only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-primary/20 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
              }}
              className="mb-2"
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("cta.title")}</h2>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">{t("cta.description")}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services">
                  <Button size="lg" className="rounded-full px-8 group">
                    {t("cta.button1")}
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
                      }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    {t("cta.button2")}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
