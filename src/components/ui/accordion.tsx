"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

// Styles as constants to prevent recreation on each render
const itemStyles = "border-b"

const triggerStyles = `flex flex-1 items-center justify-between py-4 
  text-sm font-medium transition-all hover:underline 
  text-left [&[data-state=open]>svg]:rotate-180`

const contentStyles = `overflow-hidden text-sm data-[state=closed]:animate-accordion-up 
data-[state=open]:animate-accordion-down`

const contentInnerStyles = "pb-4 pt-0"

// Memoized chevron component
const ChevronIcon = React.memo(() => (
  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
))
ChevronIcon.displayName = "ChevronIcon"

const AccordionItem = React.memo(React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({
  className,
  ...props
}, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(itemStyles, className)}
    {...props}
  />
)))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.memo(React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { hideChevron?: boolean }>(({
  className,
  children,
  hideChevron = false, // Add this prop
  ...props
}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(triggerStyles, className)}
      {...props}
    >
      {children}

      {!hideChevron && <ChevronIcon />}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.memo(React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({
  className,
  children,
  ...props
}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={contentStyles}
    {...props}
  >
    <div className={cn(contentInnerStyles, className)}>{children}</div>
  </AccordionPrimitive.Content>
)))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent 
}