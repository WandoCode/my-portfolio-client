import Select from '../../Utils/Select/Select'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app.store'
import {
  allowedLanguage,
  LanguagesObject,
} from '../../../constant/language/language'
import { changeLanguage, initLanguage } from './language.actions'

function LangSelection() {
  const dispatch = useDispatch()

  const language = useSelector((state: RootState) => state.language.language)

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
