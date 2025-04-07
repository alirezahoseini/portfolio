"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { IFormInput } from "./types"
import { Button } from "@/components/ui/button"
import FormItem from "@/components/ui/form-item"
import useContactFormSchema from "@/lib/hooks/useContactFormSchema"

type ContactFormData = z.infer<ReturnType<typeof useContactFormSchema>>

const ContactForm = () => {
  const t = useTranslations("ContactPage")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
    // reset
  } = useForm<ContactFormData>({
    defaultValues: { 
      fullName: "",
      email: "",
      message: ""
    },
    resolver: zodResolver(useContactFormSchema())
  })
   
  const onSubmit = async (formData: ContactFormData) => {
    // eslint-disable-next-line no-console
    console.log(formData)
    // try {
    //   // TODO: Implement your API call here using formData
    //   await new Promise(resolve => setTimeout(resolve, 1000))
    //   reset()
    // }
    // catch (_error) {
    //   // TODO: Handle error properly
    // }
  }

  const inputs: IFormInput[] = [
    {
      id: "fullName",
      label: t("full_name"),
      props: { ...register("fullName") },
      errors: errors.fullName
    },
    {
      id: "email",
      label: t("email"),
      props: { ...register("email") },
      errors: errors.email
    },
    {
      id: "message",
      label: t("message"),
      type: "textarea",
      rows: 4,
      props: { ...register("message") },
      errors: errors.message
    }
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {
        inputs.map(item => {
          return (
            <FormItem 
              key={item.id}
              {...item}
            />
          )
        })
      }

      <Button 
        disabled={isSubmitting}
        type="submit"
        className="disabled:bg-slate-500 rounded-full px-8 py-4"
      >
        {t("submit")}
      </Button>
    </form>
  )
}

export default ContactForm