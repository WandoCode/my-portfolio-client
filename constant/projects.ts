export interface ProjectsDatas {
  projects: ProjectDatas[]
}

export interface ProjectDatas {
  title: string
  description: string
  features: string[]
  tags: { text: string; color: string }[]
  urlLive: string
  urlGithub: string
  urlPreview: string
}
