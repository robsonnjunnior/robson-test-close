import { useCallback, useMemo, useState } from 'react'
import { IItem } from '../../shared/models'

const sizes: string[] = ['tiny', 'small', 'medium', 'large', 'huge']
const colors: string[] = [
  'navy',
  'blue',
  'aqua',
  'teal',
  'olive',
  'green',
  'lime',
  'yellow',
  'orange',
  'red',
  'maroon',
  'fuchsia',
  'purple',
  'silver',
  'gray',
  'black',
]
const fruits: string[] = [
  'apple',
  'banana',
  'watermelon',
  'orange',
  'peach',
  'tangerine',
  'pear',
  'kiwi',
  'mango',
  'pineapple',
]

const useItems = () => {
  const [selectedItems, setSelectedItems] = useState<Array<IItem>>([])

  const handleClickItems = useCallback(
    (itemSelected: IItem, event: React.MouseEvent<HTMLElement>) => {
      const isSelected = selectedItems.some(
        (selectedItem) => selectedItem.name === itemSelected.name,
      )
      if (event.ctrlKey || event.metaKey) {
        setSelectedItems((prev) =>
          isSelected
            ? prev.filter((item) => item.name !== itemSelected.name)
            : [...prev, itemSelected],
        )
      } else {
        setSelectedItems(isSelected ? [] : [itemSelected])
      }
    },
    [selectedItems],
  )

  const items: Array<IItem> = useMemo(
    () =>
      sizes.reduce(
        (items: any, size: any) => [
          ...items,
          ...fruits.reduce(
            (acc: any, fruit: any) => [
              ...acc,
              ...colors.reduce(
                (acc: any, color: any) => [
                  ...acc,
                  {
                    name: `${size} ${color} ${fruit}`,
                    color,
                  },
                ],
                [],
              ),
            ],
            [],
          ),
        ],
        [],
      ),
    [],
  )

  return { items, selectedItems, handleClickItems }
}

export default useItems
