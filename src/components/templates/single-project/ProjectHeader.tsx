import { ArrowLeft } from "lucide-react"
import { getTranslations } from "next-intl/server"
import React from "react"
import Image from "next/image"
import { Link } from "@/i18n/routing"

type Props = {
  heroImage: {
    url: string
    alt: string
  }
  date: number
}

const ProjectHeader = async ({ heroImage, date }: Props) => {
  const t = await getTranslations("SingleProject")
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <Link 
          href="/projects" 
          className="flex items-center gap-2 p-1 text-custom-secondary-light
          dark:text-custom-secondary-dark hover:text-custom-primary-light
          hover:dark:text-custom-primary-dark "
        >
          <ArrowLeft 
            size={16} 
            className="rtl:rotate-180"
          />

          <span className="text-sm">{t("back_to_projects")}</span>
        </Link>

        <span 
          className="text-sm text-custom-secondary-light 
        dark:text-custom-secondary-dark border border-solid
        rounded-sm border-bg600-light dark:border-bg600-dark
        px-2 py-1 w-fit font-satoshi"
        >
          {date}
        </span>
      </div>

      <Image
        src={heroImage.url}
        alt={heroImage.alt}
        width={800}
        height={250}
        quality={100}
        loading="eager"
        className="mt-8 rounded-2xl w-full h-fit"
      />
    </div>
  )
}

export default ProjectHeader