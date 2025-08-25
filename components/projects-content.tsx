"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ExternalLink, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ProjectsContent() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("recent")
  const projectsPerPage = 9

  useEffect(() => {
    setIsMounted(true)
    setCurrentPage(1)
  }, [activeCategory])

  const categories = [
    { id: "all", name: "All Projects", count: 12 },
    { id: "health", name: "Health & Wellness", count: 3 },
    { id: "communication", name: "Communication & Learning", count: 4 },
    { id: "lifestyle", name: "Lifestyle & Utilities", count: 3 },
    { id: "business", name: "Business & Finance", count: 2 },
  ]

  const projects = [
    {
      title: "Nestro Health",
      subtitle: "Comprehensive Health Tracker",
      category: "health",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Health",
      description:
        "A comprehensive health tracking application that helps users monitor their fitness goals, nutrition, and overall wellness with AI-powered insights.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Health APIs", "AI/ML"],
      link: "https://nestro-health-rho.vercel.app/",
      featured: true,
      year: "2024",
      client: "Healthcare Startup",
    },
    {
      title: "Nestro Ray",
      subtitle: "Medical Imaging AI Platform",
      category: "health",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Ray",
      description:
        "An AI-powered application that analyzes medical imaging and creates detailed reports to assist healthcare professionals in diagnosis.",
      technologies: ["AI/ML", "Image Processing", "Medical APIs", "React", "Python"],
      link: "https://medai-insight-reports.lovable.app/",
      featured: false,
      year: "2024",
      client: "Medical Center",
    },
    {
      title: "Nestro Chat",
      subtitle: "Kurdish AI Assistant",
      category: "communication",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Chat",
      description:
        "An interactive chat application featuring a Kurdish AI character, enabling natural conversations in Kurdish language with cultural context.",
      technologies: ["AI/ML", "NLP", "React", "WebSockets", "Language Processing"],
      link: "https://new-git-fix-question-mark-issue-abdullas-projects-eced2102.vercel.app/",
      featured: true,
      year: "2024",
      client: "Cultural Organization",
    },
    {
      title: "Nestro Study",
      subtitle: "Educational Platform",
      category: "communication",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Study",
      description:
        "An iOS-style educational application designed to make learning engaging and accessible for students of all ages with interactive content.",
      technologies: ["React Native", "Educational APIs", "iOS Design", "Content Management"],
      link: "https://v0-ios-style-educational-app.vercel.app/",
      featured: false,
      year: "2023",
      client: "Educational Institute",
    },
    {
      title: "Nestro Help",
      subtitle: "Community Q&A Forum",
      category: "communication",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Help",
      description:
        "A community-driven platform where users can ask questions and receive answers from other community members with gamification elements.",
      technologies: ["Forum Software", "React", "Database", "Authentication", "Gamification"],
      link: "https://merge-forum.lovable.app/",
      featured: false,
      year: "2023",
      client: "Tech Community",
    },
    {
      title: "Nestro Cast",
      subtitle: "Podcast Platform",
      category: "lifestyle",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Cast",
      description:
        "A dedicated podcast application that allows users to discover, stream, and enjoy their favorite podcasts with personalized recommendations.",
      technologies: ["Audio Streaming", "React", "Media APIs", "User Preferences", "Analytics"],
      link: "https://krd-podcast-flow.lovable.app/",
      featured: true,
      year: "2024",
      client: "Media Company",
    },
    {
      title: "Nestro Vault",
      subtitle: "Secure Storage Solution",
      category: "lifestyle",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Vault",
      description:
        "A secure application for storing and protecting important files, images, and documents with end-to-end encryption and cloud sync.",
      technologies: ["Encryption", "Cloud Storage", "Security", "React", "Blockchain"],
      link: "https://vault-of-all-things.lovable.app/",
      featured: false,
      year: "2023",
      client: "Security Firm",
    },
    {
      title: "Nestro Wear",
      subtitle: "AI Fashion Assistant",
      category: "lifestyle",
      image: "/placeholder.svg?height=400&width=600&text=Nestro+Wear",
      description:
        "An AI-powered fashion assistant that helps users decide what to wear by analyzing their wardrobe, weather, and personal style preferences.",
      technologies: ["AI/ML", "Image Recognition", "Fashion APIs", "React", "Computer Vision"],
      link: "https://closet-fusion-suggestions.lovable.app/",
      featured: false,
      year: "2024",
      client: "Fashion Startup",
    },
    {
      title: "FinanceFlow Pro",
      subtitle: "Business Financial Management",
      category: "business",
      image: "/placeholder.svg?height=400&width=600&text=FinanceFlow+Pro",
      description:
        "A comprehensive financial management platform for small to medium businesses with automated reporting and analytics.",
      technologies: ["React", "Node.js", "Financial APIs", "Charts", "Automation"],
      link: "#",
      featured: true,
      year: "2024",
      client: "Financial Services",
    },
    {
      title: "InvoiceGenius",
      subtitle: "Smart Invoicing System",
      category: "business",
      image: "/placeholder.svg?height=400&width=600&text=InvoiceGenius",
      description:
        "An intelligent invoicing system that automates billing processes and provides insights into payment patterns and client behavior.",
      technologies: ["React", "Payment APIs", "PDF Generation", "Analytics", "Automation"],
      link: "#",
      featured: false,
      year: "2023",
      client: "Accounting Firm",
    },
    {
      title: "MediConnect",
      subtitle: "Telemedicine Platform",
      category: "health",
      image: "/placeholder.svg?height=400&width=600&text=MediConnect",
      description:
        "A telemedicine platform connecting patients with healthcare providers through secure video consultations and digital health records.",
      technologies: ["WebRTC", "React", "Medical APIs", "Security", "Real-time"],
      link: "#",
      featured: false,
      year: "2023",
      client: "Healthcare Network",
    },
    {
      title: "EduConnect",
      subtitle: "Virtual Classroom Platform",
      category: "communication",
      image: "/placeholder.svg?height=400&width=600&text=EduConnect",
      description:
        "A virtual classroom platform enabling seamless online education with interactive whiteboards, breakout rooms, and assessment tools.",
      technologies: ["WebRTC", "React", "Educational Tools", "Real-time", "Assessment"],
      link: "#",
      featured: false,
      year: "2023",
      client: "Educational Technology",
    },
  ]

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return Number.parseInt(b.year) - Number.parseInt(a.year)
      case "featured":
        return b.featured === a.featured ? 0 : b.featured ? 1 : -1
      case "alphabetical":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="container px-4 md:px-6 py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Explore our portfolio of successful projects across various industries and technologies
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Category Tabs */}
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                {category.name}
                <span className="ml-1 text-xs opacity-60">({category.count})</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0"></TabsContent>
          ))}
        </Tabs>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-full md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Sort by: {sortBy === "recent" ? "Recent" : sortBy === "featured" ? "Featured" : "A-Z"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setSortBy("recent")}>Most Recent</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("featured")}>Featured First</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("alphabetical")}>Alphabetical</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Projects Grid */}
      {isMounted && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentPage}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 h-full group">
                  <div className="aspect-video relative overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      loading={index < 6 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </motion.div>
                        <motion.div
                          className="flex justify-center space-x-3 mt-4"
                          initial={{ y: 20, opacity: 0 }}
                          animate={hoveredProject === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {project.link !== "#" && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex">
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Live
                              </Button>
                            </a>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-muted-foreground">Client: {project.client}</span>
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={prevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                className="rounded-full w-8 h-8 p-0"
                onClick={() => {
                  setCurrentPage(i + 1)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-primary">{projects.length}+</h3>
          <p className="text-muted-foreground">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">{categories.length - 1}</h3>
          <p className="text-muted-foreground">Industries Served</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">100%</h3>
          <p className="text-muted-foreground">Client Satisfaction</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">24/7</h3>
          <p className="text-muted-foreground">Support Available</p>
        </div>
      </div>
    </div>
  )
}
