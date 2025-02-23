import { useTranslations } from "next-intl"
import Image from "next/image"
import { getMessages } from "next-intl/server"
import { IHomePageMessages } from "./types"
import PageHeading from "@/components/page-heading/PageHeading"

type Params = { params: { locale: string } }
 
type Props= {
  products: string[]
  locale: string
}


export async function generateMetadata({ params }: Params) {
  const { locale } = params
  const res = await fetch(`http://localhost:3000/api/projects?lang=${locale}`)
  const products = await res.json()
  const messages = await getMessages({ locale }) as { HomePage: IHomePageMessages }

  return {
    title: messages.HomePage["seo_title"],
    description: messages.HomePage["seo_desc"],
    props: {
      products,
      locale
    }
  }
}

export default function HomePage(props: Props) {
  const { products } = props
  const t = useTranslations("HomePage")

  console.log(products)

  return (
    <div className="flex flex-col items-center">
      <div
        className="bg-[#FFDCAB] pt-2 dark:bg-opacity-50
        rounded-full flex items-center justify-center pr-2 mt-16 mb-3"
      >
        <Image src="/main-memoji.png" width={120} height={120} alt="alireza hosseini" />
      </div>

      <PageHeading title={t("title")} description={t("bio")} />

      {/* {
        products.map(product => (
          <GridCard key={product.id} />
        ))
      } */}
    </div>
  )
}