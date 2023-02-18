import { useMemo } from 'react'
import SkillItem from '../SkillItem/SkillItem'

import { SkillDatas } from '../../../../constant/types/datas'

interface Props {
  skillsDatas: SkillDatas[] | undefined
}

function Skills({ skillsDatas }: Props) {
  const skillItemsDOM = useMemo(() => {
    return skillsDatas?.map((datas, i) => <SkillItem datas={datas} key={i} />)
  }, [skillsDatas])

  return <ul className="skills__list">{skillItemsDOM}</ul>
}

export default Skills
