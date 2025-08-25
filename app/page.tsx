import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Process from "@/components/process"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <Hero />
        <Services />
        <About />
        <Process />
        <Projects />
        <CTA />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  )
}
