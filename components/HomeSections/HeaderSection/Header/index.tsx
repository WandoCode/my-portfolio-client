import Header from './Header'
import { HeadingsDatas } from '../../../../constant/types/datas'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Features/app.store'
import useGetScrollingInfos from '../../../../hooks/utils/useGetScrollingInfos'
import { useState } from 'react'

interface Props {
  headerDatas: HeadingsDatas | undefined
}

export default ({ headerDatas }: Props) => {
  const scrollingInfos = useGetScrollingInfos(75)

  const [openMenu, setOpenMenu] = useState(false)

  const theme = useSelector((state: RootState) => state.theme.theme)
  const language = useSelector((state: RootState) => state.language.language)

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
