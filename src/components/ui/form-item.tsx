import React from "react"
import { IFormInput } from "../templates/contact-page/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const FormItem = ({
  id,
  label,
  props,
  errors,
  type = "input",
  rows = 4
}: IFormInput) => {
  const commonClassNames = `flex w-full rounded-xl border border-bg600-light 
    dark:border-bg600-dark bg-bg800-light dark:bg-bg800-dark px-3 
    py-2 border-solid focus:!border-highlight-light !outline-none !ring-0
    dark:focus:!border-highlight-dark mt-2 mb-2
    ${errors && "focus:!border-bg600-light focus:dark:!border-bg600-dark !border-red-700"}`

  return (
    <div className="mb-3">
      <Label htmlFor={id}>
        {label}
      </Label>

      {
        type === "input"
          ? (
            <Input
              id={id}
              className={`h-11 ${commonClassNames}`}
              {...props}
            />
          )
          : (
            <Textarea 
              id={id}
              rows={rows}
              className={commonClassNames}
              {...props}
            />
          )
      }

      {
        errors && (
          <p className="text-xs font-medium text-destructive dark:text-red-700">
            {errors.message}
          </p>
        )
      }
    </div>
  )
}

export default FormItem