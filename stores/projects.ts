import projectsDatas from '../constant/content/project.json'

const projectsStore = {
  getAll: async () => {
    return projectsDatas.projects
  },
}

export default projectsStore
