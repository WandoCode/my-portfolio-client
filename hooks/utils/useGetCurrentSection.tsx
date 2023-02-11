import { RefObject, useEffect, useState } from 'react'

interface Props {
  parentRefObject: Record<string, RefObject<HTMLElement>>
  threshold?: number
  margin?: string
}

function useGetCurrentSection({
  parentRefObject,
  threshold = 0,
  margin = '0px',
}: Props) {
  const [currentSection, setCurrentSection] = useState<string>()
  const [observers, setObservers] = useState<
    Record<string, IntersectionObserver>
  >({})

  useEffect(() => {
    let options = {
      threshold: threshold,
      rootMargin: margin,
    }

    for (const sectionName in parentRefObject) {
      const ref = parentRefObject[sectionName]

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(sectionName)
          }
        })
      }, options)

      setObservers((old) => {
        return { ...old, sectionName: observer }
      })

      if (ref.current) {
        observer.observe(ref.current)
      }
    }

    return () => {
      for (const sectionName in parentRefObject) {
        const ref = parentRefObject[sectionName]
        if (ref.current && observers)
          observers[sectionName].unobserve(ref.current)
      }
    }
  }, [])

  return currentSection
}

export default useGetCurrentSection
