import React from "react"
import { Sparkle } from "lucide-react"
import { InfiniteSlider } from "../../components/ui/infinite-slider"
import { useLocale } from "next-intl"

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
    </div>
  )
}

export default TitlesSlider