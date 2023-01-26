import { useMemo } from 'react'
import Project from './Project'

function Projects() {
  const projectsDOM = useMemo(() => <Project />, [])

  return (
    <section className="projects">
      <div className="container">
        <h2 className="h2 fs-600">Projets</h2>
        {projectsDOM}
      </div>
    </section>
  )
}

export default Projects
