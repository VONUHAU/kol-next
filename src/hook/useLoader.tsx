import { useState, useEffect } from 'react'
import FontFaceObserver from 'fontfaceobserver'
export function useLoader() {
  const [isFontLoading, setIsFontLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number>()
  // observer window size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    // Initial width
    handleResize()
    // Event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // observer font loaded
  useEffect(() => {
    const font = new FontFaceObserver('Your Font Name')

    font
      .load()
      .then(() => {
        setIsFontLoading(false)
      })
      .catch(() => {
        setIsFontLoading(false)
      })
  }, [])
  return { isFontLoading, windowWidth }
}
