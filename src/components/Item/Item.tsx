import React from 'react'
import { IItem } from '../../shared/models'

interface IItemProps {
  item: IItem
  isSelected: boolean
  handleClickItems: (item: string, event: React.MouseEvent<HTMLElement>) => void
}

const Item = ({ item, isSelected, handleClickItems }: IItemProps) => {
  return (
    <li
      onClick={(event: React.MouseEvent<HTMLElement>) => handleClickItems(item.name, event)}
      className={`List__item List__item--${item.color} ${isSelected ? 'List__item--selected' : ''}`}
    >
      {item.name}
    </li>
  )
}

export default Item
