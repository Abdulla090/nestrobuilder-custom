"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Working with Nestro Builder was a game-changer for our business. Their team delivered a website that exceeded our expectations in terms of design, functionality, and performance. The attention to detail and commitment to our project was exceptional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthApp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The mobile app developed by Nestro Builder has significantly improved our customer engagement. Their team was professional, responsive, and delivered the project on time and within budget. I highly recommend their services.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, StyleHub",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Nestro Builder transformed our outdated website into a modern, user-friendly platform that has increased our conversion rates by 40%. Their team was a pleasure to work with, providing valuable insights and solutions throughout the process.",
      rating: 5,
    },
    {
      name: "David Kim",
      position: "CTO, FinanceFlow",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The web application developed by Nestro Builder has streamlined our internal processes and improved efficiency across our organization. Their technical expertise and problem-solving abilities are truly impressive.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!autoplay || !isMounted) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, isMounted])

  return (
    <section className="w-full py-24 bg-muted/30 relative overflow-hidden">
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
            Client Feedback
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 text-primary/10">
            <Quote size={80} />
          </div>

          <div className="relative">
            {isMounted && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-background/50 backdrop-blur-sm border-primary/10 overflow-hidden">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                            <Image
                              src={testimonials[current].image || "/placeholder.svg"}
                              alt={testimonials[current].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-grow text-center md:text-left">
                          <p className="text-lg md:text-xl italic mb-6">"{testimonials[current].content}"</p>

                          <div>
                            <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                            <p className="text-muted-foreground">{testimonials[current].position}</p>

                            <div className="flex justify-center md:justify-start mt-2">
                              {[...Array(testimonials[current].rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            )}

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoplay(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    current === index ? "bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => {
                  prevTestimonial()
                  setAutoplay(false)
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => {
                  nextTestimonial()
                  setAutoplay(false)
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
