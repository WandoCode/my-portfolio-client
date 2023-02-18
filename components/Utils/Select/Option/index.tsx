import { KeyboardEvent, MouseEvent } from 'react'
import Option from './Option'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../Features/app.store'
import { changeOpenMenu } from '../../../../Features/Language/language.actions'

interface Props {
  value: string
  text: string
  onChoice: (s: string) => void
}

export default ({ value, text, onChoice }: Props) => {
  const dispatch = useDispatch()

  const menuIsOpen = useSelector(
    (state: RootState) => state.language.menuIsOpen
  )

  const handleChoice = (e: MouseEvent | KeyboardEvent) => {
    const choiceValue = e.currentTarget.getAttribute('data-value')

    if (choiceValue) {
      onChoice(choiceValue)

      dispatch(changeOpenMenu(false))
    }
  }

  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.key === 'Escape') dispatch(changeOpenMenu(false))
    if (e.key === 'Enter') handleChoice(e)
  }

  return (
    <Option
      value={value}
      text={text}
      menuIsOpen={menuIsOpen}
      handleChoice={handleChoice}
      handleKeyboard={handleKeyboard}
    />
  )
}
