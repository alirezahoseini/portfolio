"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { ITestimonial } from "@/app/[locale]/types"


const TestimonialsCarouselItem = (props: ITestimonial) => {
  const {
    author,
    job_title,
    image,
    message
  } = props

  const [isShort, setIsShort] = useState<boolean>(false)
  const t = useTranslations("Common")


  useEffect(() => {
    if(message.length > 220) {
      setIsShort(true)
    }
  }, [])

  return (
    <div className="px-1 lg:px-2">
      <div
        className="flex h-fit w-full flex-col gap-4 rounded-3xl border 
      border-bg700-light dark:border-bg700-dark p-6 sm:p-8 border-solid
      select-none hover:cursor-grab active:cursor-grabbing"
      >
        {/* Testimonial header */}
        <div 
          className="testimonial_header flex items-center gap-4"
        >
          <div
            className=" border-2 border-slate-300 p-[3px] border-solid
            dark:border-bg600-dark rounded-full"
          >
            <Image
              src={image}
              width={64}
              height={64}
              alt={author}
              className="rounded-full"
            />  
          </div>

          <div 
            className="flex flex-col gap-1"
          >
            <h5 className="text-lg font-medium text">
              {author}
            </h5>

            <span className="text-sm text-custom-secondary-light dark:text-custom-secondary-dark">
              {job_title}
            </span>
          </div>
        </div>

        {/* Testimonial body */}
        <div className="testimonial_body">
          <p className="text-custom-secondary-light dark:text-custom-secondary-dark">
            {
              isShort
                ? (
                  `${message.slice(0, 220)} ${isShort ? "...   ": ""}`
                )
                : (
                  `${message} ${isShort ? "   " : ""}`
                )
            }

            {
              message.length > 220 && (
                <button 
                  type="button"
                  onClick={() => setIsShort(!isShort)}
                  className="text-sm hover:underline hover:dark:text-bg900-light
                hover:text-bg900-dark underline-offset-2"
                >
                  {isShort ? t("see_more") : t("show_less")}
                </button>
              )
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TestimonialsCarouselItem)