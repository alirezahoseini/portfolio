export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale

  // const homePageMessages = (await getMessages({ locale })) as { HomePage: IHomePageMessages }
  // const buttonsMessages = (await getMessages({ locale })) as { Buttons: IButtonsMessages }
  // const aboutPageMessages = (await getMessages({ locale })) as { AboutPage: IAboutPageMessages }


  return (
    <>

    </>
  )
}