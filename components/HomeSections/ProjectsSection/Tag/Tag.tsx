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
