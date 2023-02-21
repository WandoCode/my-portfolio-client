import { useState, useEffect } from 'react'
import { LanguageAvailable } from '../../constant/language/language'
import { useSelector } from 'react-redux'
import { RootState } from '../../Features/app.store'

function useSelectLanguage() {
  const [languageValue, setLanguageValue] = useState<LanguageAvailable | null>(
    null
  )

  const language = useSelector((state: RootState) => state.language.language)

  useEffect(() => {
    setLanguageValue(language)
  }, [language])

  return languageValue
}

export default useSelectLanguage
