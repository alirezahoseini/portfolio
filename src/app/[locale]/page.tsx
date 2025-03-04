import { getMessages } from "next-intl/server"
import { IAboutPageMessages, IButtonsMessages, IHomePageMessages } from "./types"
import PageHeading from "@/components/templates/home-page/PageHeading"
import Paragraph from "@/components/modules/Paragraph"
import ReadMoreWrapper from "@/components/modules/ReadMoreWrapper"
import ProjectsWrapper from "@/components/modules/projects-wrapper/ProjectsWrapper"

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

        <div className="mt-10 flex items-center flex-col lg:max-w-screen-md">
          <h2 className="font-bold text-xl">
            {aboutPageMessages.AboutPage["page_title"]}
          </h2>

          <ReadMoreWrapper more_text={buttonsMessages.Buttons["more"]}>
            <Paragraph text={aboutPageMessages.AboutPage["about_me_description"]} />
          </ReadMoreWrapper>
        </div>

        <div className="mt-10 flex items-center flex-col max-w-screen-lg">
          <h2 className="font-bold text-xl">
            {homePageMessages.HomePage["latest_projects"]}
          </h2>

          <ProjectsWrapper locale={locale} limit={4} />
        </div>

      </div>
    </>
  )
}