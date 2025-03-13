import React from "react"
import { getTranslations } from "next-intl/server"
import { ArrowUpRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "github",
    url: "#"
  },
  {
    name: "linkedin",
    url: "#"
  },
  {
    name: "instagram",
    url: "#"
  },
  {
    name: "gmail",
    url: "#"
  }

]

const HeroLinks = async () => {
  const t = await getTranslations("HomePage")
  return (
    <div
      className="flex gap-4 mt-8 md:rtl:mt-10
      flex-col items-center md:flex-row justify-between"
    >

      <div 
        className="lg:w-6/12 items-center justify-start
        opacity-container gap-4 hidden md:flex"
      >
        {
          socialLinks.map(item => (
            <Link 
              href={item.url}
              className="uppercase flex text-secondary-light dark:text-secondary-dark
                 items-center gap-1 text-sm opacity-container-child"
            >
              {item.name}

              <ArrowUpRight
                size={18}
              />
            </Link>
          ))
        }
      </div>
      
      <div className="lg:w-6/12 flex items-center justify-end">
        <Button 
          className="rounded-full px-8 py-6 font-semibold"
        >
          <Link href="/about" >
            {t("know_me_better")}
          </Link>
        </Button>
      </div>   
    </div>
  )
}

export default HeroLinks