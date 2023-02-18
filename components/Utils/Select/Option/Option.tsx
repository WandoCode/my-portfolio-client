import { KeyboardEvent, MouseEvent } from 'react'

interface Props {
  value: string
  text: string
  menuIsOpen: boolean
  handleChoice: (e: MouseEvent | KeyboardEvent) => void
  handleKeyboard: (e: KeyboardEvent) => void
}

function Option({
  value,
  text,
  menuIsOpen,
  handleChoice,
  handleKeyboard,
}: Props) {
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
