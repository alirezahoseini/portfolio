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
  img: string
  techs: string[]
  bg: string
  date: number
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
  id: number
  title: string
  isActive: boolean
  date: string
  description: string
  link: string
}