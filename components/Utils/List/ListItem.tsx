interface Props {
  item: string
  className?: string
}

function ListItem({ item, className }: Props) {
  return <li {...(className && { className: className })}>{item}</li>
}

export default ListItem
