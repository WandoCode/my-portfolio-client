import Image from 'next/image'
import {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  FocusEvent,
} from 'react'
import chevron from '../../../public/assets/chevron.svg'
import Option from './Option'

interface Props {
  choices: { value: string; text: string }[]
  currValue: string
  onChoice: (value: string) => void
  id: string
}

function Select({ choices, currValue, onChoice, id }: Props) {
  const selectRef = useRef<HTMLDivElement>(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    if (menuIsOpen) {
      startListenEvents()
    } else {
      stopListenEvents()
    }
  }, [menuIsOpen])

  const startListenEvents = useCallback(() => {
    document.body.addEventListener('click', handleClickOutside)
  }, [])

  const stopListenEvents = useCallback(() => {
    document.body.removeEventListener('click', handleClickOutside)
  }, [])

  const handleClickOutside = (e: Event) => {
    if (!selectRef.current?.contains(e.target as Node)) setMenuIsOpen(false)
  }

  const optionsClass = () => {
    return menuIsOpen
      ? 'select__options select__options--open'
      : 'select__options'
  }

  const choicesList = useMemo(() => {
    return choices.map((choice, i) => (
      <Option
        key={i}
        value={choice.value}
        text={choice.text}
        index={i}
        choicesLength={choices.length}
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        onChoice={onChoice}
      />
    ))
  }, [menuIsOpen])

  const handleBlur = (e: FocusEvent<HTMLUListElement>) => {
    const nextElementTag = e.relatedTarget?.tagName
    if (nextElementTag !== 'LI') setMenuIsOpen(false)
  }

  return (
    <div ref={selectRef} className="select">
      <button
        name="language"
        className="select__button nav-item"
        onClick={() => setMenuIsOpen((old) => !old)}
        aria-controls={id}
        aria-expanded={menuIsOpen}
      >
        {choices.find((choice) => choice.value === currValue)?.text}
        <Image src={chevron} alt="chevron" width={20} height={12} />
      </button>

      <ul id={id} className={optionsClass()} onBlur={handleBlur}>
        {choicesList}
      </ul>
    </div>
  )
}

export default Select

// TODO mettre plus d'espcace pour appuyer sur la langue choisie sur mobile
