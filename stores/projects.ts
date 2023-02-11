import projectsDatas from '../constant/content/projects.json'

const projectsStore = {
  getAll: () => {
    return projectsDatas.projects
  },
}

export default projectsStore
