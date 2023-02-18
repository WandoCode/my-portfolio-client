import Tag from './Tag'

interface Props {
  color: string
  text: string
  classname?: string
}

export default ({ color, text, classname }: Props) => {
  const tagClassname = () => {
    let base = 'tag fc-neutral-800'
    if (classname) base += ` ${classname}`
    return base
  }
  return <Tag tagClassName={tagClassname()} color={color} text={text} />
}
