import { PropsWithChildren, useState, useEffect } from 'react'
import { LanguageContext } from '../../../components/Language/LanguageContextProvider'
import {
  LanguagesObject,
  LanguageAvailable,
} from '../../../constant/language/language'

interface GlobalContextParams {
  language: LanguagesObject['value'] | null
  changeLanguage: (value: LanguagesObject['value']) => void
}

const defaultContext: GlobalContextParams = {
  language: null,
  changeLanguage: (value) => {},
}

interface Props extends PropsWithChildren {
  lang: LanguagesObject['value'] | null
}

function MockLanguageProvider({ lang, children }: Props) {
  const [language, setLanguage] = useState(defaultContext.language)

  useEffect(() => {
    setLanguage(lang)
  }, [])

  const changeLanguage = (val: LanguageAvailable) => {
    setLanguage(val)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default MockLanguageProvider
