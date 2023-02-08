export interface ProjectsDatas {
  projects: ProjectDatas[]
}

export interface ProjectDatas {
  title: string
  description: Record<string, string>
  features: Record<string, string[]>
  tags: { text: string; color: string }[]
  urlLive: string
  urlGithub: string
  urlPreview: string
}
