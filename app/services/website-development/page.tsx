import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Check, ArrowRight, Globe, Zap, Search, Smartphone, Code, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceLayout from "@/components/service-layout"

export const metadata: Metadata = {
  title: "Website Development | Nestro Builder",
  description:
    "Custom websites that are responsive, fast, and optimized for search engines with modern design principles.",
}

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: "Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Performance Optimization",
      description: "Fast-loading websites optimized for speed and performance to improve user experience.",
    },
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: "SEO Friendly",
      description: "Built with search engine optimization in mind to help your website rank higher in search results.",
    },
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Clean Code",
      description: "Well-structured, maintainable code that follows best practices and industry standards.",
    },
    {
      icon: <Palette className="h-5 w-5 text-primary" />,
      title: "Modern Design",
      description: "Sleek, contemporary designs that reflect your brand identity and engage your audience.",
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Content Management",
      description:
        "Easy-to-use content management systems that allow you to update your website without technical knowledge.",
    },
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$999",
      description: "Perfect for small businesses and personal websites",
      features: [
        "5 pages website",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "Social media integration",
        "3 rounds of revisions",
        "2 weeks delivery",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,999",
      description: "Ideal for growing businesses and organizations",
      features: [
        "10 pages website",
        "Responsive design",
        "Advanced SEO setup",
        "Contact form & newsletter",
        "Social media integration",
        "Blog setup",
        "Content management system",
        "5 rounds of revisions",
        "3 weeks delivery",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$3,999+",
      description: "Comprehensive solution for large businesses",
      features: [
        "20+ pages website",
        "Responsive design",
        "Comprehensive SEO strategy",
        "Advanced forms & user accounts",
        "Social media integration",
        "Blog & news section",
        "Custom content management",
        "E-commerce functionality",
        "Unlimited revisions",
        "4-6 weeks delivery",
      ],
      popular: false,
    },
  ]

  const portfolioItems = [
    {
      title: "Health Clinic Website",
      image: "/placeholder.svg?height=300&width=500&text=Health+Clinic+Website",
      description: "A modern, accessible website for a healthcare provider with appointment booking functionality.",
    },
    {
      title: "Restaurant Chain",
      image: "/placeholder.svg?height=300&width=500&text=Restaurant+Chain+Website",
      description: "Multi-location restaurant website with menu management, reservations, and location finder.",
    },
    {
      title: "Educational Platform",
      image: "/placeholder.svg?height=300&width=500&text=Educational+Platform",
      description: "Interactive educational website with course listings, student portal, and learning resources.",
    },
    {
      title: "Real Estate Agency",
      image: "/placeholder.svg?height=300&width=500&text=Real+Estate+Website",
      description: "Property listing website with advanced search, virtual tours, and agent profiles.",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      number: "02",
      title: "Planning",
      description: "We create a detailed project plan including sitemap, wireframes, and content strategy.",
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers create visual mockups that align with your brand identity and user expectations.",
    },
    {
      number: "04",
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient, and responsive code.",
    },
    {
      number: "05",
      title: "Testing",
      description: "We thoroughly test your website across devices and browsers to ensure quality and performance.",
    },
    {
      number: "06",
      title: "Launch",
      description: "We deploy your website and ensure everything runs smoothly in the production environment.",
    },
  ]

  return (
    <ServiceLayout>
      <div className="container px-4 md:px-6 py-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Website Development</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Custom websites that are responsive, fast, and optimized for search engines with modern design principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-primary/10 shadow-lg aspect-video">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Website+Development"
              alt="Website Development"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Pricing Plans</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include responsive design, SEO optimization, and
            ongoing support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-primary/10 hover:border-primary/30 transition-all duration-300 ${
                  plan.popular ? "border-primary/30 shadow-lg relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {!plan.price.includes("+") && <span className="text-muted-foreground ml-1">one-time</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full rounded-full ${plan.popular ? "" : "bg-primary/90 hover:bg-primary"}`}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 text-muted-foreground">
            <p>
              Need a custom solution?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for a personalized quote.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Our Website Portfolio</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioItems.map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/10 mb-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="rounded-full">
                          View Project
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/portfolio">
                  <Button variant="outline" className="rounded-full">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Select a different category to view more projects.</p>
              </div>
            </TabsContent>
            <TabsContent value="ecommerce" className="mt-0">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Select a different category to view more projects.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Our Development Process</h2>
          <div className="relative">
            {/* Process line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-primary/10 p-6 h-full relative z-10 hover:border-primary/30 transition-all duration-300">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/20 shadow-lg">
                      <div className="text-sm font-bold">{step.number}</div>
                    </div>

                    <div className="pt-4 flex flex-col items-center text-center">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Website Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a website that elevates your brand and drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}
