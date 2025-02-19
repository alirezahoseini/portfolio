"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import PageHeading from "@/components/page-heading/PageHeading"

export default function HomePage() {
  const t = useTranslations("HomePage")

  return (
    <div className="flex flex-col items-center">
      <div 
        className="bg-[#FFDCAB] pt-2 dark:bg-opacity-50
        rounded-full flex items-center justify-center pr-2 mt-16 mb-3"
      >
        <Image
          src="/main-memoji.png" 
          width={120} 
          height={120} 
          alt="alireza hosseini"
        />
      </div>

      <PageHeading
        title={t("title")}
        description={t("description")}
      />
    </div>
  )
}