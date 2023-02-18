import Header from './Header'
import { HeadingsDatas } from '../../../../constant/types/datas'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Features/app.store'
import useGetScrollingInfos from '../../../../hooks/utils/useGetScrollingInfos'

interface Props {
  headerDatas: HeadingsDatas | undefined
}

export default ({ headerDatas }: Props) => {
  const scrollingInfos = useGetScrollingInfos(75)

  const theme = useSelector((state: RootState) => state.theme.theme)
  const language = useSelector((state: RootState) => state.language.language)

  return (
    <Header
      headerDatas={headerDatas}
      language={language}
      theme={theme}
      scrollingInfos={scrollingInfos}
    />
  )
}
