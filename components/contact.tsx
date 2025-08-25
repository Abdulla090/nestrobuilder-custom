"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

// Animated contact icon component
const AnimatedContactIcon = ({ children }) => {
  return (
    <motion.div
      className="p-2 rounded-full bg-primary/10"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
      animate={{
        scale: [1, 1.05, 1],
        transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  // Icon animations
  const mailAnimation = {
    animate: {
      y: [0, -3, 0],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
    },
  }

  const phoneAnimation = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
    },
  }

  const mapAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
    },
  }

  return (
    <section id="contact" className="w-full py-24 relative overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px] mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus-visible:ring-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full group"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                            transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
                          }}
                        >
                          <Send className="mr-2 h-4 w-4" />
                        </motion.div>
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 h-full shadow-lg">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="p-2 rounded-full bg-primary/10"
                        variants={mailAnimation}
                        animate="animate"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
                      >
                        <Mail className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">nestrobuilder@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="p-2 rounded-full bg-primary/10"
                        variants={phoneAnimation}
                        animate="animate"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
                      >
                        <Phone className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">+964(0)7516695482</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="p-2 rounded-full bg-primary/10"
                        variants={mapAnimation}
                        animate="animate"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
                      >
                        <MapPin className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-muted-foreground">Erbil - Kurdistan</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <h4 className="font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
