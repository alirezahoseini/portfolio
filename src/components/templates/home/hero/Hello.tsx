import React from "react"
import { Hand } from "lucide-react"
import { getTranslations } from "next-intl/server"

const Hello = async () => {
  const t = await getTranslations("HomePage")
  return (
    <p className="flex gap-2 items-center mb-8">
      <span>
        <Hand className="text-highlight-light dark:text-highlight-dark animate-wave" />
      </span>

      {t("hello_text")}
    </p>
  )
}

export default Hello