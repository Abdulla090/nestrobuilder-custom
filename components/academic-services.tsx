"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  PresentationIcon,
  ImageIcon,
  BookOpen,
  Clock,
  DollarSign,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AcademicServices() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("reports")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const academicServices = [
    {
      id: "reports",
      title: t("academic.reports.title"),
      description: t("academic.reports.description"),
      icon: <FileText className="h-10 w-10 text-primary" />,
      features: [
        t("academic.reports.feature1"),
        t("academic.reports.feature2"),
        t("academic.reports.feature3"),
        t("academic.reports.feature4"),
      ],
      price: t("academic.reports.price"),
      timeframe: t("academic.reports.timeframe"),
      image: "/placeholder.svg?height=400&width=600&text=Academic+Report+Example",
      examples: [
        {
          title: "Research Methodology Report",
          image: "/placeholder.svg?height=300&width=400&text=Research+Methodology",
          description: "Comprehensive research methodology report for a medical study",
        },
        {
          title: "Data Analysis Report",
          image: "/placeholder.svg?height=300&width=400&text=Data+Analysis",
          description: "Detailed data analysis with visualizations and insights",
        },
        {
          title: "Literature Review",
          image: "/placeholder.svg?height=300&width=400&text=Literature+Review",
          description: "Thorough literature review on artificial intelligence applications",
        },
      ],
      href: "/services/academic/reports",
    },
    {
      id: "presentations",
      title: t("academic.presentations.title"),
      description: t("academic.presentations.description"),
      icon: <PresentationIcon className="h-10 w-10 text-primary" />,
      features: [
        t("academic.presentations.feature1"),
        t("academic.presentations.feature2"),
        t("academic.presentations.feature3"),
        t("academic.presentations.feature4"),
      ],
      price: t("academic.presentations.price"),
      timeframe: t("academic.presentations.timeframe"),
      image: "/placeholder.svg?height=400&width=600&text=Academic+Presentation+Example",
      examples: [
        {
          title: "Research Findings Presentation",
          image: "/placeholder.svg?height=300&width=400&text=Research+Findings",
          description: "Clear and engaging presentation of research findings",
        },
        {
          title: "Educational Slides",
          image: "/placeholder.svg?height=300&width=400&text=Educational+Slides",
          description: "Educational presentation with interactive elements",
        },
        {
          title: "Conference Presentation",
          image: "/placeholder.svg?height=300&width=400&text=Conference+Presentation",
          description: "Professional conference presentation with speaker notes",
        },
      ],
      href: "/services/academic/presentations",
    },
    {
      id: "posters",
      title: t("academic.posters.title"),
      description: t("academic.posters.description"),
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
      features: [
        t("academic.posters.feature1"),
        t("academic.posters.feature2"),
        t("academic.posters.feature3"),
        t("academic.posters.feature4"),
      ],
      price: t("academic.posters.price"),
      timeframe: t("academic.posters.timeframe"),
      image: "/placeholder.svg?height=400&width=600&text=Academic+Poster+Example",
      examples: [
        {
          title: "Research Poster",
          image: "/placeholder.svg?height=300&width=400&text=Research+Poster",
          description: "Visually appealing research poster for academic conferences",
        },
        {
          title: "Scientific Poster",
          image: "/placeholder.svg?height=300&width=400&text=Scientific+Poster",
          description: "Detailed scientific poster with data visualizations",
        },
        {
          title: "Educational Poster",
          image: "/placeholder.svg?height=300&width=400&text=Educational+Poster",
          description: "Educational poster with clear information hierarchy",
        },
      ],
      href: "/services/academic/posters",
    },
    {
      id: "essays",
      title: t("academic.essays.title"),
      description: t("academic.essays.description"),
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      features: [
        t("academic.essays.feature1"),
        t("academic.essays.feature2"),
        t("academic.essays.feature3"),
        t("academic.essays.feature4"),
      ],
      price: t("academic.essays.price"),
      timeframe: t("academic.essays.timeframe"),
      image: "/placeholder.svg?height=400&width=600&text=Academic+Essay+Example",
      examples: [
        {
          title: "Research Paper",
          image: "/placeholder.svg?height=300&width=400&text=Research+Paper",
          description: "Well-structured research paper with proper citations",
        },
        {
          title: "Argumentative Essay",
          image: "/placeholder.svg?height=300&width=400&text=Argumentative+Essay",
          description: "Persuasive argumentative essay with strong thesis",
        },
        {
          title: "Literature Analysis",
          image: "/placeholder.svg?height=300&width=400&text=Literature+Analysis",
          description: "In-depth analysis of literary works with critical insights",
        },
      ],
      href: "/services/academic/essays",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="academic-services" className="w-full py-24 relative overflow-hidden">
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
            {t("academic.badge")}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("academic.title")}</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">{t("academic.description")}</p>
        </motion.div>

        <Tabs defaultValue="reports" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto flex justify-between p-1 bg-muted/50 rounded-lg mb-8">
            {academicServices.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex-1 py-2 px-1 text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {academicServices.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isMounted && activeTab === service.id ? "visible" : "hidden"}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <motion.div variants={itemVariants} className="order-2 lg:order-1">
                  <Card className="bg-background/50 backdrop-blur-sm border-primary/10 overflow-hidden shadow-lg">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4">{service.icon}</div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <CardDescription className="text-base mt-1">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                            {t("academic.features")}
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center p-4 rounded-lg bg-primary/5">
                            <DollarSign className="h-5 w-5 text-primary mr-3" />
                            <div>
                              <h5 className="text-sm font-medium">{t("academic.pricing")}</h5>
                              <p className="text-lg font-semibold">{service.price}</p>
                            </div>
                          </div>
                          <div className="flex items-center p-4 rounded-lg bg-primary/5">
                            <Clock className="h-5 w-5 text-primary mr-3" />
                            <div>
                              <h5 className="text-sm font-medium">{t("academic.timeframe")}</h5>
                              <p className="text-lg font-semibold">{service.timeframe}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-4">
                      <Link href={service.href} className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto rounded-full">{t("academic.cta")}</Button>
                      </Link>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full sm:w-auto rounded-full">
                            {t("academic.examples")}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px]">
                          <DialogHeader>
                            <DialogTitle>
                              {service.title} - {t("academic.examples")}
                            </DialogTitle>
                            <DialogDescription>Browse through examples of our previous work</DialogDescription>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {service.examples.map((example, idx) => (
                              <div key={idx} className="rounded-lg overflow-hidden border border-primary/10">
                                <div className="aspect-[4/3] relative">
                                  <Image
                                    src={example.image || "/placeholder.svg"}
                                    alt={example.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="p-3">
                                  <h4 className="font-medium text-sm">{example.title}</h4>
                                  <p className="text-xs text-muted-foreground mt-1">{example.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden border border-primary/10 shadow-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {service.title}
                      </Badge>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-6 p-6 rounded-xl bg-primary/5 border border-primary/10 relative"
                  >
                    <div className="absolute -top-3 -left-3 text-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="italic text-muted-foreground">{t("academic.testimonial.text")}</p>
                      <div className="mt-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <span className="text-primary font-semibold">
                            {t("academic.testimonial.author").charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{t("academic.testimonial.author")}</p>
                          <p className="text-sm text-muted-foreground">{t("academic.testimonial.role")}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
