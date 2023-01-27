import Select from '../Utils/Select'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContextProvider'
import { allowedLanguage, LanguagesObject } from '../../constant/language'

function LangSelection() {
  const { language, changeLanguage } = useContext(GlobalContext)

  const onChoice = (value: string) => {
    changeLanguage(value as LanguagesObject['value'])
  }

  return (
    <Select
      choices={allowedLanguage}
      currValue={language ?? ''}
      onChoice={onChoice}
    />
  )
}

export default LangSelection
