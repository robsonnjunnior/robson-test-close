import { render, screen, fireEvent } from '@testing-library/react'
import Item from './Item'

const item = {
  name: 'Test Item',
  color: 'blue',
}

describe('Item', () => {
  test('renders item name', () => {
    render(<Item item={item} isSelected={false} handleClickItems={jest.fn()} />)
    const itemName = screen.getByText('Test Item')
    expect(itemName).toBeInTheDocument()
  })

  test('calls handleClickItems when clicked', () => {
    const handleClickItems = jest.fn()
    render(<Item item={item} isSelected={false} handleClickItems={handleClickItems} />)
    const itemElement = screen.getByText('Test Item')
    fireEvent.click(itemElement)
    expect(handleClickItems).toHaveBeenCalledTimes(1)
    expect(handleClickItems).toHaveBeenCalledWith(item, expect.anything())
  })

  test('adds "List__item--selected" class when isSelected is true', () => {
    render(<Item item={item} isSelected={true} handleClickItems={jest.fn()} />)
    const itemElement = screen.getByTestId('li-item')
    expect(itemElement.classList.contains('List__item--selected')).toBe(true)
  })

  test('adds "List__item--selected" class when hovered', () => {
    render(<Item item={item} isSelected={false} handleClickItems={jest.fn()} />)
    const itemElement = screen.getByTestId('li-item')
    fireEvent.mouseEnter(itemElement)
    expect(itemElement.classList.contains('List__item--selected')).toBe(true)
    fireEvent.mouseLeave(itemElement)
    expect(itemElement.classList.contains('List__item--selected')).toBe(false)
  })
})
