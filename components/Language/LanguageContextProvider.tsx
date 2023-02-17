import { createContext, PropsWithChildren, useState, useEffect } from 'react'
import {
  LanguageAvailable,
  LanguagesObject,
} from '../../constant/language/language'
import languageStore from '../../stores/language'

interface GlobalContextParams {
  language: LanguagesObject['value'] | null
  changeLanguage: (value: LanguagesObject['value']) => void
}

export const defaultContext: GlobalContextParams = {
  language: null,
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

  useEffect(() => {
    changeLangHTMLTag()
  }, [language])

  const changeLanguage = (val: LanguageAvailable) => {
    setLanguage(val)
    languageStore.saveLanguage(val)
  }

  const changeLangHTMLTag = () => {
    if (language) document.documentElement.lang = language
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
