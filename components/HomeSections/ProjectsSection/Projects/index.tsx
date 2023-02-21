import Projects from './Projects'
import useFetchProjects from '../../../../hooks/fetch/useFetchProjectsDatas'

export default () => {
  const projectsArray = useFetchProjects()

  return <>{projectsArray && <Projects projectsArray={projectsArray} />}</>
}
