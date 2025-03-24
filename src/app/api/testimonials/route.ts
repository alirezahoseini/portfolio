import { NextRequest, NextResponse } from "next/server"
import { testimonials } from "./testimonials"
import { ITestimonial } from "@/app/[locale]/types"

type ResponseData = ITestimonial[] | ITestimonial

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "fa"

  // Get testimonials with locale
  const testimonialsList: ResponseData = locale === "en" ? testimonials.en : testimonials.fa
  

  // Return all testimonials
  return NextResponse.json(testimonialsList)
}