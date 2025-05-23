import React from "react"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"
import ContactForm from "@/components/templates/contact-page/ContactForm"
import ContactSideBar from "@/components/templates/contact-page/ContactSideBar"
import SectionTitle from "@/components/modules/SectionTitle"
import Faq from "@/components/templates/contact-page/faq/Faq"

export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const params = await props.params
  const locale = await params.locale
  const t = await getTranslations("ContactPage")

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      locale: locale,
      type: "website"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1
      }
    },
    alternates: {
      canonical: `https://a-hosseini.ir/${locale}`,
      languages: {
        "en": "https://a-hosseini.ir/en",
        "fa": "https://a-hosseini.ir/fa"
      }
    }
  }
}


const ContactPage = async () => {
  const t = await getTranslations("ContactPage")
  return (
    <section className="max-screen">
      <div className="flex flex-col">
        <div className="w-full lg:w-1/2">
          <SectionTitle 
            title={t("contact_title")}
            subtitle={t("contact_subtitle")}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 mt-8 items-start">
          <ContactForm />

          <ContactSideBar />
        </div>

        <Faq />
      </div>
    </section>
  )
}

export default ContactPage