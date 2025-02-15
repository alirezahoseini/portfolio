"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname, useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    router.push(`/${locale}${pathname.replace(`/${params.locale}`, "")}`);
  };
  const { setTheme } = useTheme()

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <div>
        <Button onClick={() => switchLanguage("en")}>English</Button>
        <Button onClick={() => switchLanguage("fa")}>Persian</Button>
        <Button onClick={() => setTheme("dark")}>Dark</Button>
        <Button onClick={() => setTheme("light")}>light</Button>
      </div>
    </div>
  );
}
