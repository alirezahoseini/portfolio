import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ILocales, IReactNode } from "../../@types/Global";

type Props = {
  children: IReactNode;
  locale: ILocales;
};

export default async function LocaleProvider({ children, locale }: Props) {
  // Access to app Translations
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
