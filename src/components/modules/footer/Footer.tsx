import React from "react"
import AvailableBadge from "./AvailableBadge"
import Copyright from "./Copyright"
import SocialIcons from "./SocialIcons"
import SplitText from "@/components/ui/split-text"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import FadeInAnimate from "@/components/HOC/FadeInAnimate"
import { getTranslations } from "next-intl/server"

const Footer = async () => {
  const t = await getTranslations("Footer")
  return (
    <footer
      className="max-screen z-[60]"
    >
      <div 
        className="bg-bg800-light dark:bg-bg800-dark rounded-3xl flex flex-col
        px-4 py-14 shadow-custom items-center justify-center"
      >

        <FadeInAnimate>
          <AvailableBadge />
        </FadeInAnimate>

        <div 
          className="m-auto mt-2 mb-6 max-w-screen-sm text-balance text-center"
        >
          <FadeInAnimate>
            <SplitText
              text={t("footer_title")}
              className="text-4xl md:text-5xl rtl:font-semibold text-center
                    ltr:font-clash rtl:font-doran ltr:tracking-wide 
                    ltr:font-medium rtl:leading-[60px]"
              delay={150}
              duration={0.6} 
              staggerChildren={0.04}
              animationFrom={{ opacity: 0, y: 50 }}
              animationTo={{ opacity: 1, y: 0 }}
              easing={[0.215, 0.61, 0.355, 1]}
            />
          </FadeInAnimate>
        </div>
        
        <FadeInAnimate>
          <Button 
            className="rounded-full px-8 py-6 font-semibold mt-2"
          >
            <Link href="/contact" >
              {t("footer_btn")}
            </Link>
          </Button>
        </FadeInAnimate>

        <SocialIcons className="mt-8 md:hidden" />
      </div>

      <Copyright />
    </footer>
  )
}

export default Footer