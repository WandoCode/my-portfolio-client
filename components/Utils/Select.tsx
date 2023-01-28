import Image from 'next/image'
import {
  MouseEvent,
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  KeyboardEvent,
} from 'react'
import chevron from '../../assets/chevron.svg'

interface Props {
  choices: { value: string; text: string }[]
  currValue: string
  onChoice: (value: string) => void
  id: string
}

function Select({ choices, currValue, onChoice, id }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: Event) => {
    if (!selectRef.current?.contains(e.target as Node)) setMenuIsOpen(false)
  }

  const handleKeyboard = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        setMenuIsOpen(false)
        break
    }
  }

  useEffect(() => {
    if (menuIsOpen) {
      startListenEvents()
    } else {
      stopListenEvents()
    }
  }, [menuIsOpen])

  const startListenEvents = useCallback(() => {
    // document.body.addEventListener('keydown', handleKeyboard)
    document.body.addEventListener('click', handleClickOutside)
  }, [])

  const stopListenEvents = useCallback(() => {
    document.body.removeEventListener('click', handleClickOutside)
    // document.body.removeEventListener('keydown', handleKeyboard)
  }, [])

  const handleChoice = (e: MouseEvent<HTMLLIElement>) => {
    const choiceValue = e.currentTarget.getAttribute('data-value')

    if (!choiceValue) return

    onChoice(choiceValue)
    setMenuIsOpen(false)
  }

  const optionsClass = () => {
    return menuIsOpen
      ? 'select__options select__options--open'
      : 'select__options'
  }

  const handleBlur = (i: number) => {
    if (i === choices.length - 1) setMenuIsOpen(false)
  }

  const choicesList = useMemo(() => {
    return choices.map((choice, i) => (
      <li
        className="select__option nav-item"
        data-value={choice.value}
        key={choice.value}
        onClick={handleChoice}
        tabIndex={menuIsOpen ? 0 : -1}
        onBlur={() => handleBlur(i)}
      >
        {choice.text}
      </li>
    ))
  }, [menuIsOpen])

  return (
    <div ref={selectRef} className="select" onKeyDown={handleKeyboard}>
      <button
        name="language"
        id="language"
        className="select__button nav-item"
        onClick={() => setMenuIsOpen((old) => !old)}
        aria-controls={id}
        aria-expanded={menuIsOpen}
      >
        {choices.find((choice) => choice.value === currValue)?.text}
        <Image src={chevron} alt=" " />
      </button>

      <ul id={id} className={optionsClass()}>
        {choicesList}
      </ul>
    </div>
  )
}

export default Select
