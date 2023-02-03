import { useMemo } from 'react'
import Project from './Project'

function Projects() {
  const projectsDOM = useMemo(() => <Project />, [])

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="h2 heading-section">Projets</h2>
        {projectsDOM}
      </div>
    </section>
  )
}

export default Projects
