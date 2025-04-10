"use client"
import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useLocale, useTranslations } from "next-intl"
import SpecialitySkeleton from "../../home/speciality/SpecialitySkeleton"
import SectionTitle from "@/components/modules/SectionTitle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getFaqs } from "@/lib/services"

interface FaqItem {
  id: number
  title: string
  desc: string
}

const Faq = () => {
  const locale = useLocale()
  const t = useTranslations("ContactPage")

  const {
    isError,
    isLoading,
    data
  } = useQuery<FaqItem[]>({ 
    queryKey: ["faqs", locale],
    queryFn: () => getFaqs({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })

  return (
    <section className="max-screen flex items-start flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/3">
        <SectionTitle
          title={t("faq_title")}
          subtitle={t("faq_subtitle")}
        />
      </div>

      <div className="w-full lg:w-2/3">
        {
          isLoading && !isError
            ? (
              <SpecialitySkeleton />
            )
            : (
              <Accordion
                type="single"
                collapsible
              >
                {
                  data?.map(item => (
                    <AccordionItem 
                      key={item.id}
                      value={item.title}
                      className="!bg-bg800-light dark:!bg-bg800-dark rounded-2xl px-4
                      mb-4 border border-solid border-bg700-light dark:border-bg700-dark"
                    >
                      <AccordionTrigger
                        className="text-base !no-underline font-medium"
                      >
                        <h3
                          className="flex items-center justify-start gap-2
                         text-custom-primary-light dark:text-custom-primary-dark"
                        >
                          <span 
                            className="text-custom-secondary-light dark:text-custom-secondary-dark"
                          >
                            {`0${item.id}.`}
                          </span>

                          <span>{item.title}</span>
                        </h3>
                      </AccordionTrigger>

                      <AccordionContent
                        className="rtl:font-light text-base text-custom-secondary-light
                      dark:text-custom-secondary-dark"
                      >
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }
              </Accordion>
            )
        }
      </div>
    </section>
  )
}

export default Faq