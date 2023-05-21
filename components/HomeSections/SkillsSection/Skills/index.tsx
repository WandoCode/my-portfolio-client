import Skills from './Skills'
import useFetchSkillsDatas from '../../../../hooks/fetch/useFetchSkillsDatas'
import { SkillDatas } from '../../../../constant/types/datas'

interface Props {
  skillsDatas: SkillDatas[]
}

export default ({ skillsDatas }: Props) => {
  return <>{skillsDatas && <Skills skillsDatas={skillsDatas} />}</>
}
