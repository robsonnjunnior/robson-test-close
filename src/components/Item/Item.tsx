import React, { useState } from 'react'
import { IItem } from '../../shared/models'

interface IItemProps {
  item: IItem
  isSelected: boolean
  handleClickItems: (item: IItem) => void
}

const Item = ({ item, isSelected, handleClickItems }: IItemProps) => {
  const [hover, setHover] = useState<boolean>(false)

  const toggleHover = () => {
    setHover((prev) => !prev)
  }

  return (
    <li
      data-testid={'li-item'}
      onMouseEnter={() => toggleHover()}
      onMouseLeave={() => toggleHover()}
      onClick={() => handleClickItems(item)}
      className={`List__item List__item--${item.color} ${
        isSelected || hover ? 'List__item--selected' : ''
      }`}
    >
      <span>{item.name}</span>
    </li>
  )
}

export default Item
