import { LucideProps, AlertCircle } from "lucide-react"
import React from "react"

type Props = {
  iconName: string
  className?: string
}

function DynamicIcon({ iconName, className }: Props) {
  const [Icon, setIcon] = React.useState<React.ComponentType<LucideProps>>(AlertCircle)
    
  React.useEffect(() => {
    if (iconName && iconName !== "AlertCircle") {
      import("lucide-react")
        .then(mod => {
          if (mod[iconName as keyof typeof mod]) {
            setIcon(() => mod[iconName as keyof typeof mod] as React.ComponentType<LucideProps>)
          }
        })
        .catch(() => {
                
          // eslint-disable-next-line no-console
          console.error(`Icon ${iconName} not found`)
        })
    }
    else {
      setIcon(AlertCircle)
    }
  }, [iconName])

  return (
    <Icon className={className} />
  )
}

export default React.memo(DynamicIcon)