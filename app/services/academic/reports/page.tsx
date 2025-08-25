import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Check, ArrowRight, FileText, BookOpen, BarChart, ClipboardList, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceLayout from "@/components/service-layout"

export const metadata: Metadata = {
  title: "Academic Reports | Nestro Builder",
  description:
    "Professionally structured academic reports with thorough research, clear methodology, and insightful analysis.",
}

export default function AcademicReportsPage() {
  const features = [
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Literature Review",
      description: "Comprehensive review of relevant academic literature with proper citations and critical analysis.",
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: "Data Analysis",
      description: "Thorough analysis of qualitative and quantitative data with appropriate statistical methods.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
      title: "Methodology Development",
      description: "Clear and detailed methodology section outlining research approach, methods, and procedures.",
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Findings & Recommendations",
      description: "Insightful presentation of findings with actionable recommendations based on research results.",
    },
  ]

  const pricingPlans = [
    {
      name: "Standard Report",
      price: "$150",
      description: "For undergraduate and basic academic reports",
      features: [
        "Up to 10 pages",
        "Literature review",
        "Basic data analysis",
        "APA/MLA formatting",
        "2 rounds of revisions",
        "7 days delivery",
      ],
      popular: false,
    },
    {
      name: "Advanced Report",
      price: "$250",
      description: "For graduate-level academic reports",
      features: [
        "Up to 20 pages",
        "Comprehensive literature review",
        "Advanced data analysis",
        "Methodology development",
        "APA/MLA/Chicago formatting",
        "3 rounds of revisions",
        "10 days delivery",
      ],
      popular: true,
    },
    {
      name: "Professional Report",
      price: "$400+",
      description: "For doctoral and professional research reports",
      features: [
        "20+ pages",
        "Extensive literature review",
        "Complex data analysis",
        "Sophisticated methodology",
        "Any academic formatting",
        "Unlimited revisions",
        "14 days delivery",
      ],
      popular: false,
    },
  ]

  const sampleReports = [
    {
      title: "Healthcare Policy Analysis",
      image: "/placeholder.svg?height=300&width=500&text=Healthcare+Policy+Report",
      description: "A comprehensive analysis of healthcare policy implementation and outcomes in regional hospitals.",
    },
    {
      title: "Environmental Impact Study",
      image: "/placeholder.svg?height=300&width=500&text=Environmental+Impact+Report",
      description: "Research report on environmental impacts of urban development with data-driven recommendations.",
    },
    {
      title: "Educational Technology Evaluation",
      image: "/placeholder.svg?height=300&width=500&text=Educational+Technology+Report",
      description: "Evaluation of educational technology implementation in higher education institutions.",
    },
    {
      title: "Market Research Analysis",
      image: "/placeholder.svg?height=300&width=500&text=Market+Research+Report",
      description: "Detailed market research report with consumer behavior analysis and market trends.",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Requirements",
      description: "We gather detailed information about your report requirements, topic, and academic expectations.",
    },
    {
      number: "02",
      title: "Research",
      description: "Our team conducts thorough research using academic databases and credible sources.",
    },
    {
      number: "03",
      title: "Outline",
      description: "We create a detailed outline of the report structure for your review and approval.",
    },
    {
      number: "04",
      title: "Writing",
      description: "Our academic writers develop the report with proper citations, formatting, and academic language.",
    },
    {
      number: "05",
      title: "Review",
      description: "The report undergoes internal review for quality, accuracy, and adherence to requirements.",
    },
    {
      number: "06",
      title: "Delivery",
      description: "We deliver the final report and implement any requested revisions to ensure your satisfaction.",
    },
  ]

  return (
    <ServiceLayout>
      <div className="container px-4 md:px-6 py-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Academic Reports</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professionally structured academic reports with thorough research, clear methodology, and insightful
              analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                View Samples
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-primary/10 shadow-lg aspect-video">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Academic+Reports"
              alt="Academic Reports"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Choose the perfect plan for your academic needs. All reports include thorough research, proper citations,
            and plagiarism checks.
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
                    {!plan.price.includes("+") && <span className="text-muted-foreground ml-1">per report</span>}
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
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 text-muted-foreground">
            <p>
              Need a custom report?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for a personalized quote.
            </p>
          </div>
        </section>

        {/* Sample Reports Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Sample Reports</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Samples</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sampleReports.map((item, index) => (
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
                          View Sample
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/samples">
                  <Button variant="outline" className="rounded-full">
                    View All Samples <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="research" className="mt-0">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Select a different category to view more samples.</p>
              </div>
            </TabsContent>
            <TabsContent value="analysis" className="mt-0">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Select a different category to view more samples.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Our Report Writing Process</h2>
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

        {/* Additional Information */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-primary/10">
            <CardHeader>
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Turnaround Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our standard turnaround times range from 7-14 days depending on the complexity and length of the report.
              </p>
              <p className="text-muted-foreground mb-4">
                Need it faster? We offer expedited services for an additional fee:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>5-day turnaround: +25% fee</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>3-day turnaround: +50% fee</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>48-hour turnaround: +100% fee</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/10">
            <CardHeader>
              <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Payment & Guarantees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We offer secure payment options and satisfaction guarantees for all our academic services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>50% upfront, 50% upon completion</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Free revisions within scope</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Plagiarism-free guarantee</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Order Your Academic Report?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert academic writers help you create a high-quality, well-researched report that meets your
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}
