interface Props {
  color: string
  text: string
  tagClassName: string
}

function Tag({ color, text, tagClassName }: Props) {
  return (
    <li className={tagClassName} style={{ backgroundColor: color }}>
      {text}
    </li>
  )
}

export default Tag

// TODO: le logo dans le header doit être un lien ver le haut de la page
