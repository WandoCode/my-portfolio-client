import { useState, useEffect } from 'react'

function useGetCurrentSection() {
  const [currentSection, setCurrentSection] = useState<string>()
  const [sectionsYPos, setSectionsYPos] = useState<
    {
      id: string
      yPos: number
      height: number
    }[]
  >([])

  const findAndSetCurrentSection = () => {
    const windowYPos = window.scrollY

    if (windowYPos === 0 && sectionsYPos.length > 0)
      return setCurrentSection(undefined)

    const inSection = sectionsYPos.find(
      (section) =>
        section.yPos < windowYPos + 100 &&
        section.yPos + section.height >= windowYPos + 100
    )

    if (inSection) setCurrentSection(inSection.id)
  }

  useEffect(() => {
    const sections = document.getElementsByTagName('section')

    Array.from(sections).forEach((section) => {
      const newSectionYPos = {
        id: section.id,
        yPos: section.offsetTop,
        height: section.offsetHeight,
      }

      setSectionsYPos((prevVal) => [...prevVal, newSectionYPos])
    })
  }, [])

  useEffect(() => {
    findAndSetCurrentSection()

    window.addEventListener('scroll', findAndSetCurrentSection)
    return () => {
      window.removeEventListener('scroll', findAndSetCurrentSection)
    }
  }, [sectionsYPos])

  return currentSection
}

export default useGetCurrentSection
