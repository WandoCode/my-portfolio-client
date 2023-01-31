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

  const handleScroll = () => {
    const windowYPos = window.scrollY

    const inSection = sectionsYPos.find(
      (section) =>
        section.yPos < windowYPos && section.yPos + section.height >= windowYPos
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
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionsYPos])

  return currentSection
}

export default useGetCurrentSection
