"use client"
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

const ScrollToTopButton = () => {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateButtonVisibility = () => {
      setIsVisible(scrollY.get() > 300)
    }

    const unsubscribe = scrollY.onChange(updateButtonVisibility)
    return () => unsubscribe()
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      initial={
        {
          opacity: 0,
          scale: 0.8
        }
      }
      animate={
        {
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8
        }
      }
      transition={
        {
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5
        }
      }
      onClick={scrollToTop}
      className="fixed bottom-24 lg:bottom-8 right-4 p-3 w-11 h-11 
        transform-gpu transition-colors will-change-transform border 
        border-solid border-bg700-light dark:border-bg700-dark rounded-full
        shadow-custom hover:bg-bg700-light dark:hover:bg-bg700-dark z-50 
        flex items-center justify-center bg-bg800-light dark:bg-bg800-dark 
        text-custom-secondary-light dark:text-custom-secondary-dark
        "
    >
      <ArrowUp size={24} />
    </motion.button>
  )
}

export default ScrollToTopButton