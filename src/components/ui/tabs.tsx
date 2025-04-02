"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type Tab = {
  title: string
  value: string
}

export const Tabs = ({
  tabs,
  value,
  onChange,
  containerClassName,
  activeTabClassName,
  tabClassName
}: {
  tabs: Tab[]
  value: string
  onChange: (value: string) => void
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
}) => {
  return (
    <div
      className={
        cn(
          `flex flex-row items-center justify-start relative 
        overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full`,
          containerClassName
        )
      }
    >
      {
        tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
          >
            {
              value === tab.value && (
                <motion.div
                  layoutId="activeTab"
                  transition={
                    {
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.6
                    }
                  }
                  className={
                    cn(
                      "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                      activeTabClassName
                    )
                  }
                />
              )
            }

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))
      }
    </div>
  )
}