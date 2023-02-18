import Hero from './Hero'
import { HeroDatas } from '../../../constant/types/datas'
import { RootState } from '../../../Features/app.store'
import { useSelector } from 'react-redux'

interface Props {
  heroDatas: HeroDatas | undefined
}

export default ({ heroDatas }: Props) => {
  const language = useSelector((state: RootState) => state.language.language)

  return <Hero heroDatas={heroDatas} language={language} />
}
