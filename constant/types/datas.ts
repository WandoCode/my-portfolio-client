import mainDatas from '../../constant/content/mainDatas.json'
import formDatas from '../../constant/content/formDatas.json'
import { ProjectDatas } from './projects'
import skillsDatas from '../../constant/content/skills.json'

export type MainDatas = typeof mainDatas
export type ContactDatas = MainDatas['contact']
export type AboutDatas = MainDatas['about']
export type HeroDatas = MainDatas['hero']
export type HeadingsDatas = MainDatas['headings']
export type FooterDatas = MainDatas['footer']

export type FormDatas = typeof formDatas

export type ProjectsDatas = ProjectDatas[]

export type SkillDatas = typeof skillsDatas.skills[0]
