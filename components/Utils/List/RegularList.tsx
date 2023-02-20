interface Props<T> {
  items: T[]
  itemComponent: ({ item }: { item: T }) => JSX.Element
  className?: string
  [x: string]: any
}

function RegularList<T>({
  items,
  resourceName,
  itemComponent: ItemComponent,
  className,
  ...args
}: Props<T>) {
  return (
    <ul {...(className && { className })}>
      {items.map((item, i) => (
        <ItemComponent item={item} key={i} {...args} />
      ))}
    </ul>
  )
}

export default RegularList
