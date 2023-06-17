import { act, renderHook } from '@testing-library/react'
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

    act(() => {
      handleClickItems(mockObject[0])
    })

    expect(result.current.selectedItems).toEqual([mockObject[0]])

    act(() => {
      handleClickItems(mockObject[1])
    })

    expect(result.current.selectedItems).toEqual(mockObject)
  })

  test('updates selectedItems correctly on item click', () => {
    const { result } = renderHook(() => useItems())
    const { handleClickItems } = result.current

    act(() => {
      handleClickItems(mockObject[0])
    })

    expect(result.current.selectedItems).toEqual([mockObject[0]])

    act(() => {
      handleClickItems(mockObject[1])
    })

    expect(result.current.selectedItems).toEqual(mockObject)
  })
})
