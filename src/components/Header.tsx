"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "next-intl";

function Header() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const themeChangeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const switchLanguage = () => {
    router.replace(pathname, { locale: `${locale === "en" ? "fa" : "en"}` });
  };

  return (
    <header>
      <div className="flex w-full justify-between items-center p-3">
        <h1>AH</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={themeChangeHandler}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Separator orientation="vertical" className="h-5" />
          <Button variant="ghost" size="icon" onClick={switchLanguage}>
            <Image
              src={`/${locale == "fa" ? "en" : "ir"}-flag.png`}
              width="35"
              height="35"
              alt="flag"
              className="w-[30px] h-auto mx-1"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
