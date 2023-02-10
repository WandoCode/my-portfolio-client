import Select from '../Utils/Select/Select'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContextProvider'
import {
  allowedLanguage,
  LanguagesObject,
} from '../../constant/language/language'

function LangSelection() {
  const { language, changeLanguage } = useContext(LanguageContext)

  const onChoice = (value: string) => {
    changeLanguage(value as LanguagesObject['value'])
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
