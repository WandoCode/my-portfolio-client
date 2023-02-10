import { useMemo } from 'react'
import SkillItem from './SkillItem'
import skillsDatas from '../../../constant/content/skills.json'

export type SkillDatas = typeof skillsDatas.skills[0]

function Skills() {
  const skillsArray = skillsDatas.skills
  const skillItemsDOM = useMemo(() => {
    return skillsArray.map((datas, i) => <SkillItem datas={datas} key={i} />)
  }, [])
  return <ul className="skills__list">{skillItemsDOM}</ul>
}

export default Skills
