import { NextRequest, NextResponse } from "next/server"
import { specialties } from "./specialties"
import { ISpeciality } from "@/app/[locale]/types"

type ResponseData = ISpeciality[] | ISpeciality

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "fa"

  // Get specialties with locale
  const specialtiesList: ResponseData = locale === "en" ? specialties.en : specialties.fa
  

  // Return all specialties
  return NextResponse.json(specialtiesList)
}