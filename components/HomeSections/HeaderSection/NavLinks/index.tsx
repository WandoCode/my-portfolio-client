import NavLinks from './NavLinks'
import { HeadingsDatas } from '../../../../constant/types/datas'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../Features/app.store'
import useSelectLanguage from '../../../../hooks/selectors/useSelectLanguage'

interface Props {
  onCloseNav: () => void
  navText: HeadingsDatas['fr'] | undefined
}

export default ({ onCloseNav, navText }: Props) => {
  const language = useSelectLanguage()
  const currentSection = useSelector(
    (state: RootState) => state.nav.currentSection
  )

  return (
    <NavLinks
      onCloseNav={onCloseNav}
      navText={navText}
      language={language}
      currentSection={currentSection}
    />
  )
}
