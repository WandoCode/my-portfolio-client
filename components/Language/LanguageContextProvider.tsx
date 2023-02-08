import { createContext, PropsWithChildren, useState, useEffect } from 'react'
import { LanguageAvailable, LanguagesObject } from '../../constant/language'
import languageStore from '../../stores/language'

interface GlobalContextParams {
  language: LanguagesObject['value']
  changeLanguage: (value: LanguagesObject['value']) => void
}

const defaultContext: GlobalContextParams = {
  language: 'en',
  changeLanguage: (value) => {},
}

export const LanguageContext = createContext(defaultContext)

function LanguageContextProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState(defaultContext.language)

  useEffect(() => {
    const savedLang = languageStore.loadLanguage()

    if (savedLang) setLanguage(savedLang)
    else setLanguage(languageStore.getBrowserLanguage())
  }, [])

  const changeLanguage = (val: LanguageAvailable) => {
    setLanguage(val)
    languageStore.saveLanguage(val)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
