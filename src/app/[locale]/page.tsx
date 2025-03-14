import TitlesSlider from "@/components/modules/TitlesSlider"
import Hero from "@/components/templates/home/hero/Hero"
// import { getMessages } from "next-intl/server"
// import { IHomePageMessages } from "./types"

// export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
export default async function HomePage() {
  // const locale = (await params).locale

  // const homePageMessages = (await getMessages({ locale })) as { HomePage: IHomePageMessages}
  // const buttonsMessages = (await getMessages({ locale })) as { Buttons: IButtonsMessages }
  // const aboutPageMessages = (await getMessages({ locale })) as { AboutPage: IAboutPageMessages }

  return (
    <>
      <Hero />

      <TitlesSlider />
    </>
  )
}