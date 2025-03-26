"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import React, { ComponentProps } from "react"
import { Link } from "@/i18n/routing"

const NavigationLink = ({
  href,
  ...rest
}: ComponentProps<typeof Link>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      {...rest}
    />
  )
}

export default React.memo(NavigationLink)