import { PropsWithChildren, useState, useEffect } from 'react'
import {
  defaultContext,
  LanguageContext,
} from '../../../components/Features/Language/LanguageContextProvider'
import {
  LanguagesObject,
  LanguageAvailable,
} from '../../../constant/language/language'

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
