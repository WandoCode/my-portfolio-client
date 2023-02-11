import { createContext, PropsWithChildren, useState } from 'react'

interface NavContext {
  currentSection: string | undefined
  changeCurrentSection: (value: string | undefined) => void
}

const defaultContext = {
  currentSection: undefined,
  changeCurrentSection: (value: string | undefined) => {},
}

export const NavContext = createContext<NavContext>(defaultContext)

function NavContextProvider({ children }: PropsWithChildren) {
  const [currentSection, setCurrentSection] = useState<string>()

  const changeCurrentSection = (value: string | undefined) => {
    setCurrentSection(value)
  }

  return (
    <NavContext.Provider value={{ currentSection, changeCurrentSection }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
