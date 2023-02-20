import Tag from './Tag'

interface Props {
  item: { color: string; text: string }
}

export default ({ item }: Props) => {
  return (
    <Tag
      tagClassName="tag fc-neutral-800"
      color={item.color}
      text={item.text}
    />
  )
}
