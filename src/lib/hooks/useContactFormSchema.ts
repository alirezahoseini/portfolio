import { useTranslations } from "next-intl"
import { z } from "zod"

export function useContactFormSchema() {
  const t = useTranslations("Validation")

  const schema = z.object({ 
    fullName: z.string({ required_error: t("fullName.required") })
      .min(5, t("fullName.min"))
      .max(50, t("fullName.max")),
    email: z.string({ required_error: t("email.required") })
      .min(1, t("email.required"))
      .email(t("email.invalid"))
      .max(100, t("email.max")),
    message: z.string({ required_error: t("message.required") })
      .min(10, t("message.min"))
      .max(500, t("message.max"))
      .trim()
  })

  return schema
}

export default useContactFormSchema