import { MouseEvent, useState, useMemo } from 'react'
interface Props {
  choices: { value: string; text: string }[]
  currValue: string
  onChoice: (value: string) => void
}

function Select({ choices, currValue, onChoice }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen((oldVal) => !oldVal)
  }

  const handleChoice = (e: MouseEvent<HTMLLIElement>) => {
    const choiceValue = e.currentTarget.getAttribute('data-value')

    if (!choiceValue) return

    onChoice(choiceValue)
    toggleMenu()
  }

  const choicesList = useMemo(() => {
    return choices.map((choice) => (
      <li data-value={choice.value} key={choice.value} onClick={handleChoice}>
        {choice.text}
      </li>
    ))
  }, [])

  return (
    <div className="select">
      <button
        name="language"
        id="language"
        className="select"
        onClick={toggleMenu}
      >
        {choices.find((choice) => choice.value === currValue)?.text}
      </button>
      {menuIsOpen && <ul>{choicesList}</ul>}
    </div>
  )
}

export default Select
