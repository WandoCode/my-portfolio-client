import skillsDatas from '../constant/content/skills.json'

const skillsStore = {
  getAll: async () => {
    return skillsDatas.skills
  },
}

export default skillsStore
