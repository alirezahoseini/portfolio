import React from "react"
import { getTranslations } from "next-intl/server"
import { Backpack } from "lucide-react"
import SplitText from "@/components/ui/split-text"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const q = [
  {
    id: 1,
    title: "item 1",
    desc: "lorem20lorem20lorem20lorem20l orem20lorem20loren m20lorem20lorem20lorem20lorem20"
  },
  {
    id: 2,
    title: "item 2",
    desc: "lorem20lorem20lorem20lorem20l orem20lorem20loren m20lorem20lorem20lorem20lorem20"
  },
  {
    id: 3,
    title: "item 3",
    desc: "lorem20lorem20lorem20lorem20l orem20lorem20loren m20lorem20lorem20lorem20lorem20"
  }
]

const Speciality = async () => {
  const t = await getTranslations("HomePage")
  return (
    <section
      className="max-screen"
    >
      <div>
        <ShimmerTitle >
          {t("speciality")}
        </ShimmerTitle>

        <SplitText
          text={t("areas_of_expertise")}
          className="text-4xl md:text-5xl rtl:font-semibold text-center
            ltr:font-clash rtl:font-doran ltr:tracking-wide 
            ltr:font-medium mb-6"
          delay={150}
          duration={0.6} 
          staggerChildren={0.04}
          animationFrom={{ opacity: 0, y: 50 }}
          animationTo={{ opacity: 1, y: 0 }}
          easing={[0.215, 0.61, 0.355, 1]}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="">
            image
          </div>

          <div className="">
            <Accordion type="single" collapsible>
              {
                q.map(item => (
                  <AccordionItem 
                    key={item.id}
                    value={item.title}
                    className="!bg-bg800-light dark:!bg-bg800-dark rounded-2xl px-5
                    mb-4 border border-solid border-bg700-light dark:border-bg700-dark"
                  >
                    <AccordionTrigger
                      className="text-custom-primary-light dark:text-custom-primary-dark
                        text-base !no-underline font-medium"
                    >
                      <h3
                        className="flex items-center justify-start gap-2"
                      >
                        <Backpack />

                        {item.title}
                      </h3>
                    </AccordionTrigger>
  
                    <AccordionContent>
                      {item.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Speciality