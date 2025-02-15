import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import BaseLayout from "@/providers/BaseLayout";
import LocaleProvider from "@/providers/LocaleProvider";
import { ILocales, IReactNode } from "../../../@types/Global";

type Props = {
  children: IReactNode;
  params: { locale: ILocales };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as ILocales)) {
    notFound();
  }

  return (
    <BaseLayout locale={locale}>
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    </BaseLayout>
  );
}
