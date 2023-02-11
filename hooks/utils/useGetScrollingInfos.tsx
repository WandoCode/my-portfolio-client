import { useState, useEffect, useRef } from 'react'

function useGetScrollingInfos() {
  const windowPosRef = useRef(0)

  const [windowDir, setWindowDir] = useState<'up' | 'down'>('up')
  const [windowOnTop, setWindowOnTop] = useState(true)

  useEffect(() => {
    windowPosRef.current = window.scrollY

    setWindowOnTop(windowPosRef.current === 0)

    window.addEventListener('scroll', getScrollDirection)
    return () => {
      window.removeEventListener('scroll', getScrollDirection)
    }
  }, [])

  const getScrollDirection = (e: Event) => {
    const currPos = window.scrollY

    if (currPos - windowPosRef.current < 0) setWindowDir('up')
    else setWindowDir('down')

    setWindowOnTop(currPos === 0)

    windowPosRef.current = currPos
  }

  return { windowDir, windowOnTop }
}

export default useGetScrollingInfos
