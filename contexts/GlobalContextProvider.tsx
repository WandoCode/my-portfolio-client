import { createContext, PropsWithChildren, useState, useEffect } from 'react'
import { LanguagesObject } from '../constant/language'
import { ThemesValues } from '../constant/theme'
import languageStore from '../stores/language'
import themeStore from '../stores/theme'

interface GlobalContextParams {
  language: LanguagesObject['value'] | null
  changeLanguage: (value: LanguagesObject['value']) => void
  theme: ThemesValues | null
  changeTheme: (value: ThemesValues) => void
}

const defaultContext: GlobalContextParams = {
  language: null,
  changeLanguage: (value) => {},
  theme: null,
  changeTheme: (value) => {},
}

export const GlobalContext = createContext(defaultContext)

function GlobalContextProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState(defaultContext.language)
  const [theme, setTheme] = useState(defaultContext.theme)
  // TODO: Si flash lors des chargements en theme 'dark' => regarder si cela ne vient pas de la valeur par default du theme 'light'

  const changeLanguage = (value: LanguagesObject['value']) => {
    setLanguage(value)
  }

  const changeTheme = (value: ThemesValues) => {
    setTheme(value)
  }

  useEffect(() => {
    setLanguage(languageStore.loadLanguage())
    setTheme(themeStore.loadTheme())
  }, [])

  return (
    <GlobalContext.Provider
      value={{ language, changeLanguage, theme, changeTheme }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
