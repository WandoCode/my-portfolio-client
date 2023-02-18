import Skills from './Skills'
import useFetchSkillsDatas from '../../../../hooks/fetch/useFetchSkillsDatas'

export default () => {
  const skillsDatas = useFetchSkillsDatas()

  return <Skills skillsDatas={skillsDatas} />
}
