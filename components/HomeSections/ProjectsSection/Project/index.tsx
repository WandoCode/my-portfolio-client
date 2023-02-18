import { useSelector } from 'react-redux'
import { RootState } from '../../../Features/app.store'
import { ProjectDatas } from '../../../../constant/types/projects'
import Project from './Project'

interface Props {
  datas: ProjectDatas
  side: 'left' | 'right'
}

export default ({ datas, side }: Props) => {
  const language = useSelector((state: RootState) => state.language.language)

  return <Project datas={datas} side={side} language={language} />
}
