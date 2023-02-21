import { ProjectDatas } from '../../../../constant/types/projects'
import Project from './Project'
import useSelectLanguage from '../../../../hooks/selectors/useSelectLanguage'

interface Props {
  datas: ProjectDatas
  side: 'left' | 'right'
}

export default ({ datas, side }: Props) => {
  const language = useSelectLanguage()

  return <Project datas={datas} side={side} language={language} />
}
