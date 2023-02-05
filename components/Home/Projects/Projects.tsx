import { useMemo } from 'react'
import Project from './Project'
import projectsMockDatas from '../../../__mock__/data/project.json'
import { ProjectDatas } from '../../../constant/projects'

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

  return (
    <section className="projects" id="projects">
      <div className="container projects__container flow">
        <h2 className="h2 heading-section">Projets</h2>
        <div className="projects__body">{projectsDOM}</div>
      </div>
    </section>
  )
}

export default Projects