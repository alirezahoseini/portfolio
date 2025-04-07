import { useTranslations } from "next-intl"
import React from "react"

const AvailableBadge = () => {
  const t = useTranslations("Footer")
  return (
    <span
      className="flex items-center justify-center mb-4 gap-2 rounded-full bg-[#B5FF6D]/10 px-4 py-2"
    >
      <span className="rounded-full relative h-[6px] w-[6px] flex items-center justify-center">
        <span
          className="absolute inline-flex h-full w-full animate-ping
       rounded-full dark:bg-highlight-dark
        bg-highlight-light opacity-75"
        >
        </span>

        <span 
          className="relative inline-flex h-full w-full rounded-full dark:bg-highlight-dark
        bg-highlight-light"
        >
        </span>
      </span>

      <p className="text-xs text-custom-primary-light dark:text-custom-primary-dark">
        {t("available_for_work")}
      </p>
    </span>
  )
}

export default AvailableBadge