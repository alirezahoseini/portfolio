"use client";
import { routing } from "@/i18n/routing";
import { ILocales, IReactNode } from "../../@types/Global";
import { ThemeProvider } from "./ThemeProvider";

type Props = {
  children: IReactNode;
  locale: ILocales;
};

export default function BaseLayout({ children, locale }: Props) {
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html dir={dir} lang={locale ? locale : routing.defaultLocale}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
