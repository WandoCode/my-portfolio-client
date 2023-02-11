import { useState, useEffect, RefObject } from 'react'

function useGetCurrentSection(
  sectionsRef: Record<string, RefObject<HTMLAnchorElement>>
) {
  const [currentSection, setCurrentSection] = useState<string>()
  const [sectionsYPos, setSectionsYPos] = useState<
    {
      id: string
      yPos: number
      height: number
    }[]
  >()

  useEffect(() => {
    for (const sectionName in sectionsRef) {
      const ref = sectionsRef[sectionName]
      const section = ref.current

      const newSectionYPos = {
        id: section?.id || '',
        yPos: section?.offsetTop || 0,
        height: section?.offsetHeight || 0,
      }

      setSectionsYPos((prevVal) => {
        if (!prevVal) return [newSectionYPos]
        else return [...prevVal, newSectionYPos]
      })
    }
  }, [])

  useEffect(() => {
    console.log(sectionsYPos)
  }, [sectionsYPos])
  // const findAndSetCurrentSection = () => {
  //   const windowYPos = window.scrollY
  //   console.log(windowYPos)

  //   if (windowYPos === 0 || sectionsYPos.length === 0)
  //     return setCurrentSection(undefined)

  //   const inSection = sectionsYPos.find(
  //     (section) =>
  //       section.yPos <= windowYPos && section.yPos + section.height > windowYPos
  //   )
  //   console.log(sectionsYPos)

  //   if (inSection) setCurrentSection(inSection.id)
  // }

  // useEffect(() => {
  //   const sections = document.getElementsByTagName('section')

  //   Array.from(sections).forEach((section) => {
  //     const newSectionYPos = {
  //       id: section.id,
  //       yPos: section.offsetTop,
  //       height: section.offsetHeight,
  //     }

  //     setSectionsYPos((prevVal) => [...prevVal, newSectionYPos])
  //   })
  // }, [])

  // useEffect(() => {
  //   findAndSetCurrentSection()

  //   window.addEventListener('scroll', findAndSetCurrentSection)
  //   return () => {
  //     window.removeEventListener('scroll', findAndSetCurrentSection)
  //   }
  // }, [sectionsYPos])

  return currentSection
}

export default useGetCurrentSection
