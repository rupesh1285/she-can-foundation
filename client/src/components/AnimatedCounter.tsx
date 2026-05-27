import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
}

export default function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }

    const duration = 1100
    const startTime = window.performance.now()
    let frameId = window.requestAnimationFrame(function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.round(value * progress))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step)
      }
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [inView, value])

  return (
    <span ref={ref} className="animated-counter">
      {count.toLocaleString()}{suffix}
    </span>
  )
}