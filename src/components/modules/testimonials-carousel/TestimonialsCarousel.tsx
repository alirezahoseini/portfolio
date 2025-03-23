"use client"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import styles from "./TestimonialsCarousel.module.css"
import TestimonialsCarouselButtons from "./TestimonialsCarouselButtons"
import TestimonialsCarouselItem from "./TestimonialsCarouselItem"


const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

const TestimonialsCarousel = () => {
  const locale = useLocale()
  const t = useTranslations("HomePage")

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: locale === "fa" ? "rtl" : "ltr"
  }, [Autoplay({ stopOnInteraction: true })])


  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {
            slides.map(index => (
              <TestimonialsCarouselItem
                key={index}
              />
            ))
          }
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 rtl:flex-row-reverse">
        <Link
          href="#"
          className="underline-effect text-custom-primary-light dark:text-custom-primary-dark
          text-sm !flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <span>{t("check_linkedin")}</span>

          <ArrowUpRight 
            size={16} 
            className="rtl:-rotate-90"
          />
        </Link>

        <TestimonialsCarouselButtons emblaApi={emblaApi} />
      </div>

    </section>
  )
}

export default TestimonialsCarousel