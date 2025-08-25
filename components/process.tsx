"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Search, Palette, Code, CheckCircle, Rocket, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Process() {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: t("process.step1.title"),
      description: t("process.step1.description"),
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: t("process.step2.title"),
      description: t("process.step2.description"),
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: t("process.step3.title"),
      description: t("process.step3.description"),
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: t("process.step4.title"),
      description: t("process.step4.description"),
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: t("process.step5.title"),
      description: t("process.step5.description"),
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: t("process.step6.title"),
      description: t("process.step6.description"),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="process" className="w-full py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
            {t("process.badge")}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("process.title")}</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">{t("process.description")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={isMounted ? "visible" : "hidden"}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Process line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-primary/10 p-6 h-full relative z-10 hover:border-primary/30 transition-all duration-300">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/20 shadow-lg">
                    <div className="text-sm font-bold">{index + 1}</div>
                  </div>

                  <div className="pt-4 flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-primary/10 mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
