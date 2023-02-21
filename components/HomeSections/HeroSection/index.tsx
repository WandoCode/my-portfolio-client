import Hero from './Hero'
import { HeroDatas } from '../../../constant/types/datas'
import useSelectLanguage from '../../../hooks/selectors/useSelectLanguage'

interface Props {
  heroDatas: HeroDatas
}

export default ({ heroDatas }: Props) => {
  const language = useSelectLanguage()

  return <Hero heroDatas={heroDatas} language={language} />
}
