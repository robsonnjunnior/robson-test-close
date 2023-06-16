import useItems from '../../hooks/useItems'
import Item from '../Item'

const ListItems = () => {
  const { items, selectedItems, handleClickItems } = useItems()
  return (
    <ul className='List'>
      {items.map((item) => {
        const isItemSelected = selectedItems.includes(item.name)
        return (
          <Item
            key={item.name}
            item={item}
            isSelected={isItemSelected}
            handleClickItems={handleClickItems}
          />
        )
      })}
    </ul>
  )
}

export default ListItems
