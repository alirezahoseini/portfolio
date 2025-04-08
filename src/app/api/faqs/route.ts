import { NextRequest, NextResponse } from "next/server"
import { faqs } from "./faqs"
import { IFaq } from "@/app/[locale]/types"

type ResponseData = IFaq[] | IFaq

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "fa"

  // Get faqs with locale
  const faqsList: ResponseData = locale === "en" ? faqs.en : faqs.fa
  

  // Return all faqs
  return NextResponse.json(faqsList)
}