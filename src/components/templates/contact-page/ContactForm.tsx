"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { Loader } from "lucide-react"
import { IFormInput } from "./types"
import { Button } from "@/components/ui/button"
import FormItem from "@/components/ui/form-item"
import useContactFormSchema from "@/lib/hooks/useContactFormSchema"
import API from "@/lib/axiosConfig"

type ContactFormData = z.infer<ReturnType<typeof useContactFormSchema>>

const ContactForm = () => {
  const t = useTranslations("ContactPage")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    defaultValues: { 
      fullName: "",
      email: "",
      message: ""
    },
    resolver: zodResolver(useContactFormSchema())
  })
   
  const onSubmit = async (formData: ContactFormData) => {
    try {
      const response = await API.post("sendemail", {
        name: formData.fullName,
        email: formData.email,
        message: formData.message
      })

      if (response.data.success) {
        toast.success(t("success_message"))
        reset()
      }
      else {
        toast.error(t("error_message"))
      }
    }
    catch {
      toast.error(t("error_message"))
    }
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
        className="rounded-full px-8 py-4"
      >
        {
          isSubmitting
            ? (
              <Loader
                className={`${isSubmitting && "animate-spin"}`}
              />
            )
            : (
              t("submit")
            )
        }
      </Button>
    </form>
  )
}

export default ContactForm