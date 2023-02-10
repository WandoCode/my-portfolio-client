import { useMemo } from 'react'
import Project from './Project'
import projectsDatas from '../../../constant/content/project.json'
import { ProjectDatas } from '../../../constant/types/projects'

function Projects() {
  const projectsArray: ProjectDatas[] = projectsDatas.projects
  const projectsDOM = useMemo(
    () =>
      projectsArray.map((projectDatas: any, i) => (
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
