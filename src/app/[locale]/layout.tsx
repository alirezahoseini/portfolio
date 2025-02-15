import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ILocales, IReactNode } from "../../../@types/Global";
import { ThemeProvider } from "@/providers/ThemeProvider";
import LocaleProvider from "@/providers/LocaleProvider";

type Props = {
  children: IReactNode;
  params: { locale: ILocales };
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <LocaleProvider locale={locale}>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
