import useItems from '../../hooks/useItems'
import Item from '../../components/Item'

const ListItems = () => {
  const { items, selectedItems, handleClickItems } = useItems()
  return (
    <div className='container'>
      <div className='items-selected'>
        <h2>Items selected :</h2>
        <ul className='List-items-selected'>
          {selectedItems.map((item) => (
            <li className={`List-items-selected__item List__item--${item.color}`} key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <ul className='List'>
        {items.map((item) => {
          const isItemSelected = selectedItems.some(
            (selectedItem) => selectedItem.name === item.name,
          )
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
    </div>
  )
}

export default ListItems
