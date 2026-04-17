import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait for the page to render then scroll to the anchor
      const id = hash.replace('#', '')
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id)
        if (el) {
          // Offset for the fixed navbar height
          const navHeight = 80
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight
          window.scrollTo({ top, behavior: 'smooth' })
        } else if (attempts < 10) {
          // Element not rendered yet — retry up to 10 times
          setTimeout(() => tryScroll(attempts + 1), 80)
        }
      }
      tryScroll()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
