import React, { useState } from "react"
import { IProject } from "@/app/[locale]/types"
import { Tabs } from "@/components/ui/tabs"

type Props = {
  data: IProject[]
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>
}

const ProjectsSortingTabs = (props: Props) => {
  const { data, setProjects } = props
  const [activeTab, setActiveTab] = useState("all")

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue)
    
    if (tabValue === "all") {
      setProjects(data)
    }
    else {
      const sortedProjects = data.filter(project => {
        const techs = project.technologies
        return techs.find(tech => tech === tabValue)
      })
      setProjects(sortedProjects)
    }
  }

  const tabs = [
    {
      title: "All",
      value: "all"
    },
    {
      title: "Nextjs",
      value: "Next.js"
    },
    {
      title: "React", 
      value: "React"
    },
    {
      title: "TS",
      value: "TypeScript"
    },
    {
      title: "JS",
      value: "JavaScript"
    }
  ]

  return (
    <div className="flex lg:justify-end mt-10">
      <div className="w-fit">
        <Tabs 
          tabs={tabs}
          value={activeTab}
          onChange={handleTabChange}
          tabClassName="px-6 py-2"
        />
      </div>
    </div>
  )
}

export default ProjectsSortingTabs