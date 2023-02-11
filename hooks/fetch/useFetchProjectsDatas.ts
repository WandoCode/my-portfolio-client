import { useState, useEffect } from 'react'
import { ProjectsDatas } from '../../constant/types/datas'
import projectsStore from '../../stores/projects'

function useFetchProjects() {
  const [projectsDatas, setProjectsDatas] = useState<ProjectsDatas>()

  useEffect(() => {
    const rep = projectsStore.getAll()

    setProjectsDatas(rep)
  }, [])

  return projectsDatas
}

export default useFetchProjects
