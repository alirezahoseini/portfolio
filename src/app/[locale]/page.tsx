import { getMessages } from "next-intl/server"
import { IAboutPageMessages, IButtonsMessages, IHomePageMessages } from "./types"
import PageHeading from "@/components/templates/home-page/PageHeading"
import LogosSlider from "@/components/modules/logos-slider/LogosSlider"
import Paragraph from "@/components/modules/Paragraph"

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale

  const homePageMessages = (await getMessages({ locale })) as { HomePage: IHomePageMessages }
  const buttonsMessages = (await getMessages({ locale })) as { Buttons: IButtonsMessages }
  const aboutPageMessages = (await getMessages({ locale })) as { AboutPage: IAboutPageMessages }

  // const seoTitle = messages.HomePage["seo_title"]
  // const seoDesc = messages.HomePage["seo_desc"]

  return (
    <>
      {/* <head>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDesc} />
      </head> */}

      <div className="flex flex-col items-center">
        <PageHeading
          name={homePageMessages.HomePage["name"]}
          job_title={homePageMessages.HomePage["job_title"]}
          download_resume={buttonsMessages.Buttons["download_resume"]}
          github={buttonsMessages.Buttons["github"]}
          cv_link={aboutPageMessages.AboutPage["cv_link"]}
        />

        <div className="mt-10 flex items-center flex-col">
          <h2 className="font-bold text-xl">
            {aboutPageMessages.AboutPage["page_title"]}
          </h2>
        </div>

        <div className="lg:max-w-screen-md">
          <Paragraph text={aboutPageMessages.AboutPage["about_me_description"]} />
        </div>

        <LogosSlider />
      </div>
    </>
  )
}