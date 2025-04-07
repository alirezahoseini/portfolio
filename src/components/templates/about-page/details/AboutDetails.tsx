"use client"
import React from "react"
import { useTranslations } from "next-intl"
import PersonalInfoList from "./PersonalInfoList"
import SectionTitle from "@/components/modules/SectionTitle"

const AboutDetails = () => {
  const t = useTranslations("AboutPage")

  return (
    <section className="max-screen flex flex-col gap-6">
      <div className="">
        <SectionTitle
          title={t("details_title")}
          subtitle={t("details_subtitle")}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <p className="w-full lg:w-1/2 text-justify">
          {t("details_description")}
        </p>

        <PersonalInfoList />
      </div> 
    </section>
  )
}

export default AboutDetails