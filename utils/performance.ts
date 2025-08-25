/**
 * Utility functions for performance optimization
 */

// Throttle function to limit how often a function can be called
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let inThrottle = false
  let lastResult: ReturnType<T>

  return function (this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    if (!inThrottle) {
      lastResult = func.apply(this, args)
      inThrottle = true

      setTimeout(() => {
        inThrottle = false
      }, limit)
    }

    return lastResult
  }
}

// Debounce function to delay execution until after a period of inactivity
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
  }
}

// Check if device is likely low-end
export function isLowEndDevice(): boolean {
  if (typeof window === "undefined") return false

  // Check for hardware concurrency (CPU cores)
  const lowConcurrency = navigator.hardwareConcurrency <= 4

  // Check for mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  // Check for memory (if available)
  const lowMemory = "deviceMemory" in navigator && (navigator as any).deviceMemory < 4

  return lowConcurrency || (isMobile && lowMemory)
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Optimize animation settings based on device capabilities
export function getOptimalAnimationSettings() {
  const lowEnd = isLowEndDevice()
  const reduceMotion = prefersReducedMotion()

  return {
    enabled: !reduceMotion,
    quality: lowEnd ? "low" : "high",
    particleCount: lowEnd ? 3 : 8,
    duration: lowEnd ? 0.3 : 0.5,
    staggerDelay: lowEnd ? 0.03 : 0.1,
  }
}
