import { useState, useEffect } from 'react'
import { SkillDatas } from '../../constant/types/datas'
import contentStore from '../../stores/content'

function useFetchSkillsDatas() {
  const [skillsDatas, setSkillsDatas] = useState<SkillDatas[]>()

  useEffect(() => {
    const rep = contentStore.getSkillsDatas()

    setSkillsDatas(rep)
  }, [])

  return skillsDatas
}

export default useFetchSkillsDatas
