import { render, fireEvent, screen } from '@testing-library/react'
import ListItem from './ListItem'

const mockHandleClickItems = jest.fn()

jest.mock('../../hooks/useItems', () => ({
  __esModule: true,
  default: () => ({
    items: [
      { name: 'item1', color: 'red' },
      { name: 'item2', color: 'blue' },
      { name: 'item3', color: 'green' },
    ],
    selectedItems: [],
    handleClickItems: mockHandleClickItems,
  }),
}))

describe('ListItem', () => {
  test('renders a list of items', () => {
    render(<ListItem />)
    const allItems = screen.getAllByTestId('li-item')
    expect(allItems).toHaveLength(3)
  })

  test('calls handleClickItems when an item is clicked', () => {
    render(<ListItem />)
    const item1 = screen.getByText('item1')
    fireEvent.click(item1)
    expect(mockHandleClickItems).toHaveBeenCalledTimes(1)
  })

  test('displays selected items', () => {
    render(<ListItem />)
    const item1 = screen.getByText('item1')
    fireEvent.click(item1)

    const itemsSelected = screen.getByText('Items selected :')
    const selectedItem = screen.getByText('item1')

    expect(itemsSelected).toBeInTheDocument()
    expect(selectedItem).toBeInTheDocument()
  })

  test('displays "No items selected" when no items are selected', () => {
    render(<ListItem />)
    const itemsSelected = screen.getByText('Items selected :')
    const noItemsSelected = screen.getByText('No items selected')

    expect(itemsSelected).toBeInTheDocument()
    expect(noItemsSelected).toBeInTheDocument()
  })
})
