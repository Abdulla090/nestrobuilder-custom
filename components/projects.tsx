"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Projects() {
  const { t } = useLanguage()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const projects = [
    {
      title: "Nestro Health",
      subtitle: "Health Tracker",
      category: t("projects.category.health"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Health",
      description:
        "A comprehensive health tracking application that helps users monitor their fitness goals, nutrition, and overall wellness.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Health APIs"],
      link: "https://nestro-health-rho.vercel.app/",
      featured: true,
    },
    {
      title: "Nestro Ray",
      subtitle: "Medical Imaging AI",
      category: t("projects.category.health"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Ray",
      description:
        "An AI-powered application that analyzes medical imaging and creates detailed reports to assist healthcare professionals.",
      technologies: ["AI/ML", "Image Processing", "Medical APIs", "React"],
      link: "https://medai-insight-reports.lovable.app/",
      featured: false,
    },
    {
      title: "Nestro Chat",
      subtitle: "Kurdish AI Assistant",
      category: t("projects.category.communication"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Chat",
      description:
        "An interactive chat application featuring a Kurdish AI character, enabling natural conversations in Kurdish language.",
      technologies: ["AI/ML", "NLP", "React", "WebSockets"],
      link: "https://new-git-fix-question-mark-issue-abdullas-projects-eced2102.vercel.app/",
      featured: true,
    },
    {
      title: "Nestro Study",
      subtitle: "Educational Platform",
      category: t("projects.category.communication"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Study",
      description:
        "An iOS-style educational application designed to make learning engaging and accessible for students of all ages.",
      technologies: ["React Native", "Educational APIs", "iOS Design", "Content Management"],
      link: "https://v0-ios-style-educational-app.vercel.app/",
      featured: false,
    },
    {
      title: "Nestro Help",
      subtitle: "Q&A Forum",
      category: t("projects.category.communication"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Help",
      description:
        "A community-driven platform where users can ask questions and receive answers from other community members.",
      technologies: ["Forum Software", "React", "Database", "Authentication"],
      link: "https://merge-forum.lovable.app/",
      featured: false,
    },
    {
      title: "Nestro Cast",
      subtitle: "Podcast Platform",
      category: t("projects.category.lifestyle"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Cast",
      description:
        "A dedicated podcast application that allows users to discover, stream, and enjoy their favorite podcasts in one place.",
      technologies: ["Audio Streaming", "React", "Media APIs", "User Preferences"],
      link: "https://krd-podcast-flow.lovable.app/",
      featured: true,
    },
    {
      title: "Nestro Vault",
      subtitle: "Secure Storage",
      category: t("projects.category.lifestyle"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Vault",
      description:
        "A secure application for storing and protecting important files, images, and documents with encryption.",
      technologies: ["Encryption", "Cloud Storage", "Security", "React"],
      link: "https://vault-of-all-things.lovable.app/",
      featured: false,
    },
    {
      title: "Nestro Wear",
      subtitle: "AI Fashion Assistant",
      category: t("projects.category.lifestyle"),
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Wear",
      description:
        "An AI-powered fashion assistant that helps users decide what to wear by analyzing their wardrobe and preferences.",
      technologies: ["AI/ML", "Image Recognition", "Fashion APIs", "React"],
      link: "https://closet-fusion-suggestions.lovable.app/",
      featured: false,
    },
  ]

  // Show only featured projects for the home page
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="w-full py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
            {t("projects.badge")}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("projects.title")}</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">{t("projects.description")}</p>
        </motion.div>

        {/* Featured Projects Only */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 h-full group">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        loading={index < 3 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Add a subtle gradient overlay that animates on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredProject === index ? "opacity-90" : "opacity-0"
                        }`}
                      >
                        <div className="text-white p-6 text-center">
                          <motion.h4
                            className="text-lg font-bold mb-2"
                            initial={{ y: -20, opacity: 0 }}
                            animate={hoveredProject === index ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            Technologies Used:
                          </motion.h4>
                          <motion.div
                            className="flex flex-wrap justify-center gap-2 mb-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={hoveredProject === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {project.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                className="px-2 py-1 bg-white/20 rounded-full text-xs"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </motion.div>
                          <motion.div
                            className="flex justify-center space-x-3 mt-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={hoveredProject === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex">
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                {t("projects.viewLive")}
                              </Button>
                            </a>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                        <div className="pt-4 flex justify-between items-center">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 2).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="px-2 py-1 bg-primary/5 rounded-full text-xs font-medium text-primary">
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
