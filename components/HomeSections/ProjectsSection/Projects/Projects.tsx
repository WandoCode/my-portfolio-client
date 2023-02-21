import { useMemo } from 'react'
import Project from '../Project'
import { ProjectsDatas } from '../../../../constant/types/datas'

interface Props {
  projectsArray: ProjectsDatas
}

function Projects({ projectsArray }: Props) {
  const projectsDOM = useMemo(
    () =>
      projectsArray?.map((projectDatas, i) => (
        <Project
          datas={projectDatas}
          side={i % 2 === 0 ? 'left' : 'right'}
          key={i}
        />
      )),
    [projectsArray]
  )

  return <div className="projects__body">{projectsDOM}</div>
}

export default Projects
