import SkillItem from '../SkillItem/SkillItem'

import { SkillDatas } from '../../../../constant/types/datas'
import RegularList from '../../../Utils/List/RegularList'

interface Props {
  skillsDatas: SkillDatas[] | undefined
}

function Skills({ skillsDatas }: Props) {
  return (
    <ul className="skills__list">
      {skillsDatas ? (
        <RegularList<SkillDatas>
          items={skillsDatas}
          itemComponent={SkillItem}
        />
      ) : (
        ''
      )}
    </ul>
  )
}

export default Skills
// TODO: retirer tous les undefined des datas en props (remonter dans le composant ou c'est fetcher et metter un loader (ou un '' rendu) si les données pas encore chargées)
