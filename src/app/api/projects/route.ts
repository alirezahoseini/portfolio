import { NextRequest, NextResponse } from "next/server"
import { projects } from "./projects"
import { IProject } from "@/app/[locale]/types"

type ResponseData = IProject[] | IProject

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "fa"
  const limit = url.searchParams.get("limit")

  // Get projects with locale
  const projectList: ResponseData = locale === "en" ? projects.en : projects.fa

  // Return limited projects
  if (limit) {
    const limitedProjects = projectList.slice(-Number(limit))
    return NextResponse.json(limitedProjects)
  }

  // Return all projects
  return NextResponse.json(projectList)
}