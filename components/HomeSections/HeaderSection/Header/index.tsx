import Header from './Header'
import { HeadingsDatas } from '../../../../constant/types/datas'
import useGetScrollingInfos from '../../../../hooks/utils/useGetScrollingInfos'
import { useState } from 'react'
import useSelectLanguage from '../../../../hooks/selectors/useSelectLanguage'
import useSelectTheme from '../../../../hooks/selectors/useSelectTheme'

interface Props {
  headerDatas: HeadingsDatas
}

export default ({ headerDatas }: Props) => {
  const scrollingInfos = useGetScrollingInfos(75)

  const [openMenu, setOpenMenu] = useState(false)

  const theme = useSelectTheme()
  const language = useSelectLanguage()

  return (
    <Header
      headerDatas={headerDatas}
      language={language}
      theme={theme}
      scrollingInfos={scrollingInfos}
      menuIsOpen={openMenu}
      onOpenMenu={(val) => setOpenMenu(val)}
    />
  )
}
