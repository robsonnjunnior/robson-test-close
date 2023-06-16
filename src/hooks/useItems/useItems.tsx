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
  const [selectedItems, setSelectedItems] = useState<Array<string>>([])

  const handleClickItems = useCallback(
    (itemSelected: string, event: React.MouseEvent<HTMLElement>) => {
      if (event.ctrlKey || event.metaKey) {
        // Verifica se o item já está selecionado
        const isSelected = selectedItems.includes(itemSelected)

        if (isSelected) {
          // Remove o item da lista de seleção
          setSelectedItems((prev) => prev.filter((item) => item !== itemSelected))
        } else {
          // Adiciona o item à lista de seleção
          setSelectedItems((prev) => [...prev, itemSelected])
        }
      } else {
        // Limpa a seleção e seleciona apenas o item clicado
        setSelectedItems([itemSelected])
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
