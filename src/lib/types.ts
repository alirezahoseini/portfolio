export type ILang = string


export type IGetProjectsProps = {
  locale: ILang
  limit?: number
}

export type IGetSingleProjectProps = {
  locale: string
  id: string
}

export type ILocaleProps = {
  locale: ILang
}