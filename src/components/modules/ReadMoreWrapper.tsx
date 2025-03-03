import React from "react"
import { Link } from "@/i18n/routing"

type Props = {
  children: React.ReactNode
  more_text: string
}

const ReadMoreWrapper = ({ children, more_text }: Props) => {
  return (
    <div className="h-56 overflow-hidden relative mb-3">
      {children}

      <div
        className="absolute w-full pt-10 pb-10 bg-gradient-to-b 
        from-[#ffffffc9] to-[#ffffff] dark:from-[#121212d4] dark:to-[#121212] px-3 bottom-0 right-0
        flex items-center justify-center 
        "
      >
        <Link 
          href="/about"
          className="text-blue-700 font-bold w-full text-center"
        >
          {more_text}
        </Link>
      </div>
    </div>
  )
}

export default ReadMoreWrapper