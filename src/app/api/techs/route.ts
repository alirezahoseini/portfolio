import { NextResponse } from "next/server"
import { techsArray } from "./techs"
import { ITech } from "@/app/[locale]/types"

type ResponseData = ITech[] | ITech

export async function GET(): Promise<NextResponse> {
  // Get techs
  const techsList: ResponseData = techsArray  

  // Return all techs
  return NextResponse.json(techsList)
}