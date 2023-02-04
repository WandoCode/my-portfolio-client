import { useMemo } from 'react'
import SkillItem from './SkillItem'
import mockedDatas from '../../../__mock__/data/skills.json'

export type SkillDatas = typeof mockedDatas.skills[0]

function Skills() {
  const skillsDatas = mockedDatas.skills
  const skillItemsDOM = useMemo(() => {
    return skillsDatas.map((datas, i) => <SkillItem datas={datas} key={i} />)
  }, [])
  return (
    <section className="skills" id="skills">
      <h2 className="h2 heading-section skills__title">Compétences</h2>
      <ul className="skills__list">{skillItemsDOM}</ul>
    </section>
  )
}

export default Skills
