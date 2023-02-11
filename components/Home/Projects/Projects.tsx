import { useMemo } from 'react'
import Project from './Project'
import useFetchProjects from '../../../hooks/fetch/useFetchProjectsDatas'

function Projects() {
  const projectsArray = useFetchProjects()
  const projectsDOM = useMemo(
    () =>
      projectsArray?.map((projectDatas: any, i) => (
        <Project
          datas={projectDatas}
          side={i % 2 === 0 ? 'left' : 'right'}
          key={i}
        />
      )),
    []
  )

  return <div className="projects__body">{projectsDOM}</div>
}

export default Projects
