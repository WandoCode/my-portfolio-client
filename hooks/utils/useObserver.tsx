import { RefObject, useEffect, useState } from 'react'

interface Props {
  parentRef: RefObject<HTMLElement>
  threshold?: number
  margin?: string
}

function useObserver({ parentRef, threshold = 0, margin = '0px' }: Props) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    let options = {
      threshold: threshold,
      rootMargin: margin,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target, entry.intersectionRatio)

        if (entry.isIntersecting) {
          setIsIntersecting(true)
        } else {
          setIsIntersecting(false)
        }
      })
    }, options)

    if (parentRef.current) {
      observer.observe(parentRef.current)
    }

    return () => {
      if (parentRef.current) observer.unobserve(parentRef.current)
    }
  }, [])

  return isIntersecting
}

export default useObserver
// TODO: utile? utilisé?
