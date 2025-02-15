"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname, useParams, useRouter } from "next/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    router.push(`/${locale}${pathname.replace(`/${params.locale}`, "")}`);
  };

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <div>
        <button onClick={() => switchLanguage("en")}>English</button>
        <button onClick={() => switchLanguage("fa")}>Persian</button>
      </div>
    </div>
  );
}
