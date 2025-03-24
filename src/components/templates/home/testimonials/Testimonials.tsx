"use client"
import React from "react"
import { useLocale } from "next-intl"
import { useQuery } from "@tanstack/react-query"
import TestimonialsTitle from "./TestimonialsTitle"
import TestimonialsCarousel from "../../../modules/testimonials-carousel/TestimonialsCarousel"
import { getTestimonials } from "@/lib/services"


const Testimonials = () => {
  const locale = useLocale()

  const { isLoading, data } = useQuery({ 
    queryKey: ["speciality", locale],
    queryFn: () => getTestimonials({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })

  return (
    <section className="max-screen flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-[30%]">
        <TestimonialsTitle />
      </div>

      <div className="w-full lg:w-2/3">
        {
          isLoading
            ? (
              <>loading</>
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