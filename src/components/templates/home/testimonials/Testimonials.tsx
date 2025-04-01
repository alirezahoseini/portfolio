"use client"
import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { useQuery } from "@tanstack/react-query"
import TestimonialsCarousel from "../../../modules/testimonials-carousel/TestimonialsCarousel"
import { getTestimonials } from "@/lib/services"
import { Skeleton } from "@/components/ui/skeleton"
import SectionTitle from "@/components/modules/SectionTitle"


const Testimonials = () => {
  const locale = useLocale()
  const t = useTranslations("HomePage")

  const { isLoading, data } = useQuery({ 
    queryKey: ["testimonials", locale],
    queryFn: () => getTestimonials({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })

  return (
    <section className="max-screen flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-[30%]">
        <SectionTitle
          title={t("testimonials")}
          subtitle={t("testimonials_subtitle")}
          description={t("testimonials_description")}
        />
      </div>

      <div className="w-full lg:w-2/3">
        {
          isLoading
            ? (
              <Skeleton 
                className="w-full min-h-64 rounded-3xl"
              />
            )
            : (
              <TestimonialsCarousel testimonials={data} />
            )
        }
      </div> 
    </section>
  )
}

export default Testimonials