import axios from "axios"
import API from "./axiosConfig"
import { IGetProjectsProps, IGetSingleProjectProps, ILocaleProps } from "./types"

// All projects
const getProjects = async ({ locale, limit }: IGetProjectsProps) => {
  try {
    const url = `projects?lang=${locale}${limit ? `&limit=${limit}` : ""}`
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

// Single project
const getSingleProject = async ({ id, locale }: IGetSingleProjectProps) => {
  try {
    const url = `projects?id=${id}&lang=${locale}`
    const { status, data } = await API.get(url)

    if (status === 200) {
      return {
        error: false,
        status: 200,
        data
      }
    }
  }
  catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.status

      if (status === 404) {
        return {
          error: true,
          status: 404,
          data: false
        }
      }
      else {
        // HTTP ERRORS ( 500, 401, 403 ...)
        // eslint-disable-next-line no-console
        console.error(`HTTP error occurred: Status ${status}`, error.response.data)
        return {
          error: true,
          status: status,
          data: false
        }
      }
    }
    else {
      // Internal errors
      // eslint-disable-next-line no-console
      console.error("Error fetching project (Non-HTTP or setup error):", error)
      return {
        error: true,
        status: null,
        data: false
      }
    }
  }
}

const getExperiences = async ({ locale }: ILocaleProps) => {
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

const getSpeciality = async ({ locale }: ILocaleProps) => {
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

const getTestimonials = async ({ locale }: ILocaleProps) => {
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

const getPersonalInfo = async ({ locale }: ILocaleProps) => {
  try {
    const url = `contactinfo?lang=${locale}`
    const { status, data: personalInfo } = await API.get(url)

    if (status === 200) {
      return personalInfo
    }

    throw new Error("Failed to fetch personal info")
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching personal info:", error)
    return { error: "Failed to fetch personal info. Please try again later." }
  }
}

export {
  getProjects,
  getSingleProject,
  getExperiences,
  getSpeciality,
  getTestimonials,
  getPersonalInfo
}