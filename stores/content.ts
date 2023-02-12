import {
  MainDatas,
  SkillDatas,
  ProjectsDatas,
  FormDatas,
} from '../constant/types/datas'
import mainDatas from '../constant/content/mainDatas.json'
import projectsDatas from '../constant/content/projects.json'
import skillsDatas from '../constant/content/skills.json'
import formDatas from '../constant/content/formDatas.json'

const contentStore = {
  getmainDatas: (): MainDatas => {
    return mainDatas
  },
  getProjectsDatas: (): ProjectsDatas => {
    return projectsDatas.projects
  },
  getSkillsDatas: (): SkillDatas[] => {
    return skillsDatas.skills
  },
  getFormDatas: (): FormDatas => {
    return formDatas
  },
}

export default contentStore
