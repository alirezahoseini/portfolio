import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ILocales } from "../../../@types/Global";
import { ThemeProvider } from "@/providers/ThemeProvider";
import LocaleProvider from "@/providers/LocaleProvider";
import React from "react";
import Header from "@/components/Header";
import clsx from "clsx";
import StickyNavigation from "@/components/sticky-navigation/StickyNavigation";
const myFont = Inter({ subsets: ["latin"] });
const FaFont = localFont({ src: "../../assets/fonts/YekanBakh.ttf" });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: ILocales }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={clsx(
          "px-2",
          locale === "en" ? myFont.className : FaFont.className
        )}
      >
        <LocaleProvider locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <StickyNavigation />
            <div className="mb-[100px] container mx-auto">
            {children}
            </div>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
