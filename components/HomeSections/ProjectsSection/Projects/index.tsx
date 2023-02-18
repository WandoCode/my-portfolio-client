import Projects from './Projects'
import useFetchProjects from '../../../../hooks/fetch/useFetchProjectsDatas'

export default () => {
  const projectsArray = useFetchProjects()

  return <Projects projectsArray={projectsArray} />
}
