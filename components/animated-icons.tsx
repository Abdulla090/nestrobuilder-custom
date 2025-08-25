"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

// Base component for animated SVG icons
export const AnimatedIcon = ({ children, className = "" }) => {
  return (
    <div className={`p-3 rounded-lg bg-primary/10 mb-4 ${className}`}>
      <div className="w-12 h-12 text-primary">{children}</div>
    </div>
  )
}

// Discovery Icon - Animated magnifying glass with pulsing search
export const DiscoveryIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="11"
          cy="11"
          r="6"
          stroke={color}
          strokeWidth="2"
          fill="none"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.path
          d="M20 20L16 16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
        />
        <motion.path
          d="M11 8v6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        />
        <motion.path
          d="M8 11h6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Design Icon - Animated palette with color dots
export const DesignIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M2 12C2 6.48 6.48 2 12 2c5.53 0 10 4.47 10 10 0 1.5-1.2 2.7-2.7 2.7-1.12 0-2.1-.8-2.3-1.9-.2-1.1-1.2-1.9-2.3-1.9-.8 0-1.5.4-1.9 1.1-.4.7-1.2 1.1-1.9 1.1H9.3c-.7 0-1.3-.6-1.3-1.3 0-.5.3-1 .8-1.2.5-.2.8-.7.8-1.2 0-.8-.7-1.5-1.5-1.5S6.7 9.7 6.7 10.5c0 .5.3 1 .8 1.2.5.2.8.7.8 1.2 0 .7-.6 1.3-1.3 1.3-2.8 0-5-2.2-5-5Z"
          stroke={color}
          strokeWidth="2"
          fill="none"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.circle
          cx="8.5"
          cy="7"
          r="1.5"
          fill="#FF5252"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
        />
        <motion.circle
          cx="15.5"
          cy="7"
          r="1.5"
          fill="#2196F3"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />
        <motion.circle
          cx="18"
          cy="12"
          r="1.5"
          fill="#4CAF50"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.circle
          cx="15.5"
          cy="17"
          r="1.5"
          fill="#FFC107"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Development Icon - Animated code brackets with typing effect
export const DevelopmentIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M8 6L3 12L8 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        />
        <motion.path
          d="M16 6L21 12L16 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, delay: 0.5 }}
        />
        <motion.path
          d="M14 4L10 20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, delay: 1 }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Testing Icon - Animated checkmark with progress circle
export const TestingIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.path
          d="M8 12L11 15L16 9"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Deployment Icon - Animated rocket with flame
export const DeploymentIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M12 2L12 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.path
          d="M4.93 10.93L7.76 13.76"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        />
        <motion.path
          d="M19.07 10.93L16.24 13.76"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        />
        <motion.path
          d="M12 22V16"
          stroke="#FF5252"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ y: 0 }}
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.path
          d="M7 22H17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.path
          d="M16 8L16 13C16 14.1046 14.1046 16 12 16C9.89543 16 8 14.1046 8 13L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z"
          fill="none"
          stroke={color}
          strokeWidth="2"
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.path
          d="M10 14L14 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Maintenance Icon - Animated rotating gears
export const MaintenanceIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M14.7 6.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4 1 1 0 0 0-1.4 0zM7.9 16.1a1 1 0 0 0 0 1.4 1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4 1 1 0 0 0-1.4 0zM7.9 7.9a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4 1 1 0 0 0-1.4 0 1 1 0 0 0 0 1.4z"
          fill={color}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.path
          d="M12 8v-2M12 18v-2M16 12h2M6 12h2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="7"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Website Development Icon - Animated globe with orbiting elements
export const WebsiteIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="12"
          cy="12"
          r="8"
          stroke={color}
          strokeWidth="2"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.path
          d="M12 4C14.6522 4 17.1957 5.05357 19.0711 6.92893C20.9464 8.8043 22 11.3478 22 14C22 16.6522 20.9464 19.1957 19.0711 21.0711C17.1957 22.9464 14.6522 24 12 24C9.34784 24 6.8043 22.9464 4.92893 21.0711C3.05357 19.1957 2 16.6522 2 14C2 11.3478 3.05357 8.8043 4.92893 6.92893C6.8043 5.05357 9.34784 4 12 4"
          stroke={color}
          strokeWidth="0.5"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.path
          d="M2.05 11H21.95"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.path
          d="M2.05 13H21.95"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.path
          d="M12 2.05V21.95"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="1"
          fill={color}
          animate={{
            cx: [12, 16, 12, 8, 12],
            cy: [12, 8, 4, 8, 12],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="0.5"
          fill="#2196F3"
          animate={{
            cx: [12, 8, 12, 16, 12],
            cy: [12, 16, 20, 16, 12],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Web Application Icon - Animated code window with typing effect
export const WebAppIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <path d="M2 8H22" stroke={color} strokeWidth="2" />
        <motion.circle cx="5" cy="6" r="1" fill={color} />
        <motion.circle cx="9" cy="6" r="1" fill={color} />
        <motion.path
          d="M6 12L8 14L6 16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        />
        <motion.path
          d="M18 12L16 14L18 16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, delay: 0.5 }}
        />
        <motion.path
          d="M14 10L10 18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, delay: 1 }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Mobile Development Icon - Animated smartphone with app elements
export const MobileAppIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="2" width="12" height="20" rx="2" stroke={color} strokeWidth="2" fill="none" />
        <motion.path
          d="M10 5H14"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.rect
          x="8"
          y="8"
          width="8"
          height="3"
          rx="0.5"
          fill="#4CAF50"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.rect
          x="8"
          y="12"
          width="3"
          height="3"
          rx="0.5"
          fill="#2196F3"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
        />
        <motion.rect
          x="13"
          y="12"
          width="3"
          height="3"
          rx="0.5"
          fill="#FFC107"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.6 }}
        />
        <motion.rect
          x="8"
          y="16"
          width="8"
          height="2"
          rx="0.5"
          fill="#FF5252"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.9 }}
        />
        <motion.circle
          cx="12"
          cy="21"
          r="1"
          fill={color}
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </svg>
    </AnimatedIcon>
  )
}

// Project Creation Icon - Animated layers with building effect
export const ProjectIcon = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState("#7c3aed") // Default purple

  useEffect(() => {
    if (theme === "light") setColor("#000000")
    else if (theme === "dark") setColor("#ffffff")
    else setColor("#7c3aed") // Purple theme
  }, [theme])

  return (
    <AnimatedIcon>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M2 17L12 22L22 17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        />
        <motion.path
          d="M2 12L12 17L22 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 1 }}
        />
        <motion.path
          d="M2 7L12 12L22 7L12 2L2 7Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 2 }}
        />
        <motion.path
          d="M12 22V17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 3 }}
        />
        <motion.path
          d="M12 12V17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 2 }}
        />
      </svg>
    </AnimatedIcon>
  )
}
