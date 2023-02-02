import Select from '../Utils/Select/Select'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContextProvider'
import { allowedLanguage, LanguagesObject } from '../../constant/language'

function LangSelection() {
  const { language, setLanguage } = useContext(LanguageContext)

  const onChoice = (value: string) => {
    setLanguage(value as LanguagesObject['value'])
  }

  return (
    <Select
      choices={allowedLanguage}
      currValue={language ?? ''}
      onChoice={onChoice}
      id="language"
    />
  )
}

export default LangSelection
