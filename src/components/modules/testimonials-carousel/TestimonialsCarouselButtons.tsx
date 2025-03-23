import React, { useCallback, useEffect, useState } from "react"
import { EmblaCarouselType } from "embla-carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "./TestimonialsSelectedSnapDisplay"

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type IEmblaApi = {
  emblaApi: EmblaCarouselType | undefined
}

const TestimonialsCarouselButtons = ({ emblaApi }: IEmblaApi) => {
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="flex items-center rtl:flex-row-reverse">
      <button
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="inline-flex items-center justify-center
         text-sm transition-all outline-none active:scale-[0.98] 
         disabled:pointer-events-none disabled:opacity-50 border
        border-bg700-light dark:border-bg700-dark bg-bg800-light
        dark:bg-bg900-dark rounded-full hover:bg-bg900-light
        hover:dark:bg-bg700-dark ml-auto h-12 w-12 translate-y-0 border-solid"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />

      <button
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="inline-flex items-center justify-center
         text-sm transition-all outline-none active:scale-[0.98] 
         disabled:pointer-events-none disabled:opacity-50 border
        border-bg700-light dark:border-bg700-dark bg-bg800-light
        dark:bg-bg900-dark rounded-full hover:bg-bg900-light
        hover:dark:bg-bg700-dark ml-auto h-12 w-12 translate-y-0 border-solid"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export default React.memo(TestimonialsCarouselButtons)