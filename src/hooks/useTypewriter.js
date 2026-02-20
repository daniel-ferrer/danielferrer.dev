import { useEffect, useState } from 'react'

/**
 * Typewriter that cycles through an array of strings.
 * Returns { text, isTyping }
 */
export function useTypewriter(phrases = [], typingSpeed = 65, deletingSpeed = 35, pauseMs = 2200) {
  const [state, setState] = useState({
    text: '',
    phraseIdx: 0,
    charIdx: 0,
    deleting: false,
  })

  useEffect(() => {
    if (!phrases.length) return
    const { text, phraseIdx, charIdx, deleting } = state
    const current = phrases[phraseIdx]

    let delay

    if (!deleting) {
      if (charIdx < current.length) {
        // Still typing
        delay = typingSpeed + Math.random() * 25  // slight jitter = natural feel
        const t = setTimeout(() => {
          setState((s) => ({ ...s, text: current.slice(0, s.charIdx + 1), charIdx: s.charIdx + 1 }))
        }, delay)
        return () => clearTimeout(t)
      } else {
        // Finished typing — pause then delete
        const t = setTimeout(() => setState((s) => ({ ...s, deleting: true })), pauseMs)
        return () => clearTimeout(t)
      }
    } else {
      if (charIdx > 0) {
        // Deleting
        const t = setTimeout(() => {
          setState((s) => ({ ...s, text: current.slice(0, s.charIdx - 1), charIdx: s.charIdx - 1 }))
        }, deletingSpeed)
        return () => clearTimeout(t)
      } else {
        // Done deleting — advance phrase
        setState((s) => ({
          ...s,
          deleting: false,
          phraseIdx: (s.phraseIdx + 1) % phrases.length,
        }))
      }
    }
  }, [state, phrases, typingSpeed, deletingSpeed, pauseMs])

  return state.text
}
