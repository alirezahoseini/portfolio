import { ArrowUpRight } from "lucide-react"
import React from "react"
import { getTranslations } from "next-intl/server"
import GithubIcon from "@/assets/icons/github"
import { Link } from "@/i18n/routing"

type Props = {
  links: {
    github: string
    live: string
  }
}

const ProjectButtons = async ({ links }: Props) => {

  const t = await getTranslations("SingleProject")

  return (
    <div className="inline-flex items-center justify-center gap-3">
      {
        links.live && (
          <Link 
            className="rounded-full px-6 py-3 bg-custom-primary-light
           dark:bg-custom-primary-dark flex items-center justify-center
            hover:bg-opacity-90 dark:hover:bg-opacity-70 text-custom-primary-dark 
            ltr:font-semibold rtl:font-normal dark:text-custom-primary-light text-sm 
            transition-all duration-150 gap-2"
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
        )
      }

      {
        links.github && (
          <Link 
            className="rounded-full px-4 py-[10px] bg-custom-primary-light
          dark:bg-custom-primary-dark flex items-center justify-center
          hover:bg-opacity-90 dark:hover:bg-opacity-70 text-custom-primary-dark 
          ltr:font-semibold rtl:font-light dark:text-custom-primary-light text-sm transition-all
          duration-150 gap-2"
            href={links.github}
            target="_blank"
          >
            <GithubIcon 
              className="w-[20px]"
            />
          </Link>
        )
      }
    </div>
  )
}

export default ProjectButtons