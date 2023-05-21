import Select from './Select'
import { useEffect, useCallback, FocusEvent, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { changeOpenMenu } from '../../../../Features/Language/language.actions'
import useSelectMenuIsOpen from '../../../../hooks/selectors/useSelectMenuIsOpen'
import { LanguagesObject } from '../../../../constant/language/language'

interface Props {
  choices: LanguagesObject[]
  currValue: string
  onChoice: (value: string) => void
  id: string
  description?: string
}

export default ({
  choices,
  currValue,
  onChoice,
  id,
  description = '',
}: Props) => {
  const dispatch = useDispatch()
  const selectRef = useRef<HTMLDivElement>(null)

  const menuIsOpen = useSelectMenuIsOpen()

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
    if (!selectRef.current?.contains(e.target as Node))
      dispatch(changeOpenMenu(false))
  }

  const handleBlur = (e: FocusEvent<HTMLUListElement>) => {
    const nextElementTag = e.relatedTarget?.tagName
    if (nextElementTag !== 'LI') dispatch(changeOpenMenu(false))
  }

  const onChangeOpenMenu = (val: boolean) => {
    dispatch(changeOpenMenu(val))
  }

  return (
    <Select
      id={id}
      selectRef={selectRef}
      choices={choices}
      currValue={currValue}
      onChoice={onChoice}
      menuIsOpen={menuIsOpen}
      clickHandler={onChangeOpenMenu}
      handleBlur={handleBlur}
      description={description}
    />
  )
}
