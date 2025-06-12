"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
          initial={{
            opacity: 0,
            scale: 0,
            y: 100,
            rotate: -180,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            y: 100,
            rotate: 180,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6,
          }}
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 25px rgba(236, 72, 153, 0.6), 0 0 50px rgba(236, 72, 153, 0.4)",
            rotate: 5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          aria-label="Back to top"
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.2, opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating sparkle effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Icon with bounce animation */}
          <motion.div
            className="relative z-10"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronUp className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>

          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
