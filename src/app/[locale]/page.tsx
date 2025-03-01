import { getMessages } from "next-intl/server"
import Image from "next/image"
import { IButtonsMessages, IHomePageMessages } from "./types"
import PageHeading from "@/components/templates/home/PageHeading"


export default async function HomePage({ params }: {
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale

  
  const contentMessages = await getMessages({ locale }) as { HomePage: IHomePageMessages }
  const buttonsMessages = await getMessages({ locale }) as { Buttons: IButtonsMessages }

  // const seoTitle = messages.HomePage["seo_title"]
  // const seoDesc = messages.HomePage["seo_desc"]

  
  return (
    <>
      {/* <head>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDesc} />
      </head> */}
      
      <div className="flex flex-col items-center">
        <div
          className="bg-[#FFDCAB] pt-2 dark:bg-opacity-50
          rounded-full flex items-center justify-center pr-2 
          mt-16 mb-3"
        >
          <Image 
            src="/main-memoji.png" 
            width={120}
            height={120} 
            alt="alireza hosseini"
          />
        </div>

        <PageHeading 
          name={contentMessages.HomePage["name"]} 
          job_title={contentMessages.HomePage["job_title"]}
          download_resume={buttonsMessages.Buttons["download_resume"]}
         github={buttonsMessages.Buttons["github"]}
        />
        

      </div>
    </>
  )
}