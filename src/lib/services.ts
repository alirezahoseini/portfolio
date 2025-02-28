import API from "./axiosConfig"
import { ILang } from "./types"

const getProjects = async (lang: ILang) => {
  try {
    const { status, data: projects } = await API.get(`projects?lang=${lang}`)

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