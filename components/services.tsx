"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Globe, Layout, Smartphone, FolderKanban, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function Services() {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: t("services.website.title"),
      description: t("services.website.description"),
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: t("services.webapp.title"),
      description: t("services.webapp.description"),
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
    },
    {
      icon: <FolderKanban className="h-10 w-10 text-primary" />,
      title: t("services.project.title"),
      description: t("services.project.description"),
    },
  ]

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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
    <section id="services" className="w-full py-24 relative overflow-hidden">
      {/* Background decoration */}
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
            {t("services.badge")}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("services.title")}</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">{t("services.description")}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView && isMounted ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="flex items-center justify-center pt-8">
                  <div className="p-3 rounded-lg bg-primary/10 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="text-center pb-8">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" className="rounded-full group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
