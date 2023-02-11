import { useState, useEffect } from 'react'
import { ProjectsDatas } from '../../constant/types/datas'
import projectsStore from '../../stores/projects'

function useFetchProjects() {
  const [mainDatas, setMainDatas] = useState<ProjectsDatas>()

  useEffect(() => {
    const rep = projectsStore.getAll()

    setMainDatas(rep)
  }, [])

  return mainDatas
}

export default useFetchProjects
