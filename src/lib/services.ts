import API from "./axiosConfig"
import { ILang } from "./types"

type Props = {
  locale: ILang
  limit?: number
}

const getProjects = async ({ locale, limit }: Props) => {
  try {
    const url = `projects?lang=${locale}${limit ? `&limit=${limit}`: ""}`
    const { status, data: projects } = await API.get(url)

    if (status === 200) {
      return projects
    }
    else {
      return false
    }
  }
  catch (error) {
    console.error("Error fetching projects:", error)
    return { error: "Failed to fetch projects. Please try again later." }
  }
}

export { getProjects }