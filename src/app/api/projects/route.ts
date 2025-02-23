import { IProject } from "../types"
import { projects } from "./projects"

interface Request {
  url: string
}

type ResponseData = IProject[]


export async function GET(req: Request): Promise<Response> {
  // گرفتن پارامتر lang از URL
  const url = new URL(req.url)
  const lang = url.searchParams.get("lang") || "fa" // مقدار پیش‌فرض fa

  // انتخاب فایل JSON متناسب با زبان
  const data: ResponseData = lang === "en"
    ?  projects.en
    :  projects.fa

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })
}