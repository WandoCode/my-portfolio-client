import { createContext, PropsWithChildren, useState, useEffect } from 'react'
import { LanguagesObject } from '../../constant/language'
import languageStore from '../../stores/language'

interface GlobalContextParams {
  language: LanguagesObject['value'] | null
  setLanguage: (value: LanguagesObject['value']) => void
}

const defaultContext: GlobalContextParams = {
  language: null,
  setLanguage: (value) => {},
}

export const LanguageContext = createContext(defaultContext)

function LanguageContextProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState(defaultContext.language)

  useEffect(() => {
    setLanguage(languageStore.loadLanguage())
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
