import { useEffect, useRef, useState } from 'react'

export default function useInView(options = { threshold: 0.15, rootMargin: '0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      // Fallback: if no IO, mark as in view so content shows
      setInView(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setInView(true)
      })
    }, options)

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, inView }
}
