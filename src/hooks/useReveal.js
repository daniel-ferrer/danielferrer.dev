import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — attaches to a container and marks it .is-visible
 * when it enters the viewport.
 *
 * @param {number} threshold  0–1, fraction visible before trigger (default 0.12)
 * @param {boolean} once      unobserve after first trigger (default true)
 * @returns [ref, isVisible]
 */
export function useReveal(threshold = 0.12, once = true) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, visible]
}
