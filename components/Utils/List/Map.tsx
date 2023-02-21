interface Props<T> {
  items: T[]
  itemComponent: ({ item }: { item: T }) => JSX.Element
  [x: string]: any
}

function Map<T>({ items, itemComponent: ItemComponent, ...args }: Props<T>) {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent item={item} key={i} {...args} />
      ))}
    </>
  )
}

export default Map
