import { useMemo } from 'react'
import SkillItem from './SkillItem'
import mockedDatas from '../../../__mock__/data/skills.json'

export type SkillDatas = typeof mockedDatas.skills[0]

function Skills() {
  const skillsDatas = mockedDatas.skills
  const skillItemsDOM = useMemo(() => {
    return skillsDatas.map((datas, i) => <SkillItem datas={datas} key={i} />)
  }, [])
  return <ul className="skills__list">{skillItemsDOM}</ul>
}

export default Skills
