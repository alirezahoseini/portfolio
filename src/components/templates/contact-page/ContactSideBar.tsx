import React from "react"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import AvailableBadge from "@/components/modules/footer/AvailableBadge"
import SocialIcons from "@/components/modules/footer/SocialIcons"

const ContactSideBar = async () => {
  const t = await getTranslations("ContactPage")
  return (
    <div
      className="bg-bg800-light dark:bg-bg800-dark rounded-3xl flex 
        p-6 shadow-custom items-start justify-start flex-col"
    >
      <AvailableBadge />
  
      <Image 
        src="/contact-profile-image.jpg"    
        width={100}
        height={100}
        alt="Alireza hosseini front-end developer"
        className="aspect-square overflow-hidden rounded-full
         border border-bg600-light border-solid object-cover p-2
         dark:border-bg600-dark mb-4"
      />

      <p className="mb-6">
        {t("contact_sidebar_desc")}
      </p>

      <SocialIcons />
    </div>
  )
}

export default ContactSideBar