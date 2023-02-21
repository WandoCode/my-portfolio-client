import { useEffect, useState } from 'react'

interface Props {
  parentRefObject: Record<string, HTMLElement | null>
  threshold?: number
  margin?: string
}

function useGetCurrentSection({
  parentRefObject,
  threshold = 0,
  margin = '0px',
}: Props) {
  const [parentAreLoaded, setParentAreLoaded] = useState(false)
  const [currentSection, setCurrentSection] = useState<string>()
  const [observers, setObservers] = useState<
    Record<string, IntersectionObserver>
  >({})

  useEffect(() => {
    if (!parentAreLoaded && parentRefObject.contact !== null)
      setParentAreLoaded(true)
  }, [parentRefObject])

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

      if (ref) {
        observer.observe(ref)
      }
    }

    return () => {
      for (const sectionName in parentRefObject) {
        const ref = parentRefObject[sectionName]
        if (ref && observers[sectionName]) {
          console.log(observers)

          observers[sectionName].unobserve(ref)
        }
      }
    }
  }, [parentAreLoaded])

  return currentSection
}

export default useGetCurrentSection
