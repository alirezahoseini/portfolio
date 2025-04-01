import { NextRequest, NextResponse } from "next/server"
import { contactInfos } from "./infos"
import { IContact } from "@/app/[locale]/types"

type ResponseData = IContact[] | IContact

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "fa"

  // Get contacts with locale
  const contactList: ResponseData = locale === "en" ? contactInfos.en : contactInfos.fa
  

  // Return all contacts
  return NextResponse.json(contactList)
}