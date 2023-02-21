import About from './About'
import { AboutDatas } from '../../../constant/types/datas'
import useSelectLanguage from '../../../hooks/selectors/useSelectLanguage'

interface Props {
  aboutDatas: AboutDatas
}

export default ({ aboutDatas }: Props) => {
  const language = useSelectLanguage()

  return <About aboutDatas={aboutDatas} language={language} />
}
