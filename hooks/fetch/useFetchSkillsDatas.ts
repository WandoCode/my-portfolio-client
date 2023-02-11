import { useState, useEffect } from 'react'
import { SkillDatas } from '../../constant/types/datas'
import skillsStore from '../../stores/skills'

function useFetchSkillsDatas() {
  const [skillsDatas, setSkillsDatas] = useState<SkillDatas[]>()

  useEffect(() => {
    const rep = skillsStore.getAll()

    setSkillsDatas(rep)
  }, [])

  return skillsDatas
}

export default useFetchSkillsDatas
