import About from './About'
import { AboutDatas } from '../../../constant/types/datas'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Features/app.store'

interface Props {
  aboutDatas: AboutDatas | undefined
}

export default ({ aboutDatas }: Props) => {
  const language = useSelector((state: RootState) => state.language.language)

  return <About aboutDatas={aboutDatas} language={language} />
}
