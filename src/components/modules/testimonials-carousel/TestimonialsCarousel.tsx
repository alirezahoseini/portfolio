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
import { ITestimonial } from "@/app/[locale]/types"

type Props = {
  testimonials: ITestimonial[]
}

const TestimonialsCarousel = ({ testimonials }: Props) => {
  const locale = useLocale()
  const t = useTranslations("HomePage")
  const s = useTranslations("Socials")

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: locale === "fa" ? "rtl" : "ltr"
  }, [Autoplay({ stopOnInteraction: true, stopOnMouseEnter: true })])


  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {
            testimonials.map(item => (
              <TestimonialsCarouselItem
                key={item.id}
                {...item}
              />
            ))
          }
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 rtl:flex-row-reverse">
        <Link
          href={s("linkedin_link")}
          className="underline-effect text-custom-primary-light dark:text-custom-primary-dark
          text-sm !flex items-center justify-center gap-2 active:scale-[0.98] select-none"
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