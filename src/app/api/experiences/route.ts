import { NextRequest, NextResponse } from "next/server"
import { experiences } from "./experiences"
import { IExperience } from "@/app/[locale]/types"

type ResponseData = IExperience[] | IExperience

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "fa"

  // Get experience with locale
  const experienceList: ResponseData = locale === "en" ? experiences.en : experiences.fa
  

  // Return all experience
  return NextResponse.json(experienceList)
}