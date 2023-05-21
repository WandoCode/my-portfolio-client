import Skills from './Skills'
import { SkillDatas } from '../../../../constant/types/datas'

interface Props {
  skillsDatas: SkillDatas[]
}

export default ({ skillsDatas }: Props) => {
  return <>{skillsDatas && <Skills skillsDatas={skillsDatas} />}</>
}
