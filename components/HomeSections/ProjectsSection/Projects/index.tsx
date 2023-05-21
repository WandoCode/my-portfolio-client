import Projects from './Projects'
import { ProjectsDatas } from '../../../../constant/types/projects'

interface Props {
  projectsArray: ProjectsDatas
}

export default ({ projectsArray }: Props) => {
  return <>{projectsArray && <Projects projectsArray={projectsArray} />}</>
}
