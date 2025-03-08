import React from "react"

type Props = {
  techs: string[]
}

const TechsLoop = (props: Props) => {
  const { techs } = props
  return (
    <div className="flex items-center gap-2 mb-4 font-light">
      {
        techs.length < 3 ?
          techs.map(tech => (
            <div key={tech}>
              <div
                className="bg-white
                  text-slate-700 text-sm rounded-md px-3
                  flex items-center justify-center dark:text-zinc-400
                  dark:border-zinc-500 py-1 rtl:pt-1"
              >
                {tech}
              </div>
            </div>))
          : (
            <>     
              {
                techs.slice(0, 2).map(tech => (
                  <div key={tech}>
                    <div
                      className="bg-white
                        text-slate-700 text-sm rounded-md px-3
                        flex items-center justify-center dark:text-zinc-400
                       dark:bg-zinc-950 py-1 rtl:pt-1"
                    >
                      {tech}
                    </div>
                  </div>))
              }

              <div
                className="bg-white
                  text-slate-700 text-sm rounded-md px-3
                  flex items-center justify-center dark:text-zinc-400
                  dark:bg-zinc-950 py-1 rtl:pt-1 rtl:gap-[1px]"
              >
                <span>
                  +
                </span> 

                <span>{techs.length - 2}</span>
              </div>
            </>
          )
      }
    </div>
  )
}

export default TechsLoop