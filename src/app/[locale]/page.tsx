import Link from "next/link"
import TitlesSlider from "@/components/modules/TitlesSlider"
import About from "@/components/templates/home/about/About"
import Hero from "@/components/templates/home/hero/Hero"
import Projects from "@/components/templates/home/projects/Projects"
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

      <About />

      <Projects />

      <Link href="/fa/about" >
        about
      </Link>
    </>
  )
}