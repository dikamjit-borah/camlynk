import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.round(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref: elementRef }
}
