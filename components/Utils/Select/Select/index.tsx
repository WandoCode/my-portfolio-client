import Select from './Select'
import { useEffect, useCallback, FocusEvent, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../Features/app.store'
import { changeOpenMenu } from '../../../../Features/Language/language.actions'

interface Props {
  choices: { value: string; text: string }[]
  currValue: string
  onChoice: (value: string) => void
  id: string
}

export default ({ choices, currValue, onChoice, id }: Props) => {
  const dispatch = useDispatch()
  const selectRef = useRef<HTMLDivElement>(null)

  const menuIsOpen = useSelector(
    (state: RootState) => state.language.menuIsOpen
  )

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
    />
  )
}
