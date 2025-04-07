import { Mail } from "lucide-react"
import { getTranslations } from "next-intl/server"
import React from "react"
import GithubIcon from "@/assets/icons/github"
import InstagramIcon from "@/assets/icons/instagram"
import LinkedinIcon from "@/assets/icons/linkedin"
import { Link } from "@/i18n/routing"
import FadeInAnimate from "@/components/HOC/FadeInAnimate"

type Props = { className?: string }


const SocialIcons = async ({ className }: Props) => {
  const s = await getTranslations("Socials")

  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      name: "linkedin",
      url: s("linkedin_link")
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      name: "github",
      url: s("github_link")
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      name: "instagram",
      url: s("instagram_link")
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "gmail",
      url: s("gmail_link")
    }
  ]

  return (

    <div 
      className={
        `opacity-container flex items-center justify-center opacity-container
       gap-6 text-custom-secondary-light dark:text-custom-secondary-dark
       ${className}`
      }
    >
      {
        socialLinks.map((item, index) => (
          <FadeInAnimate key={index} delay={Number(0.0 + `0.${index}`+ 50)} >
            <Link
              className="opacity-container-child"
              key={item.name}
              href={item.url} 
              target="_blank"
            >
              {item.icon}
            </Link>
          </FadeInAnimate>
        ))
      }
    </div>
  )
}

export default SocialIcons