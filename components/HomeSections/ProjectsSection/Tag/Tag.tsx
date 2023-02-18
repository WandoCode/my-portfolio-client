interface Props {
  color: string
  text: string
  classname?: string
}

function Tag({ color, text, classname }: Props) {
  const tagClassname = () => {
    let base = 'tag fc-neutral-800'
    if (classname) base += ` ${classname}`
    return base
  }

  return (
    <li className={tagClassname()} style={{ backgroundColor: color }}>
      {text}
    </li>
  )
}

export default Tag
