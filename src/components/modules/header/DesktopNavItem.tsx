import { useSelectedLayoutSegment } from "next/navigation"
import React, { ComponentProps } from "react"
import styles from "./DesktopNavItem.module.css"
import { Link } from "@/i18n/routing"

const DesktopNavItem = ({
  href,
  children,
  ...rest
}: ComponentProps<typeof Link>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href
  return (
    <li>
      <Link
        aria-current={isActive ? "page" : undefined}
        href={href}
        {...rest}
        className={
          `group relative ${styles.navItem} ${isActive ? styles.active : ""}
        before:bg-highlight-light dark:before:bg-highlight-dark flex
        items-center justify-center gap-2`
        }
      >
        <span
          className="relative inline-flex overflow-hidden text-sm 
        text-custom-secondary-light dark:text-custom-secondary-dark"
        >
          <span 
            className={
              `group-hover:translate-y-[-110%] group-hover:skew-y-12 skew-y-0
              transform-gpu transition-transform duration-500 translate-y-0 
              ${isActive ? "text-custom-primary-light dark:text-custom-primary-dark" : ""}
              `
            }
          >
            {children}
          </span>

          <span
            className="absolute translate-y-[110%] skew-y-12 transform-gpu 
            transition-transform duration-500 group-hover:translate-y-0 
            group-hover:skew-y-0 text-custom-primary-light dark:text-custom-primary-dark"
          >
            {children}
          </span>
        </span>
      </Link>
    </li>
  )
}

export default DesktopNavItem