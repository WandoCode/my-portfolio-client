import { KeyboardEvent, MouseEvent } from 'react'
import Option from './Option'
import { useDispatch } from 'react-redux'
import { changeOpenMenu } from '../../../../Features/Language/language.actions'
import useSelectMenuIsOpen from '../../../../hooks/selectors/useSelectMenuIsOpen'

interface Props {
  value: string
  text: string
  description: string
  onChoice: (s: string) => void
}

export default ({ value, text, onChoice, description }: Props) => {
  const dispatch = useDispatch()

  const menuIsOpen = useSelectMenuIsOpen()

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
      description={description}
      menuIsOpen={menuIsOpen}
      handleChoice={handleChoice}
      handleKeyboard={handleKeyboard}
    />
  )
}
