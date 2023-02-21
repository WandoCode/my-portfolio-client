interface Props {
  item: string
  className?: string
}

function RegularListItem({ item, className }: Props) {
  return <li {...(className && { className: className })}>{item}</li>
}

export default RegularListItem
