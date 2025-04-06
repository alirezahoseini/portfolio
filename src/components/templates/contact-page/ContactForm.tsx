"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import useContactFormSchema from "@/lib/hooks/useContactFormSchema"

type ContactFormData = z.infer<ReturnType<typeof useContactFormSchema>>

const ContactForm = () => {

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
   
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(data)
      // Reset form after successful submission
      reset()
    }
    catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-3">
        <Label
          htmlFor="fullName"
        >
          Full Name
        </Label>

        <Input 
          className={
            `flex h-11 w-full rounded-xl border border-bg600-light 
          dark:border-bg600-dark bg-bg800-light dark:bg-bg800-dark px-3 
          py-2 border-solid focus:!border-highlight-light !outline-none !ring-0
          dark:focus:!border-highlight-dark mt-2 mb-2
          ${errors.fullName && "focus:!border-bg600-light focus:dark:!border-bg600-dark !border-red-700"}`
          }
          id="fullName"
          {...register("fullName")}
        />

        {
          errors.fullName && 
          <p className="text-xs font-medium text-destructive dark:text-red-700">
            {errors.fullName.message}
          </p>
        }
      </div>

      <div className="mb-3">
        <Label
          htmlFor="email"
        >
          Email
        </Label>

        <Input 
          className={
            `flex h-11 w-full rounded-xl border border-bg600-light 
          dark:border-bg600-dark bg-bg800-light dark:bg-bg800-dark px-3 
          py-2 border-solid focus:!border-highlight-light !outline-none !ring-0
          dark:focus:!border-highlight-dark mt-2 mb-2
          ${errors.email && "focus:!border-bg600-light focus:dark:!border-bg600-dark !border-red-700"}`
          }
          id="email"
          {...register("email")}
        />

        {
          errors.email && 
          <p className="text-xs font-medium text-destructive dark:text-red-700">
            {errors.email.message}
          </p>
        }
      </div>

      <div className="mb-3">
        <Label
          htmlFor="message"
        >
          Message
        </Label>

        <Textarea 
          rows={4}
          className={
            `flex w-full rounded-xl border border-bg600-light 
          dark:border-bg600-dark bg-bg800-light dark:bg-bg800-dark px-3 
          py-2 border-solid focus:!border-highlight-light !outline-none !ring-0
          dark:focus:!border-highlight-dark mt-2 mb-2
          ${errors.message && "focus:!border-bg600-light focus:dark:!border-bg600-dark !border-red-700"}`
          }
          id="message"
          {...register("message")}
        />

        {
          errors.message && 
          <p className="text-xs font-medium text-destructive dark:text-red-700">
            {errors.message.message}
          </p>
        }
      </div>

      <Button 
        disabled={isSubmitting}
        type="submit"
        className="disabled:bg-slate-500 rounded-full px-8 py-4"
      >
        Submit
      </Button>
    </form>
  )
}

export default ContactForm