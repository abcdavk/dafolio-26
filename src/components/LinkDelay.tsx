import { useRef } from "react"
import type { HTMLAttributes, ReactNode } from "react"

interface LinkDelayProps extends HTMLAttributes<HTMLDivElement> {
  to: string
  delayDuration?: number
  newTab?: boolean
  children: ReactNode
}

export function LinkDelay({
  to,
  delayDuration = 500,
  newTab = false,
  children,
  className = "",
  onClick,
  ...props
}: LinkDelayProps) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event)

    if (event.defaultPrevented) return

    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      if (newTab) {
        window.open(to, "_blank", "noopener,noreferrer")
      } else {
        window.location.href = to
      }
    }, delayDuration)
  }

  return (
    <div
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  )
}