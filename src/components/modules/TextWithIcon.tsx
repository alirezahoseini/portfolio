"use client"
import React from "react"
import DynamicIcon from "./DynamicIcon"

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

  return (
    <div className={`flex items-center gap-2 font-light ${className}`}>
      <DynamicIcon iconName={iconName} className="w-[18px]" />

      <span>{text}</span>
    </div>
  )
}

export default TextWithIcon