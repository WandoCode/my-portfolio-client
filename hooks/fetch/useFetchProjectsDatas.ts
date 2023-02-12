import { useState, useEffect } from 'react'
import { ProjectsDatas } from '../../constant/types/datas'
import contentStore from '../../stores/content'

function useFetchProjects() {
  const [projectsDatas, setProjectsDatas] = useState<ProjectsDatas>()

  useEffect(() => {
    const rep = contentStore.getProjectsDatas()

    setProjectsDatas(rep)
  }, [])

  return projectsDatas
}

export default useFetchProjects
