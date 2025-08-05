import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Smooth scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])
} 