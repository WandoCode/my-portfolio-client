import { KeyboardEvent, MouseEvent } from 'react'

interface Props {
  value: string
  text: string
  setMenuIsOpen: (x: boolean) => void
  onChoice: (s: string) => void
  menuIsOpen: boolean
}

function Option({ value, text, setMenuIsOpen, menuIsOpen, onChoice }: Props) {
  const handleChoice = (e: MouseEvent | KeyboardEvent) => {
    const choiceValue = e.currentTarget.getAttribute('data-value')

    if (choiceValue) {
      onChoice(choiceValue)

      setMenuIsOpen(false)
    }
  }

  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setMenuIsOpen(false)
    if (e.key === 'Enter') handleChoice(e)
  }

  return (
    <li
      className="select__option nav-item"
      data-value={value}
      key={value}
      onClick={handleChoice}
      tabIndex={menuIsOpen ? 0 : -1}
      onKeyDown={handleKeyboard}
    >
      {text}
    </li>
  )
}

export default Option
