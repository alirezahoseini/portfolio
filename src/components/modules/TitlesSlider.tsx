import React from "react"
import { Sparkle } from "lucide-react"
import { useLocale } from "next-intl"
import { InfiniteSlider } from "../../components/ui/infinite-slider"

const titles = [
  "Community",
  "Animations",
  "Development",
  "Mentor",
  "Websites",
  "Designing",
  "Graphics"
]

const TitlesSlider = () => {
  const locale = useLocale()
  const isRtl = locale === "fa"

  return (
    <div 
      className="text-5xl border-solid border-x-0
     border-bg700-light py-8 relative overflow-hidden
      border-y dark:border-bg700-dark"
    >
      <InfiniteSlider
        className="w-full" 
        direction="horizontal"
        speed={20}
        rtl={isRtl}
      >
        {
          titles.map(item => (
            <div
              key={item}
              className="flex items-center justify-between gap-8
            text-bg600-light dark:text-bg600-dark px-3"
            >
              <h2 className=" font-clash font-medium">
                {item}
              </h2>
  
              <Sparkle />
            </div>
          ))
        }
      </InfiniteSlider>

      <span 
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r 
        from-bg900-light dark:from-bg900-dark"
      >
      </span>

      <span 
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l 
        from-bg900-light dark:from-bg900-dark"
      >
      </span>
    </div>
  )
}

export default TitlesSlider