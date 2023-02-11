import { useMemo } from 'react'
import SkillItem from './SkillItem'
import useFetchSkillsDatas from '../../../hooks/fetch/useFetchSkillsDatas'

function Skills() {
  const skillsDatas = useFetchSkillsDatas()

  const skillItemsDOM = useMemo(() => {
    return skillsDatas?.map((datas, i) => <SkillItem datas={datas} key={i} />)
  }, [skillsDatas])
  return <ul className="skills__list">{skillItemsDOM}</ul>
}

export default Skills
