import mainDatas from '../../constant/content/mainDatas.json'
import formDatas from '../../constant/content/formDatas.json'

export type MainDatas = typeof mainDatas
export type ContactDatas = MainDatas['contact']
export type AboutDatas = MainDatas['about']
export type HeroDatas = MainDatas['hero']
export type HeadingsDatas = MainDatas['headings']

export type FormDatas = typeof formDatas
