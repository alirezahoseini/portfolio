import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import React from "react"
import { ILocales } from "../../@types/Global"

type Props = {
  children: React.ReactNode
  locale: ILocales
}

export default async function LocaleProvider({ children, locale }: Props) {
  // Access to app Translations
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}