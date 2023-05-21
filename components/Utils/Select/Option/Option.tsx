import { KeyboardEvent, MouseEvent } from 'react'

interface Props {
  value: string
  text: string
  description: string
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
  description,
}: Props) {
  return (
    <li
      className="select__option nav-item"
      data-value={value}
      key={value}
      onClick={handleChoice}
      tabIndex={menuIsOpen ? 0 : -1}
      onKeyDown={handleKeyboard}
      aria-label={description}
    >
      {text}
    </li>
  )
}

export default Option
