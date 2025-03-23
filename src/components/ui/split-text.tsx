"use client"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

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
  // اضافه کردن کنترل بیشتر روی انیمیشن
  duration?: number
  staggerChildren?: number
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 150,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = [0.215, 0.61, 0.355, 1], // cubic-bezier easing برای انیمیشن نرم‌تر
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  isPersian,
  duration = 0.6, // مدت زمان طولانی‌تر برای انیمیشن نرم‌تر
  staggerChildren = 0.03 // تأخیر بین المان‌ها (به جای محاسبه با index)
}) => {
  const isTextPersian = isPersian !== undefined 
    ? isPersian 
    : /[\u0600-\u06FF]/.test(text)
  
  const words = text.split(" ")
  
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

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

  // استفاده از variants برای انیمیشن بهتر و کنترل staggering
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay / 1000
      }
    }
  }

  const itemVariants = {
    hidden: {
      ...animationFrom,
      transition: { duration, ease: easing }
    },
    visible: {
      ...animationTo,
      transition: { duration, ease: easing }
    }
  }

  // Custom animation complete handler
  const handleAnimationComplete = () => {
    if (onLetterAnimationComplete) {
      onLetterAnimationComplete()
    }
  }

  if (isTextPersian) {
    return (
      <motion.p
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
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        {
          words.map((word, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block transform will-change-transform"
              style={{ marginLeft: "0.3em" }}
            >
              {word}
            </motion.span>
          ))
        }
      </motion.p>
    )
  }
  else {
    return (
      <motion.p
        ref={ref}
        className={`split-parent overflow-hidden inline ${className}`}
        style={
          {
            textAlign,
            whiteSpace: "normal",
            wordWrap: "break-word"
          }
        }
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        {
          words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {
                !isTextPersian && typeof word === "string" 
                  ? word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      variants={itemVariants}
                      className="inline-block transform will-change-transform"
                    >
                      {letter}
                    </motion.span>
                  ))
                  : word
              }

              <span style={{ display: "inline-block", width: "0.3em" }}>
              &nbsp;
              </span>
            </span>
          ))
        }
      </motion.p>
    )
  }
}

export default React.memo(SplitText)