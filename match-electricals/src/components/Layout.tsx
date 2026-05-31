import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  
  // Ensure Tawk widget is visible after load
  useEffect(() => {
    const checkTawk = () => {
      const tawkElements = document.querySelectorAll('#tawkto-container, div[class*="tawk"], iframe[src*="tawk.to"]')
      tawkElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.zIndex = '9999999'
          el.style.display = 'block'
        }
      })
    }
    
    // Check periodically for Tawk elements
    const interval = setInterval(checkTawk, 1000)
    
    // Stop checking after 10 seconds
    setTimeout(() => clearInterval(interval), 10000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />
      <main className="me-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
