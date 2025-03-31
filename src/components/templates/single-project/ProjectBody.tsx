import React from "react"
import { ArrowUpRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import GithubIcon from "@/assets/icons/github"

type Props = {
  title: string
  description: string
  technologies: string[]
  links: {
    github: string
    live: string
  }
}

const ProjectBody = async ({ 
  title,
  description,
  technologies,
  links
}: Props) => {

  const t = await getTranslations("SingleProject")
  return (
    <div
      className="flex items-center justify-between flex-wrap gap-4"
    >
      <h1 
        className="ltr:font-clash text-5xl 
        font-medium text-custom-primary-light 
        dark:text-custom-primary-dark"
      >
        {title}
      </h1>

      {/* Buttons  */}
      <div className="inline-flex items-center justify-center gap-3">
        <Link 
          className="rounded-full px-6 py-3 bg-custom-primary-light
          dark:bg-custom-primary-dark flex items-center justify-center
          hover:bg-opacity-90 dark:hover:bg-opacity-70 text-custom-primary-dark 
          font-semibold dark:text-custom-primary-light text-sm transition-all
          duration-150 gap-2"
          href={links.live}
          target="_blank"
        >
          <span>
            {t("see_project_btn")}
          </span>

          <ArrowUpRight 
            size={16} 
            className="rtl:-rotate-90"
          />
        </Link>

        <Link 
          className="rounded-full px-4 py-3 bg-custom-primary-light
          dark:bg-custom-primary-dark flex items-center justify-center
          hover:bg-opacity-90 dark:hover:bg-opacity-70 text-custom-primary-dark 
          font-semibold dark:text-custom-primary-light text-sm transition-all
          duration-150 gap-2"
          href={links.github}
          target="_blank"
        >
          <GithubIcon 
            className="w-[20px]"
          />
        </Link>
      </div>
    </div>
  )
}

export default ProjectBody