import { FieldError, UseFormRegisterReturn } from "react-hook-form"

export interface IFormInput {
  id: string
  label: string
  props: UseFormRegisterReturn
  errors?: FieldError
  type?: "input" | "textarea"
  rows?: number
}