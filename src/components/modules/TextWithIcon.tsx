"use client"
import React from "react"
import { AlertCircle } from "lucide-react"
import { LucideProps } from "lucide-react"

interface TextWithIconProps {
  text: string
  iconName?: string
  className?: string
}

const TextWithIcon: React.FC<TextWithIconProps> = ({ 
  text, 
  iconName = "AlertCircle", 
  className = "" 
}) => {
  // استفاده از آیکن پیش‌فرض برای اولین رندر
  const [Icon, setIcon] = React.useState<React.ComponentType<LucideProps>>(AlertCircle)

  React.useEffect(() => {
    // بارگذاری آیکن به صورت داینامیک
    if (iconName && iconName !== "AlertCircle") {
      import("lucide-react")
        .then(mod => {
          if (mod[iconName as keyof typeof mod]) {
            setIcon(() => mod[iconName as keyof typeof mod] as React.ComponentType<LucideProps>)
          }
        })
        .catch(() => {
          // در صورت خطا، از آیکن پیش‌فرض استفاده می‌کنیم
          console.error(`Icon ${iconName} not found`)
        })
    }
    else {
      setIcon(AlertCircle)
    }
  }, [iconName])

  return (
    <div className={`flex items-center gap-2 font-light ${className}`}>
      <Icon size={18} />

      <span>{text}</span>
    </div>
  )
}

export default TextWithIcon