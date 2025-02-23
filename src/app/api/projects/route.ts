import { NextRequest, NextResponse } from "next/server"
import { IProject } from "../types"
import { projects } from "./projects"

type ResponseData = IProject[]

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const lang = url.searchParams.get("lang") || "fa" 


  const data: ResponseData = lang === "en"
    ? projects.en
    : projects.fa

  return NextResponse.json(data)
}