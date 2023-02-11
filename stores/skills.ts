import skillsDatas from '../constant/content/skills.json'

const skillsStore = {
  getAll: () => {
    return skillsDatas.skills
  },
}

export default skillsStore
