import { useMemo } from 'react'
import Project from './Project'
import projectsMockDatas from '../../../data/project.json'
import { ProjectDatas } from '../../../constant/types/projects'

function Projects() {
  const projectsDatas: ProjectDatas[] = projectsMockDatas.projects
  const projectsDOM = useMemo(
    () =>
      projectsDatas.map((projectDatas: any, i) => (
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
