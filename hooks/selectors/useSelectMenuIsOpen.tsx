import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Features/app.store'

function useSelectMenuIsOpen() {
  const menuIsOpen = useSelector(
    (state: RootState) => state.language.menuIsOpen
  )

  const [menuIsOpenValue, setMenuIsOpsnValue] = useState<boolean>(menuIsOpen)

  useEffect(() => {
    setMenuIsOpsnValue(menuIsOpen)
  }, [menuIsOpen])

  return menuIsOpenValue
}

export default useSelectMenuIsOpen
