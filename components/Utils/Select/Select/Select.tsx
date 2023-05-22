import Image from 'next/image'
import { useMemo, FocusEvent, RefObject } from 'react'
import chevron from '../../../../public/assets/chevron.svg'
import Option from '../Option'
import { LanguagesObject } from '../../../../constant/language/language'

interface Props {
  choices: LanguagesObject[]
  currValue: string
  onChoice: (value: string) => void
  id: string
  selectRef: RefObject<HTMLDivElement>
  menuIsOpen: boolean
  description?: string
  clickHandler: (val: boolean) => void
  handleBlur: (e: FocusEvent<HTMLUListElement>) => void
}

function Select({
  choices,
  currValue,
  onChoice,
  id,
  description,
  selectRef,
  menuIsOpen,
  clickHandler,
  handleBlur,
}: Props) {
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
        description={choice.description}
        onChoice={onChoice}
      />
    ))
  }, [menuIsOpen])

  return (
    <div ref={selectRef} className="select">
      <button
        name="language"
        className="select__button nav-item"
        onClick={() => clickHandler(!menuIsOpen)}
        aria-controls={id}
        aria-expanded={menuIsOpen}
        aria-label={description}
      >
        {choices.find((choice) => choice.value === currValue)?.text}
        <Image
          src={chevron}
          alt="chevron"
          width={20}
          height={12}
          priority={true}
        />
      </button>

      <ul
        id={id}
        className={optionsClass()}
        onBlur={handleBlur}
        aria-hidden={!menuIsOpen}
      >
        {choicesList}
      </ul>
    </div>
  )
}

export default Select
