import React from "react"
import { Link } from "@/i18n/routing"

type Props = {
  children: React.ReactNode
}

const ReadMoreWrapper = ({ children }: Props) => {
  return (
    <div className="h-56 overflow-hidden relative mb-3">
      {children}

      <div
        className="absolute w-full pt-10 pb-10 bg-gradient-to-b 
        from-[#ffffffc9] to-[#ffffff] px-3 bottom-0 right-0
        flex items-center justify-center 
        "
      >
        <Link 
          href="/about"
          className="text-blue-700 font-bold"
        >
          بیشتر
        </Link>
      </div>
    </div>
  )
}

export default ReadMoreWrapper