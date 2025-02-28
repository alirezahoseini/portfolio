import { NextRequest, NextResponse } from "next/server"
import { projects } from "./projects"
import { IProject } from "@/app/[locale]/types"

type ResponseData = IProject[]

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const lang = url.searchParams.get("lang") || "fa" 
  console.log(lang)


  const data: ResponseData = lang === "en"
    ? projects.en
    : projects.fa

  return NextResponse.json(data)
}