import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted bg-bg700-light dark:bg-bg700-dark", className)}
      {...props}
    />
  )
}

export { Skeleton }