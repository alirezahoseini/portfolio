import { getMessages } from "next-intl/server"
import Image from "next/image"
import { IAboutPageMessages, IButtonsMessages, IHomePageMessages } from "./types"
import PageHeading from "@/components/templates/home/PageHeading"


export default async function HomePage({ params }: {
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale

  
  const homePageMessages = await getMessages({ locale }) as { HomePage: IHomePageMessages }
  const buttonsMessages = await getMessages({ locale }) as { Buttons: IButtonsMessages }
  const aboutPageMessages = await getMessages({ locale }) as { AboutPage: IAboutPageMessages }

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
          name={homePageMessages.HomePage["name"]} 
          job_title={homePageMessages.HomePage["job_title"]}
          download_resume={buttonsMessages.Buttons["download_resume"]}
          github={buttonsMessages.Buttons["github"]}
        />

        <div className="mt-10 flex items-center flex-col">
          <h2 
            className="font-bold text-xl"
          >
            {aboutPageMessages.AboutPage["page_title"]}
          </h2>

          <div
            className="lg:max-w-screen-md leading-7 mt-3"
          >
            {
              aboutPageMessages.AboutPage["about_me_description"].split("<br />").map(pText => (
                <p>{pText}</p>
              ))
            }
          </div>
        </div>
        
        
      </div>
    </>
  )
}