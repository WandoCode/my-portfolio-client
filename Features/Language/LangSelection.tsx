import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeLanguage, initLanguage } from './language.actions'
import {
  allowedLanguage,
  LanguagesObject,
} from '../../constant/language/language'
import { Select } from '../../components'
import useSelectLanguage from '../../hooks/selectors/useSelectLanguage'

function LangSelection() {
  const dispatch = useDispatch()

  const language = useSelectLanguage()

  useEffect(() => {
    dispatch(initLanguage())
  }, [])

  const onChoice = (value: string) => {
    dispatch(changeLanguage(value as LanguagesObject['value']))
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
