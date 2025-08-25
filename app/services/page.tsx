import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Globe,
  Layout,
  Smartphone,
  FolderKanban,
  FileText,
  PresentationIcon,
  ImageIcon,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceLayout from "@/components/service-layout"

export const metadata: Metadata = {
  title: "Services | Nestro Builder",
  description: "Explore our comprehensive range of digital and academic services",
}

export default function ServicesPage() {
  const digitalServices = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Website Development",
      description:
        "Custom websites that are responsive, fast, and optimized for search engines with modern design principles.",
      href: "/services/website-development",
      image: "/placeholder.svg?height=200&width=300&text=Website+Development",
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Web Application",
      description:
        "Scalable web applications with robust functionality and intuitive interfaces for seamless user experiences.",
      href: "/services/web-application",
      image: "/placeholder.svg?height=200&width=300&text=Web+Application",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices with cutting-edge features.",
      href: "/services/mobile-development",
      image: "/placeholder.svg?height=200&width=300&text=Mobile+Development",
    },
    {
      icon: <FolderKanban className="h-10 w-10 text-primary" />,
      title: "Project Creation",
      description: "End-to-end project management from concept to deployment and maintenance with agile methodologies.",
      href: "/services/project-creation",
      image: "/placeholder.svg?height=200&width=300&text=Project+Creation",
    },
  ]

  const academicServices = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Academic Reports",
      description:
        "Professionally structured academic reports with thorough research, clear methodology, and insightful analysis.",
      href: "/services/academic/reports",
      image: "/placeholder.svg?height=200&width=300&text=Academic+Reports",
    },
    {
      icon: <PresentationIcon className="h-10 w-10 text-primary" />,
      title: "Presentations",
      description:
        "Engaging and visually appealing presentations that effectively communicate complex academic concepts.",
      href: "/services/academic/presentations",
      image: "/placeholder.svg?height=200&width=300&text=Presentations",
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
      title: "Academic Posters",
      description:
        "Eye-catching academic posters that showcase research findings in a concise and visually compelling format.",
      href: "/services/academic/posters",
      image: "/placeholder.svg?height=200&width=300&text=Academic+Posters",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Essays & Papers",
      description:
        "Well-researched and properly structured academic essays and papers tailored to your specific requirements.",
      href: "/services/academic/essays",
      image: "/placeholder.svg?height=200&width=300&text=Essays+Papers",
    },
  ]

  return (
    <ServiceLayout>
      <div className="container px-4 md:px-6 py-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Explore our comprehensive range of digital and academic services designed to help you succeed
          </p>
        </div>

        <div className="space-y-16">
          {/* Digital Services Section */}
          <section>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-2xl font-bold">Digital Services</h2>
              <Link href="/services/digital" className="text-primary hover:underline flex items-center">
                View all digital services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {digitalServices.map((service, index) => (
                <Card key={index} className="group hover:border-primary/30 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="p-2 rounded-full bg-primary/10">{service.icon}</div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={service.href} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Academic Services Section */}
          <section>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-2xl font-bold">Academic Services</h2>
              <Link href="/services/academic" className="text-primary hover:underline flex items-center">
                View all academic services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {academicServices.map((service, index) => (
                <Card key={index} className="group hover:border-primary/30 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="p-2 rounded-full bg-primary/10">{service.icon}</div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={service.href} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  )
}
