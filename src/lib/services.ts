import API from "./axiosConfig"
import { ILang } from "./types"

type GetProjectsProps = {
  locale: ILang
  limit?: number
}

type LocaleProps = {
  locale: ILang
}

const getProjects = async ({ locale, limit }: GetProjectsProps) => {
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
    // eslint-disable-next-line no-console
    console.error("Error fetching projects:", error)
    return { error: "Failed to fetch projects. Please try again later." }
  }
}

const getExperiences = async ({ locale }: LocaleProps) => {
  try {
    const url = `experiences?lang=${locale}`
    const { status, data: experiences } = await API.get(url)

    if (status === 200) {
      return experiences
    }
    else {
      return false
    }
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching experiences:", error)
    return { error: "Failed to fetch experiences. Please try again later." }
  }
}

const getSpeciality = async ({ locale }: LocaleProps) => {
  try {
    const url = `speciality?lang=${locale}`
    const { status, data: speciality } = await API.get(url)

    if (status === 200) {
      return speciality
    }
    else {
      return false
    }
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching speciality:", error)
    return { error: "Failed to fetch speciality. Please try again later." }
  }
}

const getTestimonials = async ({ locale }: LocaleProps) => {
  try {
    const url = `testimonials?lang=${locale}`
    const { status, data: testimonials } = await API.get(url)

    if (status === 200) {
      return testimonials
    }
    else {
      return false
    }
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching testimonials:", error)
    return { error: "Failed to fetch testimonials. Please try again later." }
  }
}

export {
  getProjects, getExperiences, getSpeciality, getTestimonials
}