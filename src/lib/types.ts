export type ILang = string


export type IGetProjectsProps = {
  locale: ILang
  limit?: number
}

export type IGetSingleProjectProps = {
  locale: ILang
  id: string
}

export type ILocaleProps = {
  locale: ILang
}