import SkillItem from '../SkillItem/SkillItem'
import { SkillDatas } from '../../../../constant/types/datas'
import Map from '../../../Utils/List/Map'

interface Props {
  skillsDatas: SkillDatas[]
}

function Skills({ skillsDatas }: Props) {
  return (
    <ul className="skills__list">
      <Map<SkillDatas> items={skillsDatas} itemComponent={SkillItem} />
    </ul>
  )
}

export default Skills
