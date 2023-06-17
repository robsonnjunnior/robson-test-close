import { fireEvent, act, renderHook, screen } from '@testing-library/react'
import useItems from './useItems'

const mockObject = [
  { name: 'tiny navy apple', color: 'navy' },
  { name: 'tiny blue apple', color: 'navy' },
]

describe('useItems', () => {
  test('returns the initial state', () => {
    const { result } = renderHook(() => useItems())
    const { items, selectedItems, handleClickItems } = result.current

    expect(items).toEqual(expect.arrayContaining([mockObject[0]]))

    expect(selectedItems).toEqual([])
    expect(handleClickItems).toBeInstanceOf(Function)
  })

  test(' multi updates selectedItems correctly on item click', () => {
    const { result } = renderHook(() => useItems())
    const { handleClickItems } = result.current

    const eventMultiSelected = {
      ctrlKey: true,
    } as React.MouseEvent<HTMLElement, MouseEvent>

    act(() => {
      handleClickItems(mockObject[0], eventMultiSelected)
    })

    expect(result.current.selectedItems).toEqual([mockObject[0]])

    act(() => {
      handleClickItems(mockObject[1], eventMultiSelected)
    })

    expect(result.current.selectedItems).toEqual(mockObject)
  })

  test('updates selectedItems correctly on item click', () => {
    const { result } = renderHook(() => useItems())
    const { handleClickItems } = result.current

    const eventOnlyOne = {
      ctrlKey: false,
    } as React.MouseEvent<HTMLElement, MouseEvent>

    act(() => {
      handleClickItems(mockObject[0], eventOnlyOne)
    })

    expect(result.current.selectedItems).toEqual([mockObject[0]])

    act(() => {
      handleClickItems(mockObject[1], eventOnlyOne)
    })

    expect(result.current.selectedItems).toEqual([mockObject[1]])
  })
})
