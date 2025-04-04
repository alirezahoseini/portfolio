import React from "react"
import ContactForm from "@/components/templates/contact-page/ContactForm"
import ContactSideBar from "@/components/templates/contact-page/ContactSideBar"
import SectionTitle from "@/components/modules/SectionTitle"
import { getTranslations } from "next-intl/server"

const ContactPage = async () => {
   const t = await getTranslations("ContactPage")
  return (
    <section className="max-screen">
      <div className="flex flex-col ">
        <div className="w-full lg:w-1/2">
          <SectionTitle 
            title={t("contact_title")}
            subtitle={t("contact_subtitle")}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 mt-8">
          <ContactForm />

          <ContactSideBar />
        </div>
      </div>
    </section>
  )
}

export default ContactPage