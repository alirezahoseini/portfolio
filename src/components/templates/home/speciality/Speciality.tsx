"use client"
import React, { useEffect, useState } from "react"
import { useLocale } from "next-intl"
import SpecialityAccordion from "./SpecialityAccordion"
import SpecialityTitle from "./SpecialityTitle"
import API from "@/lib/axiosConfig"
import { ISelectedImage, ISpeciality } from "@/app/[locale]/types"


const Speciality = () => {
  const [specialtiesList, setSpecialtiesList] = useState<ISpeciality[]>([])
  const [selectedImage, setSelectedImage] = useState<ISelectedImage>(null)
  const locale = useLocale()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await API.get(`speciality?lang=${locale}`)
      setSpecialtiesList(data)
    }
    fetchData()
  }, [])

  return (
    <section
      className="max-screen"
    >
      <div>
        <SpecialityTitle />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

          <SpecialityAccordion specialtiesList={specialtiesList} />

          <div className="">
            image
          </div>

       
        </div>

      </div>
    </section>
  )
}

export default Speciality