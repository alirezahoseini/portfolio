"use client"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface SplitTextProps {
  text?: string
  className?: string
  delay?: number
  animationFrom?: { opacity?: number, transform?: string, y?: number }
  animationTo?: { opacity?: number, transform?: string, y?: number }
  easing?: string | number[]
  threshold?: number
  rootMargin?: string
  textAlign?: "left" | "right" | "center" | "justify" | "start" | "end"
  onLetterAnimationComplete?: () => void
  isPersian?: boolean
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 150,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOut",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  isPersian
}) => {
  const isTextPersian = isPersian !== undefined 
    ? isPersian 
    : /[\u0600-\u06FF]/.test(text) 
 
  const words = text.split(" ")

  const elements = isTextPersian 
    ? words 
    : words.map(word => word.split("")).flat()
  
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)
  const animatedCount = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  // Custom animation complete handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAnimationComplete = (index: number) => {
    animatedCount.current += 1
    if (animatedCount.current === elements.length && onLetterAnimationComplete) {
      onLetterAnimationComplete()
    }
  }

  // Convert delay from milliseconds to seconds for Framer Motion
  const delayInSeconds = delay / 1000

  if (isTextPersian) {
    return (
      <p
        ref={ref}
        className={`split-parent overflow-hidden inline ${className}`}
        style={
          {
            textAlign,
            whiteSpace: "normal",
            wordWrap: "break-word",
            direction: "rtl"
          }
        }
      >
        {
          words.map((word, index) => (
            <motion.span
              key={index}
              initial={animationFrom}
              animate={inView ? animationTo : animationFrom}
              transition={
                {
                  duration: 0.5,
                  ease: easing,
                  delay: index * delayInSeconds
                }
              }
              className="inline-block transform transition-opacity will-change-transform"
              style={{ marginLeft: "0.2em" }}
            >
              {word}
            </motion.span>
          ))
        }
      </p>
    )
  }
  else {
    return (
      <p
        ref={ref}
        className={`split-parent overflow-hidden inline ${className}`}
        style={
          {
            textAlign,
            whiteSpace: "normal",
            wordWrap: "break-word"
          }
        }
      >
        {
          words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {
                !isTextPersian && typeof word === "string" 
                  ? word.split("").map((letter, letterIndex) => {
                    const index = words
                      .slice(0, wordIndex)
                      .reduce((acc, w) => typeof w === "string" ? acc + w.length : acc + 1, 0) + letterIndex

                    return (
                      <motion.span
                        key={index}
                        initial={animationFrom}
                        animate={inView ? animationTo : animationFrom}
                        transition={
                          {
                            duration: 0.5,
                            ease: easing,
                            delay: index * delayInSeconds
                          }
                        }
                        onAnimationComplete={() => handleAnimationComplete(index)}
                        className="inline-block transform transition-opacity will-change-transform"
                      >
                        {letter}
                      </motion.span>
                    )
                  })
                  : word
              }

              <span style={{ display: "inline-block", width: "0.3em" }}>
              &nbsp;
              </span>
            </span>
          ))
        }
      </p>
    )
  }
}

export default SplitText