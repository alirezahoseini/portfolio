"use client"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useLocale } from "next-intl"
import styles from "./TestimonialsCarousel.module.css"
import TestimonialsCarouselButtons from "./TestimonialsCarouselButtons"


const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

const TestimonialsCarousel = () => {
  const locale = useLocale()

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: locale === "fa" ? "rtl" : "ltr"
  })


  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {
            slides.map(index => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__number}>{index + 1}</div>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <TestimonialsCarouselButtons emblaApi={emblaApi} />
        </div>
      </div>

    </section>
  )
}

export default TestimonialsCarousel