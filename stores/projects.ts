import projectsDatas from '../constant/content/projects.json'
import { ProjectsDatas } from '../constant/types/datas'

const projectsStore = {
  getAll: (): ProjectsDatas => {
    return projectsDatas.projects
  },
}

export default projectsStore
