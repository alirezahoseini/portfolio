"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import NProgress from "nprogress"

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!loading) {
      NProgress.start()
      setLoading(true)
    }

    const timer = setTimeout(() => {
      NProgress.done()
      setLoading(false)
    }, 200) // minmum wait if fast load

    return () => clearTimeout(timer)
  }, [pathname])

  return children
}

export default ProgressProvider