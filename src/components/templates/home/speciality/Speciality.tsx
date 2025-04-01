"use client"
import React, { useState } from "react"
import { useLocale } from "next-intl"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import SpecialityAccordion from "./SpecialityAccordion"
import SpecialityTitle from "./SpecialityTitle"
import SpecialitySkeleton from "./SpecialitySkeleton"
import { ISelectedImage, ISpeciality } from "@/app/[locale]/types"
import { getSpeciality } from "@/lib/services"
import TechsSlider from "@/components/modules/techs-slider/TechsSlider"


const Speciality = () => {
  const [selectedImage, setSelectedImage] = useState<ISelectedImage>(1)
  const locale = useLocale()
  
  const {
    isError,
    isLoading,
    data
  } = useQuery({ 
    queryKey: ["speciality", locale],
    queryFn: () => getSpeciality({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })


  return (
    <section
      className="max-screen"
    >
      {
        isError && (
          <div>error</div>
        )
      }
      
      <div>
        <SpecialityTitle />

        {
          isLoading && !isError
            ? (
              <SpecialitySkeleton />
            )
            : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10">
                <SpecialityAccordion 
                  specialtiesList={data}
                  setSelectedImage={setSelectedImage}
                />

                <div className="relative w-full h-full aspect-video rounded-3xl overflow-hidden">
                  {
                    data.map((item: ISpeciality) => (
                      <Image 
                        key={item.id}
                        src={item.image} 
                        alt="Speciality image"
                        width={640}
                        height={426}
                        className={
                          `absolute top-0 right-0 h-full w-full object-cover
                           transition-all duration-500 
                           ${selectedImage === item.id ? "opacity-100" : "opacity-0"}`
                        }
                      />
                    ))
                  }
                </div>
              </div>
            )
        }
      </div>

      <div className="py-9">
        <TechsSlider />
      </div>
    </section>
  )
}

export default Speciality