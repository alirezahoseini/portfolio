export type IHomePageMessages =  {
  seo_title: string
  seo_desc: string
  name: string
  job_title: string
  latest_projects: string
} 

export type IProject = {
  id: string
  title: string
  description: string
  backgroundColor: string
  date: number
  coverImage: {
    url: string
    alt: string
  }
  heroImage: {
    url: string
    alt: string
  }
  technologies: string[]
  screenshots: string[]
  links: {
    github: string
    live: string
  }
}

export type IButtonsMessages = {
  download_resume: string
  github: string
  more: string
}

export type IAboutPageMessages = {
  page_title: string
  about_me_description: string
  cv_link: string
}

export type IExperience = {
  id: string
  position: string
  companyName: string
  date: string
  description: string[]
  link: string
  logo: string
}

export type ISpeciality = {
  id: number
  title: string
  desc: string
  icon: string
  image: string
}

export type ISelectedImage = number

export type ITech = {
  id: number
  title: string
  logo: string
}

export type ITestimonial = {
  id: number
  author: string
  job_title: string
  image: string
  message: string
}

export type IContact = {
  title: string
  text: string
  iconName: string
}