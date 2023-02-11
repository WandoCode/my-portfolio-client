import skillsDatas from '../constant/content/skills.json'
import { SkillDatas } from '../constant/types/datas'

const skillsStore = {
  getAll: (): SkillDatas[] => {
    return skillsDatas.skills
  },
}

export default skillsStore
