"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"

export default function Faq() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const faqs = [
    {
      question: "What services does Nestro Builder offer?",
      answer:
        "Nestro Builder offers a comprehensive range of digital services including website development, web application development, mobile application development, and end-to-end project creation. We specialize in creating custom digital solutions tailored to your specific business needs.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline for project completion varies depending on the scope, complexity, and specific requirements of each project. A simple website might take 2-4 weeks, while a complex web or mobile application could take 2-6 months. During our initial consultation, we'll provide you with a more accurate timeline based on your project specifications.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process follows a structured approach: Discovery (understanding your requirements), Design (creating wireframes and visual designs), Development (coding and implementation), Testing (quality assurance), Deployment (launching your project), and Maintenance (ongoing support). We maintain transparent communication throughout each phase to ensure your project meets your expectations.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer ongoing support and maintenance services to ensure your digital product continues to perform optimally. We provide different support packages tailored to your needs, including regular updates, security patches, performance optimization, and feature enhancements.",
    },
    {
      question: "How much does a typical project cost?",
      answer:
        "Project costs vary widely depending on the scope, complexity, and specific requirements. We provide customized quotes based on a thorough understanding of your project needs. During our initial consultation, we'll discuss your budget and provide transparent pricing information to help you make an informed decision.",
    },
    {
      question: "Can you work with existing systems or do you start from scratch?",
      answer:
        "We can work with existing systems or start from scratch, depending on your needs. Our team has experience in integrating with existing platforms, migrating data from legacy systems, and building new solutions. We'll assess your current setup and recommend the most efficient approach for your project.",
    },
  ]

  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
            Find answers to common questions about our services, process, and more
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
