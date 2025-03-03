import React from "react"
import Link from "next/link"
import Avatar from "./Avatar"
import { Button } from "@/components/ui/button"

type Props = {
  name: string
  job_title: string
  github: string
  download_resume: string
  cv_link: string
}

const PageHeading: React.FC<Props> = props => {
  const {
    name,
    job_title,
    download_resume,
    github,
    cv_link
  } = props

  return (
    <>
      <Avatar />

      <div className="flex flex-col gap-3 items-center mb-8">
        <h1 className="text-3xl font-bold">
          {name}
        </h1>

        <p className="text-lg lg:text-xl text-center">
          {job_title}
        </p>

        <div className="flex gap-4">
          <Button
            className="rounded-full" 
            variant="secondary" 
            size="lg"
            asChild
          >
            <Link 
              href="https://github.com/alirezahoseini"
              target="_blank"
            >
              {github}
            </Link>
          </Button>

          <Button
            className="rounded-full bg-blue-600 text-white dark:bg-blue-950
          hover:bg-blue-700 dark:hover:bg-blue-900"  
            variant="secondary" 
            size="lg"
            asChild
          >
            <Link 
              href={cv_link}
              target="_blank"
            >{download_resume}
            </Link>
          </Button>

        </div>
      </div>
    </>
  )
}

export default PageHeading