import { NextRequest, NextResponse } from "next/server"
import { projects } from "./projects"
import { IProject } from "@/app/[locale]/types"

type ResponseData = IProject[]

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "fa"
  const limit = url.searchParams.get("limit")
  const projectId = url.searchParams.get("id")

  // Get projects with locale
  const projectList: ResponseData = locale === "en" ? projects.en : projects.fa

  // If we have a project ID, return single project
  if(projectId) {
    const project = projectList.find(project => project.id === projectId)
    
    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      )
    }
    return NextResponse.json(project)
  }

  // Return limited projects
  if (limit) {
    const limitedProjects = projectList.slice(-Number(limit))
    return NextResponse.json(limitedProjects)
  }

  // Return all projects
  return NextResponse.json(projectList)
}