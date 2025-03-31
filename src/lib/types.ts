import { ILocales } from "@/i18n/routing"

export type ILang = string


export type IGetProjectsProps = {
  locale: ILang
  limit?: number
}

export type IGetSingleProjectProps = {
  locale: Promise<{ ILocales: ILocales }>
  id: string
}

export type ILocaleProps = {
  locale: ILang
}