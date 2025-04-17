import { NextRequest, NextResponse } from "next/server"
import { projects } from "./projects"
import { IProject } from "@/app/[locale]/types"

type ResponseData = IProject[]

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url)
  const locale = url.searchParams.get("lang") || "en"
  const limit = url.searchParams.get("limit")
  const projectId = url.searchParams.get("id")
  const sort = url.searchParams.get("sort") || "asc"

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
    // Return DESC projects
    if(sort === "desc") {
      const startPoint = projectList.length - Number(limit)
      const limitedProjects = projectList.slice(startPoint, )
      return NextResponse.json(limitedProjects)
    }
    if(sort === "asc") {
    // Return ASC projects
      const limitedProjects = projectList.slice(0, Number(limit))
      return NextResponse.json(limitedProjects)
    }
  }

  // Return all projects
  return NextResponse.json(projectList)
}